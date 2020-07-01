const Discord = require("discord.js");
const client = new Discord.Client();

exports.run = async (client, message) => {
  const embed = new Discord.RichEmbed()
    .setTitle("**Naves**")
    .setAuthor("MYAD DO","https://cdn.discordapp.com/emojis/401818289023483904.png?v=1%22")
    .setColor(0x00AE86)
    .setDescription("**Piranha**")
    .setFooter("MYAD TECHNOLOGIES S.L.E.","https://cdn.discordapp.com/emojis/401818289023483904.png?v=1%22")
    .setThumbnail("https://cdn.discordapp.com/attachments/507454734139916288/514186043562393640/piranha_100x100.png")
    .setTimestamp()
    .setURL("http://myriad.bitcoinbetmaster.com/")
    .addField("**Descripción en el Juego**","Comparada con otras naves de creditos, la Piranha es ligeramente mejor que la Liberator pero peor que la Bigboy, aunque mas rapida que esta.", true)
    .addField("**Especificaciones:**","Puntos maximos de vida	64000\nMax Nanocasco 			64000\nVelocidad				 360\nLaser: 				6\nGeneradores			   8\nExtra:				    2\nCarga:				    600", true);
  message.channel.send({embed});
}
