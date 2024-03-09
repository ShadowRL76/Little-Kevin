const Discord = require('discord.js');
const client = new Discord.Client();
const { prefix, token } = require('./config.json');

module.exports = {
    name: 'trivia',
    description: 'Start a new game of Trivia.',
    async execute(interaction) {
    
    const triviaQuestions = [
        {
        category: 'Finish The Lyrics',
        question: 'Gin and ___',
        options: ['a) Coke', 'b) Juice', 'c) Tonic', 'd) Muusse'],
        answer: 'b'

        },

    ]; 


    client.once('ready',()=>{
        console.log('Bot is ready!');
    });

    client.on('message', message => {
        if (!message.content.startsWith(prefix) || message.author.bot) return;
    
        const args = message.content.slice(prefix.length).trim().split(/ +/);
        const command = args.shift().toLowerCase();
    
        if (command === 'trivia') {
            const randomQuestion = triviaQuestions[Math.floor(Math.random() * triviaQuestions.length)];
            message.channel.send(`**Category: ${randomQuestion.category}**\n${randomQuestion.question}\n${randomQuestion.options.join('\n')}`);
    
            const filter = response => response.author.id === message.author.id;
            message.channel.awaitMessages(filter, { max: 1, time: 30000, errors: ['time'] })
                .then(collected => {
                    const userAnswer = collected.first().content.trim().toLowerCase();
                    if (userAnswer === randomQuestion.answer.toLowerCase()) {
                        message.channel.send('Correct! Well done!');
                    } else {
                        message.channel.send(`Sorry, the correct answer was: ${randomQuestion.options[parseInt(randomQuestion.answer) - 1]}`);
                    }
                })
                .catch(() => {
                    message.channel.send('Time\'s up! No answer received.');

             });

        }

     });

                console.log(randomQuestion); // Log the random question object to the console
                await interaction.reply(`**Category: ${randomQuestion.category}**\n${randomQuestion.question}`);
                        }
            
        }
   
client.login(token);