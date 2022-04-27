const Discord = require('discord.js');
exports.run = async (client, message, args)=> {

    let uye = message.mentions.users.first() || message.author
    const avatarEmbed = new Discord.MessageEmbed()
    .setDescription(`${uye} kullanıcısının avatarı!`)
    .setColor("RANDOM")
    .setImage(`${uye.displayAvatarURL({ dynamic: true, size: 1024 })}`)
    .setTimestamp()
    .setFooter(`${message.member.user.username} tarafından istendi!`,`${client.user.displayAvatarURL({ dynamic:true })}`)
    message.reply({ embeds: [avatarEmbed] })
}
 exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['avatarım'],
  permLevel: 0
};

exports.help = {
  name: 'avatar',
  description: '',
  usage: 'avatar'
};
