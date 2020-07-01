const Discord = require("discord.js");
const client = new Discord.Client();

exports.run = async (client, message) => {
  const embed = new Discord.RichEmbed()
    .setTitle("**Formaciones**")
    .setAuthor("MYAD DO","https://cdn.discordapp.com/emojis/401818289023483904.png?v=1%22")
    .setColor(0x00AE86)
    .setDescription("**Formación Doble Flecha**")
    .setFooter("MYAD TECHNOLOGIES S.L.E.","https://cdn.discordapp.com/emojis/401818289023483904.png?v=1%22")
    .setThumbnail("https://cdn.discordapp.com/attachments/507454734139916288/568096187580678164/f-06-DoubleArrow.gif")
    .setTimestamp()
    .setURL("http://myriad.bitcoinbetmaster.com/")
    .addField("**Ventajas**","Ignora el 10% de los daños hacia el escudo y los desvía directamente a los PV.", true)
    .addField("**Desventajas**","Reduce el valor de tu escudo un 20%.", true)
    .addField("**Parche**","En el último parche han añadido esta ventaja, +30% daños en los misiles", true)
    .addField("**Precio**","75.000 U. ", true);
  message.channel.send({embed});
}
