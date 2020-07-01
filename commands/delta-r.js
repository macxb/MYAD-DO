const Discord = require("discord.js");
const client = new Discord.Client();

exports.run = async (client, message) => {
  const embed = new Discord.RichEmbed()
  .setTitle("DarkOrbit: Puerta Galactica Delta")
  .setAuthor("MYAD DO","https://cdn.discordapp.com/emojis/401818289023483904.png?v=1%22")
  .setColor(0x00AF46)
  .setDescription("La puerta Delta debe ser construida (128 piezas) usando el materializador, una vez completada podras a ella. El portal de esta Galaxy Gate se encuentra en el mapa x-1 de tu empresa junto a la base.")
  .setFooter("MYAD TECHNOLOGIES S.L.E.","https://cdn.discordapp.com/emojis/401818289023483904.png?v=1%22")
  .setThumbnail("https://cdn.discordapp.com/attachments/507454734139916288/568071637455339520/Galaxy_Gate_Delta.png")
  .setTimestamp()
  .setURL("http://myriad.bitcoinbetmaster.com/darkorbit-puerta-galactica-delta/")
  .addField("Las ganancias en caso de victoria, son las siguientes: ","9.000.000 Puntos de experiencia\n225.000 Puntos de honor\n45.000 Municiones tipo UCB-100\n45.000 Uridium\n450 Xenomita\n5 Bonos de Reparacion\n8 Ficheros\n1 Anillo (1 vez)")
  message.channel.send({embed});
}
