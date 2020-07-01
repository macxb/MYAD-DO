const Discord = require("discord.js");
const client = new Discord.Client();

exports.run = async (client, message) => {
  message.delete((message));
  const embed = new Discord.RichEmbed()
    .setTitle("**Naves**")
    .setAuthor("MYAD DO","https://cdn.discordapp.com/emojis/401818289023483904.png?v=1%22")
    .setColor(0x00AF46)
    .setDescription("**Diminisher**")
    .setFooter("MYAD TECHNOLOGIES S.L.E.","https://cdn.discordapp.com/emojis/401818289023483904.png?v=1%22")
    .setThumbnail("https://cdn.discordapp.com/attachments/507454734139916288/517082237615865888/diminisher.gif")
    .setTimestamp()
    .setURL("http://myriad.bitcoinbetmaster.com/")
    .addField("**Descripcion en el Juego:**","La Diminisher es el crucero de batalla elegido por los pilotos astutos: primero, debilita los escudos enemigos, y luego suelta una salva cruel.", true)
    .addField("**Especificaciones:**","Puntos maximos de vida	256,000\nMax Nanocasco 			256,000\nVelocidad				 300\nLaser: 				   15\nGeneradores			   15\nExtra:				    3\nCarga:				    1600", true)
    .addField("**Bonificaciones:**","**Esta nave tiene los siguientes bonos:**\nDaños ``5%``", true)
    .addField("**Habilidad:**","**Debilitar escudos:**\nDebilita el escudo de tu objetivo un ``50%`` durante un periodo corto, pero el ``30%`` de tus escudos se eliminan una vez que se acaba la duración.", true);
  message.channel.send({embed});
}
