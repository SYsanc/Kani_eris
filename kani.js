const Eris = require('eris');
const fs = require('fs');
const config = require('./config.json');

const token = config.token;
const ownerid = config.ownerid;

const bot = new Eris(token);

//Load Events
require('./util/eventLoader.js')(bot);

//Load Commands
bot.commands = new Eris.Collection();
bot.aliases = new Eris.Collection();
fs.readdir('./commands/', (err, files) => {
    if(err) console.error(err);

    console.log(`Loading a total of ${files.length} commands.`);
    files.forEach(f => {
        let props = require(`./commands/${f}`);
        console.log(`Loading Command : ${props.help.name}`);
        bot.commands.set(props.help.name, props);
        props.conf.aliases.forEach(alias => {
            bot.aliases.set(alias, props.help.name);
        });
    });
});

bot.connect();