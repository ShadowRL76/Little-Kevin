const { SlashCommandBuilder } = require('discord.js');
const moment = require('moment');
const profileModel = require('../models/profileSchema');

module.exports = {
    data: new SlashCommandBuilder()
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

    async execute(interaction) {
        const message = interaction.options.getString('message');
        const time = interaction.options.getInteger('time');
        const unit = interaction.options.getString('unit');
        const isPublic = interaction.options.getBoolean('public') ?? false; // Default to private if not specified
        const userId = interaction.user.id;
        const serverId = interaction.guild.id;

        const openAt = moment().add(time, unit).toDate();

        try {
            await profileModel.findOneAndUpdate(
                { userId, serverId },
                {
                    $push: {
                        timeCapsules: {
                            message,
                            openAt,
                            isPublic,
                        },
                    },
                },
                { upsert: true, new: true }
            );

            await interaction.reply({
                content: `⏳ **Your Time Capsule is set!**\n\n**Message:** "${message}"\n**It will be opened on:** ${moment(openAt).format('MMMM Do YYYY, h:mm:ss a')}\n**Visibility:** ${isPublic ? 'Public' : 'Private'}`,
                flags: 64,
            });
        } catch (error) {
            console.error('Time Capsule Command Error:', error);
            await interaction.reply({
                content: '❌ There was an error setting your time capsule. Please try again later.',
                flags: 64,
            });
        }
    },
};
