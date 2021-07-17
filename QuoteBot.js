require('dotenv').config();

const fetch = require("node-fetch");
const Discord = require('discord.js');
const client = new Discord.Client();
client.login(process.env.Token);

console.log('Hello There!');
client.on('ready', readyDiscord);
client.on('message', gotMessage); 

function readyDiscord() {

    console.log('Hey there');

}
   

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
