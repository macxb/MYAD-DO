const Discord = require("discord.js");
const client = new Discord.Client();

exports.run = async (client, message) => {
  message.delete((message));
  const embed = new Discord.RichEmbed()
    .setTitle("**Botines Verdes**")
    .setAuthor("MYAD DO","https://cdn.discordapp.com/emojis/401818289023483904.png?v=1%22")
    .setColor(0x00AF46)
    .setDescription("**Como conseguir:**")
    .setFooter("MYAD TECHNOLOGIES S.L.E.","https://cdn.discordapp.com/emojis/401818289023483904.png?v=1%22")
    .setThumbnail("http://myriad.bitcoinbetmaster.com/wp-content/uploads/2018/10/botin-verde.gif")
    .setTimestamp()
    .setURL("http://myriad.bitcoinbetmaster.com/")
    .addField("**Las llaves pueden comprarse en la tienda.**","Coste: 1500 Uridium ```Escaneando contenido..... \n¡Dispositivo Anti-Escaneo encontrado!``` ```Intentando penetrar campo \nAnti-Escaneo....\nEscaneo bloqueado por modulo:\n**BP-01**``` ```¡INTENTO FALLIDO!```:x: ", true);

  message.channel.send({embed});
}
