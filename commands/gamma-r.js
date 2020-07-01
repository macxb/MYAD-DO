const Discord = require("discord.js");
const client = new Discord.Client();

exports.run = async (client, message) => {
  const embed = new Discord.RichEmbed()
  .setTitle("DarkOrbit: Puerta Galactica Gamma")
  .setAuthor("MYAD DO","https://cdn.discordapp.com/emojis/401818289023483904.png?v=1%22")
  .setColor(0x00AF46)
  .setThumbnail("https://cdn.discordapp.com/attachments/507454734139916288/568071659307794477/gamma_1.png")
  .setDescription("La puerta Gamma debe ser construida (82 piezas) usando el materializador, una vez completada podras acceder a ella. El portal de esta Galaxy Gate se encuentra en el mapa x-1 de tu empresa junto a la base.")
  .setFooter("MYAD TECHNOLOGIES S.L.E.","https://cdn.discordapp.com/emojis/401818289023483904.png?v=1%22")
  .setTimestamp()
  .setURL("http://myriad.bitcoinbetmaster.com/darkorbit-puerta-galactica-gamma/")
  .addField("Las ganancias en caso de victoria, son las siguientes: ","12.000.000 Puntos de experiencia\n300.000 Puntos de honor\n60.000 Municiones tipo UCB-100\n60.000 Uridium\n600 Xenomita\n6 Bonos de Reparacion\n10 Ficheros\n1 Anillo (1 vez)")
  message.channel.send({embed});
}
