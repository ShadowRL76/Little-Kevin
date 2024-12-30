// index.js
const dotenv = require('dotenv');
dotenv.config();
const { Client, Intents, Collection } = require('discord.js');
const { token } = process.env;
const commands = require('./commands/commands');

// Initialize the Discord client
const client = new Client({ intents: [Intents.FLAGS.GUILDS] });

// Register commands on the bot

client.commands = new Collection();
commands.forEach(command => {
    client.commands.set(command.name, command);
})


// Slash command interaction handler
client.on('interactionCreate', async (interaction) => {
    if (!interaction.isCommand()) return;

    const command = client.commands.get(interaction.commandName);
    if (!command) return;

    try {
        await command.execute(interaction); // Execute the command
    } catch (error) {
        console.error(error);
        await interaction.reply({ content: 'There was an error while executing this command!', ephemeral: true });
    }
});

// When the client is ready, log it
client.once('ready', () => {
    console.log('Ready!');
});

// Login the bot to Discord
client.login(token)
    .then(r => {
    console.log(`Logged in as ` + client.user.username + `!`);
    })
    .catch(e => {
        console.error(`Failed to login: ${e}`);
    });
