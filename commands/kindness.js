const { SlashCommandBuilder } = require('discord.js');
const profileModel = require("../models/profileSchema");

module.exports = {
    data: new SlashCommandBuilder()
        .setName('kindness')
        .setDescription('Perform a random act of kindness for a server member')
        .addUserOption(option =>
            option.setName('target')
                .setDescription('User to receive a kind gesture')
                .setRequired(true)),

    async execute(interaction) {
        const targetUser = interaction.options.getUser('target');
        const randomSeeds = Math.floor(Math.random() * 100) + 1;
        const userId = interaction.user.id;
        const serverId = interaction.guild.id;

        // Prevent users from doing kindness to themselves
        if (targetUser.id === userId) {
            return interaction.reply({
                content: '❌ You cannot perform an act of kindness on yourself!',
                flags: 64
            });
        }

        // Time limit: Randomize cooldown between 3 to 7 days (in milliseconds)
        const minCooldown = 3 * 24 * 60 * 60 * 1000; // 3 days in milliseconds
        const maxCooldown = 7 * 24 * 60 * 60 * 1000; // 7 days in milliseconds
        const cooldown = Math.floor(Math.random() * (maxCooldown - minCooldown + 1)) + minCooldown;
        const currentTime = Date.now();

        try {
            // Get user's profile to check the last time kindness was performed
            const userProfile = await profileModel.findOne({ userId, serverId });

            if (userProfile && userProfile.lastKindness) {
                const timeSinceLastKindness = currentTime - userProfile.lastKindness;
                if (timeSinceLastKindness < cooldown) {
                    const timeLeft = cooldown - timeSinceLastKindness;
                    const timeLeftDays = Math.ceil(timeLeft / (24 * 60 * 60 * 1000)); // Convert ms to days
                    return interaction.reply({
                        content: `❌ You must wait ${timeLeftDays} day(s) before performing another act of kindness.`,
                        flags: 64
                    });
                }
            }

            // Perform the kindness
            await profileModel.findOneAndUpdate(
                {
                    userId: targetUser.id,
                    serverId: interaction.guild.id
                },
                {
                    $inc: { balance: randomSeeds },
                    $setOnInsert: {
                        userId: targetUser.id,
                        serverId: interaction.guild.id
                    },
                    $set: { lastKindness: currentTime } // Set the last kindness timestamp
                },
                {
                    new: true,
                    upsert: true
                }
            );

            await interaction.reply({
                content: `🌟 A random act of kindness! ${targetUser} received ${randomSeeds} seeds.`,
                flags: 0
            });
        } catch (error) {
            console.error('Kindness command error:', error);
            await interaction.reply({
                content: '❌ Something went wrong while performing an act of kindness.',
                flags: 64
            });
        }
    }
};
