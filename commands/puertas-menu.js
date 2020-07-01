const Discord = require("discord.js");
const client = new Discord.Client();

exports.run = async (client, message) => {
  const embed = new Discord.RichEmbed()
  .setTitle("**Puertas Galacticas**")
  .setAuthor("MYAD DO","https://cdn.discordapp.com/emojis/401818289023483904.png?v=1%22")
  .setColor(0x00AF46)
  .setDescription("**Menu de Comandos:**")
  .setFooter("MYAD TECHNOLOGIES S.L.E.","https://cdn.discordapp.com/emojis/401818289023483904.png?v=1%22")
  .setThumbnail("https://cdn.discordapp.com/attachments/507454734139916288/598839520846282752/puertas.png")
  .setTimestamp()
 // .setURL("http://myriad.bitcoinbetmaster.com/")
  .addField("**Recompensas o Oleadas:**", "-r = Recompensas\n-o = Oleadas", true)
  .addField("**Ejemplar:**", "/alfa-o\n/alfa-r", true)
  .addField("**Puerta:**", "/Alfa\n/Beta\n/Gamma\n/Delta\n/Epsilon\n/Zeta\n/Kappa\n/Lambda\n/Kronos\n/Hades\n/Kuiper")
  .addField("**Otros Comandos:**", "**Recompensas GG para Rango:** /puertas-rango\n**Botines que da cada puerta:** /puertas-botines\n**Ficheros que da cada puerta:** /puertas-ficheros", true);
  message.channel.send({embed});
}
