const mongoose = require('mongoose');
const { EmbedBuilder, SlashCommandBuilder} = require('discord.js');

// Moderation Log Schema
const ModerationLogSchema = new mongoose.Schema({
    serverId: { type: String, required: true },
    userId: { type: String, required: true },
    moderatorId: { type: String, required: true },
    action: { type: String, required: true },
    reason: { type: String },
    timestamp: { type: Date, default: Date.now }
});

const ModerationLog = mongoose.model('ModerationLog', ModerationLogSchema);

// Server Stats Schema
const ServerStatsSchema = new mongoose.Schema({
    serverId: { type: String, required: true, unique: true },
    totalWarns: { type: Number, default: 0 },
    totalKicks: { type: Number, default: 0 },
    totalBans: { type: Number, default: 0 },
    lastUpdated: { type: Date, default: Date.now }
});

const ServerStats = mongoose.model('ServerStats', ServerStatsSchema);

module.exports = {
    data: new SlashCommandBuilder()
        .setName('admindashboard')
        .setDescription('Admin dashboard and management commands'),

    async execute(interaction) {
        const requiredRoleId = '1298906125600821279';
        const member = interaction.guild.members.cache.get(interaction.user.id);
        if (!member || !member.roles.cache.has(requiredRoleId)) {
            return await interaction.reply({
                content: '❌ You do not have the required role to use this command.',
                flags: 64 // Ephemeral flag
            });
        }

        let serverStats = await ServerStats.findOne({serverId: interaction.guildId});
        if (!serverStats) {
            serverStats = new ServerStats({serverId: interaction.guildId});
            await serverStats.save();
        }

        const recentLogs = await ModerationLog.find({
            serverId: interaction.guildId
        }).sort({timestamp: -1}).limit(5);

        const embed = new EmbedBuilder()
            .setTitle('📊 Server Admin Dashboard')
            .setColor('#0099ff')
            .addFields(
                {
                    name: '🛡️ Moderation Stats',
                    value: `
               • Total Warns: ${serverStats.totalWarns}
               • Total Kicks: ${serverStats.totalKicks}
               • Total Bans: ${serverStats.totalBans}
               `
                },
                {
                    name: '📜 Recent Moderation Actions',
                    value: recentLogs.length ?
                        recentLogs.map(log =>
                            `• ${log.action} on <@${log.userId}> by <@${log.moderatorId}>`
                        ).join('\n') :
                        'No recent actions'
                }
            )
            .setTimestamp();

        await interaction.reply({
            embeds: [embed],
            flags: 64 // Ephemeral flag
        });
    },
};