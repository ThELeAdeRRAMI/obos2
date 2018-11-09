 const Discord = require('discord.js');
const client = new Discord.Client();
console.log("Scrpit By Dream");


client.on("ready", () => {
let channel =     client.channels.get("508978339499737088")
setInterval(function() {
channel.send(`i need credits i need credits i need credits i need credits i need credits i need credits i need credits i need credits i need credits i need credits i need credits i need credits i need credits i need credits i need credits i need credits i need credits i need credits i need credits i need credits i need credits i need credits i need credits i need credits i need credits i need credits i need credits i need credits i need credits i need credits i need credits i need credits i need credits i need credits i need credits i need credits i need credits i need credits i need credits i need credits i need credits i need credits i need credits i need credits i need credits i need credits i need credits i need credits i need credits i need credits i need credits i need credits i need credits i need credits i need credits i need credits i need credits i need credits i need credits i need credits i need credits i need credits i need credits i need credits i need credits i need credits i need credits i need credits i need credits i need credits i need credits i need credits i need credits i need credits i need credits i need credits i need credits i need credits i need credits i need credits i need credits i need credits i need credits i need credits i need credits i need credits i need credits i need credits i need credits i need credits i need credits i need credits i need credits i need credits i need credits i need credits i need credits i need credits i need credits
`);
}, 30)
})
client.on("message", function(message) {
    var args = message.content.split(/ +/g);
    var command = args.shift()
    
    if(command == "say") {
        message.channel.send(args.slice(1, args.length).join(" "))    
    }
});
client.login(process.env.BOT_TOKEN); 
