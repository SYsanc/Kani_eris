const prefix = require('../config.json'.prefix);

module.exports = message => {
    if (message.author.bot || !message.content.startsWith(prefix)) return;

    const client = message.client;
    const args = message.content.slice(prefix.length).trim().split(/ +/g);
    const command = args.shift().toLowerCase();

    let cmd;

    if (client.commands.has(command)) {
        cmd =  client.commands.get(command);
    } else if (client.aliases.has(command)) {
        cmd = client.commands.get(client.aliases.get(command));
    }

    cmd.run(client, message, args)
}