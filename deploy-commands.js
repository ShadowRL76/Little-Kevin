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
	new SlashCommandBuilder().setName('balance').setDescription('Check balance of eggs!'),
	new SlashCommandBuilder().setName('daily').setDescription('Redeem free eggs everyday!'),
	new SlashCommandBuilder()
		.setName('donate')
		.setDescription('Donate a portion of your eggs!')
		.addUserOption(option =>
			option
				.setName('user')
				.setDescription('The user you want to donate to')
				.setRequired(true))
		.addIntegerOption(option =>
			option
				.setName('amount')
				.setDescription('The amount of eggs you want to donate')
				.setRequired(true)),
	new SlashCommandBuilder().setName('leaderboard').setDescription('Show leaderboard!'),
]
	.map(command => command.toJSON());

const rest = new REST({ version: '9' }).setToken(token);

rest.put(Routes.applicationGuildCommands(clientId, guildId), { body: commands })
	.then(() => console.log('Successfully registered application commands.'))
	.catch(console.error);

