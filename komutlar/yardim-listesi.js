const Discord = require('discord.js');


exports.run = function(client, message) {
const embed = new Discord.RichEmbed()
.setColor('RANDOM')
.setTitle('» Komut Grupları')
.setTimestamp()
.addField('» Moderasyon Komutları', '!botkontrol !kick !rol-liste !oylama !reboot !temizle !ses-kanal-aç !yaz !ban !banlist !mesajat !duyuru !kanal-açıklama !çekiliş !isim !fakemesaj !uyarı')
.addField('» Eğlence Komutları', '!espri !rip - !kralol !1vs1 !kaç-cm !kralol !rip !wasted !yazı-tura !doğrulukcesaret !alkış !dcdekiyıkık !korkut !tutuklandın !şşş !tkm !sigarayak !aşkölçer')
.addField('» Genel Komutlar', '!spoiler !stresçarkı !manzara')
.addField('» Ekstra Komutlar', '!çeviri !havadurumu !mc-ödül !rastgeleşifre !ateşle !ilginçbilgi')
.addField('» Bot Komutları', '!bizkimiz !davetoluştur !emojiyükle !ping !desteksunucu')
.addField('» Kullanıcı Komutları', '!sikayet !kullanıcı-bilgi @user !avatar')
.addField('» Sunucu Komutları', '!istatistik !icon !alıntıla !hastebin !reklam-taraması !sunucunutanıt !bug-bildir !canlıdestek')
.addField('» Diğer Komutlar', '!beşiktaş !fenerbahçe !galatasaray !spotify !youtube')
.setFooter('🔰 HAN Bot | Yardım Listesi', client.user.avatarURL)
.setTimestamp()
.setThumbnail(client.user.avatarURL)
message.channel.send(embed)
};

exports.conf = {
  enabled: true,
  guildOnly: false, 
  aliases: [], 
  permLevel: 0 
};

exports.help = {
  name: 'yardım',
  description: 'Tüm komutları gösterir.',
  usage: 'yardım'
};