const Discord = require('discord.js') 
const ayarlar = require('../ayarlar.json')
let prefix = ayarlar.prefix
exports.run = async(client, message, args) => {
const embed = new Discord.MessageEmbed()
.setColor('RANDOM')
.setAuthor({name: `${client.user.username} Yardım`})
.setDescription(`Toplamda Botta **${client.commands.size}** Adet Komut Bulunuyor!
- !avatar <etiket> 
- !ban <etiket> <sebep> 
- !istatistik 
- !kullanıcıbilgi 
- !rolal
- !rolver
- !sa-as
- !sil
- !otorol <kanal> <rol> 
- !sohbet-aç
- !sohbet-kapat `)
.setTimestamp()
.setFooter({ text:`Bu komut ${message.author.username} tarafından istendi!`})
.setThumbnail(message.author.avatarURL({dynamic : true}))
message.channel.send({embeds: [embed]} )
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['Lyzer']
},

  exports.help = {
  name: 'yardım', 
description: 'Tüm mod komutları gösterir.', 
usage: 'yardım' 
}