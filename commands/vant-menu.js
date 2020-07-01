const Discord = require("discord.js");
const client = new Discord.Client();

exports.run = async (client, message) => {
  const embed = new Discord.RichEmbed()
    .setTitle("Disenos de Vant Epicos")
    .setAuthor("MYAD DO","https://cdn.discordapp.com/emojis/401818289023483904.png?v=1%22")
    .setColor(0x00AE86)
    .setDescription("Comandos:")
    .setFooter("MYAD TECHNOLOGIES S.L.E.","https://cdn.discordapp.com/emojis/401818289023483904.png?v=1%22")
    .setThumbnail("http://myriad.bitcoinbetmaster.com/wp-content/uploads/2017/05/2df1c5d0ad907de253292d26095630f8.gif")
    .setTimestamp()
    .setURL("https://board-es.darkorbit.com//threads/faqs-disenos-para-los-vants.113726/")
    .addField("Vants:","/vant-havoc\n/vant-hercules\n/vant-spartan\n/vant-demon", true);
  message.channel.send({embed});
}
