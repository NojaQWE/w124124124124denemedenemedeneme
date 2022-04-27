const Discord = require("discord.js");
exports.run = async (client, message, args) => {
  const yetkiyok = new Discord.MessageEmbed()
  .setColor("#ff0000")
  .addField(
    "Hata",
    `•\`sohbet-kapat\`Komutunu kullanabilmek için , \`Üylereri At\` **Yetkisine sahip olmanız gerekir**.`
  )
  .setImage(
    "https://cdn.discordapp.com/attachments/768502339375857714/768796763040907284/Ekran_Alnts.PNG"
  )
  if (!message.member.permissions.has("KICK_MEMBERS")) return message.channel.send({embeds:[yetkiyok]});



  let every = message.guild.roles.cache.find(r => r.name === "@everyone");
  message.channel.permissionOverwrites.create(every, {
    SEND_MESSAGES: false
  });

  const yazı = new Discord.MessageEmbed()
   .setColor('RANDOM')
   .setTimestamp()
   .setDescription('**Sohbet Kanalı `Yazılamaz` Durumuna Getirilmiştir.**')

  message.channel.send({embeds:[yazı]});
};


exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ["kapat", 'sohbet kapat'],
  permLevel: 0
};

exports.help = {
  name: 'sohbet-kapat',
  description: 'İstediğiniz kişiyi uyarır.',
  usage: 'kapat'
};
