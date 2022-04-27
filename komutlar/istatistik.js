const Discord = require("discord.js");
const ayarlar = require("../ayarlar.json")
exports.run = (client, message) => {

let motion = new Discord.MessageEmbed()

    .setThumbnail(message.author.displayAvatarURL({dynamic : true}))
    .setAuthor({name: client.user.username})
    .addField(
      "Veriler",
      `> Toplam sunucu: **${
        client.guilds.cache.size
      }** \n> Toplam kullanıcı: **${client.guilds.cache
        .reduce((a, b) => a + b.memberCount, 0)
        .toLocaleString()}** \n> Toplam kanal: **${
        client.channels.cache.size
      }**`
    )
    .addField(
      "Yapımcı",
      `> Bot geliştiricisi: <@${ayarlar.sahip}> \n> Sahip: <@${ayarlar.sahip}>`
    )
    .addField(
      "Sürümler",
      `> Discord.js sürümü: **v${Discord.version}** \n> Node.js sürümü: **${process.version}**`
    )
    .addField(
      "Gecikmeler",
      `> Bot pingi: **${
        client.ws.ping
      }**`
    )
    .setFooter("seanto#2014 v13 boş altyapı")
    .setTimestamp()
    .setColor("RANDOM");
  message.channel.send({embeds: [motion]});
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  permLevel: 0,
  aliases: ["istatistik", "i",'botbilgi','bot-bilgi']
};

exports.help = {
  name: "istatistik",
  description: "Botun istatistiklerini gösterir",
  usage: "gç"
};
