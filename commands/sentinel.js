const Discord = require("discord.js");
const client = new Discord.Client();

exports.run = async (client, message) => {
  message.delete((message));
  const embed = new Discord.RichEmbed()
    .setTitle("**Naves**")
    .setAuthor("MYAD DO","https://cdn.discordapp.com/emojis/401818289023483904.png?v=1%22")
    .setColor(0x00AF46)
    .setDescription("**Sentinel**")
    .setFooter("MYAD TECHNOLOGIES S.L.E.","https://cdn.discordapp.com/emojis/401818289023483904.png?v=1%22")
    .setThumbnail("https://cdn.discordapp.com/attachments/507454734139916288/516743217610358784/sentinel.gif")
    .setTimestamp()
    .setURL("http://myriad.bitcoinbetmaster.com/")
    .addField("**Descripcion en el Juego:**","La Sentinel asombra con su diseño futurista y escudos robustos. Vuela ala a ala con otras Sentinels para crear una pared de escudo impenetrable.", true)
    .addField("**Especificaciones:**","Puntos maximos de vida	256,000\nMax Nanocasco 			250,000\nVelocidad				 300\nLaser: 				   15\nGeneradores			   15\nExtra:				    3\nCarga:				    1500", true)
    .addField("**Bonificaciones:**","Escudo ``10%``", true)
    .addField("**Habilidad:**","**Fortaleza:**\nDisminuye el dano infligido a tus escudos en un ``30%.``", true);
  message.channel.send({embed});
}
