const Discord = require("discord.js");
const client = new Discord.Client();

exports.run = async (client, message) => {
  const embed = new Discord.RichEmbed()
    .setTitle("Disenos Vant")
    .setAuthor("MYAD DO","https://cdn.discordapp.com/emojis/401818289023483904.png?v=1%22")
    .setColor(0x00AE86)
    .setDescription("Demon")
    .setFooter("MYAD TECHNOLOGIES S.L.E.","https://cdn.discordapp.com/emojis/401818289023483904.png?v=1%22")
    .setThumbnail("http://myriad.bitcoinbetmaster.com/wp-content/uploads/2018/11/demon-epic.gif")
    .setTimestamp()
    .setURL("https://board-es.darkorbit.com/threads/faqs-disenos-para-los-vants.113726/#post-991716")
    .addField("Bonificacion de demon","Este diseno vant no tripulado le dara 1% de bonificacion al dano de misiles.\nSi los 10 VANT estan equipados con diseños Demon, tambien obtendra una reduccion del tiempo de enfriamiento de cohetes 5%.\n**Bono final**:\n10% adicional de danos de misiles.\n**Bonificacion del conjunto:**\n5% Reduccion de enfriamiento.\n**Bonificacion total de 10 VANT equipados**:\n10% Dano Misil, 5% Reduccion de enfriamiento.", true);
  message.channel.send({embed});
}
