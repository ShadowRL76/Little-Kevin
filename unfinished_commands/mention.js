const { SlashCommandBuilder } = require("@discordjs/builders");

module.exports = {
    data: new SlashCommandBuilder()
        .setName('mention')
        .setDescription('Mention someone')
        .addUserOption(option =>
            option
                .setName('user')
                .setDescription('The user you want to mention')
                .setRequired(true)
        ),

    async execute(interaction) {
        const user = interaction.options.getUser('user');
        return interaction.reply(`${interaction.user} mentions ${user}`);
    }
};
