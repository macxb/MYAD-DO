const Discord = require("discord.js");
const client = new Discord.Client();

exports.run = async (client, message) => {
  const embed = new Discord.RichEmbed()
    .setTitle("**Formaciones**")
    .setAuthor("MYAD DO","https://cdn.discordapp.com/emojis/401818289023483904.png?v=1%22")
    .setColor(0x00AE86)
    .setDescription("**Formación Diamante**")
    .setFooter("MYAD TECHNOLOGIES S.L.E.","https://cdn.discordapp.com/emojis/401818289023483904.png?v=1%22")
    .setThumbnail("https://cdn.discordapp.com/attachments/507454734139916288/568096179410305025/f-07-di---Diamond.gif")
    .setTimestamp()
    .setURL("http://myriad.bitcoinbetmaster.com/")
    .addField("**Ventajas**","Regenera un 1% del valor máximo de tu escudo por segundo hasta un máximo de 5.000 unidades por segundo.", true)
    .addField("**Desventajas**","Reduce el valor de tus PV un 30%.", true)
    .addField("**Precio**","100.000 U. ", true);
  message.channel.send({embed});
}
