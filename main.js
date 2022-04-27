const fs = require('fs');
const Discord = require("discord.js");
const ayarlar = require("./ayarlar.json");
const { Client, Intents } = require('discord.js');
const client = new Client({ 
  partials:
   [
     "CHANNEL"
    ],
intents: [
  Intents.FLAGS.GUILDS,
  Intents.FLAGS.GUILD_MEMBERS,
  Intents.FLAGS.GUILD_BANS,
  Intents.FLAGS.GUILD_EMOJIS_AND_STICKERS,
  Intents.FLAGS.GUILD_INTEGRATIONS,
  Intents.FLAGS.GUILD_WEBHOOKS,
  Intents.FLAGS.GUILD_INVITES,
  Intents.FLAGS.GUILD_VOICE_STATES,
  Intents.FLAGS.GUILD_PRESENCES,
  Intents.FLAGS.GUILD_MESSAGES,
  Intents.FLAGS.GUILD_MESSAGE_REACTIONS,
  Intents.FLAGS.GUILD_MESSAGE_TYPING,
  Intents.FLAGS.DIRECT_MESSAGES,
  Intents.FLAGS.DIRECT_MESSAGE_REACTIONS,
  Intents.FLAGS.DIRECT_MESSAGE_TYPING,
  Intents.FLAGS.GUILD_SCHEDULED_EVENTS
] 
});
const db = require('./database');
client.on("messageCreate", message => {
  let client = message.client;
  if (message.author.bot) return;
  let prefix = ayarlar.prefix
  if (!message.content.startsWith(prefix)) return;
  let command = message.content.split(' ')[0].slice(prefix.length);
  let params = message.content.split(' ').slice(1);
  let perms = client.yetkiler(message);
  let cmd;
  if (client.commands.has(command)) {
    cmd = client.commands.get(command);
  } else if (client.aliases.has(command)) {
    cmd = client.commands.get(client.aliases.get(command));
  }
  if (cmd) {
    if (perms < cmd.conf.permLevel) return;
    try {
  if (!cmd) return
  cmd.run(client, message, params, perms); 
  } catch(error) {
     console.log(error)
    }
  }
})

client.yetkiler = message => {
  if(!message.guild) {
	return; }
  let permlvl = -ayarlar.varsayilanperm  ;
  if(message.member.permissions.has("MANAGE_MESSAGES")) permlvl = 1;
  if(message.member.permissions.has("KICK_MEMBERS")) permlvl = 2;
  if(message.member.permissions.has("BAN_MEMBERS")) permlvl = 3;
  if(message.member.permissions.has("MANAGE_GUILD")) permlvl = 4;
  if(message.member.permissions.has("ADMINISTRATOR")) permlvl = 5;
  if(message.author.id === message.guild.ownerID) permlvl = 6;
  if(message.author.id === ayarlar.sahip) permlvl = 7;
  return permlvl;
};

client.on("ready", () => {
  console.log(`Bütün komutlar başarıyla yüklendi!`);
  client.user.setStatus("online");
  var oyun = [
          "SEANTO Bot",
          "0 LAG!"
]

      setInterval(function() {
      var random = Math.floor(Math.random()*(oyun.length-0+1)+0);
      client.user.setActivity(oyun[random]);
      }, 2 * 2500);
})

console.log("Botunuz aktif olmuştur");
console.log("Heaxy Studios");
const log = message => {
  console.log(`${message}`);
};

client.commands = new Discord.Collection();
client.aliases = new Discord.Collection();
fs.readdir("./komutlar/", (err, files) => {
  if (err) console.error(err);
  log(`${files.length} komut yüklenecek!.`);
  files.forEach(f => {
    let props = require(`./komutlar/${f}`);
    log(`Yüklenen komut: ${props.help.name}.`);
    client.commands.set(props.help.name, props);
    props.conf.aliases.forEach(alias => {
      client.aliases.set(alias, props.help.name);
    });
  });
});
//Sa-as başlangıç
client.on("messageCreate", async msg => {
  const i = await db.bul(`ssaass_${msg.guild.id}`);
    if (i == 'acik') {
      if (msg.content.toLowerCase() == 'sa' || msg.content.toLowerCase() == 's.a' || msg.content.toLowerCase() == 'selamun aleyküm' || msg.content.toLowerCase() == 'sea'|| msg.content.toLowerCase() == 'selam') {
          try {

                  return msg.reply(
                    'Aleyküm Selam kardeşim, Hoşgeldin')
          } catch(err) {
            console.log(err);
          }
      }
    }
    else if (i == 'kapali') {

    }
    if (!i) return;

    });
//Sa-as bitiş

client.login(ayarlar.token)