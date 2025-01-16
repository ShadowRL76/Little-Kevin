const { SlashCommandBuilder } = require('discord.js');
const profileModel = require('../models/profileSchema');

module.exports = {
    data: new SlashCommandBuilder()
        .setName('convert')
        .setDescription('Convert your seeds into buds')
        .addIntegerOption(option =>
            option
                .setName('amount')
                .setDescription('The number of seeds to convert')
                .setRequired(true)),

    async execute(interaction) {
        const amount = interaction.options.getInteger('amount');
        const conversionRate = 1000; // 1000 seeds = 1 bud

        try {
            const userProfile = await profileModel.findOne({
                userId: interaction.user.id,
                serverId: interaction.guild.id
            });

            if (!userProfile) {
                return await interaction.reply({
                    content: '❌ You don\'t have a profile yet! Use `/daily` to start earning rewards.',
                    ephemeral: true
                });
            }

            if (amount <= 0 || userProfile.balance < amount) {
                return await interaction.reply({
                    content: `❌ You don\'t have enough seeds. Your current balance is ${userProfile.balance} seeds.`,
                    ephemeral: true
                });
            }

            if (amount % conversionRate !== 0) {
                return await interaction.reply({
                    content: `❌ You can only convert seeds in multiples of ${conversionRate}.`,
                    ephemeral: true
                });
            }

            const budsEarned = Math.floor(amount / conversionRate);
            userProfile.balance -= amount;
            userProfile.buds += budsEarned;

            await userProfile.save();

            await interaction.reply({
                content: `🎉 You converted ${amount} seeds into ${budsEarned} buds! 💰 Your new balance is ${userProfile.balance} seeds and ${userProfile.buds} buds.`,
                ephemeral: false
            });
        } catch (error) {
            console.error('Error in convert command:', error);
            await interaction.reply({
                content: '❌ There was an error processing your conversion.',
                ephemeral: true
            });
        }
    }
};
