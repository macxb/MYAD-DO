const Discord = require("discord.js");
const client = new Discord.Client();

exports.run = async (client, message) => {
  const embed = new Discord.RichEmbed()
    .setTitle("**Naves**")
    .setAuthor("MYAD DO","https://cdn.discordapp.com/emojis/401818289023483904.png?v=1%22")
    .setColor(0x00AF46)
    .setDescription("**Spectrum**")
    .setFooter("MYAD TECHNOLOGIES S.L.E.","https://cdn.discordapp.com/emojis/401818289023483904.png?v=1%22")
    .setThumbnail("https://cdn.discordapp.com/attachments/507454734139916288/521655750012043265/spectrum.gif")
    .setTimestamp()
    .setURL("http://myriad.bitcoinbetmaster.com/")
    .addField("**Descripcion en el Juego:**","La Spectrum es un caleidoscopio de color para cegar a tus enemigos.\n¡Los disparos láser se caen del casco de este crucero de batalla pulido, como el agua de la espalda de un pato!", true)
    .addField("**Especificaciones:**","Puntos maximos de vida	256,000\nMax Nanocasco 			250,000\nVelocidad				 300\nLaser: 				   15\nGeneradores			   15\nExtra:				    3\nCarga:				    1500", true)
    .addField("**Bonificaciones:**","Escudo ``10%``", true)
    .addField("**Habilidad:**","**Proteccion Prismatica:**\nLos enemigos te infligen un ``70%`` menos de dano , pero tu dano se reduce en un ``45%``", true);
  message.channel.send({embed});
}
