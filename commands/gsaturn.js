const Discord = require("discord.js");
const client = new Discord.Client();

exports.run = async (client, message) => {
  const embed = new Discord.RichEmbed()
    .setTitle("**Naves**")
    .setAuthor("MYAD DO","https://cdn.discordapp.com/emojis/401818289023483904.png?v=1%22")
    .setColor(0x00AE86)
    .setDescription("**Goliath Saturn**")
    .setFooter("MYAD TECHNOLOGIES S.L.E.","https://cdn.discordapp.com/emojis/401818289023483904.png?v=1%22")
    .setThumbnail("http://myriad.bitcoinbetmaster.com/wp-content/uploads/2018/10/darkorbit-g-saturn.png")
    .setTimestamp()
    .setURL("http://myriad.bitcoinbetmaster.com/")
    .addField("**Descripcion en el Juego:**","Otorga un ``20%`` adicional de puntos de vida. Solo se puede conseguir una vez completada con exito la GG Kronos.", true)
    .addField("**Especificaciones:**","Puntos maximos de vida	256,000\nMax Nanocasco 			256,000\nVelocidad				 300\nLaser: 				15\nGeneradores			   15\nExtra:				    3\nCarga:				    1500", true)
    .addField("**Bonificaciones:**","Vida ``20%``");
  message.channel.send({embed});
}
