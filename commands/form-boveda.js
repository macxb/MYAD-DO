const Discord = require("discord.js");
const client = new Discord.Client();

exports.run = async (client, message) => {
  const embed = new Discord.RichEmbed()
    .setTitle("**Formaciones**")
    .setAuthor("MYAD DO","https://cdn.discordapp.com/emojis/401818289023483904.png?v=1%22")
    .setColor(0x00AE86)
    .setDescription("**Formación Bóveda**")
    .setFooter("MYAD TECHNOLOGIES S.L.E.","https://cdn.discordapp.com/emojis/401818289023483904.png?v=1%22")
    .setThumbnail("https://cdn.discordapp.com/attachments/507454734139916288/568096066730328064/Dome.gif")
    .setTimestamp()
    .setURL("http://myriad.bitcoinbetmaster.com/")
    .addField("**Ventajas**","Aumenta el valor de tu escudo en un 30% y lo regenera un 0,5% por segundo.\nReduce un 25% los tiempos de recarga de misiles y lanzamisiles", true)
    .addField("**Desventajas**","También reduce los daños de tus láseres en un 50% y la velocidad en un 50%.​", true)
    .addField("**Precio**","150.000 U. ", true);
  message.channel.send({embed});
}
