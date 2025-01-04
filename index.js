const dotenv = require('dotenv');
const mongoose = require('mongoose');
const { Client, GatewayIntentBits, Collection } = require('discord.js');
dotenv.config();
const { TOKEN: token, CONNECTION_STRING: database } = process.env;


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

const interactionCreateHandler = require('./events/interactionCreate');
const profileModel = require("./models/profileSchema");

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

