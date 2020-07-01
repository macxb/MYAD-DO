const Discord = require("discord.js");
const client = new Discord.Client();

exports.run = async (client, message) => {
  const embed = new Discord.RichEmbed()
    .setTitle("**Naves**")
    .setAuthor("MYAD DO","https://cdn.discordapp.com/emojis/401818289023483904.png?v=1%22")
    .setColor(0x00AF46)
    .setDescription("**Aegis Elite**")
    .setFooter("MYAD TECHNOLOGIES S.L.E.","https://cdn.discordapp.com/emojis/401818289023483904.png?v=1%22")
    .setThumbnail("https://cdn.discordapp.com/attachments/507454734139916288/568069287890255875/aegis-lava.gif")
    .setTimestamp()
    .setURL("http://myriad.bitcoinbetmaster.com/")
    .addField("**Descripcion en el Juego:**","La Aegis es una de las tres naves, con habilidades y estadisticas que la hacen una nave de apoyo perfecta o una buena nave PvP. Este diseño hace sombra a todos los demas:", true)
    .addField("**Especificaciones:**","Puntos maximos de vida	275,000\nMax Nanocasco 			265,000\nVelocidad				 300\nLaser: 				   10\nGeneradores			   15\nExtra:				    3\nCarga:				    2000", true)
    .addField("**Habilidades:**","**Reparacion de PV:**\nLas naves amigas recuperan 40.000 puntos de vida por segundo y la nave propia 20.000.\n**Reparacion de escudo:**\nCon esta habilidad, podras enviarle a una nave amiga que tu elijas, nueva energia de escudo.\n**Unidad de reparacion:**\nCon esta habilidad, tu nave baliza una unidad que restablece poco a poco los PV de todas tus naves amigas cercanas. ", true)
    .addField("**Bonificaciones:**","Provoca un ``5%`` mas de daños.\nAumenta la duracion de la habilidad Reparacion de PV en un ``50%``\nReduce la de Reparacion de escudo en un ``20%``\nReduce la de Unidad de reparacion en un ``10%``", true);
  message.channel.send({embed});
}
