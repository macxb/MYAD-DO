const Discord = require("discord.js");
const client = new Discord.Client();

exports.run = async (client, message) => {
  const embed = new Discord.RichEmbed()
    .setTitle("**Formaciones**")
    .setAuthor("MYAD DO","https://cdn.discordapp.com/emojis/401818289023483904.png?v=1%22")
    .setColor(0x00AE86)
    .setDescription("**Formación Corazón**")
    .setFooter("MYAD TECHNOLOGIES S.L.E.","https://cdn.discordapp.com/emojis/401818289023483904.png?v=1%22")
    .setThumbnail("https://cdn.discordapp.com/attachments/507454734139916288/568096134791299082/Heart.gif")
    .setTimestamp()
    .setURL("http://myriad.bitcoinbetmaster.com/")
    .addField("**Ventajas**","Aumenta tus PV un 20% y el valor de tu escudo en un 10%.", true)
    .addField("**Desventajas**","Reduce los daños láser en un 5%.", true)
    .addField("**Parche**","En el último parche han añadido esta ventaja: +20% de escudo.")
    .addField("**Precio**","100.000 U. ", true);
  message.channel.send({embed});
}
