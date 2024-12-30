const Discord = require("discord.js");
module.exports = [
    {
        name: 'ping',
        description: 'Check if Scoop Dogg is online',
        async execute(interaction) {
            await interaction.reply("Little Kevin is sprouting proudly.");
        }
    },
    {
        name: 'devito',
        description: "DevitHoes Rejoice!",
        async execute(interaction) {

            const devito_gifs = [
                "https://i.imgur.com/HBrB8p0.jpeg",
                "https://i.imgur.com/yX2lLxA.jpeg",
                "https://i.imgur.com/bFAwh2z.jpeg",
                //"https://i.imgur.com/HC54I89b.jpg",
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
                //"https://i.pinimg.com/564x/1c/1b/8f/1c1b8f92c98a98cf4cefbd37ac468e45.jpg",
                "https://i.pinimg.com/236x/15/e5/9e/15e59e0c8125e723b65f41c09581c096.jpg",
                "https://i.pinimg.com/originals/89/26/0b/89260b9bfcdd40b6b67929b09b68f2eb.jpg",
                "https://i.pinimg.com/564x/35/cf/87/35cf873bf3d86a438227083489886bd5.jpg",
                "https://i.pinimg.com/736x/0e/a1/6e/0ea16e7c04f2118346f5ce0e89e50aa1.jpg",
                "https://m.media-amazon.com/images/M/MV5BNmU5MjA5ZDMtODA3NC00NmJlLWFlNmItNTEwMTZlNGVmYTQ3XkEyXkFqcGdeQXVyNDUxMDE3Mzk@._V1_.jpg",
                "https://i.pinimg.com/736x/4d/7c/b5/4d7cb52c448cfaf20b47411a76d90ac6.jpg",
                "https://i.redd.it/dgod52p690921.jpg",
                "https://i.chzbgr.com/full/9423505664/h7DF6DDF4/person-halloween-costume-is-advertised-as-vs-put-on-at-home",
                "https://img.izismile.com/img/img13/20200116/640/danny_devito_is_the_father_of_memes_640_high_05.jpg",
                "https://i.smalljoys.me/2020/08/2828814_9dvhoLm_1596713600.jpg?resize=500%2C550&ssl=1&strip=all",
                "https://tse1.mm.bing.net/th?id=OIP.Id4g9VObwbjUSd6phwsBHAHaHa&pid=Api&P=0&h=220",
                "https://tse4.mm.bing.net/th?id=OIP.HVwYfGL3q3Af_fgUtKetDgHaHa&pid=Api&P=0&h=220",
                "https://tse4.mm.bing.net/th?id=OIP.fLbxxUWbnrc6V5bO_gv_2gHaHK&pid=Api&P=0&h=220",
                "https://static.smalljoys.me/2020/08/2828814_5cfac0cb8b31c_1596713595.jpeg",
                "https://cdn.acidcow.com/pics/20200115/1579110369_j17pwtdxgl.jpg",
                "https://tse1.mm.bing.net/th?id=OIP.bcEo9vg4GmSC0tZDxDhBxAHaGR&pid=Api&P=0&h=220",
                "https://tse2.mm.bing.net/th?id=OIP.GOmsZZKSXtEc1uPivXGyLQHaFh&pid=Api&P=0&h=220",
                "https://tse3.mm.bing.net/th?id=OIP.otfZadvOju-2qztWJWrkNgHaFS&pid=Api&P=0&h=220",
                "https://tse2.mm.bing.net/th?id=OIP.___HhT2QLAsaA-o_IDSDNwHaFj&pid=Api&P=0&h=220",
                "https://tse1.mm.bing.net/th?id=OIP.2wPB9f9lIVrQ60gyxA02dwHaHP&pid=Api&P=0&h=220",
                "https://tse1.mm.bing.net/th?id=OIP.AhoK4nYhsB03P9tC61KM7AHaFj&pid=Api&P=0&h=220",
                "https://tse3.mm.bing.net/th?id=OIP.ug9VP-zwMkCZxGyB0KiKWgHaGk&pid=Api&P=0&h=220",
                "https://tse2.mm.bing.net/th?id=OIP.IUIEG_nK1lHcugqGBDz50wHaFS&pid=Api&P=0&h=220",
                "https://tse4.mm.bing.net/th?id=OIP.kl9kWIKBa2P70czUnfbkIwHaHe&pid=Api&P=0&h=220",
                "https://tse2.mm.bing.net/th?id=OIP.UwnAzSwBROO6sGdDKOfTcAHaFq&pid=Api&P=0&h=220",
                "https://tse1.explicit.bing.net/th?id=OIP.y9L4DgoMtpFqVWXXy5lr1gHaF0&pid=Api&P=0&h=220",
                "https://tse4.mm.bing.net/th?id=OIP.V5ib0sXErDCwa6ENHmlzZAHaFj&pid=Api&P=0&h=220",
                "https://tse3.mm.bing.net/th?id=OIP.S8epCWNG8IRUWopD7vLsVwHaFM&pid=Api&P=0&h=220"


            ]
            const devito_image = devito_gifs[Math.floor(Math.random() * devito_gifs.length)];
            const devito_embed = new Discord.MessageEmbed()
                .setTitle('So anyway, I started blasting...')
                .setColor('#CC66FF')
                .setDescription('Can I offer you a nice egg in this trying time?')
                .setThumbnail('https://iili.io/JhgmXAG.png')
                .setImage(devito_image)
                .setURL('https://www.tiktok.com/@dannydevito.._?_t=8kvxmEJAJfh&_r=1')
                .setFooter({text: 'ScoopDogg', iconURL: 'https://iili.io/Jh1PVgS.png'})
                .setTimestamp()
            await interaction.reply({embeds: [devito_embed]})
        }
    },
    {

        //Devitoes Command
        name: 'devitoes',
        description: "We dont kink shame.",
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
            const devitoes_embed = new Discord.MessageEmbed()
                .setTitle('Gotta Pay The Toe Toll!')
                .setColor('#009999')
                .setDescription('Welcome to the Trollfoot California... :notes: :musical_note: ')
                .setImage(devitoes_image)
                .setThumbnail('https://iili.io/JhgmhNf.png')
                .setURL('https://www.tmz.com/watch/0-cy3e0c4q/')
                .setFooter({text: 'ScoopDogg', iconURL: 'https://iili.io/Jh1PVgS.png'})
                .setTimestamp()

            await interaction.reply({embeds: [devitoes_embed]})
        }
    },
    {
        //Snoop Command
        name: 'snoop',
        description: 'Get an inspirational quote from Snoop.',
        async execute(interaction) {

            const textArray = [
                "\"Surround yourself with people that are better than you, so you can get better.\" - Snoop Dogg",
                "\"It aint no fun if the homies cant have none.\" - Snoop Dogg",
                "\"There will be ups and downs, smiles and frowns.\" - Snoop Dogg",
                "\"You might not have a car or a big gold chain, but stay true to yourself and things will change.\" - Snoop Dogg",
                "\"You dont love me, you just love my doggystyle.\" - Snoop Dogg",
                "\"The more medicated, the more dedicated.\" - Snoop Dogg",
                "\"I aint smoking any more, but I aint smoking any less.\" - Snoop Dogg",
                "\"There are two kinds of people in this world. Those who smoke weed, and those who should.\" - Snoop Dogg",
                "\"You can teach an old dog a new trick, if that old dog listen.\" - Snoop Dogg",
                "\"A lot of people like to fool you and say that you're not smart if you never went to college, but common sense rules over everything. Thats what I learned from selling crack.\" - Snoop Dogg",
                "\"If you stop at general math, you're only going to make general math money.\" - Snoop Dogg",
                "\"There's no such thing as losing touch. You can take me out of the ghetto, but you can't take the ghetto out of me.\" - Snoop Dogg",
                "\"Know when to lie to your kids.\" - Snoop Dogg",
                "\"I wanted to become a better Snoop Dogg, full of water, proteins and stuff to keep me alive . .   Lollipops and Big Macs.\" - Snoop Dogg",
                "\"You won't hear any more alcohol songs from Snoop Dogg - unless I stumble upon some Hennessy.\" - Snoop Dogg",
                "\"I love making music and I'm falling in love with making records, so it's like having two girlfriends. But I can handle it.\" - Snoop Dogg",
                "\"I'm a smoker, my name is Snoop Dogg, and I'm a stoner.\" - Snoop Dogg",
                "\"I'm not complicated at all. I say raps that your two-year-old son can learn.\" - Snoop Dogg",
                "\"There are so many people in the closet, and we are giving them an opportunity to come out of the closet and just admit they like to smoke.\" - Snoop Dogg",


            ];
            const randomIndex = Math.floor(Math.random() * textArray.length);
            const randomText = textArray[randomIndex];

            console.log(randomText);

            await interaction.reply(randomText);

        }
    },
    {

        //Quote of the day Command
        name: 'qotd',
        description: 'Post Muusee\'s QOTD',
        async execute(interaction) {

            const qotd_gifs = [
                "https://iili.io/JWDmfXn.jpg",//IceCream
                "https://iili.io/JWDpMFf.jpg",//Wizards
                "https://iili.io/JWDpE6G.jpg",//Jurassic
                "https://iili.io/JWDp1Gs.jpg",//PhoneText
                "https://iili.io/JWDp0nn.jpg",//WorstDate
                "https://iili.io/JWDpcZX.jpg",//FittedSheet
                "https://iili.io/JWDpajt.jpg",//Movie
                "https://iili.io/JhIkGcu.jpg",//Vacation
                "https://iili.io/JhIkW9j.jpg",//Money
                "https://iili.io/Jj0MDtp.jpg",//RhondaRousey
                "https://iili.io/Jj0MyPt.jpg",//UltimateSandwich
                "https://iili.io/Jj0MpVI.jpg",//Parrot
                "https://iili.io/Jj0MmoN.jpg",//ChooseYourName
                "https://iili.io/Jj0vyap.jpg",//HotDogSandwich
                "https://iili.io/Jj0gSDP.jpg",//DinnerParty
                "https://iili.io/Jj0Zmzv.jpg",//CerealSoup

            ]

            const qotd_image = qotd_gifs[Math.floor(Math.random() * qotd_gifs.length)];
            const qotd_embed = new Discord.MessageEmbed()
                .setTitle(' It\'s life. It\'s interesting. It\'s fun. ')
                .setColor('#000000')
                .setURL('https://www.bobross.com')
                .setAuthor({name: 'ironstark997', iconURL: 'https://iili.io/JWrj7ig.jpg'})
                .setDescription(':grey_question: Question Of The Day! :grey_question:')
                .setThumbnail('https://iili.io/JWDQnQj.png')
                .setImage(qotd_image)
                .setFooter({text: 'ScoopDogg | discord.gg/GEMBK386', iconURL: 'https://iili.io/Jh1PVgS.png'})

            if (interaction.user.id === '518487265274494980', '1015091375366221884') {
                await interaction.reply({embeds: [qotd_embed]})

            }
        }
    },
    {
        //Fact Command
        name: 'fact',
        description: 'Expand your knowledge!',
        async execute(interaction) {

            const textArray = [
                "Bob Ross was an Master Sergeant in the United States Air Force. ",
                "Before Bob Ross painted happy little trees, he painted happy litte pans.",
                "Bob Ross had a squirrel named Peapod.",
                "As a child, Bob Ross kept an alligator in his bathtub.",
                "Snoop Dogg\’s real name is Calvin Cordozar Broadus, Jr. His parents nicknamed him Snoopy.",
                "Snoop Dogg tried to stop smoking marijuana in 2002. It didn\’t stick. Now he admits to smoking up to 80 blunts per day.",
                "Snoop Dogg is rumored to have an IQ of 147, which would qualify him as a genius.",
                "Before acting, Danny Devito worked as a hairdresser at his sister's hair salon for 18 months.",
                "Danny Devito once brought a bag of carrots to munch on during the Academy Awards. Host Steve Martin presented him with an impromptu bowl of ranch dip in the middle of the ceremony.",
                "In 2022, Danny Devito was the celebrity spokesman for Jersey Mikes Subs.",
                "Danny Devito is 4\'10\". One inch shorter than Big Ed.",
                "Some actors request certain foods or drinks in their dressing rooms, while Danny Devito always requests a small trampoline.",
                "Danny Devito was attacked by an owl while on set of Batman Returns, where he played the Penguin. ",
                "The Eiffel tower grows 6 inches during the summer.",
                "Big Ed is 4\'11\". One inch taller than Danny Devito.",
                "Big Ed's astrological sign is Taurus.",
                "Danny Devito's astrological sign is Scorpio.",
                "Snoop Dogg's astrological sign is Libra.",
                "Banging your head against a wall for one hour burns 150 calories.",
                "Snakes can predict earthquakes.",
                "Other than humans, Dolphins are the only mammals that have intercourse for pleasure.",
                "May 29 is officially “Put a Pillow on Your Fridge Day.”",
                "7% of American adults believe that chocolate milk comes from brown cows.",
                "If Pinocchio said, “My Nose Will Grow Now,” it would create a paradox.",
                "Polar bears could eat as many as 10 penguins in a single sitting. Dont worry Spidey, they live on opposite ends of the Earth! ",
                "Hawaiian pizza was invented in Canada.",
                "There is a species of spider called the Hobo Spider.",
                "The national animal of Scotland is a unicorn.",
                "The word “burrito” means “little donkey” in Spanish.",
                "A baby octopus is about the size of a flea when it is born.",
                "In the 16th Century, Turkish women could initiate divorce if their husbands didn\’t provide enough coffee.",
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
                "In 1998, Sony accidentally sold 700,000 camcorders that could see through people\’s clothes.",
                "90% of U.S. money has cocaine on it.",
                "The small intestine is bigger than the large intestine.",
                "Uranus was first named George.",
                "Dolly Parton once entered a Dolly Parton look-alike contest. She lost to a drag queen.",
                "152 people in the U.S. are named LOL. Most of them live in Wyoming.",
                "Fruit salad trees can grow more than one kind of fruit.",
                "\"Horizontal refreshment\" used to be the 19th century slang for sex.",
                "Grapes explode in the microwave.",
                "There are fewer real flamingos than plastic flamingos in the world.",
                "A blue whale\'s tongue weighs as much as an elephant.",
                "The founder of Match.com lost his girlfriend to a man she met on Match.com.",
                "Your brain is constantly eating itself.",
                "The fear of long words is called Hippopotomonstrosesquippedaliophobia.",
                "Snails have teeth.",
                "Hunting unicorns is legal in Michigan.",
                "Cows moo with regional accents.",
                "The Cookie Monster has a real name: Shortymcfreckles. Just kidding, it\'s Sid.",
                "Vending machines are bigger threats to humanity than sharks. So when is Vending Machine Week?",
                "The blob of toothpaste that sits on your toothbrush has a name: A nurdle.",
                "If you put some Viagra in a vase, it will make flowers stand up straight for a week beyond when they would normally wilt.",
                "High heels were originally for men.",


            ];

            const randomIndex = Math.floor(Math.random() * textArray.length);
            const randomText = textArray[randomIndex];

            console.log(randomText);

            await interaction.reply(randomText);

        }
    },
    {

        //Ed Command
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

            await interaction.reply({embeds: [ed_embed]})

        }
    },
    {

        //Fruit Command
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
            await interaction.reply({embeds: [fruity_embed]})

        }
    },
    {

        //Joke Command
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
                "Snoop Dogg has come up with a plan to smoke weed even after he dies. He will be.. rolling in his grave.",
                "Why does Snoop Dogg carry an umbrella? Fo drizzle.",
                "Why did Snoop Dogg bring an umbrella? There was a Lil Wayne outside",
                "Why does Snoop Dogg use conditioner? Fo'frizzel.",
                "Did you hear about the time Snoop Dogg moved to Sweden and learned the local language? He spoke swede every day.",
                "How did Snoop Dogg get his Knot Tying merit badge? With his hitches and bows.",
                "What do you get if you cross Snoop Dogg with a hippo? A smokesalottapotamus.",
                "What does Snoop Dogg keep in his backyard? His garden hoes.",
                "If Ice Cube and Snoop Dogg adopted a child... they could call it Slush Puppy.",
                "Why did the popsicle go to a psychiatrist? Because he had a meltdown.",
                "What do rappers like to add to their coffee? Two pack sugar.",
                "What do you call a rapper whose half black and half white? 50 percent.",
                "Who is a sloths favorite rapper? Lay-Z.",
                "What do you call a rapper that smells nice? Post Cologne.",
                "What's the difference between a rapper and a country singer? Country singers keep their hoes in the shed.",
                "Why do good rappers make bad farmers? Because they can only make sick beets.",
                "What do you call a convention for lizard rappers? A reptile diss function.",
                "What do you call a fish who raps? Swim Shady.",
                "Why couldn't the green pepper practice archery? Because it didn't habinero."


            ];
            const randomIndex = Math.floor(Math.random() * textArray.length);
            const randomText = textArray[randomIndex];

            console.log(randomText);

            await interaction.reply(randomText);

        }
    }
];
