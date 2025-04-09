const { REST, Routes, SlashCommandBuilder } = require('discord.js');
const { clientId, guildId, token } = require('./config.json');

const commands = [
	new SlashCommandBuilder()
		.setName('ping')
		.setDescription('Check to see if Little Kevin is online'),

	new SlashCommandBuilder()
		.setName('qotd')
		.setDescription('Post Muusee\'s Question Of The Day'),

	new SlashCommandBuilder()
		.setName('fruity')
		.setDescription('Hot potato, hot potato...'),

	new SlashCommandBuilder()
		.setName('joke')
		.setDescription('Hear a funny jokesicle!'),

	new SlashCommandBuilder()
		.setName('snoop')
		.setDescription('Get an inspirational quote from Snoop'),

	new SlashCommandBuilder()
		.setName('devito')
		.setDescription('DevitHoes Rejoice!'),

	new SlashCommandBuilder()
		.setName('devitos')
		.setDescription('We dont kink shame.'),

	new SlashCommandBuilder()
		.setName('ed')
		.setDescription('Well, this is awkward.'),

	new SlashCommandBuilder()
		.setName('fact')
		.setDescription('Expand your knowledge!'),

	new SlashCommandBuilder()
		.setName('balance')
		.setDescription('Check balance of eggs!'),

	new SlashCommandBuilder()
		.setName('daily')
		.setDescription('Redeem free eggs everyday!'),

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

	new SlashCommandBuilder()
		.setName('leaderboard')
		.setDescription('Show leaderboard!'),

	new SlashCommandBuilder()
		.setName('shop')
		.setDescription('View and purchase items from the shop')
		.addSubcommand(subcommand =>
			subcommand
				.setName('view')
				.setDescription('View available items in the shop')
				.addStringOption(option =>
					option
						.setName('category')
						.setDescription('Shop category to view')
						.setRequired(false)
						.addChoices(
							{ name: 'Plants', value: 'plants' },
							{ name: 'Special Roles', value: 'special_roles' },
							{ name: 'All', value: 'all' }
						)))
		.addSubcommand(subcommand =>
			subcommand
				.setName('buy')
				.setDescription('Purchase an item from the shop')
				.addStringOption(option =>
					option
						.setName('item_id')
						.setDescription('The ID of the item to purchase')
						.setRequired(true))),

	new SlashCommandBuilder()
		.setName('inventory')
		.setDescription('View your inventory of items'),

	// Convert command
	new SlashCommandBuilder()
		.setName('convert')
		.setDescription('Convert your seeds into buds')
		.addIntegerOption(option =>
			option
				.setName('amount')
				.setDescription('The number of seeds to convert')
				.setRequired(true)),

	new SlashCommandBuilder()
		.setName('grantbuds')
		.setDescription('Grant buds to a user')
		.addUserOption(option =>
			option
				.setName('target')
				.setDescription('The user to grant buds to')
				.setRequired(true))
		.addIntegerOption(option =>
			option
				.setName('amount')
				.setDescription('The number of buds to grant')
				.setRequired(true))
		.addStringOption(option =>
			option
				.setName('reason')
				.setDescription('Reason for granting buds')
				.setRequired(false)),

	new SlashCommandBuilder()
		.setName('grantseed')
		.setDescription('Admin command to grant seeds to users')
		.addUserOption(option =>
			option
				.setName('target')
				.setDescription('User to receive seeds')
				.setRequired(true))
		.addIntegerOption(option =>
			option
				.setName('amount')
				.setDescription('Amount of seeds to grant')
				.setRequired(true))
		.addStringOption(option =>
			option
				.setName('reason')
				.setDescription('Reason for granting seeds')
				.setRequired(false)),

	new SlashCommandBuilder()
		.setName('grantbulk')
		.setDescription('Grant seeds to multiple users at once')
		.addStringOption(option =>
			option
				.setName('users')
				.setDescription('User IDs or mentions, separated by spaces')
				.setRequired(true))
		.addIntegerOption(option =>
			option
				.setName('amount')
				.setDescription('Amount of seeds to grant each user')
				.setRequired(true))
		.addStringOption(option =>
			option
				.setName('reason')
				.setDescription('Reason for granting seeds')
				.setRequired(false)),

	new SlashCommandBuilder()
		.setName('deduct')
		.setDescription('Remove seeds from a user')
		.addUserOption(option =>
			option
				.setName('target')
				.setDescription('User to deduct seeds from')
				.setRequired(true))
		.addIntegerOption(option =>
			option
				.setName('amount')
				.setDescription('Amount of seeds to remove')
				.setRequired(true))
		.addStringOption(option =>
			option
				.setName('reason')
				.setDescription('Reason for deducting seeds')
				.setRequired(false)),

	new SlashCommandBuilder()
		.setName('admindashboard')
		.setDescription('Admin dashboard and management commands'),

	new SlashCommandBuilder()
		.setName('kindness')
		.setDescription('Perform a random act of kindness for a server member')
		.addUserOption(option =>
			option.setName('target')
				.setDescription('User to receive a kind gesture')
				.setRequired(true)),

	new SlashCommandBuilder()
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

	new SlashCommandBuilder()
		.setName('opencapsule')
		.setDescription('Open your time capsules that are ready'),

    new SlashCommandBuilder()
		.setName('onthishistory')
		.setDescription('Get an interesting historical fact that happened today'),

	new SlashCommandBuilder()
		.setName('timecapsule')
		.setDescription('Send a message to yourself for the future')
		.addStringOption(option =>
			option.setName('message')
				.setDescription('Your message for the future')
				.setRequired(true))
		.addIntegerOption(option =>
			option.setName('time')
				.setDescription('Set the time duration')
				.setRequired(true))
		.addStringOption(option =>
			option.setName('unit')
				.setDescription('Unit of time (minutes, hours, days, weeks, months)')
				.setRequired(true)
				.addChoices(
					{ name: 'Minutes', value: 'minutes' },
					{ name: 'Hours', value: 'hours' },
					{ name: 'Days', value: 'days' },
					{ name: 'Weeks', value: 'weeks' },
					{ name: 'Months', value: 'months' }
				))
		.addBooleanOption(option =>
			option.setName('public')
				.setDescription('Should this time capsule be public when opened?')
				.setRequired(false)),
];

// Create REST instance
const rest = new REST().setToken(token);

// Deploy commands
(async () => {
	try {
		console.log('Started refreshing application (/) commands.');

		// Deploy commands to the specified guild
		await rest.put(
			Routes.applicationGuildCommands(clientId, guildId),
			{ body: commands }
		);

		console.log('Successfully reloaded application (/) commands.');
	} catch (error) {
		console.error('Error deploying commands:');
		console.error(error);
	}
})();
