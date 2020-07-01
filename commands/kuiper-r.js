const Discord = require("discord.js");
const client = new Discord.Client();

exports.run = async (client, message) => {
  const embed = new Discord.RichEmbed()
  .setTitle("DarkOrbit: Puerta Galactica Kuiper")
  .setAuthor("MYAD DO","https://cdn.discordapp.com/emojis/401818289023483904.png?v=1%22")
  .setColor(0x00AF46)
  .setDescription("La puerta Kuiper debe ser construida (100 piezas) usando el materializador, una vez completada podras acceder a ella. El portal de esta Galaxy Gate se encuentra en el mapa x-1 de tu empresa junto a la base. A tener en cuenta que una vez dentro de la puerta y finalizado un mapa, se podra acceder al siguiente a traves del portal de la derecha y al mapa x-1 a traves del portal de la izquierda al contrario que en el resto de puertas")
  .setFooter("MYAD TECHNOLOGIES S.L.E.","https://cdn.discordapp.com/emojis/401818289023483904.png?v=1%22")
  .setThumbnail("https://cdn.discordapp.com/attachments/507454734139916288/568071672742281217/kuiper.gif")
  .setTimestamp()
  .setURL("http://myriad.bitcoinbetmaster.com/darkorbit-puerta-galactica-kuiper/")
  .addField("Las recompensas totales, son las siguientes: ","2.000.000 Puntos de experiencia\n150.000 Puntos de honor\n15.000 Uridium\n5 Llaves\nPosibilidad de obtener uno de los disenos de algunas naves. Si una cuenta ya tiene el diseno, se abonara 200.000 uridium en su lugar.")
  message.channel.send({embed});
}
