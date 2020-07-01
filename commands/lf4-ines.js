const Discord = require("discord.js");
const client = new Discord.Client();

exports.run = async (client, message) => {
  const embed = new Discord.RichEmbed()
    .setTitle("**Armas Láser**")
    .setAuthor("MYAD DO","https://cdn.discordapp.com/emojis/401818289023483904.png?v=1%22")
    .setColor(0x00AE86)
    .setDescription("**LF-4 Inestable**")
    .setFooter("MYAD TECHNOLOGIES S.L.E.","https://cdn.discordapp.com/emojis/401818289023483904.png?v=1%22")
    .setThumbnail("https://cdn.discordapp.com/attachments/507454734139916288/515604585457516560/UnstableLF4.gif")
    .setTimestamp()
    .setURL("http://myriad.bitcoinbetmaster.com/")
    .addField("**Descripción en el juego**","¡El valor de la variabilidad es del 42%. El resto de los valores coinciden con los del LF-4 normal; alcance de 600, una posibilidad de impacto del 80% y un enfriamiento de 1 segundo!\nOcasiona un mínimo de 128 y un máximo de 220 daños por disparo.", true);
  message.channel.send({embed});
}
