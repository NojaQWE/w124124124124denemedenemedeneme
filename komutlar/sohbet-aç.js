const Discord = require("discord.js");
exports.run = async (client, message, args) => {
  const yetkiyok = new Discord.MessageEmbed()
  .setColor("#ff0000")
  .addField(
    "Hata",
    `•\`sohbet-aç\`Komutunu kullanabilmek için , \`Üyeleri At\` **Yetkisine sahip olmanız gerekir**.`
  )
  .setImage(
    "https://cdn.discordapp.com/attachments/768502339375857714/768796763040907284/Ekran_Alnts.PNG"
  )
  if (!message.member.permissions.has("KICK_MEMBERS")) return message.channel.send({embeds:[yetkiyok]});



  let every = message.guild.roles.cache.find(r => r.name === "@everyone");
  message.channel.permissionOverwrites.create(every, {
    SEND_MESSAGES: null
  });


  const yazı = new Discord.MessageEmbed()
   .setColor('RANDOM')
   .setTimestamp()
   .setDescription('**Sohbet Kanalı `Yazılabilir` Durumuna Getirilmiştir.**')


  message.channel.send({embeds:[yazı]});
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['aç','sohbet aç'],
  permLevel: 0
};

exports.help = {
  name: 'sohbet-aç',
  description: 'İstediğiniz kişiyi uyarır.',
  usage: 'aç'
};
