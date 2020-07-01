const Discord = require("discord.js");
const client = new Discord.Client();

exports.run = async (client, message) => {
  const embed = new Discord.RichEmbed()
    .setTitle("**Formaciones**")
    .setAuthor("MYAD DO","https://cdn.discordapp.com/emojis/401818289023483904.png?v=1%22")
    .setColor(0x00AE86)
    .setDescription("**Formación Mariposa**")
    .setFooter("MYAD TECHNOLOGIES S.L.E.","https://cdn.discordapp.com/emojis/401818289023483904.png?v=1%22")
    .setThumbnail("https://cdn.discordapp.com/attachments/507454734139916288/568096157197402113/Moth.gif")
    .setTimestamp()
    .setURL("http://myriad.bitcoinbetmaster.com/")
    .addField("**Ventajas**","Ignora el 20% de los daños que absorben los escudos del enemigo y los desvía directamente a los PV.", true)
    .addField("**Desventajas**","Reduce cada segundo un 5% del valor máximo de tu escudo", true)
    .addField("**Precio**","100.000 U. ", true);
  message.channel.send({embed});
}
