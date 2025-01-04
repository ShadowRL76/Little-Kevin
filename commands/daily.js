const { SlashCommandBuilder } = require('@discordjs/builders');
const parseMilliseconds = require("parse-ms-2");
const profileModel = require("../models/profileSchema");
const {dailyMin, dailyMax} = require("../globalValues.json");


module.exports = {
    data: new SlashCommandBuilder()
        .setName('daily')
        .setDescription('Redeem free eggs everyday!'),
    async execute(interaction, profileData) {
        const {id} = interaction.user;
        const {dailyLastUsed} = profileData;

        const cooldown = 86400000;
        const timeLeft = cooldown - (Date.now() - dailyLastUsed);

        if (timeLeft > 0)
        {
            await interaction.reply({ content: 'Please wait until your daily claim cooldown is over!', ephemeral: true });
            const {hours, minutes, seconds, milliseconds, microseconds, nanoseconds} = parseMilliseconds(timeLeft);
            await interaction.editReply(`Claim your next daily in ${hours} hrs ${minutes} min ${seconds} sec ${milliseconds} milisec ${microseconds}`);
            return;
        }
        await interaction.deferReply();
        const randomAmount = Math.floor(Math.random() * (dailyMax - dailyMin + 1) + dailyMin);

        try
        {
            await profileModel.findOneAndUpdate(
                {userId: id},
                {
                    $set: {dailyLastUsed: Date.now()},
                    $inc: {balance: randomAmount}
                }
            );
        }
        catch (e)
        {
            console.error(e);
        }
        await interaction.editReply(`You redeemed ${randomAmount} eggs`);
    }
}

