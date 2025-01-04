const { SlashCommandBuilder } = require('@discordjs/builders');
require('../models/profileSchema');
const profileModel = require("../models/profileSchema");


module.exports = {
    data: new SlashCommandBuilder()
        .setName('donate')
        .setDescription('donate a portion of your eggs!')
        .addUserOption((option) =>
            option
                .setName('user')
                .setDescription('The user you want to donate to')
                .setRequired(true))
        .addIntegerOption((option =>
                option
                    .setName('amount')
                    .setDescription('The amount of eggs you want to donate')
                    .setRequired(true)
        )),

    async execute(interaction, profileData)
    {
        const recipient = interaction.options.getUser('user');
        const donateAmount = interaction.options.getInteger('amount');

        const donorId = interaction.user.id;

        const donorProfile = await profileModel.findOne({ userId: donorId });

        const {balance} = profileData;
        if (balance < donateAmount) {
            await interaction.deferReply({ephemeral: true});
            return interaction.editReply("You don't have enough eggs to donate that amount.");
        }

        if (recipient.id === donorId) {
            await interaction.deferReply({ephemeral: true});
            return interaction.editReply("You cannot donate to yourself.");
        }

        if (!donateAmount || donateAmount <= 0)
        {
            await interaction.deferReply({ephemeral: true});
            return interaction.editReply("Please specify a valid amount to donate.");
        }
        await interaction.deferReply();

        try
        {
            await Promise.all([
                profileModel.findOneAndUpdate(
                    { userId: recipient.id },
                    { $inc: { balance: donateAmount } },
                    { upsert: true, new: true }
                ),
                profileModel.findOneAndUpdate(
                    { userId: donorProfile },
                    { $inc: { balance: -donateAmount } },
                    { new: true }
                )
            ]);
            await interaction.editReply(`You donated ${donateAmount} eggs to ${recipient}!`);
        }
        catch (e)
        {
            console.error(e);
            return interaction.reply("An error occurred while processing your donation. Please try again later.");
        }
    },
};

