const Discord = require("discord.js");
const client = new Discord.Client();

exports.run = async (client, message) => {
  message.delete((message));
  const embed = new Discord.RichEmbed()
  .setTitle("DarkOrbit: Puerta Galactica Kronos")
  .setAuthor("MYAD DO","https://cdn.discordapp.com/emojis/401818289023483904.png?v=1%22")
  .setColor(0x00AF46)
  .setDescription("La puerta Kronos no se construye como el resto de las puertas. Solo si completas y superas el resto de puertas, recibiras las distintas partes de la puerta (21 piezas). Cada vez que completes una puerta galactica, recibiras una parte de la puerta Kronos. Una vez completada podras acceder a ella. El portal de esta Galaxy Gate se encuentra en el mapa x-1 de tu empresa junto a la base.")
  .setFooter("MYAD TECHNOLOGIES S.L.E.","https://cdn.discordapp.com/emojis/401818289023483904.png?v=1%22")
  .setThumbnail("https://cdn.discordapp.com/attachments/507454734139916288/516691169774796801/Kronos_Gate.png")
  .setTimestamp()
  .setURL("http://myriad.bitcoinbetmaster.com/darkorbit-puerta-galactica-kronos/")
  .addField("Puertas necesarias:","Para armar la puerta Kronos, tendras primero que abrir y superar las siguientes puertas:\n \n4 Alfas\n3 Betas\n1 Gamma\n1 Delta\n4 Epsilon\n1 Zeta\n2 Kappas\n5 Lambdas")
  .addField("Las ganancias en caso de victoria, son las siguientes: ","12.000.000 Puntos de experiencia\n450.000 Puntos de honor\n25.000 Municiones tipo UCB-100\n25.000 Uridium\n15 Ficheros\n10 Llaves\n5.000 Municiones tipo RSB-75\n500 Misiles UBR-100\n250 Energias extras\nPosabilidad de obtener el diseno Saturn para la Goliath(20% PV +)\nCondecoracion especial")
  message.channel.send({embed});
}
