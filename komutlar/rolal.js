const db = require('../database')
const Discord = require('discord.js')
exports.run = async (bot, message, args) => {
	
        if (!message.member.permissions.has("ADMINISTRATOR")) return message.reply(`   **Bu komutu kullanabilmek için "\`Yönetici\`" yetkisine sahip olmalısın.**`);
        let role = message.mentions.roles.first();
        let member = message.mentions.members.first();
        if (!role) return message.reply('Lütfen Almak İstediğiniz Rolü Etiketleyin!')
        if (!member) return message.reply('Lütfen Rol Almak İstediğiniz Kişiyi Etiketleyin!')
        member.roles.remove(role)
        const embed = new Discord.MessageEmbed()
        .setAuthor(`Rolü Aldım`)
        .setDescription(`**Rolü Alınan Kullanıcı: **${message.mentions.users.first()}\n**Alınan Rol: **${role}\n**Yetkili: <@${message.author.id}>**`)
        .setTimestamp()
        .setColor("BLUE")
        message.channel.send({embeds: [embed]})


}
exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['rolal'],
  permLevel: 0,
  kategori: "Moderasyon"
};

exports.help = {
  name: 'rolal',
  description: 'rolal',
  usage: 'rolal'
};