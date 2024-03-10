const Discord = require('discord.js')

module.exports = {
    name: 'pjparty',
    description: 'Say Happy Birthday to Popsicle Joint!',
    async execute(interaction) {
    
    const pjparty_gifs = [
        "https://i.etsystatic.com/18937621/r/il/6f0499/1816154818/il_1588xN.1816154818_3c75.jpg",
        "https://i.pinimg.com/originals/7a/cd/05/7acd05b56a1560b4a17cdd6f824d8427.jpg",
        "https://www.boredpanda.com/blog/wp-content/uploads/2023/06/ice-cream-jokes-cover_800.jpg",
        "https://cdn.notonthehighstreet.com/fs/2d/a2/0cb2-8022-4b80-8ad5-31de6c2c6ae5/original_happy-birthday-ice-cream-card.jpg",
        "https://sweetpartysupply.com.au/wp-content/uploads/2020/11/3962201-min.jpg",
        "http://cdn.notonthehighstreet.com/system/product_images/images/001/668/335/original_zero-calorie-ice-cream-birthday-card.jpg",
        "https://party-pieces.ie/wp-content/uploads/2020/11/00168_sweetbirthdayicecreamcone_37in_700.jpg",
        "https://i.pinimg.com/originals/6d/ae/f1/6daef1e4c1f4d6018f4223fddaceeacf.jpg",
        "https://i.pinimg.com/originals/cc/a2/c0/cca2c06a29fd2066fc7ce4ab037ebc0a.jpg",
        "https://i.etsystatic.com/10574382/r/il/faaace/2315803621/il_1080xN.2315803621_pxx4.jpg",
        "https://cdn11.bigcommerce.com/s-l38ey9htbw/images/stencil/1280x1280/products/2122/4849/BU170-o__35749.1611714866.jpg?c=2",
        "https://i5.walmartimages.com/asr/d8f95144-8dfe-4ebe-bf04-b7b67179682c_1.d5595ad584fd7ab81001b1d2d9c02517.jpeg?odnHeight=450&odnWidth=450&odnBg=ffffff",
        "https://tse1.mm.bing.net/th?id=OIP.mlqFxMmTnGxdZFld2_TkCwHaNJ&pid=Api&P=0&h=220"

    ]

    const pjparty_image = pjparty_gifs[Math.floor(Math.random() * pjparty_gifs.length)];
    const pjparty_embed = new Discord.MessageEmbed()
        .setTitle(' :piñata: The Popsicle Joint turns 1 today! :piñata: ')
        .setColor('#ff9f5c')
        .setDescription('Thanks for chilling with us :champagne_glass: ')
        .setImage(pjparty_image)
        .setFooter({text: ' more text here but emojis wont work '})
        


    interaction.reply({ embeds: [pjparty_embed] })  
  
    }
    
}