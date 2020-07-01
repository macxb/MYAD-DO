const Discord = require("discord.js");
const client = new Discord.Client();

exports.run = async (client, message) => {
  const embed = new Discord.RichEmbed()
  .setTitle("**Armas Láser: LF4**")
  .setAuthor("MYAD DO","https://cdn.discordapp.com/emojis/401818289023483904.png?v=1%22")
  .setColor(0x00AF46)
  .setDescription("**Menu de Comandos:**")
  .setFooter("MYAD TECHNOLOGIES S.L.E.","https://cdn.discordapp.com/emojis/401818289023483904.png?v=1%22")
  .setThumbnail("http://myriad.bitcoinbetmaster.com/wp-content/uploads/2016/09/puertas.png")
  .setTimestamp()
  .setURL("http://myriad.bitcoinbetmaster.com/")
  .addField("**Comandos:**", "/lf4\n/lf4-ines\n/lf4-md\n/lf4-hp\n/lf4-pd")
  message.channel.send({embed});
}
