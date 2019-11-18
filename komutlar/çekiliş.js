const db = require('quick.db')
const Discord = require('discord.js')

exports.run = async (client, message, args, config) => {
  let kullanıcı = await db.fetch(`gold_${message.author.id}`);

  if( kullanıcı == undefined){
message.reply("**Maalesef bu komutu kullanamazsın gold üye değilsin :(**")
  }else{
      if( kullanıcı == "gold"){

        
const Discord = require('discord.js');
const moment = require('moment');
const ms = require('ms')
const ayarlar = require('../ayarlar.json');
const db = require("quick.db")
exports.run = async (client, message, args) => {
  message.delete(4000)
  
    if(!message.member.hasPermission("BAN_MEMBERS")) return message.channel.send(`:x: Bu komutu kullanabilmek için "\`Gold Üye'ye\`" iznine ihtiyacın var.`).then(msg => msg.delete(5000));

  
  let prefix = await require('quick.db').fetch(`prefix_${message.guild.id}`) || ayarlar.prefix
  
  let room = message.mentions.channels.first()
  let title = args.slice(3).join(" ")
  let duration = args[1]
  let sure = args[2]
  let bisi;
  let filter = m => m.author.id === message.author.id;
  
  if (!message.member.hasPermission("MANAGE_MESSAGES")) return message.channel.send(`Bu komutu kullanabilmek için "\`Mesajları Yönet\`" yetkisine sahip olmalısın.`);
  
  if (!room) {
  var giveEmbed1 = new Discord.RichEmbed()
  .setColor("ff0000")
  .setTitle(`${message.guild.name} - Çekiliş`)
  .setDescription(`**\n:x: !çekiliş #kanal süre ödül ** ***\`\`\`${prefix}çekiliş #çekiliş 2 gün Steam Key\`\`\`\n***`)
  .setThumbnail('https://cdn.discordapp.com/attachments/545569894268272650/645293409392656384/cekilis-png-1.png')
      .setTimestamp()

  .setFooter(`${message.author.username}`, message.author.avatarURL);
  return message.channel.send(giveEmbed1) 
  }
  
  if (!duration || duration >= '60')

  {
    var giveEmbed1 = new Discord.RichEmbed()
    .setColor("ff0000")
    .setTitle(`${message.guild.name} - Çekiliş Zamanı `)
    .setDescription(`**\n:x: Bir süre yazmalısın !** ***\`\`\`${prefix}çekiliş #çekiliş 2 gün Steam Key\`\`\`\n***`)
    .setThumbnail('https://cdn.discordapp.com/attachments/545569894268272650/645293409392656384/cekilis-png-1.png')
        .setTimestamp()

    .setFooter(`${message.author.username}`, message.author.avatarURL);
    return message.channel.send(giveEmbed1) 
    }

  
  if (!sure || !sure == 'saniye' || !sure == 'dakika' || !sure == 'saat' || !sure == 'gün' )

  {
    var giveEmbed1 = new Discord.RichEmbed()
    .setColor("ff0000")
    .setTitle(`${message.guild.name} - Çekiliş`)
     .setDescription(`**\n:x: Süreyi doğru yazmalısın !** ***\`\`\`${prefix}çekiliş #çekiliş 2 gün Steam Key\`\`\`\n***`)
    .setThumbnail('https://cdn.discordapp.com/attachments/545569894268272650/645293409392656384/cekilis-png-1.png')
        .setTimestamp()

    .setFooter(`${message.author.username}`, message.author.avatarURL);
    return message.channel.send(giveEmbed1) 
    }
  
  if (!title) 
  
  {
    var giveEmbed1 = new Discord.RichEmbed()
    .setColor("ff0000")
    .setTitle(`${message.guild.name} - Çekiliş`)
    .setDescription(`**\n:x: Ödülü yazmalısın.** ***\`\`\`${prefix}çekiliş #çekiliş 2 gün Steam Key\`\`\`\n***`)
    .setThumbnail('https://cdn.discordapp.com/attachments/545569894268272650/645293409392656384/cekilis-png-1.png')
        .setTimestamp()

    .setFooter(`${message.author.username}`, message.author.avatarURL);
    return message.channel.send(giveEmbed1) 
    }

  
  if (sure == 'saniye') bisi = 'seconds'
  if (sure == 'dakika') bisi = 'minutes'
  if (sure == 'saat') bisi = 'hours'
  if (sure == 'gün') bisi = 'days' 
  
  let giveEmbed = new Discord.RichEmbed()
  .setColor("00deff")
  .setTitle(`${message.guild.name} - Çekiliş \n\nÇekiliş Hediyesi: ${title}`)
  .setDescription(`🎉 Çekiliş Bu Kanalda Açıklanacaktır.\n\n**Çekiliş Süresi :**\` ${duration} ${sure}\``)
  .setThumbnail('https://cdn.discordapp.com/attachments/545569894268272650/645293409392656384/cekilis-png-1.png')
  .setTimestamp()
  .setFooter(`Çekilişi Yapan Kişi : ${message.author.username}`, message.author.avatarURL);
  room.send(giveEmbed).then(m => {
   
    let re = m.react('🎉');
    setTimeout(() => {
      let users = m.reactions.get("🎉").users
      let list = users.array().filter(u => u.id !== m.author.id !== client.user.id);
      let gFilter = list[Math.floor(Math.random() * list.length) + 0]
      if (gFilter == client.user) gFilter = `Kimse`
      
      let endEmbed = new Discord.RichEmbed()
      .setColor("00deff")
      .setTitle(`${message.guild.name} - Çekiliş \n\nÇekiliş Hediyesi: ${title}`)
      .setDescription(`**Çekilişi Kazanan :** ${gFilter}`)
      .setThumbnail('https://cdn.discordapp.com/attachments/545569894268272650/645293409392656384/cekilis-png-1.png')
      .setFooter(`Çekilişi Yapan Yetkili : ${message.author.username}`, message.author.avatarURL)
      m.edit(endEmbed)
   }, ms(`${duration} ${bisi}`))
  });
  

}

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: 0
};

exports.help = {
  description: 'Çekiliş yaparsınız. Kullanım: ,çekiliş <#kanal> <süre> <ödüll>',
  usage: 'çekiliş <#kanal> <süre> <ödül>'
};

    }
      
  }
}
exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: 0
};

exports.help = {
  name: 'çekiliş', 
  description: "",
  usage: ''
};
   