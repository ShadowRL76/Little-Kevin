const { SlashCommandBuilder, EmbedBuilder } = require('discord.js');

// Array of vibrant colors for the timer
const COLORS = [
    '#FF5252', '#FF4081', '#E040FB', '#7C4DFF', '#536DFE',
    '#448AFF', '#40C4FF', '#18FFFF', '#64FFDA', '#69F0AE',
    '#B2FF59', '#EEFF41', '#FFFF00', '#FFD740', '#FFAB40', '#FF6E40'
];

// Map to store active timers
const activeTimers = new Map();

module.exports = {
    data: new SlashCommandBuilder()
        .setName('timer')
        .setDescription('Set a colorful countdown timer')
        .addIntegerOption(option =>
            option.setName('hours')
                .setDescription('Hours (0-24)')
                .setMinValue(0)
                .setMaxValue(24)
                .setRequired(false))
        .addIntegerOption(option =>
            option.setName('minutes')
                .setDescription('Minutes (0-59)')
                .setMinValue(0)
                .setMaxValue(59)
                .setRequired(false))
        .addIntegerOption(option =>
            option.setName('seconds')
                .setDescription('Seconds (0-59)')
                .setMinValue(0)
                .setMaxValue(59)
                .setRequired(false))
        .addStringOption(option =>
            option.setName('label')
                .setDescription('Timer label (optional)')
                .setRequired(false)),

    async execute(interaction) {
        try {
            // Get the options from the interaction
            const hours = interaction.options.getInteger('hours') || 0;
            const minutes = interaction.options.getInteger('minutes') || 0;
            const seconds = interaction.options.getInteger('seconds') || 0;
            const timeLabel = interaction.options.getString('label') || 'Timer';

            // Calculate total seconds
            let totalSeconds = (hours * 3600) + (minutes * 60) + seconds;

            // If no time provided or time is 0
            if (totalSeconds <= 0) {
                return interaction.reply({
                    content: 'Please provide a valid duration by setting hours, minutes, or seconds',
                    ephemeral: true
                });
            }

            // Cap at 24 hours to prevent abuse
            if (totalSeconds > 86400) {
                return interaction.reply({
                    content: 'Timer cannot exceed 24 hours',
                    ephemeral: true
                });
            }

            // Format remaining time function
            const formatTime = (seconds) => {
                const h = Math.floor(seconds / 3600);
                const m = Math.floor((seconds % 3600) / 60);
                const s = seconds % 60;

                let timeString = '';
                if (h > 0) timeString += `${h}h `;
                if (m > 0 || h > 0) timeString += `${m}m `;
                timeString += `${s}s`;

                return timeString;
            };

            // Generate unique timer ID
            const timerId = `${interaction.user.id}-${Date.now()}`;

            // Create initial embed
            const timerEmbed = new EmbedBuilder()
                .setTitle(`⏰ ${timeLabel}`)
                .setColor(COLORS[0])
                .setFooter({ text: `Requested by ${interaction.user.username}`, iconURL: interaction.user.displayAvatarURL() })
                .setTimestamp();

            // Acknowledge slash command immediately
            await interaction.reply(`✅ Timer set for ${formatTime(totalSeconds)}!`);

            // Send initial timer message
            let remainingTime = totalSeconds;
            timerEmbed.setDescription(`⏳ Time Remaining: **${formatTime(remainingTime)}**`);
            const timerMessage = await interaction.channel.send({ embeds: [timerEmbed] });

            // Set up interval to update the timer
            const updateInterval = Math.min(Math.max(Math.floor(totalSeconds / 10), 1), 5) * 1000; // Dynamic update interval

            const interval = setInterval(async () => {
                try {
                    remainingTime -= updateInterval / 1000;

                    if (remainingTime <= 0) {
                        clearInterval(interval);
                        remainingTime = 0;

                        // Final embed - timer complete
                        const completedEmbed = new EmbedBuilder()
                            .setTitle(`✅ ${timeLabel} - Complete!`)
                            .setDescription(`⌛ Time's up! Timer has ended.`)
                            .setColor('#00FF00')
                            .setFooter({ text: `Requested by ${interaction.user.username}`, iconURL: interaction.user.displayAvatarURL() })
                            .setTimestamp();

                        await timerMessage.edit({ embeds: [completedEmbed] });
                        interaction.channel.send(`⏰ **Time's up, <@${interaction.user.id}>!** Your timer \`${timeLabel}\` has ended.`);

                        // Remove from active timers
                        activeTimers.delete(timerId);
                        return;
                    }

                    // Update color based on progress
                    const colorIndex = COLORS.length - Math.ceil((remainingTime / totalSeconds) * COLORS.length);
                    const currentColor = COLORS[Math.min(colorIndex, COLORS.length - 1)];

                    // Progress bar
                    const progressBarLength = 20;
                    const filledLength = Math.floor((1 - remainingTime / totalSeconds) * progressBarLength);
                    const progressBar = '█'.repeat(filledLength) + '░'.repeat(progressBarLength - filledLength);

                    // Update embed
                    const updatedEmbed = new EmbedBuilder()
                        .setTitle(`⏰ ${timeLabel}`)
                        .setDescription(`⏳ Time Remaining: **${formatTime(Math.ceil(remainingTime))}**\n\n${progressBar} ${Math.floor((1 - remainingTime / totalSeconds) * 100)}%`)
                        .setColor(currentColor)
                        .setFooter({ text: `Requested by ${interaction.user.username}`, iconURL: interaction.user.displayAvatarURL() })
                        .setTimestamp();

                    await timerMessage.edit({ embeds: [updatedEmbed] });
                } catch (err) {
                    console.error('Error in timer update interval:', err);
                    clearInterval(interval);
                    activeTimers.delete(timerId);
                }
            }, updateInterval);

            // Store timer reference
            activeTimers.set(timerId, { interval, message: timerMessage });

        } catch (error) {
            console.error('Error in timer command:', error);
            return interaction.replied
                ? interaction.followUp({ content: 'There was an error processing your timer!', ephemeral: true })
                : interaction.reply({ content: 'There was an error processing your timer!', ephemeral: true });
        }
    },
};