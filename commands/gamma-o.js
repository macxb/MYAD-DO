const Discord = require("discord.js");
const client = new Discord.Client();

exports.run = async (client, message) => {
  const embed = new Discord.RichEmbed()
  .setTitle("DarkOrbit: Puerta Galactica Gamma")
  .setAuthor("MYAD DO","https://cdn.discordapp.com/emojis/401818289023483904.png?v=1%22")
  .setColor(0x00AF46)
  .setDescription("**La puerta Gamma debe ser construida (48 piezas) usando el materializador, una vez completada podras acceder a ella. El portal de esta Galaxy Gate se encuentra en el mapa x-1 de tu empresa junto a la base.**")
  .setFooter("MYAD TECHNOLOGIES S.L.E.","https://cdn.discordapp.com/emojis/401818289023483904.png?v=1%22")
  //.setImage("http://myriad.bitcoinbetmaster.com/wp-content/uploads/2016/09/gamma-1.png%22")
  .setThumbnail("https://cdn.discordapp.com/attachments/507454734139916288/568071659307794477/gamma_1.png")
  .setTimestamp()
  .setURL("http://myriad.bitcoinbetmaster.com/darkorbit-puerta-galactica-gamma/")
  .addField("Gamma consiste de 10 rondas(mapas) de 4 oleadas(40) cada una y el dano de los NPC es el triple de lo normal. ","**Rondas y Oleadas.**")
  .addField("**Rondas 1-5**","1 Ronda\n 10 Streuner\n 10 Streuner\n 10 Streuner\n 10 Streuner\n \n2 Ronda\n 10 Lordakias\n 10 Lordakias\n 10 Lordakias\n 10 Lordakias\n \n3 Ronda\n 10 Mordones\n 10 Mordones\n 10 Mordones\n 10 Mordones\n \n4 Ronda\n 20 Saimons\n 20 Saimons\n 20 Saimons\n 20 Saimons\n \n5 Ronda\n 5 Devolarium\n 5 Devolarium\n 5 Devolarium\n 5 Devolarium\n ", true)
  .addField("**Rondas 6-10**","6 Ronda\n 20 Kristallines\n 20 Kristallines\n 20 Kristallines\n 20 Kristallines\n \n7 Ronda\n 5 Sibelones\n 5 Sibelones\n 5 Sibelones\n 5 Sibelones\n \n8 Ronda\n 20 Sibelonit\n 20 Sibelonit\n 20 Sibelonit\n 20 Sibelonit\n \n9 Ronda\n 4 Kristallones\n 4 Kristallones\n 4 Kristallones\n 4 Kristallones\n \n10 Ronda\n 5 Protegit\n 10 Protegit\n 10 Protegit\n 5 Protegit", true);
  message.channel.send({embed});
}
