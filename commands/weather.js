require('dotenv').config();
const { SlashCommandBuilder } = require('discord.js');
const axios = require('axios');

const WEATHER_API_KEY = process.env.WEATHER_API_KEY;

module.exports = {
    data: new SlashCommandBuilder()
        .setName('weather')
        .setDescription('Get the current weather for a location')
        .addStringOption(option =>
            option.setName('location')
                .setDescription('The location to get the weather for')
                .setRequired(true))
        .addStringOption(option =>
            option.setName('visibility')
                .setDescription('Set the visibility of the weather information')
                .addChoices(
                    { name: 'Public', value: 'public' },
                    { name: 'Private', value: 'private' }
                )
                .setRequired(false)),

    async execute(interaction) {
        const location = interaction.options.getString('location');
        const visibility = interaction.options.getString('visibility') || 'private'; // Default to private if not specified

        try {
            // Fetch weather data from OpenWeatherMap API
            const response = await axios.get(`https://api.openweathermap.org/data/2.5/weather`, {
                params: {
                    q: location,
                    appid: WEATHER_API_KEY,
                    units: 'imperial', // Use 'metric' for Celsius
                }
            });

            const weatherData = response.data;
            const temperature = weatherData.main.temp;
            const weatherDescription = weatherData.weather[0].description;
            const humidity = weatherData.main.humidity;
            const windSpeed = weatherData.wind.speed;

            const weatherMessage = `
            🌤️ **Weather for ${location}:**
            - **Temperature:** ${temperature}°F
            - **Condition:** ${weatherDescription}
            - **Humidity:** ${humidity}%
            - **Wind Speed:** ${windSpeed} m/s
            `;

            if (visibility === 'private') {
                // Send the weather information only to the user who invoked the command (private)
                await interaction.reply({
                    content: weatherMessage,
                    flags: 64, // Use flag 64 for a private response
                });
            } else {
                // Send the weather information publicly to the channel
                await interaction.reply({
                    content: weatherMessage,
                    flags: 0, // No flags for public responses
                });
            }

        } catch (error) {
            console.error('Weather Command Error:', error);
            await interaction.reply({
                content: '❌ There was an error fetching the weather data. Please try again later.',
                flags: 64,
            });
        }
    }
};
