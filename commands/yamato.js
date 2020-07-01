const Discord = require("discord.js");
const client = new Discord.Client();

exports.run = async (client, message) => {
  const embed = new Discord.RichEmbed()
    .setTitle("**Naves**")
    .setAuthor("MYAD DO","https://cdn.discordapp.com/emojis/401818289023483904.png?v=1%22")
    .setColor(0x00AE86)
    .setDescription("**Yamato**")
    .setFooter("MYAD TECHNOLOGIES S.L.E.","https://cdn.discordapp.com/emojis/401818289023483904.png?v=1%22")
    .setThumbnail("https://cdn.discordapp.com/attachments/507454734139916288/514181013362966528/yamato_100x100.png")
    .setTimestamp()
    .setURL("http://myriad.bitcoinbetmaster.com/")
    .addField("**Descripción en el Juego**","Esta nave esta de vuelta actualizada, pavoneate con ella!", true)
    .addField("**Especificaciones:**","Puntos maximos de vida	8000\nMax Nanocasco 			8000\nVelocidad				 340\nLaser: 				2\nGeneradores			   2\nExtra:				    1\nCarga:				    200", true)
    .addField("**Yamato Ronin**","Este diseño de la Yamato tiene considerablemente mas vida, concretamente 200000PV", true)
    .addField("**Habilidades**","**Rayo Veloz:**\nEsta habilidad aumenta tu velocidad temporalmente.", true);
  message.channel.send({embed});
}
