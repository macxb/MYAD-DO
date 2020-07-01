const Discord = require("discord.js");
const client = new Discord.Client();

exports.run = async (client, message) => {
  const embed = new Discord.RichEmbed()
    .setTitle("**Formaciones**")
    .setAuthor("MYAD DO","https://cdn.discordapp.com/emojis/401818289023483904.png?v=1%22")
    .setColor(0x00AE86)
    .setDescription("Formación Murciélago")
    .setFooter("MYAD TECHNOLOGIES S.L.E.","https://cdn.discordapp.com/emojis/401818289023483904.png?v=1%22")
    .setThumbnail("https://cdn.discordapp.com/attachments/507454734139916288/568096110539702272/Bat.gif")
    .setTimestamp()
    .setURL("http://myriad.bitcoinbetmaster.com/")
    .addField("**Ventajas**","Aumenta los daños por láser hacia los NPC en un 8% y te proporciona un bono de PE al derrotar NPC de un 8%.", true)
    .addField("**Desventajas**","Reduce tu velocidad un 15%.", true)
    .addField("**Precio**","125.000 U. ", true);
  message.channel.send({embed});
}
