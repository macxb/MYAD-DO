const Discord = require("discord.js");
const client = new Discord.Client();

exports.run = async (client, message) => {
  const embed = new Discord.RichEmbed()
    .setTitle("**Naves**")
    .setAuthor("MYAD DO","https://cdn.discordapp.com/emojis/401818289023483904.png?v=1%22")
    .setColor(0x00AE86)
    .setDescription("**Phoenix**")
    .setFooter("MYAD TECHNOLOGIES S.L.E.","https://cdn.discordapp.com/emojis/401818289023483904.png?v=1%22")
    .setThumbnail("https://cdn.discordapp.com/attachments/507454734139916288/514170312921841669/phoenix_100x100.png")
    .setTimestamp()
    .setURL("http://myriad.bitcoinbetmaster.com/")
    .addField("**Descripción en el Juego**","Esta cuatrolatas gratuita te permitira resurgir de las cenizas de tu ludopatia o tu falta de prevision como un fenix y te llevara por ahi hasta que te puedas permitir algo mejor!", true)
    .addField("**Especificaciones:**","Puntos maximos de vida	4000\nMax Nanocasco 			4000\nVelocidad				 320\nLaser: 				1\nGeneradores			   1\nExtra:				    1\nCarga:				    100", true);
  message.channel.send({embed});
}
