const { SlashCommandBuilder } = require('@discordjs/builders');
const { EmbedBuilder } = require('discord.js');
const profileModel = require("../models/profileSchema");

module.exports = {
    data: new SlashCommandBuilder()
        .setName('leaderboard')
        .setDescription('Show the server leaderboard!')
        .addIntegerOption(option =>
            option.setName('page')
                .setDescription('Which page of the leaderboard to view')
                .setMinValue(1)
                .setRequired(false)),

    async execute(interaction) {
        try {
            const page = interaction.options.getInteger('page') || 1;
            const profilesPerPage = 10;
            const startIndex = (page - 1) * profilesPerPage;

            // Fetch and sort profiles by balance
            const profiles = await profileModel.find({}, 'userId balance buds').sort({ balance: -1 });
            const totalPages = Math.ceil(profiles.length / profilesPerPage);

            if (page > totalPages) {
                return await interaction.reply({
                    content: `Invalid page number. There are only ${totalPages} pages!`,
                    ephemeral: true
                });
            }

            const pageProfiles = profiles.slice(startIndex, startIndex + profilesPerPage);

            const leaderboardEntries = await Promise.all(pageProfiles.map(async (profile, index) => {
                const actualPosition = startIndex + index + 1;
                let medal = '';
                if (actualPosition === 1) medal = '🥇';
                else if (actualPosition === 2) medal = '🥈';
                else if (actualPosition === 3) medal = '🥉';

                try {
                    const member = await interaction.guild.members.fetch(profile.userId);
                    return {
                        position: actualPosition,
                        name: member.user.username,
                        balance: profile.balance,
                        buds: profile.buds,
                        medal
                    };
                } catch {
                    return {
                        position: actualPosition,
                        name: `Unknown User (${profile.userId})`,
                        balance: profile.balance,
                        buds: profile.buds,
                        medal
                    };
                }
            }));

            const embed = new EmbedBuilder()
                .setColor('#2ecc71')
                .setTitle('🏆 Server Leaderboard')
                .setDescription('Top players ranked by Seeds and Buds')
                .setThumbnail(interaction.guild.iconURL())
                .setFooter({
                    text: `Page ${page}/${totalPages} • ${profiles.length} total players`,
                    iconURL: interaction.guild.iconURL()
                })
                .setTimestamp();

            let leaderboardText = '';
            leaderboardEntries.forEach(entry => {
                const positionText = entry.medal || `#${entry.position}`;
                leaderboardText += `${positionText} **${entry.name}**\n${entry.balance.toLocaleString()} Seeds 🌱 | ${entry.buds.toLocaleString()} Buds 🌿\n\n`;
            });

            embed.addFields({
                name: 'Rankings',
                value: leaderboardText || 'No data available'
            });

            const userPosition = profiles.findIndex(p => p.userId === interaction.user.id) + 1;
            if (userPosition > 0) {
                embed.addFields({
                    name: 'Your Position',
                    value: `You are ranked #${userPosition} with ${profiles[userPosition - 1].balance.toLocaleString()} Seeds 🌱 and ${profiles[userPosition - 1].buds.toLocaleString()} Buds 🌿`
                });
            }

            await interaction.reply({ embeds: [embed] });
        } catch (error) {
            console.error('Error fetching leaderboard:', error);
            await interaction.reply({
                content: 'There was an error fetching the leaderboard.',
                ephemeral: true
            });
        }
    },
};
