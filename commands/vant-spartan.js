const Discord = require("discord.js");
const client = new Discord.Client();

exports.run = async (client, message) => {
  const embed = new Discord.RichEmbed()
    .setTitle("Disenos Vant")
    .setAuthor("MYAD DO","https://cdn.discordapp.com/emojis/401818289023483904.png?v=1%22")
    .setColor(0x00AE86)
    .setDescription("Spartan")
    .setFooter("MYAD TECHNOLOGIES S.L.E.","https://cdn.discordapp.com/emojis/401818289023483904.png?v=1%22")
    .setThumbnail("https://cdn.discordapp.com/attachments/507454734139916288/707293904440918097/spartan.gif")
    .setTimestamp()
    .setURL("https://board-es.darkorbit.com/threads/faqs-disenos-para-los-vants.113726/#post-991714")
    .addField("Bonificacion de spartan","Cada VANT Spartan aumenta el dano y HP en 1%. Si todos sus drones tienen el diseno Spartan equipado, recibira un 10% adicional de escudo, un 5% en PV. y 10% de dano", true);
  message.channel.send({embed});
}
