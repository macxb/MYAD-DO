const Discord = require("discord.js");
const client = new Discord.Client();

exports.run = async (client, message) => {
  const embed = new Discord.RichEmbed()
  .setTitle("DarkOrbit: Puerta Galactica Kappa")
  .setAuthor("MYAD DO","https://cdn.discordapp.com/emojis/401818289023483904.png?v=1%22")
  .setColor(0x00AF46)
  .setDescription("La puerta Kappa debe ser construida (120 piezas) usando el materializador, una vez completada podras acceder a ella. El portal de esta Galaxy Gate se encuentra en el mapa x-1 de tu empresa junto a la base.")
  .setFooter("MYAD TECHNOLOGIES S.L.E.","https://cdn.discordapp.com/emojis/401818289023483904.png?v=1%22")
  //.setImage("http://myriad.bitcoinbetmaster.com/wp-content/uploads/2016/09/kappa-1.png")
  .setThumbnail("https://cdn.discordapp.com/attachments/507454734139916288/568071851201527808/kappa_1.png")
  .setTimestamp()
  .setURL("http://myriad.bitcoinbetmaster.com/darkorbit-puerta-galactica-kappa/")
  .addField("Kappa consiste de 11 rondas(mapas) en 29 oleadas. ","**Rondas y Oleadas.**")
  .addField("Rondas 1-6","1 Ronda\n10 Streuner\n10 Vagrant\n10 Infernal\n \n2 Ronda\n6 Marauder\n7 Scorcher\n8 Boss Mordones\n \n3 Ronda\n6 Outcast\n6 Devolarium\n3 Icy\n \n4 Ronda\n5 Boss Sibelonit\n5 Corsairs\n5 Scorcher\n \n5 Ronda\n4 Hooligan\n5 Kristallines\n4 Melter\n \n6 Ronda\n8 Interceptores\n6 Barracudas\n3 Annihilators", true)
  .addField("Rondas 7-11","7 Ronda\n6 Boss Lordakium\n8 Protegit\n2 Boss Sibelones\n \n8 Ronda\n3 Kucurbium\n3 Kucurbium\n8 Uber Saimons\n \n9 Ronda\n5 Convict\n5 Boss Kristallines\n1 demaNeR\n \n10 Ronda\n1 Boss Kucurbium\n \n11 Ronda\n1 Century Falcon", true);
  message.channel.send({embed});
}
