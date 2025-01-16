const { SlashCommandBuilder } = require('discord.js');
const profileModel = require("../models/profileSchema");

module.exports = {
    data: new SlashCommandBuilder()
        .setName('daily')
        .setDescription('Collect your daily seeds!'),

    async execute(interaction) {
        try {
            const cooldown = 24 * 60 * 60 * 1000; // 24 hours in milliseconds
            const now = Date.now();

            let userProfile = await profileModel.findOne({
                userId: interaction.user.id,
                serverId: interaction.guild.id
            });

            if (!userProfile) {
                userProfile = await profileModel.create({
                    userId: interaction.user.id,
                    serverId: interaction.guild.id,
                    balance: 10, // Starting balance
                    dailyLastUsed: 0
                });
            }

            const timeDifference = now - userProfile.dailyLastUsed;

            if (timeDifference < cooldown) {
                const timeLeft = cooldown - timeDifference;
                const hoursLeft = Math.floor(timeLeft / (60 * 60 * 1000));
                const minutesLeft = Math.floor((timeLeft % (60 * 60 * 1000)) / (60 * 1000));

                return await interaction.reply({
                    content: `🕒 You can collect your daily seeds again in ${hoursLeft}h ${minutesLeft}m!`,
                    ephemeral: true
                });
            }

            // Calculate bonus based on streak (reset if more than 48 hours since last claim)
            const hasStreak = (now - userProfile.dailyLastUsed) < (48 * 60 * 60 * 1000);
            const baseReward = 50;
            let bonus = 0;

            if (hasStreak) {
                // Random bonus between 5 and 20
                bonus = Math.floor(Math.random() * 16) + 5;
            }

            const totalReward = baseReward + bonus;

            // Update user profile
            userProfile.balance += totalReward;
            userProfile.dailyLastUsed = now;
            await userProfile.save();

            let rewardMessage = `🌱 You collected ${totalReward} seeds!`;
            if (bonus > 0) {
                rewardMessage += `\n✨ Includes a streak bonus of ${bonus} seeds!`;
            }
            rewardMessage += `\n💰 Your new balance: ${userProfile.balance} seeds`;

            await interaction.reply({
                content: rewardMessage,
                ephemeral: false
            });

        } catch (error) {
            console.error('Error in daily command:', error);
            await interaction.reply({
                content: '❌ There was an error processing your daily reward.',
                ephemeral: true
            });
        }
    },
};