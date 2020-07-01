const Discord = require("discord.js");
const client = new Discord.Client();
const config = require("../config.json");

exports.run = async (client, message) => {
  const embed = new Discord.RichEmbed()
    .setTitle("**Puertas Galacticas**")
    .setAuthor("MYAD DO","https://cdn.discordapp.com/emojis/401818289023483904.png?v=1%22")
    .setColor(0x00AF46)
    .setDescription("**Recompensas**")
    .setFooter("MYAD TECHNOLOGIES S.L.E.","https://cdn.discordapp.com/emojis/401818289023483904.png?v=1%22")
    .setThumbnail("http://myriad.bitcoinbetmaster.com/wp-content/uploads/2016/09/puertas.png")
    .setTimestamp()
    .setURL("http://myriad.bitcoinbetmaster.com/")
    .addField("**Puerta:**", "**Alfa:**\n**Beta:**\n**Gamma:**\n**Delta:**\n**Epsilon:**\n**Zeta:**\n**Kappa:**\n**Lambda:**\n**Kronos:**\n**Hades:**\n**Kuiper:**", true)
    .addField("**Numero de Botines Verdes:**", "0\n0\n0\n0\n5\n25\n5\n5\n10\n4\n5", true);
  message.channel.send({embed});
}
