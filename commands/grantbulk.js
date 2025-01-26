const { SlashCommandBuilder } = require('discord.js');

module.exports = {
    data: new SlashCommandBuilder()
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

    async execute(interaction) {
        const requiredRoleId = '1298906125600821279';
        const member = interaction.guild.members.cache.get(interaction.user.id);

        if (!member || !member.roles.cache.has(requiredRoleId)) {
            return await interaction.reply({
                content: '❌ You do not have the required role to use this command.',
                flags: 64 // Equivalent to ephemeral: true
            });
        }

        const inputUsers = interaction.options.getString('users');
        const amount = interaction.options.getInteger('amount');
        const reason = interaction.options.getString('reason') || 'No reason provided';

        if (amount <= 0) {
            return await interaction.reply({
                content: '❌ Amount must be positive.',
                flags: 64 // Equivalent to ephemeral: true
            });
        }

        // Parse user mentions and IDs
        const userMatches = inputUsers.match(/<@!?(\d+)>|\d+/g);
        if (!userMatches) {
            return await interaction.reply({
                content: '❌ No valid user IDs or mentions found.',
                flags: 64 // Equivalent to ephemeral: true
            });
        }

        const userIds = userMatches.map(match => match.replace(/[<@!>]/g, ''));
        const results = {
            successful: [],
            failed: []
        };

        // Defer reply since this might take a while
        await interaction.deferReply();

        // Process each user
        for (const userId of userIds) {
            try {
                const user = await interaction.client.users.fetch(userId);
                const profile = await updateUserBalance(userId, interaction.guild.id, amount);

                results.successful.push({
                    username: user.username,
                    newBalance: profile.balance
                });

                // Try to DM the user
                try {
                    await user.send(
                        `🌱 You have been granted ${amount} seeds by ${interaction.user.username} in ${interaction.guild.name}!\n📝 Reason: ${reason}\n💰 Your new balance: ${profile.balance} seeds`
                    );
                } catch (dmError) {
                    console.log(`Couldn't DM user ${userId}`);
                }
            } catch (error) {
                results.failed.push(userId);
            }
        }

        // Prepare response message
        let response = `✅ Bulk seed grant complete!\n📝 Reason: ${reason}\n\n`;

        if (results.successful.length > 0) {
            response += '**Successful grants:**\n';
            results.successful.forEach(user => {
                response += `${user.username}: New balance ${user.newBalance} seeds\n`;
            });
        }

        if (results.failed.length > 0) {
            response += '\n**Failed grants:**\n';
            response += results.failed.map(id => `User ID: ${id}`).join('\n');
        }

        await interaction.editReply({ content: response, flags: 0 }); // Public reply
    }
};
