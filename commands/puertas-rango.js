const Discord = require("discord.js");
const client = new Discord.Client();

exports.run = async (client, message) => {
  const embed = new Discord.RichEmbed()
  .setTitle("**Puertas Galacticas**")
  .setAuthor("MYAD DO","https://cdn.discordapp.com/emojis/401818289023483904.png?v=1%22")
  .setColor(0x00AF46)
  .setDescription("**Recompensas para Rango**")
  .setFooter("MYAD TECHNOLOGIES S.L.E.","https://cdn.discordapp.com/emojis/401818289023483904.png?v=1%22")
  .setThumbnail("http://myriad.bitcoinbetmaster.com/wp-content/uploads/2016/09/puertas.png")
  .setTimestamp()
  .setURL("http://myriad.bitcoinbetmaster.com/")
  .addField("**Puerta:	Expe/Hon:**", "**Alfa:**\nExperiencia:	4.000.000\nHonor:	100.000\n\n**Beta:**\nExperiencia:	8.000.000\nHonor:	200.000\n\n**Gamma:**\nExperiencia:	12.000.000\nHonor:	300.000\n\n**Delta:**\nExperiencia:	9.000.000\nHonor:	225.000\n\n**Epsilon:**\nExperiencia:	5.000.000\nHonor:	150.000\n\n**Zeta:**\nExperiencia:	6.000.000\nHonor:	200.000\n\n**Kappa:**\nExperiencia:	9.000.000\nHonor:	300.000\n\n**Lambda:**\nExperiencia:	2.750.000\nHonor:	100.000\n\n**Kronos:**\nExperiencia:	12.000.000\nHonor:	450.000\n\n**Hades:**\nExperiencia:	4.000.000\nHonor:	200.000\n\n**Kuiper:**\nExperiencia:	2.000.000\nHonor:	150.000")
  message.channel.send({embed});
}
