const { SlashCommandBuilder } = require('discord.js');
const moment = require('moment');
const profileModel = require('../models/profileSchema');

module.exports = {
    data: new SlashCommandBuilder()
        .setName('opencapsule')
        .setDescription('Open your time capsules that are ready'),

    async execute(interaction) {
        const userId = interaction.user.id;
        const serverId = interaction.guild.id;

        try {
            const userProfile = await profileModel.findOne({ userId, serverId });

            if (!userProfile || userProfile.timeCapsules.length === 0) {
                await interaction.reply({
                    content: '❌ You don’t have any time capsules!',
                    flags: 64,
                });
                return;
            }

            const now = new Date();
            const readyCapsules = userProfile.timeCapsules.filter(capsule => capsule.openAt <= now);

            if (readyCapsules.length === 0) {
                await interaction.reply({
                    content: '⏳ None of your time capsules are ready to open yet!',
                    flags: 64,
                });
                return;
            }

            const publicCapsules = readyCapsules.filter(capsule => capsule.isPublic);
            const privateCapsules = readyCapsules.filter(capsule => !capsule.isPublic);

            userProfile.timeCapsules = userProfile.timeCapsules.filter(capsule => capsule.openAt > now);
            await userProfile.save();

            const publicMessages = publicCapsules.map(capsule =>
                `**Message:** "${capsule.message}"\n**Opened on:** ${moment().format('MMMM Do YYYY, h:mm:ss a')}`
            ).join('\n\n');

            const privateMessages = privateCapsules.map(capsule =>
                `**Message:** "${capsule.message}"\n**Opened on:** ${moment().format('MMMM Do YYYY, h:mm:ss a')}`
            ).join('\n\n');

            if (privateMessages) {
                await interaction.user.send(`🎉 **Your Private Time Capsules:**\n\n${privateMessages}`);
            }

            if (publicMessages) {
                await interaction.reply({
                    content: `🎉 **Public Time Capsules:**\n\n${publicMessages}`,
                });
            } else if (!privateMessages) {
                await interaction.reply({
                    content: '🎉 You have no time capsules to display.',
                    flags: 64,
                });
            }
        } catch (error) {
            console.error('Open Capsule Command Error:', error);
            await interaction.reply({
                content: '❌ There was an error opening your time capsules. Please try again later.',
                flags: 64,
            });
        }
    },
};
