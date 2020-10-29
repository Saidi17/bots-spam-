const Discord = require('discord.js');
const client = new Discord.Client();
console.log("Scrpit By Dream");


client.on("ready", () => {
let channel =     client.channels.get("حط الاي دي حق الروم اللي يحصل بيها الاسبام هنا")
setInterval(function() {
channel.send(`حط الكلام اللي تبغاه هنا`);
}, 30)
})

client.login(process.env.BOT_TOKEN);