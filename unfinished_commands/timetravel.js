const { SlashCommandBuilder } = require('discord.js');
const axios = require('axios');

// Optional: Use a historical events API
// API for Historical events: https://history.muffinlabs.com/
const historyAPI = 'https://history.muffinlabs.com/date';

module.exports = {
    data: new SlashCommandBuilder()
        .setName('timetravel')
        .setDescription('Travel through time and see what happened on this day in history'),

    async execute(interaction) {
        try {
            const response = await axios.get(`${historyAPI}`);
            const events = response.data.data.Events;

            if (events.length > 0) {
                const randomEvent = events[Math.floor(Math.random() * events.length)];

                await interaction.reply({
                    content: `🕰️ **Time Travel - On this day in history**:\n\n**Event**: ${randomEvent.year} - ${randomEvent.text}`,
                    flags: 64,  // Private reply, only visible to the user
                });
            } else {
                await interaction.reply({
                    content: '❌ No historical events found for today.',
                    flags: 64,
                });
            }
        } catch (error) {
            console.error('Time Travel Command Error:', error);
            await interaction.reply({
                content: '❌ Something went wrong while fetching the time travel data. Please try again later.',
                flags: 64,
            });
        }
    }
};
