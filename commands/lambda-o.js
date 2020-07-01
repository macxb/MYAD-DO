const Discord = require("discord.js");
const client = new Discord.Client();

exports.run = async (client, message) => {
  const embed = new Discord.RichEmbed()
  .setTitle("DarkOrbit: Puerta Galactica Lambda")
  .setAuthor("MYAD DO","https://cdn.discordapp.com/emojis/401818289023483904.png?v=1%22")
  .setColor(0x00AF46)
  .setDescription("La puerta Lambda debe ser construida (45 piezas) usando el materializador, una vez completada podras acceder a ella. El portal de esta Galaxy Gate se encuentra en el mapa x-1 de tu empresa junto a la base.")
  .setFooter("MYAD TECHNOLOGIES S.L.E.","https://cdn.discordapp.com/emojis/401818289023483904.png?v=1%22")
  //.setImage("http://es.bigpoint.com/darkorbit/board/attachments/lambda-1-png.5008/")
  .setThumbnail("https://cdn.discordapp.com/attachments/507454734139916288/568071646171365383/Galaxy_Gate_Lambda.png")
  .setTimestamp()
  .setURL("http://myriad.bitcoinbetmaster.com/darkorbit-puerta-galactica-lambda/")
  .addField("Lambda consiste de 7 rondas(mapas) en 21 oleadas. ","**Rondas y Oleadas.**")
  .addField("Rondas 1-4","1 Ronda\n10 Boss Streuner\n10 Boss Lordakias\n10 Boss Lordakias\n \n2 Ronda\n6 Boss Mordones\n7 Boss Saimons\n7 Boss Saimons\n \n3 Ronda\n2 Boss Devolarium\n6 Boss Sibelonit\n2 Boss Devolarium\n \n4 Ronda\n5 Boss Sibelonit\n1 Boss Sibelon\n5 Boss Sibelonit", true)
  .addField("Rondas 5-7","5 Ronda\n1 Boss Lordakium\n10 Boss Lordakias\n2 Boss Lordakium\n \n6 Ronda\n6 Boss Kristallines\n6 Boss Kristallines\n1 Boss Kristallon\n \n7 Ronda\n2 Boss Kristallones\n10 Boss Kristallines\n10 Boss Kristallines", true);
  message.channel.send({embed});
}
