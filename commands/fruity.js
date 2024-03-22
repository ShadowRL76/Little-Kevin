const Discord = require('discord.js')

module.exports = {
    name: 'fruity',
    description: 'Hot potato, hot potato...',
    async execute(interaction) {
    
    const fruity_gifs = [
        "https://i.redd.it/wiggles-memes-v0-yoxidbb01isb1.jpg?width=1200&format=pjpg&auto=webp&s=e3055acb05fb783a5db21ad0b614b1b3724febaa",
        "https://i.pinimg.com/originals/e8/ee/80/e8ee80d9e5cc51d79b9a9f6d5d667e50.jpg",
        "https://www.memesmonkey.com/images/memesmonkey/3f/3f10dfcf2743e228eca8e2a23c9753b9.jpeg",
        "https://www.memesmonkey.com/images/memesmonkey/d9/d92e7903b82e290729cc8b7f53b64ed2.jpeg",
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSRqSrn5iIpev6qlmMEoARyoh09HfNPw5byx-tb5uVGRTkv34pCDOhvGW9qhtGcPhd1M5I&usqp=CAU",
        "https://i.redd.it/87quyqghja641.jpg",
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR7nUXIukH2s9np_bB5i_Kq7Me2oyvlgt7Hfw&usqp=CAU",
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSHTx4AiwlSCJnOYjVQH83IM7wNhWFuFckgag&usqp=CAU",
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTgNFzKQM1PUfvI4sZ1QhJ6kjDujjxDNTl3fg&usqp=CAU",
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTT8sk1B5WYSimYCxP1M70eA_Ch8TWbSfbV0Q&usqp=CAU",
        "https://www.memesmonkey.com/images/memesmonkey/c3/c3870842360d16aa5852a647fd0a1e00.jpeg",
        "https://i.imgflip.com/5hi9m0.jpg",
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQkCgiaoRxZLuu0GyR9ldV1POg452ulPJfdh1vL2SCY5BlVBpudY0uOkP1v8z6tDlZoYd8&usqp=CAU",
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS_pPOloQIN0Sxi2kDRD9ZI-aW2kNTYDUO1BGHyZT70JwlQvsIa1R5eGp3x5Zzyc-w3cmU&usqp=CAU",
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTnzz5uU_yr6Aj0PT3HnmWG-Qw0cKSgzTzYjg&usqp=CAU",
        "https://i.imgur.com/WggEwB3.jpeg",
        "https://i.imgur.com/WD1K0Eg.jpeg",
        "https://i.imgur.com/HIZdKsj.jpeg",
        "https://i.imgur.com/6O7TrrM.jpeg",
        "https://i.imgur.com/JP21jkq.jpeg",
        "https://i.imgur.com/XbLQdzf.jpeg",
        "https://i.imgur.com/OaZT2Qv.jpeg",
        "https://i.imgur.com/2wHejsd.jpeg",
        "https://i.imgur.com/dPr2ANK.jpeg",
        "https://i.imgur.com/NKWkpfQ.jpeg",
        "https://i.imgur.com/tojWGVV.jpeg",
        "https://i.imgur.com/DJqH8co.jpeg",
        "https://i.imgur.com/YUa7zPN.jpeg",
        "https://i.imgur.com/EANZT8D.jpeg",
        "https://i.imgur.com/CfdsVDD.jpeg",
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRcrDjuCpn2qFMHXUwZ3BeZD9bI5wEHzxXnGw&usqp=CAU",
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ1xt50OvXWZN4M_C85vV6ZrJ2A2NqpVrlwVA&usqp=CAU",
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQAizxzK94w7n8T4lNVLTVcgpBPN8cPfGOuSQ&usqp=CAU",
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQAizxzK94w7n8T4lNVLTVcgpBPN8cPfGOuSQ&usqp=CAU",
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ5NfkLGgN-OrfLoZIrADeokeYfSECM8UJ0aA&usqp=CAU",
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQN7Wiw71lPbEB0GGYUEvlNL2AVCs03GPvBFA&usqp=CAU", 
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTkVtli759u-kPZwU5D8WQVn6KBpZf7B_YrpA&usqp=CAU",


    ]

    const fruity_image = fruity_gifs[Math.floor(Math.random() * fruity_gifs.length)];
    const fruity_embed = new Discord.MessageEmbed()
        .setTitle('Let\'s make some fruit salad today!')
        .setColor('#691da3')
        .setDescription(':apple: :banana: :tangerine: :grapes: :kiwi: :peach: :green_apple: :watermelon: :strawberry:')
        .setURL('https://thewiggles.com')
        .setThumbnail('https://iili.io/JXdcFje.png')
        .setImage(fruity_image)
        .setTimestamp()
        


    interaction.reply({ embeds: [fruity_embed] })  
  
    }
    
} 