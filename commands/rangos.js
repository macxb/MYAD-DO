const Discord = require("discord.js");
const client = new Discord.Client();

exports.run = async (client, message) => {
  const embed = new Discord.RichEmbed()
    .setTitle("**Lista de Rangos**")
    .setAuthor("MYAD DO","https://cdn.discordapp.com/emojis/401818289023483904.png?v=1%22")
    .setColor(0x00AE86)
    .setDescription("**Nueva Distribucion**")
    .setFooter("MYAD TECHNOLOGIES S.L.E.","https://cdn.discordapp.com/emojis/401818289023483904.png?v=1%22")
    .setImage("https://cdn.discordapp.com/attachments/507454734139916288/550064779687886909/unknown.png")
    .setThumbnail("https://cdn.discordapp.com/attachments/507454734139916288/550066922385834076/darkorbit-rangos.gif")
    .setTimestamp()
    .setURL("http://myriad.bitcoinbetmaster.com/")
    .addField("**¡Oido piloto!**","```Buscando...``` :white_check_mark:", true);
  message.channel.send({embed});
}
