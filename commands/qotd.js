const Discord = require('discord.js')

module.exports = {
    name: 'qotd',
    description: 'Post Muusee\'s QOTD',
    async execute(interaction) {

        const qotd_gifs = [
            "https://iili.io/JWDmfXn.jpg",//IceCream
           //"https://iili.io/JWDpMFf.jpg",//Wizards
            //"https://iili.io/JWDpE6G.jpg",//Jurassic
            "https://iili.io/JWDp1Gs.jpg",//PhoneText
            "https://iili.io/JWDp0nn.jpg",//WorstDate
            //"https://iili.io/JWDpcZX.jpg",//FittedSheet
            //"https://iili.io/JWDpajt.jpg"//Movie
        ]

        const qotd_image = qotd_gifs[Math.floor(Math.random() * qotd_gifs.length)];
        const qotd_embed = new Discord.MessageEmbed()
            .setTitle(' It\'s life. It\'s interesting. It\'s fun. ')
            .setColor('#000000')
            .setURL('https://www.bobross.com')
            .setAuthor({name:'ironstark997', iconURL:'https://iili.io/JWrj7ig.jpg'})
            .setDescription(':grey_question: Question Of The Day! :grey_question:')
            .setThumbnail('https://iili.io/JWDQnQj.png')
            .setImage(qotd_image)
            .setFooter({text:'ScoopDogg | discord.gg/GEMBK386', iconURL:'https://i.imgur.com/XcCcxND.png'})
    
            
            if (interaction.user.id === '518487265274494980') {
                interaction.reply({ embeds: [qotd_embed] })      
            
            }

            


    }    

}   