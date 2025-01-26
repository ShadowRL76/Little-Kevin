const { SlashCommandBuilder } = require('discord.js');

module.exports = {
    data: new SlashCommandBuilder()
        .setName('dream')
        .setDescription('Tell me your dream, and I will interpret it')
        .addStringOption(option =>
            option.setName('dream')
                .setDescription('Describe your dream')
                .setRequired(true)),

    async execute(interaction) {
        const dreamDescription = interaction.options.getString('dream');

        const dreamInterpretations = [
            'Dreaming of flying means you are seeking freedom and independence!',
            'Being chased in a dream might signify that you are avoiding something in your waking life.',
            'Dreaming of water represents emotions. If the water is calm, you’re feeling at peace, but if it’s turbulent, you might be experiencing emotional turmoil.',
            'Dreaming of falling could represent a fear of losing control or fear of failure.',
            'Seeing animals in your dream can be a sign that you need to listen to your instincts.',
            'Dreaming of being naked suggests vulnerability or a fear of being exposed.'
        ];

        const randomInterpretation = dreamInterpretations[Math.floor(Math.random() * dreamInterpretations.length)];

        await interaction.reply({
            content: `💭 **Dream**: "${dreamDescription}"\n\n🔮 **Interpretation**: ${randomInterpretation}`,
            flags: 64,
        });
    }
};
