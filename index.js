const fs = require('fs');
const mongoose = require('mongoose');
const { Client, GatewayIntentBits, Collection } = require('discord.js');
const path = require('path');

const mongoUri = process.env.MONGO_URI || '/run/secrets/mongo_uri';
const discordToken = process.env.DISCORD_TOKEN || '/run/secrets/discord_token';

if (!mongoUri || !discordToken) {
    console.error('Secrets are missing!');
    process.exit(1);
}

// Initialize the Discord client
const client = new Client({ intents: GatewayIntentBits.Guilds });

// Initialize the commands collection
client.commands = new Collection();

// Load commands dynamically from a folder

const commandFiles = fs.readdirSync(path.join(__dirname, './commands')).filter(file => file.endsWith('.js'));

for (const file of commandFiles) {
    const command = require(path.join(__dirname, './commands', file));
    client.commands.set(command.data.name, command);
}

const interactionCreateHandler = require('./events/interactionCreate');
require("./models/profileSchema");
client.on(interactionCreateHandler.name, interactionCreateHandler.execute);

// Connect to MongoDB
mongoose.connect(database, {})
    .then(() => { console.log(`Connected to database!`); })
    .catch((err) => { console.log(err); });

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
