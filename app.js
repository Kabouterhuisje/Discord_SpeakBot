const Discord = require('discord.js');
const bot = new Discord.Client();

const config = require("./config.json");

bot.on('ready', () => {
  console.log('I am ready!');
});

bot.on('guildMemberAdd', member => {
  let guild = member.guild;
  guild.defaultChannel.sendMessage(`Welcome ${member.user} to the server!`);
});

bot.on('message', message => {
  if(message.author.bot) {
    return;
  }
  if(!message.content.startsWith(config.prefix)) {
    return;
  }

  let command = message.content.split(" ")[0];
  command = command.slice(config.prefix.length);
  let args = message.content.split(" ").slice(1);

  if (command === "ping") {
    message.channel.sendMessage('pong');
  }
  if (command === "hello") {
    message.channel.sendMessage('Hi!');
  }
  if(command === "say") {
    message.channel.sendMessage(args.join(" "));
  }
  if(command === "add") {
    let numberArray = args.map(n=>parseInt(n));
    let total = numberArray.reduce( (p, c) => p+c );
    message.channel.sendMessage(total);
  }
});

bot.login(config.token);
