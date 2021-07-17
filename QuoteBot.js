require('dotenv').config();
client.login(process.env.Token);

const fetch = require("node-fetch");
const Discord = require('discord.js');
const client = new Discord.Client();

console.log('Hello There!');

client.on('ready', readyDiscord);

function readyDiscord() {

    console.log('Hey there');

}

client.on('message', gotMessage);    

async function gotMessage(msg){

    console.log(msg.content);

    if(msg.content === ("!pls quote")){

        const res = await fetch('https://api.quotable.io/random')
        const j = await res.json()
        await msg.reply(j['content']);

    }

    if(msg.content === ("!help")){

        msg.reply("Use !pls quote :D");

    }

}
