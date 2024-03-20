const Discord = require('discord.js')

module.exports = {
    name: 'ed',
    description: "Well, this is awkward.",
    async execute(interaction) {

        const ed_gifs = [
            "https://shutupandtakemymoney.com/wp-content/uploads/2020/06/big-ed-looks-like-all-the-impractical-jokers-combined-into-one-meme.jpg",
            "https://shutupandtakemymoney.com/wp-content/uploads/2020/06/when-someone-is-crying-and-you-dont-know-what-to-do-i-got-you-some-toothpaste-big-ed-meme.jpg",
            "https://i.imgflip.com/42dgvb.jpg",
            "https://i.imgflip.com/43qdkb.jpg",
            "http://www.shutupandtakemymoney.com/wp-content/uploads/2020/05/when-the-coffee-activates-the-poop-during-your-commute-to-work-big-ed-meme.jpg",
            "http://www.shutupandtakemymoney.com/wp-content/uploads/2020/06/chris-delia-big-ed-meme.jpg",
            "https://i.redd.it/i7llzt6xvg371.png",
            "https://lh6.googleusercontent.com/proxy/m-CBWapMMojV260eo1ApTePoq7u8TmLlyn0gmggaCRaPXISkNRdBBKSMy6Xw8m2avIarLNDGvHekVfSXvaoIAtKdrJiHl5bLkgY=w1200-h630-p-k-no-nu",
            "https://i.imgflip.com/4ghbun.jpg",
            "https://i.imgflip.com/4r6j0b.jpg",
            "https://shutupandtakemymoney.com/wp-content/uploads/2020/04/big-ed-and-wife-volcano-lava-meme.jpg",
            "https://i.redd.it/p4psqhqem8351.png",
            "https://i2.wp.com/www.shutupandtakemymoney.com/wp-content/uploads/2020/05/if-head-and-shoulders-was-a-person-big-ed-meme.jpg",
            "https://i.pinimg.com/736x/a5/8b/db/a58bdbf07da11f3b4390a5ff4e7b6b6a.jpg",
            "https://img-9gag-fun.9cache.com/photo/arVyBKV_460s.jpg",
            "https://i.redd.it/x7zduphp2gs41.jpg",
            "http://www.shutupandtakemymoney.com/wp-content/uploads/2020/06/big-ed-hair-spread-mayonaise-meme.jpg",
            "http://www.shutupandtakemymoney.com/wp-content/uploads/2020/06/big-ed-hair-spread-mayonaise-meme.jpg",
            "https://i.redd.it/p20bmnc07xs41.jpg",
            "https://i.redd.it/xqoz6bvri1s41.png",
            "https://i.imgflip.com/4vy7p6.jpg"
            




        ];

            const ed_image = ed_gifs[Math.floor(Math.random() * ed_gifs.length)];
            const ed_embed = new Discord.MessageEmbed()
            .setTitle('Is this how you pictured me?')
            .setColor('#FFFFCC')
            .setDescription('I got you some toothpaste.')
            .setImage(ed_image);

        interaction.reply({ embeds: [ed_embed] })  
    
    

    }    

}    