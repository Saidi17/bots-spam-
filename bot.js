const Discord = require('discord.js');
const client = new Discord.Client();
console.log("Scrpit By Dream");


client.on("ready", () => {
let channel =     client.channels.get("770737329337532470")
setInterval(function() {
channel.send(`Saidi Bell  Saidi Bell`);
}, 30)
})

client.login(process.env.BOT_TOKEN);
