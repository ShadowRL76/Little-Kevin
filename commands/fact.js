const { SlashCommandBuilder } = require('@discordjs/builders');
const { EmbedBuilder } = require('discord.js');

module.exports = {
    data: new SlashCommandBuilder()
        .setName('fact')
        .setDescription('Expand your knowledge!'),

    async execute(interaction) {

        const textArray = [
            "Bob Ross was an Master Sergeant in the United States Air Force.",
            "Before Bob Ross painted happy little trees, he painted happy little pans.",
            "Bob Ross had a squirrel named Peapod.",
            "As a child, Bob Ross kept an alligator in his bathtub.",
            "Snoop Dogg’s real name is Calvin Cordozar Broadus, Jr. His parents nicknamed him Snoopy.",
            "Snoop Dogg tried to stop smoking marijuana in 2002. It didn’t stick. Now he admits to smoking up to 80 blunts per day.",
            "Snoop Dogg is rumored to have an IQ of 147, which would qualify him as a genius.",
            "Before acting, Danny Devito worked as a hairdresser at his sister's hair salon for 18 months.",
            "Danny Devito once brought a bag of carrots to munch on during the Academy Awards. Host Steve Martin presented him with an impromptu bowl of ranch dip in the middle of the ceremony.",
            "In 2022, Danny Devito was the celebrity spokesman for Jersey Mikes Subs.",
            "Danny Devito is 4'10\". One inch shorter than Big Ed.",
            "Some actors request certain foods or drinks in their dressing rooms, while Danny Devito always requests a small trampoline.",
            "Danny Devito was attacked by an owl while on set of Batman Returns, where he played the Penguin.",
            "The Eiffel tower grows 6 inches during the summer.",
            "Big Ed is 4'11\". One inch taller than Danny Devito.",
            "Big Ed's astrological sign is Taurus.",
            "Danny Devito's astrological sign is Scorpio.",
            "Snoop Dogg's astrological sign is Libra.",
            "Banging your head against a wall for one hour burns 150 calories.",
            "Snakes can predict earthquakes.",
            "Other than humans, Dolphins are the only mammals that have intercourse for pleasure.",
            "May 29 is officially 'Put a Pillow on Your Fridge Day.'",
            "7% of American adults believe that chocolate milk comes from brown cows.",
            "If Pinocchio said, “My Nose Will Grow Now,” it would create a paradox.",
            "Polar bears could eat as many as 10 penguins in a single sitting. Don't worry Spidey, they live on opposite ends of the Earth!",
            "Hawaiian pizza was invented in Canada.",
            "There is a species of spider called the Hobo Spider.",
            "The national animal of Scotland is a unicorn.",
            "The word “burrito” means “little donkey” in Spanish.",
            "A baby octopus is about the size of a flea when it is born.",
            "In the 16th Century, Turkish women could initiate divorce if their husbands didn’t provide enough coffee.",
            "Recycling just one tin can saves enough energy to watch television for 3 hours.",
            "Squirrels cause approximately 10-20% of US power outages.",
            "Sea otters hold hands when they sleep so they don’t drift away from each other.",
            "A small child could swim through the veins of a blue whale.",
            "The Twitter bird actually has a name... Larry.",
            "Mike Tyson once offered a zoo attendant $10,000 to let him fight a gorilla.",
            "Abraham Lincoln fed his cat with a gold fork.",
            "An apple, potato, and onion taste the same if you eat them with your nose plugged.",
            "Dolly Parton lost in a Dolly Parton look-alike contest.",
            "George W. Bush was once a cheerleader.",
            "In 1998, Sony accidentally sold 700,000 camcorders that could see through people’s clothes.",
            "90% of U.S. money has cocaine on it.",
            "The small intestine is bigger than the large intestine.",
            "Uranus was first named George.",
            "Dolly Parton once entered a Dolly Parton look-alike contest. She lost to a drag queen.",
            "152 people in the U.S. are named LOL. Most of them live in Wyoming.",
            "Fruit salad trees can grow more than one kind of fruit.",
            "\"Horizontal refreshment\" used to be the 19th century slang for sex.",
            "Grapes explode in the microwave.",
            "There are fewer real flamingos than plastic flamingos in the world.",
            "A blue whale's tongue weighs as much as an elephant.",
            "The founder of Match.com lost his girlfriend to a man she met on Match.com.",
            "Your brain is constantly eating itself.",
            "The fear of long words is called Hippopotomonstrosesquippedaliophobia.",
            "Snails have teeth.",
            "Hunting unicorns is legal in Michigan.",
            "Cows moo with regional accents.",
            "The Cookie Monster has a real name: Shortymcfreckles. Just kidding, it's Sid.",
            "Vending machines are bigger threats to humanity than sharks. So when is Vending Machine Week?",
            "The blob of toothpaste that sits on your toothbrush has a name: A nurdle.",
            "If you put some Viagra in a vase, it will make flowers stand up straight for a week beyond when they would normally wilt.",
            "High heels were originally for men."
        ];

        const randomIndex = Math.floor(Math.random() * textArray.length);
        const randomText = textArray[randomIndex];

        const factEmbed = new EmbedBuilder()
            .setTitle('Did you know?')
            .setDescription(randomText)
            .setColor('#3498db');

        await interaction.reply({ embeds: [factEmbed] });
    }
};
