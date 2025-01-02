const { SlashCommandBuilder } = require('@discordjs/builders');

module.exports = {
    data: new SlashCommandBuilder()
        .setName('ping')
        .setDescription('Check if Little Kevin is online'),
    async execute(interaction) {
        await interaction.reply("Little Kevin is sprouting proudly.");
    }
};

