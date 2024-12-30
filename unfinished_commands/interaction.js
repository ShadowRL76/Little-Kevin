const { SlashCommandBuilder } = require('@discordjs/builders');
const { MessageEmbed } = require('discord.js');


module.exports = {
    data: new SlashCommandBuilder()
        .setName('info')
        .setDescription('Get info about a user, the server, or the bot!')
        .addSubcommand(subcommand =>
            subcommand
                .setName('user')
                .setDescription('Info about a user')
                .addUserOption(option => option.setName('target').setDescription('The user').setRequired(true)))
        .addSubcommand(subcommand =>
            subcommand
                .setName('server')
                .setDescription('Info about the server'))
        .addSubcommand(subcommand =>
            subcommand
                .setName('bot')
                .setDescription('Info about the bot')),

    async execute(interaction) {

        
            await interaction.reply({ embeds: [botEmbed] });
        }


};

