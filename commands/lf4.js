const Discord = require("discord.js");
const client = new Discord.Client();

exports.run = async (client, message) => {
  const embed = new Discord.RichEmbed()
    .setTitle("**Armas Láser**")
    .setAuthor("MYAD DO","https://cdn.discordapp.com/emojis/401818289023483904.png?v=1%22")
    .setColor(0x00AE86)
    .setDescription("**LF-4**")
    .setFooter("MYAD TECHNOLOGIES S.L.E.","https://cdn.discordapp.com/emojis/401818289023483904.png?v=1%22")
    .setThumbnail("https://cdn.discordapp.com/attachments/507454734139916288/515605765130813460/lf-4_100x100.png")
    .setTimestamp()
    .setURL("http://myriad.bitcoinbetmaster.com/")
    .addField("**Descripción en el juego**","¡El LF-4 es el arma más poderosa del juego con nada más y nada menos que ocasionando 200 de daño!", true)
    .addField("**Mejoras**","El LF-4 se puede mejorar hasta el nivel 16 con un daño de 212.", true);
  message.channel.send({embed});
}
