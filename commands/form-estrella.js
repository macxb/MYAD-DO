const Discord = require("discord.js");
const client = new Discord.Client();

exports.run = async (client, message) => {
  const embed = new Discord.RichEmbed()
    .setTitle("**Formaciones**")
    .setAuthor("MYAD DO","https://cdn.discordapp.com/emojis/401818289023483904.png?v=1%22")
    .setColor(0x00AE86)
    .setDescription("**Formación Estrella**")
    .setFooter("MYAD TECHNOLOGIES S.L.E.","https://cdn.discordapp.com/emojis/401818289023483904.png?v=1%22")
    .setThumbnail("https://cdn.discordapp.com/attachments/507454734139916288/568096211492536335/f-04-Star.gif")
    .setTimestamp()
    .setURL("http://myriad.bitcoinbetmaster.com/")
    .addField("**Ventajas**","Aumenta los daños de misiles en un 25%.", true)
    .addField("**Desventajas**","Prolonga el tiempo de carga de los lanzamisiles en un 33%.", true)
    .addField("Nuevo parche","En el último parche han añadido un +10% de evasión", true)
    .addField("**Precio**","75.000 U.", true);
  message.channel.send({embed});
}
