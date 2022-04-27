const db = require('../database')
const Discord = require('discord.js')
exports.run = async (bot, message, args) => {

        if (!message.member.permissions.has("ADMINISTRATOR")) return message.reply(`   **Bu komutu kullanabilmek için "\`Yönetici\`" yetkisine sahip olmalısın.**`);
        let role = message.mentions.roles.first();
        let member = message.mentions.members.first();
        if (!role) return message.reply('Lütfen Vermek İstediğiniz Rolü Etiketleyin!')
        if (!member) return message.reply('Lütfen Rol Vermek İstediğiniz Kişiyi Etiketleyin!')
        member.roles.add(role)
        const embed = new Discord.MessageEmbed()
        .setTitle(`Roller Değiştirildi`)
        .setDescription(`**Rol Verilen Kullanıcı: **${message.mentions.users.first()}\n**Verilen Rol: **${role}\n**Yetkili: <@${message.author.id}>**`)
        .setTimestamp()
        .setColor('BLUE')
    
        message.channel.send({embeds: [embed]})
}
exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['rolver'],
  permLevel: 0,
  kategori: "Moderasyon"
};

exports.help = {
  name: 'rolver',
  description: 'rolver',
  usage: 'rolver'
};