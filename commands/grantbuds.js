const { SlashCommandBuilder } = require('discord.js');
const profileModel = require("../models/profileSchema");

module.exports = {
    data: new SlashCommandBuilder()
        .setName('grantbuds')
        .setDescription('Admin command to grant buds to users')
        .addUserOption(option =>
            option
                .setName('target')
                .setDescription('User to receive buds')
                .setRequired(true))
        .addIntegerOption(option =>
            option
                .setName('amount')
                .setDescription('Amount of buds to grant')
                .setRequired(true))
        .addStringOption(option =>
            option
                .setName('reason')
                .setDescription('Reason for granting buds')
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
        if (!target) {
            return await interaction.reply({
                content: '❌ You must specify a valid user to grant buds.',
                ephemeral: true
            });
        }

        if (amount <= 0) {
            return await interaction.reply({
                content: '❌ The amount must be a positive number.',
                ephemeral: true
            });
        }

        try {
            // Find or create a profile for the target user
            let targetProfile = await profileModel.findOne({
                userId: target.id,
                serverId: interaction.guild.id
            });

            if (!targetProfile) {
                targetProfile = await profileModel.create({
                    userId: target.id,
                    serverId: interaction.guild.id,
                    buds: 0,
                    balance: 0, // Ensure required fields are initialized
                });
            }

            // Update the target user's buds balance
            targetProfile.buds += amount;
            await targetProfile.save();

            // Reply to the interaction
            await interaction.reply({
                content: `✅ Successfully granted ${amount} buds to **${target.username}**!\n📝 Reason: ${reason}\n💰 Their new buds balance: ${targetProfile.buds} buds.`,
                ephemeral: false
            });

            // Attempt to DM the target user
            try {
                await target.send(
                    `🌿 You have been granted **${amount} buds** by **${interaction.user.username}** in **${interaction.guild.name}**!\n📝 Reason: ${reason}\n💰 Your new buds balance: **${targetProfile.buds} buds**.`
                );
            } catch (dmError) {
                console.warn(`Could not DM user ${target.id}: ${dmError.message}`);
            }

            // Log to a specific channel (if configured)
            const logChannelId = 'YOUR_LOG_CHANNEL_ID'; // Replace with your log channel ID
            const logChannel = interaction.guild.channels.cache.get(logChannelId);

            if (logChannel) {
                await logChannel.send({
                    content: `🌿 **Buds Grant Log**\n👤 **Admin**: ${interaction.user.username} (${interaction.user.id})\n👥 **Target**: ${target.username} (${target.id})\n💰 **Amount**: ${amount} buds\n📝 **Reason**: ${reason}\n💰 **New Buds Balance**: ${targetProfile.buds} buds`
                });
            }
        } catch (error) {
            console.error('Error in grantbuds command:', error);
            await interaction.reply({
                content: '❌ There was an error processing the buds grant.',
                ephemeral: true
            });
        }
    },
};
