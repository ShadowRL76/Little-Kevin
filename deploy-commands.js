// deploy-commands.js
const { SlashCommandBuilder } = require('@discordjs/builders');
const { REST } = require('@discordjs/rest');
const { Routes } = require('discord-api-types/v9');
const { clientId, guildId, token } = require('./config.json');
const commands = require('./commands/commands'); // Import the commands array from commands.js

// Prepare commands for registration with Discord
const commandData = commands.map(command =>
	new SlashCommandBuilder()
		.setName(command.name)
		.setDescription(command.description)
		.toJSON()
);

// Initialize REST client with your bot's token
const rest = new REST({ version: '9' }).setToken(token);

// Register the commands with Discord
rest.put(Routes.applicationGuildCommands(clientId, guildId), { body: commandData })
	.then(() => console.log('Successfully registered application commands.'))
	.catch(console.error);
