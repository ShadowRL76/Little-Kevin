const { SlashCommandBuilder } = require('@discordjs/builders');
const profileModel = require("../models/profileSchema");

module.exports = {
    data: new SlashCommandBuilder()
        .setName('leaderboard')
        .setDescription('Show leaderboard!'),

    async execute(interaction) {
            try
            {
                const profiles = await profileModel.find({}, 'userId balance');
                profiles.sort((a, b) => b.balance - a.balance);

                const leaderboard = await Promise.all(profiles.map(async profile =>
                {
                    try
                    {
                        const member = await interaction.guild.members.fetch(profile.userId);
                        const displayName = member.nickname || member.user.username;
                        return `${displayName}: ${profile.balance} eggs`;
                    }
                    catch
                    {
                        return `User ID: ${profile.userId}: ${profile.balance} eggs`;
                    }
                }));

                await interaction.reply(`Leaderboard:\n${leaderboard.join('\n')}`);
            }
            catch (e)
            {
                console.error('Error fetching leaderboard:', e);
                await interaction.reply('There was an error fetching the leaderboard.');
            }

    },
};
