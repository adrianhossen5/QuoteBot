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

    if(msg.content === ('I am sad')){

        msg.reply('Do not be sad please, things will get better!');

    }

    if(msg.content === ('Life is too hard')){

        msg.reply('Do not be sad please, things will get better!');

    }

    if(msg.content === ('life is too hard')){

        msg.reply('Do not be sad please, things will get better!');

    }

}