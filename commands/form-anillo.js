const Discord = require("discord.js");
const client = new Discord.Client();

exports.run = async (client, message) => {
  const embed = new Discord.RichEmbed()
    .setTitle("**Formaciones**")
    .setAuthor("MYAD DO","https://cdn.discordapp.com/emojis/401818289023483904.png?v=1%22")
    .setColor(0x00AE86)
    .setDescription("**Formación Anillo**")
    .setFooter("MYAD TECHNOLOGIES S.L.E.","https://cdn.discordapp.com/emojis/401818289023483904.png?v=1%22")
    .setThumbnail("https://cdn.discordapp.com/attachments/507454734139916288/568096101136203796/Ring.gif")
    .setTimestamp()
    .setURL("http://myriad.bitcoinbetmaster.com/")
    .addField("**Ventajas**","Aumenta el escudo en un 180%", true)
    .addField("**Desventajas**","El daño de los láseres se reduce en un 40% y se aumenta el tiempo de los lanzamisiles en un 40%.", true)
    .addField("**Parche**","En el último parche han bajado del 180% de escudo al 85%.", true)
    .addField("**Precio**","150.000 U. ", true);
  message.channel.send({embed});
}
