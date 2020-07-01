const Discord = require("discord.js");
const client = new Discord.Client();

exports.run = async (client, message) => {
  message.delete((message));
  const embed = new Discord.RichEmbed()
  .setTitle("**Cristales Cismaticos**")
  .setAuthor("MYAD DO","https://cdn.discordapp.com/emojis/401818289023483904.png?v=1%22")
  .setColor(0x00AF46)
  .setDescription("**Donde conseguirlos:**")
  .setFooter("MYAD TECHNOLOGIES S.L.E.","https://cdn.discordapp.com/emojis/401818289023483904.png?v=1%22")
  .setThumbnail("https://cdn.discordapp.com/emojis/378907115521310721.png?v=1")
  .setTimestamp()
  .setURL("http://myriad.bitcoinbetmaster.com")
  .addField("**Siempre:**","Delta	 6\nKronos	10\nKuiper	8\n**Estas recompensas se suman a las que dan en dias cuando hay Botines Especiales.**")
  .addField("**Cuando hay Botines Especiales:**","Alfa		5-10\nBeta		5-10\nGamma	   8-16\nDelta	   10-15\nEpsilon	 10-15\nZeta	    10-15\nKappa	   10-15\nLambda	  10-15\nKronos	  25-30\nHades	   25-30\nKuiper	  25-30");
  message.channel.send({embed});
}
