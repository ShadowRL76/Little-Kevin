// index.js
const dotenv = require('dotenv');
dotenv.config();
const { Client, GatewayIntentBits, Collection } = require('discord.js');  // Change here
const { token } = process.env;

// Initialize the Discord client
const client = new Client({ intents: GatewayIntentBits.Guilds });

// Initialize the commands collection
client.commands = new Collection();

// Load commands dynamically from a folder
const fs = require('fs');
const path = require('path');

const commandFiles = fs.readdirSync(path.join(__dirname, './commands')).filter(file => file.endsWith('.js'));

for (const file of commandFiles) {
    const command = require(path.join(__dirname, './commands', file));
    client.commands.set(command.data.name, command);
}

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
    .then(() => {
        console.log(`Logged in as ${client.user.username}!`);
    })
    .catch(e => {
        console.error(`Failed to login: ${e}`);
    });
