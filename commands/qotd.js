const { SlashCommandBuilder } = require('@discordjs/builders');
const {EmbedBuilder} = require("discord.js");

module.exports = {
    data: new SlashCommandBuilder()
        .setName('qotd')
        .setDescription('Post Muusee\'s QOTD'),

    async execute(interaction) {

        const qotd_gifs = [
            "https://iili.io/JWDmfXn.jpg",//IceCream
            "https://iili.io/JWDpMFf.jpg",//Wizards
            "https://iili.io/JWDpE6G.jpg",//Jurassic
            "https://iili.io/JWDp1Gs.jpg",//PhoneText
            "https://iili.io/JWDp0nn.jpg",//WorstDate
            "https://iili.io/JWDpcZX.jpg",//FittedSheet
            "https://iili.io/JWDpajt.jpg",//Movie
            "https://iili.io/JhIkGcu.jpg",//Vacation
            "https://iili.io/JhIkW9j.jpg",//Money
            "https://iili.io/Jj0MDtp.jpg",//RhondaRousey
            "https://iili.io/Jj0MyPt.jpg",//UltimateSandwich
            "https://iili.io/Jj0MpVI.jpg",//Parrot
            "https://iili.io/Jj0MmoN.jpg",//ChooseYourName
            "https://iili.io/Jj0vyap.jpg",//HotDogSandwich
            "https://iili.io/Jj0gSDP.jpg",//DinnerParty
            "https://iili.io/Jj0Zmzv.jpg",//CerealSoup

        ]

        const qotd_image = qotd_gifs[Math.floor(Math.random() * qotd_gifs.length)];
        const qotd_embed = new EmbedBuilder()
            .setTitle(' It\'s life. It\'s interesting. It\'s fun. ')
            .setColor('#000000')
            .setURL('https://www.bobross.com')
            .setAuthor({name:'ironstark997', iconURL:'https://iili.io/JWrj7ig.jpg'})
            .setDescription(':grey_question: Question Of The Day! :grey_question:')
            .setThumbnail('https://iili.io/JWDQnQj.png')
            .setImage(qotd_image)
            .setFooter({text:'LittleKevin | discord.gg/XqsqVXuV', iconURL:'https://iili.io/Jh1PVgS.png'})

        if (interaction.user.id === '518487265274494980'||'1015091375366221884') {
            await interaction.reply({ embeds: [qotd_embed] })
        }
    }

}