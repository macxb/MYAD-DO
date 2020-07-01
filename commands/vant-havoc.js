const Discord = require("discord.js");
const client = new Discord.Client();

exports.run = async (client, message) => {
  const embed = new Discord.RichEmbed()
    .setTitle("Disenos Vant")
    .setAuthor("MYAD DO","https://cdn.discordapp.com/emojis/401818289023483904.png?v=1%22")
    .setColor(0x00AE86)
    .setDescription("Havoc")
    .setFooter("MYAD TECHNOLOGIES S.L.E.","https://cdn.discordapp.com/emojis/401818289023483904.png?v=1%22")
    .setThumbnail("http://myriad.bitcoinbetmaster.com/wp-content/uploads/2018/11/havok.gif")
    .setTimestamp()
    .setURL("https://board-es.darkorbit.com/threads/faqs-disenos-para-los-vants.113726/")
    .addField("Bonificacion de havoc","+10% de bonificacion por dano a tu cuenta si todos los drones estan equipados con el diseno Havoc.");
  message.channel.send({embed});
}
