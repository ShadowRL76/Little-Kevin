const { SlashCommandBuilder } = require('@discordjs/builders');
const { EmbedBuilder } = require('discord.js');

module.exports = {
    data: new SlashCommandBuilder()
        .setName('devitoes')
        .setDescription("We dont kink shame."),

    async execute(interaction) {

        const devitoes_gifs = [
            "https://media.gq.com/photos/55828ee31177d66d68d5395e/4:3/w_576,h_432,c_limit/blogs-the-feed-troll-foot-fallon-01.jpg",
            "https://imagez.tmz.com/image/f2/1by1/2012/07/23/f218646aad5f5d1495e3c8ed0c469fbd_xl.jpg",
            "https://lh3.googleusercontent.com/proxy/TDqKWtamzM3PPOyVPl_RNAi2qDBHOXvlNXOPrdQc4arYsyZgnFPgrk-7z3wz1eZAd070d14wIezLSlIfVTXI9PpnOY8jTDl9XSSLbygpp9jDkRa73ltHY1eFArLGYgiYLXUO_aeRbOzfvpzPCvG2aHp4ltqQ59Tv0pkJvgaqonMEJA",
            "https://static01.nyt.com/images/2016/02/19/magazine/19mag-devito-ss-slide-77Z2/19mag-devito-ss-slide-77Z2-superJumbo.jpg",
            "https://static01.nyt.com/images/2016/02/19/magazine/19mag-devito-ss-slide-YOAN/19mag-devito-ss-slide-YOAN-superJumbo.jpg",
            "https://bleedingcool.com/wp-content/uploads/2021/03/alwaystrollfoot-1-1200x900.jpg",
            "https://i.dailymail.co.uk/i/pix/2016/10/04/12/3915FEB100000578-3821289-image-a-63_1475581450001.jpg",
            "https://i.redd.it/lb3kmchyrogc1.jpeg",
            "https://memeguy.com/photos/images/my-sister-over-pronounced-the-to-in-danny-devito-and-it-gave-me-an-idea-388444.png",
            "https://i0.wp.com/criticaldispatches.com/wp-content/uploads/DannyDeVitoesPreview.png?fit=2006%2C1600&ssl=1",
            "https://i.kym-cdn.com/photos/images/original/002/057/734/d10.jpg",
            "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQQIiG58d9Su0V1lNa0VKr6xHPdsbxW2RgZ4A&s",
            "https://pics.wikifeet.com/Danny-DeVito-Feet-5067944.jpg",
            "https://pics.wikifeet.com/Danny-DeVito-Feet-2934190.jpg",
            "https://pics.wikifeet.com/Danny-DeVito-Feet-7261227.jpg",
            "https://cdn.acidcow.com/pics/20130417/danny_devito_03.jpg",
            "https://cdn.acidcow.com/pics/20130417/danny_devito_08.jpg",
            "https://cdn.acidcow.com/pics/20130417/danny_devito_16.jpg",
            "https://cdn.acidcow.com/pics/20130417/danny_devito_17.jpg",
            "https://cdn.acidcow.com/pics/20130417/danny_devito_21.jpg",
            "https://cdn.acidcow.com/pics/20130417/danny_devito_28.jpg",
            "https://cdn.acidcow.com/pics/20130417/danny_devito_29.jpg",
            "https://cdn.acidcow.com/pics/20130417/danny_devito_33.jpg",
            "https://www.shutterstock.com/image-photo/18-august-2011-hollywood-california-260nw-83846326.jpg",
            "https://s3.amazonaws.com/ebaumsworld.prod/uploads1657306635522-DfNKhc1U8AAVgE5.jpg",
            "https://s3.amazonaws.com/ebaumsworld.prod/uploads1657305851494-DHn_qHtXcAArOkn.jpg",
            "https://pbs.twimg.com/media/DVOHHsDUMAAaT7C?format=jpg&name=900x900",
            "https://s3.amazonaws.com/ebaumsworld.prod/uploads1657306695928-E63Q_JmWEAEWcow.jpg",
            "https://s3.amazonaws.com/ebaumsworld.prod/uploads1657306727453-E7qP5z8VoAA6TAw.jpg",
            "https://tse3.mm.bing.net/th?id=OIP.BdYjoNipj14Cmb_IX6cVZQEsEq&pid=Api&P=0&h=220",
            "https://tse2.mm.bing.net/th?id=OIP.-olZPPUqd3ZrBglsJopbEgHaEm&pid=Api&P=0&h=220",
            "https://tse2.mm.bing.net/th?id=OIP.daLxlQ9ReRwpDN2Zsg7VowHaJ4&pid=Api&P=0&h=220",
            "https://tse3.mm.bing.net/th?id=OIP.BELxf8sq5QIFbJysGVWVjgHaFj&pid=Api&P=0&h=220",
            "https://s3.amazonaws.com/ebaumsworld.prod/uploads1657306802278-EydsdlHVgAACXJC.jpg",
            "https://pbs.twimg.com/media/FU8gZhLVEAAkHOr?format=jpg&name=small",
            "https://pbs.twimg.com/media/C04QHyvXgAAlpDy?format=jpg&name=900x900",
            "https://s3.amazonaws.com/ebaumsworld.prod/uploads1657305851494-DHn_qHtXcAArOkn.jpg",
            "https://pbs.twimg.com/media/DVOHHsDUMAAaT7C?format=jpg&name=900x900",
            "https://pbs.twimg.com/media/EMafTgBUUAATE1K?format=jpg&name=small",
            "https://pbs.twimg.com/media/CksxUc3UUAAmoNQ.jpg",
            "https://tse3.mm.bing.net/th?id=OIP.hIKLf6GKqF_HJSObBH17HwEpEs&pid=Api&P=0&h=220",
            "https://tse3.mm.bing.net/th?id=OIP.BL8v9x9pfrPPm6jq_8_FIAHaHa&pid=Api&P=0&h=220",
            "https://tse2.mm.bing.net/th?id=OIP.Nm3evJVioExEuNEcLPkQvgHaFA&pid=Api&P=0&h=220",
            "https://tse4.mm.bing.net/th?id=OIP.jWSsmlULAckghzO6XxC7RQHaHa&pid=Api&P=0&h=220",
            "https://cdn.acidcow.com/pics/20130417/danny_devito_08.jpg",
            "https://cdn.acidcow.com/pics/20130417/danny_devito_02.jpg",
            "https://cdn.acidcow.com/pics/20130417/danny_devito_17.jpg"

        ]


        const devitoes_image = devitoes_gifs[Math.floor(Math.random() * devitoes_gifs.length)];

        const devitoes_embed = new EmbedBuilder()
            .setTitle('Gotta Pay The Toe Toll!')
            .setColor('#009999')
            .setDescription('Welcome to the Trollfoot California... :notes: :musical_note:')
            .setImage(devitoes_image)
            .setThumbnail('https://iili.io/JhgmhNf.png')
            .setURL('https://www.tmz.com/watch/0-cy3e0c4q/')
            .setFooter({ text: 'ScoopDogg', iconURL: 'https://iili.io/Jh1PVgS.png' })
            .setTimestamp();

        await interaction.reply({ embeds: [devitoes_embed] });

    }

}

