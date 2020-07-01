const Discord = require("discord.js");
const client = new Discord.Client();

exports.run = async (client, message) => {
  const embed = new Discord.RichEmbed()
    .setTitle("**Naves**")
    .setAuthor("MYAD DO","https://cdn.discordapp.com/emojis/401818289023483904.png?v=1%22")
    .setColor(0x00AF46)
    .setDescription("**Aegis**")
    .setFooter("MYAD TECHNOLOGIES S.L.E.","https://cdn.discordapp.com/emojis/401818289023483904.png?v=1%22")
    .setThumbnail("https://cdn.discordapp.com/attachments/507454734139916288/514150036360134658/aegis-mmo_100x100.png")
    .setTimestamp()
    .setURL("http://myriad.bitcoinbetmaster.com/")
    .addField("**Descripcion en el Juego:**","La Aegis es una de las tres naves, con habilidades y estadisticas que la hacen una nave de apoyo perfecta o una buena nave PvP.", true)
    .addField("**Especificaciones:**","Puntos maximos de vida	275,000\nMax Nanocasco 			265,000\nVelocidad				 300\nLaser: 				   10\nGeneradores			   15\nExtra:				    3\nCarga:				    2000", true)
    .addField("**Habilidades:**","**Reparacion de PV:**\nLas naves amigas recuperan 40.000 puntos de vida por segundo y la nave propia 20.000.\n**Reparacion de escudo:**\nCon esta habilidad, podras enviarle a una nave amiga que tu elijas, nueva energia de escudo.\n**Unidad de reparacion:**\nCon esta habilidad, tu nave arroja una balíza que restablece poco a poco los PV de todas las naves amigas cercanas. ", true);
  message.channel.send({embed});
}
