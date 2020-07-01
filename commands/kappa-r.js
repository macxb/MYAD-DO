const Discord = require("discord.js");
const client = new Discord.Client();

exports.run = async (client, message) => {
  const embed = new Discord.RichEmbed()
  .setTitle("DarkOrbit: Puerta Galactica Kappa")
  .setAuthor("MYAD DO","https://cdn.discordapp.com/emojis/401818289023483904.png?v=1%22")
  .setColor(0x00AF46)
  .setDescription("La puerta Kappa debe ser construida (120 piezas) usando el materializador, una vez completada podras acceder a ella. El portal de esta Galaxy Gate se encuentra en el mapa x-1 de tu empresa junto a la base.")
  .setFooter("MYAD TECHNOLOGIES S.L.E.","https://cdn.discordapp.com/emojis/401818289023483904.png?v=1%22")
  .setThumbnail("https://cdn.discordapp.com/attachments/507454734139916288/568071851201527808/kappa_1.png")
  .setTimestamp()
  .setURL("http://myriad.bitcoinbetmaster.com/darkorbit-puerta-galactica-kappa/")
  .addField("Las ganancias en caso de victoria, son las siguientes: ","9.000.000 Puntos de experiencia\n300.000 Puntos de honor\n30.000 Municiones tipo UCB-100\n15.000 Uridium\n10 Ficheros\n5 Llaves\nPosibilidad de obtener un diseno Hercules para los vants/LF-4/Multipotenciador\nTitulo Piloto estelar")
  message.channel.send({embed});
}
