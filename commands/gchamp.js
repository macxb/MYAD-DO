const Discord = require("discord.js");
const client = new Discord.Client();

exports.run = async (client, message) => {
  const embed = new Discord.RichEmbed()
    .setTitle("**Naves**")
    .setAuthor("MYAD DO","https://cdn.discordapp.com/emojis/401818289023483904.png?v=1%22")
    .setColor(0x00AF46)
    .setDescription("**Goliath Champion**")
    .setFooter("MYAD TECHNOLOGIES S.L.E.","https://cdn.discordapp.com/emojis/401818289023483904.png?v=1%22")
    .setThumbnail("http://myriad.bitcoinbetmaster.com/wp-content/uploads/2018/09/g-champion-northern-ireland_100x100.png")
    .setTimestamp()
    .setURL("http://myriad.bitcoinbetmaster.com/")
    .addField("**Descripcion en el Juego:**","¡La Goliath Champion es el lienzo perfecto para ti! Decorala con diseños de banderas de todo los paises del mundo que puedes ganar en varios eventos.", true)
    .addField("**Especificaciones:**","Puntos maximos de vida	256,000\nMax Nanocasco 			246,000\nVelocidad				 300\nLaser: 				   15\nGeneradores			   15\nExtra:				    3\nCarga:				    1500", true)
    .addField("**Bonificaciones:**","Daños ``5%``\nHonor ``10%``", true);
  message.channel.send({embed});
}
