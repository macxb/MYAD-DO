const Discord = require("discord.js");
const client = new Discord.Client();

exports.run = async (client, message) => {
  const embed = new Discord.RichEmbed()
  .setTitle("DarkOrbit: Puerta Galactica Epsilon")
  .setAuthor("MYAD DO","https://cdn.discordapp.com/emojis/401818289023483904.png?v=1%22")
  .setColor(0x00AF46)
  .setDescription("La puerta Epsilon debe ser construida (99 piezas) usando el materializador, una vez completada podras a ella. El portal de esta Galaxy Gate se encuentra en el mapa x-1 de tu empresa junto a la base.")
  .setFooter("MYAD TECHNOLOGIES S.L.E.","https://cdn.discordapp.com/emojis/401818289023483904.png?v=1%22")
  .setThumbnail("https://cdn.discordapp.com/attachments/507454734139916288/568071625942237194/Epsilon_Gate.png")
  .setTimestamp()
  .setURL("http://myriad.bitcoinbetmaster.com/darkorbit-puerta-galacticas-epsilon/")
  .addField("Las ganancias en caso de victoria, son las siguientes: ","5.000.000 Puntos de experiencia\n150.000 Puntos de honor\n20.000 Municiones tipo UCB-100\n25.000 Uridium\n10 Ficheros\n5 Llaves\nPosibilidad de obtener un laser LF-4\n1 Anillo (1 vez)")
  message.channel.send({embed});
}
