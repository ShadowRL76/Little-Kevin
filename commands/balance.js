const { SlashCommandBuilder } = require('@discordjs/builders');
require('../models/profileSchema');

module.exports = {
    data: new SlashCommandBuilder()
        .setName('balance')
        .setDescription('Check balance of 🌱 Seeds!'),

    async execute(interaction, profileData) {
        if (!profileData) {
            console.log('No profile found in balance command!');
            return interaction.reply({
                content: 'There was an issue retrieving your profile data!',
                ephemeral: true
            });
        }

        const { balance } = profileData;
        const username = interaction.user.username;
        await interaction.reply(`${username} has ${balance} 🌱 Seeds`);
    },
};
