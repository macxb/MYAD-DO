const Discord = require("discord.js");
const client = new Discord.Client();

exports.run = async (client, message) => {
  const embed = new Discord.RichEmbed()
  .setTitle("**Armas Láser**")
  .setAuthor("MYAD DO","https://cdn.discordapp.com/emojis/401818289023483904.png?v=1%22")
  .setColor(0x00AE86)
  .setDescription("**LF-4 Magmadrill**")
  .setFooter("MYAD TECHNOLOGIES S.L.E.","https://cdn.discordapp.com/emojis/401818289023483904.png?v=1%22")
  .setThumbnail("https://cdn.discordapp.com/attachments/507454734139916288/515605322673553411/lf4_2017.gif")
  .setTimestamp()
  .setURL("http://myriad.bitcoinbetmaster.com/")
  .addField("**Descripción en el juego**","¡Este LF-4 no se puede mejorar, pero de por si pega 212 de daño con un 5% de daño adicional contra jugadores!", true)
  message.channel.send({embed});
}
