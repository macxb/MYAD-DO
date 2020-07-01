const Discord = require("discord.js");
const client = new Discord.Client();

exports.run = async (client, message) => {
  const embed = new Discord.RichEmbed()
    .setTitle("Disenos Vant")
    .setAuthor("MYAD DO","https://cdn.discordapp.com/emojis/401818289023483904.png?v=1%22")
    .setColor(0x00AE86)
    .setDescription("Hercules")
    .setFooter("MYAD TECHNOLOGIES S.L.E.","https://cdn.discordapp.com/emojis/401818289023483904.png?v=1%22")
    .setThumbnail("http://myriad.bitcoinbetmaster.com/wp-content/uploads/2018/11/hercules.gif")
    .setTimestamp()
    .setURL("https://board-es.darkorbit.com/threads/faqs-disenos-para-los-vants.113726/#post-991713")
    .addField("Bonificacion de hercules","+ 15% de bonificacion a los escudos equipados en el vant no tripulado si el diseno de Hercules esta equipado en el.\n+ 20% de HP aumenta si el Hercules esta equipado en todos los drones . (10 Hercules con Apis y Zeus ).");
  message.channel.send({embed});
}
