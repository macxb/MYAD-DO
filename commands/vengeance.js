const Discord = require("discord.js");
const client = new Discord.Client();

exports.run = async (client, message) => {
  const embed = new Discord.RichEmbed()
    .setTitle("**Naves**")
    .setAuthor("MYAD DO","https://cdn.discordapp.com/emojis/401818289023483904.png?v=1%22")
    .setColor(0x00AE86)
    .setDescription("**Vengeance**")
    .setFooter("MYAD TECHNOLOGIES S.L.E.","https://cdn.discordapp.com/emojis/401818289023483904.png?v=1%22")
    .setThumbnail("https://cdn.discordapp.com/attachments/507454734139916288/514171165347020808/vengeance_100x100.png")
    .setTimestamp()
    .setURL("http://myriad.bitcoinbetmaster.com/")
    .addField("**Descripción en el Juego**","¡El mejor caza estelar! No hay nada (o casi) que temer cuando se posee esta nave. Muy versatil y con un coste aceptable.", true)
    .addField("**Especificaciones:**","Puntos maximos de vida	180000\nMax Nanocasco 			180000\nVelocidad				 380\nLaser: 				10\nGeneradores			   10\nExtra:				    2\nCarga:				    1000", true)
    .addField("**Vengeance Adept**","Otorga un ``10%`` de bonificacion en los puntos de experiencia obtenidos.", true)
    .addField("**Vengeance Avenger**","El diseño Avenger incorpora un ``10%`` adicional de escudos.", true)
    .addField("**Vengeance Corsair**","Otorga un ``10%`` de bonificacion en los puntos de honor obtenidos.", true)
    .addField("**Vengeance Revenge**","Otorga un ``5%`` de bonificacion en los danos que causa.");
  message.channel.send({embed});
}
