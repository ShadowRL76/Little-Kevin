const { SlashCommandBuilder } = require('discord.js');
const profileModel = require("../models/profileSchema");

module.exports = {
    data: new SlashCommandBuilder()
        .setName('grantseed')
        .setDescription('Admin command to grant seeds to users')
        .addUserOption(option =>
            option
                .setName('target')
                .setDescription('User to receive seeds')
                .setRequired(true))
        .addIntegerOption(option =>
            option
                .setName('amount')
                .setDescription('Amount of seeds to grant')
                .setRequired(true))
        .addStringOption(option =>
            option
                .setName('reason')
                .setDescription('Reason for granting seeds')
                .setRequired(false)),

    async execute(interaction) {
        const requiredRoleId = '1298906125600821279';
        const member = interaction.guild.members.cache.get(interaction.user.id);

        // Initial role check
        if (!member || !member.roles.cache.has(requiredRoleId)) {
            return await interaction.reply({
                content: '❌ You do not have the required role to use this command.',
                flags: 64 // Equivalent to ephemeral: true (private reply)
            });
        }

        const target = interaction.options.getUser('target');
        const amount = interaction.options.getInteger('amount');
        const reason = interaction.options.getString('reason') || 'No reason provided';

        // Validate input
        if (amount <= 0) {
            return await interaction.reply({
                content: '❌ The amount must be a positive number.',
                flags: 64 // Equivalent to ephemeral: true
            });
        }

        try {
            // Use findOneAndUpdate with upsert to handle both new and existing profiles
            const targetProfile = await profileModel.findOneAndUpdate(
                {
                    userId: target.id,
                    serverId: interaction.guild.id
                },
                {
                    $inc: { balance: amount },
                    $setOnInsert: {
                        userId: target.id,
                        serverId: interaction.guild.id
                    }
                },
                {
                    new: true,
                    upsert: true // Create if not exists
                }
            );

            // Ensure the profile has been successfully updated or inserted
            const profile = targetProfile;

            // Check if interaction is already replied
            if (!interaction.replied && !interaction.deferred) {
                await interaction.reply({
                    content: `✅ Successfully granted ${amount} seeds to **${target.username}**!\n📝 Reason: ${reason}\n💰 Their new seed balance: ${profile.balance} seeds.`,
                    flags: 0 // Public reply
                });
            } else {
                await interaction.followUp({
                    content: `✅ Successfully granted ${amount} seeds to **${target.username}**!\n📝 Reason: ${reason}\n💰 Their new seed balance: ${profile.balance} seeds.`,
                    flags: 0 // Public follow-up
                });
            }

            // DM logic remains the same
            try {
                await target.send(
                    `🌱 You have been granted **${amount} seeds** by **${interaction.user.username}** in **${interaction.guild.name}**!\n📝 Reason: ${reason}\n💰 Your new seed balance: **${profile.balance} seeds**.`
                );
            } catch (dmError) {
                console.warn(`Could not DM user ${target.id}: ${dmError.message}`);
            }
        } catch (error) {
            console.error('Error in grantseed command:', error);

            // Prevent multiple replies
            if (!interaction.replied && !interaction.deferred) {
                await interaction.reply({
                    content: '❌ There was an error processing the seed grant.',
                    flags: 64 // Equivalent to ephemeral: true
                });
            }
        }
    },
};
