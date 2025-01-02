const { SlashCommandBuilder } = require('@discordjs/builders');
const { REST } = require('@discordjs/rest');
const { Routes } = require('discord-api-types/v9');
const { clientId, guildId, token } = require('./config.json');

const commands = [
	new SlashCommandBuilder().setName('ping').setDescription('Check to see if Little Kevin is online'),
	new SlashCommandBuilder().setName('qotd').setDescription('Post Muusee\'s Question Of The Day'),
	new SlashCommandBuilder().setName('fruity').setDescription('Hot potato, hot potato...'),
	new SlashCommandBuilder().setName('joke').setDescription('Hear a funny jokesicle!'),
	new SlashCommandBuilder().setName('snoop').setDescription('Get an inspirational quote from Snoop'),
	new SlashCommandBuilder().setName('devito').setDescription('DevitHoes Rejoice!'),
	new SlashCommandBuilder().setName('devitos').setDescription('We dont kink shame.'),
	new SlashCommandBuilder().setName('ed').setDescription('Well, this is awkward.'),
	new SlashCommandBuilder().setName('fact').setDescription('Expand your knowledge!'),
]
	.map(command => command.toJSON());

const rest = new REST({ version: '9' }).setToken(token);

rest.put(Routes.applicationGuildCommands(clientId, guildId), { body: commands })
	.then(() => console.log('Successfully registered application commands.'))
	.catch(console.error);

