const { SlashCommandBuilder } = require('discord.js');
const axios = require('axios');

module.exports = {
  data: new SlashCommandBuilder()
      .setName('onthisday')
      .setDescription('Shows historical events that happened on today\'s date'),
  async execute(interaction) {
    await interaction.deferReply();

    const today = new Date();
    const month = today.getMonth() + 1;
    const day = today.getDate();

    const url = `https://en.wikipedia.org/api/rest_v1/feed/onthisday/events/${month}/${day}`;

    try {
      const response = await axios.get(url);
      const events = response.data.events;

      if (!events || events.length === 0) {
        return interaction.editReply('Couldn\'t find any historical events for today.');
      }

      const selected = events.sort(() => 0.5 - Math.random()).slice(0, 3);

      const eventText = selected.map(ev => {
        let emoji = '📅'; // Default emoji
        if (ev.year > 2000) emoji = '🌍'; // Modern event emoji
        else if (ev.year < 1900) emoji = '🏛️'; // Historical event emoji
        return `${emoji} **${ev.year}** — ${ev.text}`;
      }).join('\n\n');

      await interaction.editReply({
        content: `Here are some things that happened **on this day** in history:\n\n${eventText}`
      });
    } catch (error) {
      console.error(error);
      await interaction.editReply('There was an error fetching data from Wikipedia.');
    }
  }
};
