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
        const requiredRoleId = '1298906125600821279'; // Replace with your admin role ID
        const member = interaction.guild.members.cache.get(interaction.user.id);

        // Check if user has the required role
        if (!member || !member.roles.cache.has(requiredRoleId)) {
            return await interaction.reply({
                content: '❌ You do not have the required role to use this command.',
                ephemeral: true
            });
        }

        const target = interaction.options.getUser('target');
        const amount = interaction.options.getInteger('amount');
        const reason = interaction.options.getString('reason') || 'No reason provided';

        // Validate input
        if (amount <= 0) {
            return await interaction.reply({
                content: '❌ The amount must be a positive number.',
                ephemeral: true
            });
        }

        try {
            // Find the target profile or create one if it doesn't exist
            let targetProfile = await profileModel.findOneAndUpdate(
                { userId: target.id, serverId: interaction.guild.id },
                { $inc: { balance: amount } }, // Increment seeds balance
                { new: true, upsert: true } // Create document if it doesn't exist
            );

            // Reply to the interaction
            await interaction.reply({
                content: `✅ Successfully granted ${amount} seeds to **${target.username}**!\n📝 Reason: ${reason}\n💰 Their new seed balance: ${targetProfile.balance} seeds.`,
                ephemeral: false
            });

            // Try to DM the target user
            try {
                await target.send(
                    `🌱 You have been granted **${amount} seeds** by **${interaction.user.username}** in **${interaction.guild.name}**!\n📝 Reason: ${reason}\n💰 Your new seed balance: **${targetProfile.balance} seeds**.`
                );
            } catch (dmError) {
                console.warn(`Could not DM user ${target.id}: ${dmError.message}`);
            }
        } catch (error) {
            console.error('Error in grantseed command:', error);
            await interaction.reply({
                content: '❌ There was an error processing the seed grant.',
                ephemeral: true
            });
        }
    },
};
