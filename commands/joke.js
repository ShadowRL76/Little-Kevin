module.exports = {
    name: 'joke',
    description: 'Hear a funny jokesicle!',
    async execute(interaction) {
    
    const textArray = [

        "I tried looking up ice cream puns on the Internet but then my browser froze.", 
        "I wish I had as much hope as the guy driving the ice cream truck around in February.", 
        "A penguin takes his car to the mechanic. The mechanic says he will fix it in about one hour. The penguin leaves the mechanic and gets some ice cream. But because he has clumsy flippers, he gets the ice cream all over his beak. When the mechanic sees the penguin, the mechanic says: “Well, it looks like you blew a seal.” The penguin says: “No, thats just a bit of ice cream.”", 
        "Took my girlfriend to the ice cream shop and she fell in the gelato machine. She is a sore bae now.",
        "What does the summer look like from the ice creams point of view? Too many people opening their mouths, inconsiderate enough to eat you.",
        "Why are popsicles so snobby? They have a stick up their butt.",
        "“Hey, Ernie would you like some ice cream?” “Sure, Bert.”",
        "I just had some green colored ice cream. It was mint.",
        "What is ice creams favorite TV show? Game of Cones.",
        "Why do ice cream cones always carry an umbrella? Theres a chance of sprinkles.",
        "What was the ice cream cones naughty pick up line? Wanna lick me?",
        "What happens when you buy too much ice cream? Breyers remorse.",
        "A young man entered the Ice Cream Shop at the amusement park and asked, “What kinds of ice cream do you have?” “Vanilla, chocolate, strawberry,” the girl wheezed as she spoke, patted her chest and seemed unable to continue. “Do you have laryngitis?” The young man asked sympathetically. “Nope,” she whispered, “just vanilla, chocolate and strawberry.”",
        "Wheres the best place to get ice cream when you have the munchies? Cold Stoned Creamery.",
        "Did you know Danny DeVito has a cousin from the old west? Danny BanDito.",
        "Danny Devito walks into a bar. I lowered the bar just for this joke.",
        "What does Snoop Dogg say after performing a magic trick? Ta da da da da.",
        "Snoop Dogg has come up with a plan to smoke weed even after he dies. He will be..rolling in his grave.",
        "Why does Snoop Dogg carry an umbrella? Fo drizzle.",
        "Why did Snoop Dogg bring an umbrella? There was a Lil Wayne outside",
        "Why does Snoop Dogg use conditioner? Fo'frizzel.",
        "Did you hear about the time Snoop Dogg moved to Sweden and learned the local language? He spoke swede every day.",
        "How did Snoop Dogg get his Knot Tying merit badge? With his hitches and bows.",
        "What do you get if you cross Snoop Dogg with a hippo? A smokesalottapotamus.",
        "What does Snoop Dogg keep in his backyard? His garden hoes.",
        "If Ice Cube and Snoop Dogg adopted a child... they could call it Slush Puppy.",
        "Why did the popsicle go to a psychiatrist? Because he had a meltdown.",
    



    ];
    const randomIndex = Math.floor(Math.random() * textArray.length); 
    const randomText = textArray[randomIndex];

    console.log(randomText);

    await interaction.reply(randomText);

    }
    
}
