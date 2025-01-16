const {SlashCommandBuilder, PermissionFlagsBits} = require("discord.js");

module.exports = {
    data: new SlashCommandBuilder()
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

    async execute(interaction) {
        const requiredRoleId = '1298906125600821279';
        const member = interaction.guild.members.cache.get(interaction.user.id);

        if (!member || !member.roles.cache.has(requiredRoleId)) {
            return await interaction.reply({
                content: '❌ You do not have the required role to use this command.',
                ephemeral: true
            });
        }

        const target = interaction.options.getUser('target');
        const amount = interaction.options.getInteger('amount');
        const reason = interaction.options.getString('reason') || 'No reason provided';

        if (amount <= 0) {
            return await interaction.reply({
                content: '❌ Amount must be positive.',
                ephemeral: true
            });
        }

        try {
            const profile = await updateUserBalance(target.id, interaction.guild.id, amount, true);

            // Send confirmation
            await interaction.reply({
                content: `✅ Deducted ${amount} seeds from ${target.username}!\n📝 Reason: ${reason}\n💰 Their new balance: ${profile.balance} seeds`,
                ephemeral: false
            });

            // Try to DM the target user
            try {
                await target.send(
                    `🌱 ${amount} seeds have been deducted from your balance by ${interaction.user.username} in ${interaction.guild.name}.\n📝 Reason: ${reason}\n💰 Your new balance: ${profile.balance} seeds`
                );
            } catch (dmError) {
                console.log(`Couldn't DM user ${target.id}`);
            }

        } catch (error) {
            console.error('Error in deduct command:', error);
            await interaction.reply({
                content: '❌ There was an error processing the seed deduction.',
                ephemeral: true
            });
        }
    }
};