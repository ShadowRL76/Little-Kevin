const Discord = require('discord.js')

module.exports = {
    name: 'devito',
    description: "DevitHoes Rejoice!",
    async execute(interaction) {

        const devito_gifs = [
            "https://i.imgur.com/HBrB8p0.jpeg",
            "https://i.imgur.com/yX2lLxA.jpeg",
            "https://i.imgur.com/1eiln9Kb.jpg",
            "https://i.imgur.com/bFAwh2z.jpeg",
            "https://i.imgur.com/HC54I89b.jpg",
            "https://i.imgur.com/kReKWoc.jpeg",
            "https://external-preview.redd.it/pLjYNdahPf9V1MRIM2Mzh-ZlMn8dkKQ9SeXleGtdBgE.jpg?auto=webp&s=63e816515b1e8b09783a02f1006e9b4747e37d3b",
            "https://i.imgur.com/WHIvcje.jpeg",
            "https://i.imgur.com/4KzhDb2.png",
            "https://i.redd.it/ak2601i04q441.jpg",
            "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRyvwGNpFqQKHHeeaJI8NvjRlOPHF2Lrk7_atbo_mH5UZVeLvotpw9kd3waAWEcUVrL6Is&usqp=CAU",
            "https://64.media.tumblr.com/52779499048f3af316d72d49cfe85860/tumblr_ptpjwxmqMN1tpj79b_1280.jpg",
            "https://cdn.ebaumsworld.com/mediaFiles/picture/2386814/85882581.jpg",
            "https://i.imgflip.com/4g57cb.jpg"

        
        ]

        const devito_image = devito_gifs[Math.floor(Math.random() * devito_gifs.length)];
        const devito_embed = new Discord.MessageEmbed()
            .setTitle('A wild Danny Devito appeared!')
            .setColor('#BE00BB')
            .setDescription('Isnt he beautiful?')
            .setImage(devito_image);

        interaction.reply({ embeds: [devito_embed] })  
    
    

    }    

}    



    
