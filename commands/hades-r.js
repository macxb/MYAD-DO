const Discord = require("discord.js");
const client = new Discord.Client();

exports.run = async (client, message) => {
  const embed = new Discord.RichEmbed()
  .setTitle("DarkOrbit: Puerta Galactica Hades")
  .setAuthor("MYAD DO","https://cdn.discordapp.com/emojis/401818289023483904.png?v=1%22")
  .setColor(0x00AF46)
  .setDescription("La puerta Hades debe ser construida (45 piezas) usando el materializador, una vez completada podras acceder a ella. El portal de esta Galaxy Gate se encuentra en el mapa x-1 de tu empresa junto a la base.")
  .setFooter("MYAD TECHNOLOGIES S.L.E.","https://cdn.discordapp.com/emojis/401818289023483904.png?v=1%22")
  .setThumbnail("https://cdn.discordapp.com/attachments/507454734139916288/568071663908945922/hades_1.png")
  .setTimestamp()
  .setURL("http://myriad.bitcoinbetmaster.com/darkorbit-puerta-galactica-hades/")
  .addField("Las recompensas de cada piloto que participe, son las siguientes: ","4.000.000 Puntos de experiencia\n200.000 Puntos de honor\n15.000 Municiones tipo UCB-100\n20.000 Uridium\n8 Ficheros\n4 Llaves\nPosabilidad de obtener un LF-4\nTitulo Emperador de la puerta Hades")
  message.channel.send({embed});
}
