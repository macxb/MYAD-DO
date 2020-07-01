const Discord = require("discord.js");
const client = new Discord.Client();

exports.run = async (client, message) => {
  const embed = new Discord.RichEmbed()
    .setTitle("**Naves**")
    .setAuthor("MYAD DO","https://cdn.discordapp.com/emojis/401818289023483904.png?v=1%22")
    .setColor(0x00AE86)
    .setDescription("**Nostromo**")
    .setFooter("MYAD TECHNOLOGIES S.L.E.","https://cdn.discordapp.com/emojis/401818289023483904.png?v=1%22")
    .setThumbnail("https://cdn.discordapp.com/attachments/507454734139916288/514174637698056193/nostromo_100x100.png")
    .setTimestamp()
    .setURL("http://myriad.bitcoinbetmaster.com/")
    .addField("**Descripción en el Juego**","La Nostromo es un caza estelar con un buen equipamiento y velocidad aceptable.", true)
    .addField("**Especificaciones:**","Puntos maximos de vida	120000\nMax Nanocasco 			120000\nVelocidad				 340\nLaser: 				7\nGeneradores			   10\nExtra:				    3\nCarga:				    700", true)
    .addField("**Nostromo Diplomat**","Las caracteristicas especiales de este diseño son:\n140.000 puntos de vida (20.000 mas que la Nostromo).\n900 de bodega (200 mas que la Nostromo). El diseño no esta disponible.", true)
    .addField("**Nostromo Envoy**","Las caracteristicas especiales de este diseño son:\n160.000 puntos de vida (40.000 mas que la Nostromo).\n1.000 de bodega (300 mas que la Nostromo).\n10 ranuras para lasers (3 mas que la Nostromo).", true)
    .addField("**Nostromo Ambassador**","Las caracteristicas especiales de este diseño son:\n220.000 puntos de vida (100.000 mas que la Nostromo).\n1.500 de bodega (800 mas que la Nostromo).\n12 ranuras para lasers (5 mas que la Nostromo).\n12 ranuras para generadores (2 mas que la Nostromo).\n**El diseño incluye, ademas:**\n2 canones láser LF-4.\n1 diseño Havoc para los VANTs.\n10.000 municiones laser RSB-75.\n200 municiones PEM-01.\n1 Potenciador de daños DMG-B01.\n1 Potenciador de escudo SHD-B01.\n1 Potenciador de honor HON-B01.\n200 Energias extra.\n10 Llaves de botin.\n1 mes de membresia Premium.", true);
  message.channel.send({embed});
}
