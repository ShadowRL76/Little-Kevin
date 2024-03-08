const Discord = require('discord.js')

module.exports = {
    name: 'devito',
    description: "DevitHoes Rejoice!",
    async execute(interaction) {

        const devito_gifs = [
            "https://i.imgur.com/HBrB8p0.jpeg",
            "https://i.imgur.com/yX2lLxA.jpeg",
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
            "https://i.imgflip.com/4g57cb.jpg",
            "https://i.redd.it/7jgxh09rmrs31.jpg", 
            "https://i.redd.it/ncd545zyyqo41.jpg",
            "https://i.redd.it/l2mmnuphnyh41.jpg",
            "https://i.redd.it/n135302pfn271.png",
            "https://thechive.com/wp-content/uploads/2020/01/danny-devito-memes-13.jpg?attachment_cache_bust=3167228&quality=85&strip=info&w=400",
            "https://i.pinimg.com/564x/1c/1b/8f/1c1b8f92c98a98cf4cefbd37ac468e45.jpg",
            "https://i.pinimg.com/236x/15/e5/9e/15e59e0c8125e723b65f41c09581c096.jpg",
            "https://i.pinimg.com/originals/89/26/0b/89260b9bfcdd40b6b67929b09b68f2eb.jpg",
            "https://i.pinimg.com/564x/35/cf/87/35cf873bf3d86a438227083489886bd5.jpg",
            "https://i.pinimg.com/736x/0e/a1/6e/0ea16e7c04f2118346f5ce0e89e50aa1.jpg",
            "https://m.media-amazon.com/images/M/MV5BNmU5MjA5ZDMtODA3NC00NmJlLWFlNmItNTEwMTZlNGVmYTQ3XkEyXkFqcGdeQXVyNDUxMDE3Mzk@._V1_.jpg",
            "https://i.pinimg.com/736x/4d/7c/b5/4d7cb52c448cfaf20b47411a76d90ac6.jpg",
            "https://i.redd.it/dgod52p690921.jpg"
        
        
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



    
