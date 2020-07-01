const Discord = require("discord.js");
const client = new Discord.Client();

exports.run = async (client, message) => {
  const embed = new Discord.RichEmbed()
  .setTitle("DarkOrbit: Puerta Galactica Lambda")
  .setAuthor("MYAD DO","https://cdn.discordapp.com/emojis/401818289023483904.png?v=1%22")
  .setColor(0x00AF46)
  .setDescription("La puerta Lambda debe ser construida (45 piezas) usando el materializador, una vez completada podras acceder a ella. El portal de esta Galaxy Gate se encuentra en el mapa x-1 de tu empresa junto a la base.")
  .setFooter("MYAD TECHNOLOGIES S.L.E.","https://cdn.discordapp.com/emojis/401818289023483904.png?v=1%22")
  .setThumbnail("https://cdn.discordapp.com/attachments/507454734139916288/568071646171365383/Galaxy_Gate_Lambda.png")
  .setTimestamp()
  .setURL("http://myriad.bitcoinbetmaster.com/darkorbit-puerta-galactica-lambda/")
  .addField("Las ganancias en caso de victoria, son las siguientes: ","2.750.000 Puntos de experiencia\n100.000 Puntos de honor\n10.000 Municiones tipo UCB-100\n15.000 Uridium\n3 Ficheros\n5 Llaves\nPosibilidad de obtener el titulo Jefe de los Jefes")
  message.channel.send({embed});
}
