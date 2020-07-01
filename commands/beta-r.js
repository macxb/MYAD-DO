const Discord = require("discord.js");
const client = new Discord.Client();

exports.run = async (client, message) => {
  const embed = new Discord.RichEmbed()
  .setTitle("DarkOrbit: Puerta Galactica Beta")
  .setAuthor("MYAD DO","https://cdn.discordapp.com/emojis/401818289023483904.png?v=1%22")
  .setColor(0x00AF46)
  .setDescription("La puerta Beta debe ser construida (48 piezas) usando el materializador, una vez completada podras acceder a ella. El portal de esta Galaxy Gate se encuentra en el mapa x-1 de tu empresa junto a la base. Beta consiste de 10 rondas(mapas) de 4 oleadas(40) cada una.")
  .setFooter("MYAD TECHNOLOGIES S.L.E.","https://cdn.discordapp.com/emojis/401818289023483904.png?v=1%22")
  .setThumbnail("https://cdn.discordapp.com/attachments/507454734139916288/568071619386540042/beta_1.png")
  .setTimestamp()
  .setURL("http://myriad.bitcoinbetmaster.com/darkorbit-puerta-galactica-beta/")
  .addField("Las ganancias en caso de victoria, son las siguientes: ","8.000.000 Puntos de experiencia\n200.000 Puntos de honor\n40.000 Municiones tipo UCB-100\n40.000 Uridium\n400 Xenomita\n4 Bonos de Reparacion\n4 Ficheros\n1 Anillo (1 vez)")
  message.channel.send({embed});
}
