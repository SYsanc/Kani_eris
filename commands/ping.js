exports.run = (bot, message, args = []) => {
    bot.createMessage("Pong!")
}

exports.conf = {
    enabled: true,
    guildOnly: false,
    aliases: [],
}

exports.help = {
    name: "ping",
    description: "Ping/Pong command. I wonder what this does? /sarcasm",
    usage: "ping"
}












// exports.run = (client, message, args = []) => {
//     message.channel.send('Ping?')
//       .then(msg => {
//         msg.edit(`Pong! (took: ${msg.createdTimestamp - message.createdTimestamp}ms)`);
//       });
//   };
  
//   exports.conf = {
//       enabled: true,
//       guildOnly: false,
//       aliases: ['핑'],
//       permLevel: 0
//   };
  
//   exports.help = {
//       name: "ping",
//       description: "Ping/Pong command. I wonder what this does? /sarcasm",
//       usage: "ping"
//     };