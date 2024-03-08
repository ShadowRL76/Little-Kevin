module.exports = {
    name: 'snoop',
    description: 'Get an inspirational quote from Snoop.',
    async execute(interaction) {
    
    const textArray = [
        "Surround yourself with people that are better than you, so you can get better. - Snoop Dogg",
        "It aint no fun if the homies cant have none. - Snoop Dogg", 
        "There will be ups and downs, smiles and frowns. - Snoop Dogg", 
        "You might not have a car or a big gold chain, but stay true to yourself and things will change. - Snoop Dogg", 
        "You dont love me, you just love my doggystyle. - Snoop Dogg", 
        "The more medicated, the more dedicated. - Snoop Dogg", 
        "I aint smoking any more, but I aint smoking any less. - Snoop Dogg", 
        "There are two kinds of people in this world. Those who smoke weed, and those who should. - Snoop Dogg",
        "You can teach an old dog a new trick, if that old dog listen. - Snoop Dogg", 
        "A lot of people like to fool you and say that you're not smart if you never went to college, but common sense rules over everything. Thats what I learned from selling crack. - Snoop Dogg",
        "If you stop at general math, you're only going to make general math money. - Snoop Dogg",
        "There's no such thing as losing touch. You can take me out of the ghetto, but you can't take the ghetto out of me. - Snoop Dogg",
        "Know when to lie to your kids. - Snoop Dogg", 
        "I wanted to become a better Snoop Dogg, full of water, proteins and stuff to keep me alive . . .  lollipops and Big Macs. - Snoop Dogg",
        "You won't hear any more alcohol songs from Snoop Dogg - unless I stumble upon some Hennessy",
        "I love making music and I'm falling in love with making records, so it's like having two girlfriends. But I can handle it. - Snoop Dogg", 
        "I'm a smoker, my name is Snoop Dogg, and I'm a stoner. - Snoop Dogg",
        "I'm not complicated at all. I say raps that your two-year-old son can learn. - Snoop Dogg",
        "There are so many people in the closet, and we are giving them an opportunity to come out of the closet and just admit they like to smoke. - Snoop Dogg",
        
        
    



    ];
    const randomIndex = Math.floor(Math.random() * textArray.length); 
    const randomText = textArray[randomIndex];

    console.log(randomText);

    await interaction.reply(randomText);

    }
    
}