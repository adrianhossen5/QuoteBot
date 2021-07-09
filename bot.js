console.log('Hello There!');
require('dotenv').config();

const Discord = require('discord.js');
const client = new Discord.Client();
client.login(process.env.Token);

client.on('ready', readyDiscord);

function readyDiscord() {

    console.log('Hey there');

}

client.on('message', gotMessage);    

function gotMessage(msg){

    console.log(msg.content);

    const array = ['The greatest glory in living lies not in never falling, but in rising every time we fall. -Nelson Mandela', 
    'The future belongs to those who believe in the beauty of their dreams. -Eleanor Roosevelt',
    'Whoever is happy will make others happy too. -Anne Frank','Spread love everywhere you go. Let no one ever come to you without leaving happier. -Mother Teresa',"The purpose of our lives is to be happy - Dalai Lama", "You only live once, but if you do it right, once is enough -Mae West"
    ,"Life is made of ever so many partings welded together. -Charles Dickens", "Life is trying things to see if they work. -Ray Bradbury",
    "Success is not final; failure is not fatal: It is the courage to continue that counts. -Winston S. Churchill", "The only person you are destined to become is the person you decide to be. -Ralph Waldo Emerson",
    "You miss 100% of the shots you don't take. -Wayne Gretzky", "Dream big and dare to fail. -Norman Vaughan", "I would rather die of passion than of boredom. -Vincent van Gogh",
    "Dreaming, after all, is a form of planning. -Gloria Steinem", "I didn't fail the test. I just found 100 ways to do it wrong. -Benjamin Franklin",
    "It does not matter how slowly you go as long as you do not stop. -Confucius","Whether you think you can or you think you can't, you're right. -Henry Ford", "The question isn't who is going to let me; it's who is going to stop me. -Ayn Rand",
    "Before anything else, preparation is the key to success. -Alexander Graham Bell", "If you are not willing to risk the usual, you will have to settle for the ordinary. -Jim Rohn",
    "Don't be afraid to give up the good to go for the great -John D. Rockefeller", "I find that the harder I work, the more luck I seem to have -Thomas Jefferson", "ur mum -Adrian"];

    if(msg.content === ("!pls quote")){

        var randomNumber = Math.floor(Math.random()*(array.length));

        msg.reply(array[randomNumber]);

    }

    if(msg.content === ("!help")){

        msg.reply("Use !pls quote :D");

    }

}
