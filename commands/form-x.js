const Discord = require("discord.js");
const client = new Discord.Client();

exports.run = async (client, message) => {
  const embed = new Discord.RichEmbed()
    .setTitle("**Formaciones**")
    .setAuthor("MYAD DO","https://cdn.discordapp.com/emojis/401818289023483904.png?v=1%22")
    .setColor(0x00AE86)
    .setDescription("**Formación X**")
    .setFooter("MYAD TECHNOLOGIES S.L.E.","https://cdn.discordapp.com/emojis/401818289023483904.png?v=1%22")
    .setThumbnail("https://cdn.discordapp.com/attachments/507454734139916288/568096227934076932/X.gif")
    .setTimestamp()
    .setURL("http://myriad.bitcoinbetmaster.com/")
    .addField("**Ventajas**","Aumenta tus puntos de vida un 8%, causas un 1% más a los alienígenas y recibes un 5% más de experiencia.", true)
    .addField("**Desventajas**","No puedes atacar a invasores y -100% de honor.", true)
    .addField("**Precio**","300.000 C.", true);
  message.channel.send({embed});
}
