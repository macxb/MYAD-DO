const Discord = require("discord.js");
const client = new Discord.Client();

exports.run = async (client, message) => {
  message.delete((message));
  const embed = new Discord.RichEmbed()
  .setTitle("**Dia de Dobles Recompensas GG**")
  .setAuthor("MYAD DO","https://cdn.discordapp.com/emojis/401818289023483904.png?v=1%22")
  .setColor(0x00AF46)
  .setDescription("Que son las dobles recompensas?:")
  .setFooter("MYAD TECHNOLOGIES S.L.E.","https://cdn.discordapp.com/emojis/401818289023483904.png?v=1%22")
  .setThumbnail("http://myriad.bitcoinbetmaster.com/wp-content/uploads/2018/10/darkorbit-gg-double.jpg")
  .setTimestamp()
  .setURL("http://myriad.bitcoinbetmaster.com/")
  .addField("**Doble Recompensas GG:**","Durante el dia de doble recompensa se duplicaran los puntos de experiencia y honor ademas de productos extras como ficheros, llaves, bonos de reparacion o posibles recompensas en forma de disenos de vants o LF-4; sin embargo NO SE APLICA al uridium, creditos, municion, cristales y partes para la puerta Kronos.", true)
  message.channel.send({embed});
}
