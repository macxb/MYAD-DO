const Discord = require("discord.js");
const client = new Discord.Client();

exports.run = async (client, message) => {
  const embed = new Discord.RichEmbed()
  .setTitle("DarkOrbit: Puerta Galactica Zeta")
  .setAuthor("MYAD DO","https://cdn.discordapp.com/emojis/401818289023483904.png?v=1%22")
  .setColor(0x00AF46)
  .setDescription("La puerta Zeta debe ser construida (111 piezas) usando el materializador, una vez completada podras acceder a ella. El portal de esta Galaxy Gate se encuentra en el mapa x-1 de tu empresa junto a la base.")
  .setFooter("MYAD TECHNOLOGIES S.L.E.","https://cdn.discordapp.com/emojis/401818289023483904.png?v=1%22")
  .setThumbnail("https://cdn.discordapp.com/attachments/507454734139916288/568071687892107280/zeta.gif")
  .setTimestamp()
  .setURL("http://myriad.bitcoinbetmaster.com/darkorbit-puerta-galactica-zeta/")
  .addField("Las ganancias en caso de victoria, son las siguientes: ","6.000.000 Puntos de experiencia\n200.000 Puntos de honor\n25.000 Municiones tipo UCB-100\n35.000 Uridium\n50 Ficheros\n25 Llaves\nPosibilidad de obtener un diseno Havoc para los vants\n1 Anillo (1 vez)")
  message.channel.send({embed});
}
