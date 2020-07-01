const Discord = require("discord.js");
const client = new Discord.Client();

exports.run = async (client, message) => {
  const embed = new Discord.RichEmbed()
    .setTitle("**Naves**")
    .setAuthor("MYAD DO","https://cdn.discordapp.com/emojis/401818289023483904.png?v=1%22")
    .setColor(0x00AE86)
    .setDescription("**Liberator**")
    .setFooter("MYAD TECHNOLOGIES S.L.E.","https://cdn.discordapp.com/emojis/401818289023483904.png?v=1%22")
    .setThumbnail("https://cdn.discordapp.com/attachments/507454734139916288/514185576073658369/liberator_100x100.png")
    .setTimestamp()
    .setURL("http://myriad.bitcoinbetmaster.com/")
    .addField("**Descripción en el Juego**","Una buena opcion como sustituta de la Phoenix. De hecho, al terminar el Tutorial, es la nave que se posee.", true)
    .addField("**Especificaciones:**","Puntos maximos de vida	16000\nMax Nanocasco 			16000\nVelocidad				 330\nLaser: 				4\nGeneradores			   6\nExtra:				    2\nCarga:				    400", true);
  message.channel.send({embed});
}
