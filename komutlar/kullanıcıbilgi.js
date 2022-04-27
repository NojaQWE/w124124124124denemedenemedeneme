const Discord = require('discord.js');
const moment = require("moment");
moment.locale("en")
exports.run = async (client, message, args)=> {
  let csm = message.mentions.members.first() || message.member
  
  const a = "`"
  let csd = message.guild.members.cache.filter(mr => mr.joinedTimestamp < csm.joinedTimestamp).size + 1

  let cse = new Discord.MessageEmbed()
    .setTitle(a + csm.user.tag + a + " User Info")
    .setThumbnail(csm.user.avatarURL())
    .setColor("RANDOM")
    .addField("Kullanıcının Adı", a + csm.user.username + a)
    .addField("Kullanıcının ID'si", a + csm.user.id + a)
    .addField("Hesabın oluşturulma tarihi", a + moment(csm.user.createdTimestamp).format('LLLL') + a)
    .addField("Sunucuya katılma tarihi", a + moment(csm.joinedTimestamp).format('LLLL') + a)
    .addField("Rolleri", `**Rol Sayısı: ${a + csm.roles.cache.size + a}\nRolleri:\n${csm.roles.cache.map(cs => cs).join(", ")}**`)
    .setFooter({text: "seanto#2014" })
    .setTimestamp()
  message.channel.send({embeds: [cse]}).catch(e => {})

}
 exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['kullanıcıbilgi'],
  permLevel: 0
};

exports.help = {
  name: 'kullanıcıbilgi',
  description: '',
  usage: 'kullanıcıbilgi [@kullanıcı]'
};