const Discord = require("discord.js");
const client = new Discord.Client();

exports.run = async (client, message) => {
  const embed = new Discord.RichEmbed()
  .setTitle("DarkOrbit: Puerta Galactica Epsilon")
  .setAuthor("MYAD DO","https://cdn.discordapp.com/emojis/401818289023483904.png?v=1%22")
  .setColor(0x00AF46)
  .setDescription("La puerta epsilon debe ser construida (128 piezas) usando el materializador, una vez completada podras acceder a ella. El portal de esta Galaxy Gate se encuentra en el mapa x-1 de tu empresa junto a la base.")
  .setFooter("MYAD TECHNOLOGIES S.L.E.","https://cdn.discordapp.com/emojis/401818289023483904.png?v=1%22")
  //.setImage("http://myriad.bitcoinbetmaster.com/wp-content/uploads/2016/09/epsilon-1.png%22")
  .setThumbnail("https://cdn.discordapp.com/attachments/507454734139916288/568071625942237194/Epsilon_Gate.png")
  .setTimestamp()
  .setURL("http://myriad.bitcoinbetmaster.com/darkorbit-puerta-galactica-epsilon/")
  .addField("epsilon consiste de 11 rondas(mapas) de 3 oleadas(40) cada una exceptuando al 10 y 11 que constan de 1 y 2 oleadas respectivamente. ","**Rondas y Oleadas.**")
  .addField("Rondas 1-5","1 Ronda\n5 Vagrant\n6 Vagrant\n6 Vagrant\n \n 2 Ronda\n 5 Vagrant\n 5 Marauder\n 7 Vagrant\n \n 3 Ronda\n 5 Marauder\n 6 Outcast\n 3 Outcast\n \n 4 Ronda\n 5 Marauder\n 6 Outcast\n 6 Outcast\n \n 5 Ronda\n 6 Outcast\n 5 Corsairs\n 4 Corsairs \n ", true)

  .addField("Rondas 6-11","6 Ronda\n 4 Corsairs\n 6 Outcast\n 5 Hooligan\n \n 7 Ronda\n 5 Corsair\n 5 Hooligan\n 4 Hooligan\n \n 8 Ronda\n 6 Hooligan\n 4 Hooligan\n 4 Ravager\n \n 9 Ronda\n 5 Hooligan\n 6 Ravager\n 3 Convict\n \n 10 Ronda\n 4 Convict\n \n 11 Ronda\n 5 Ravager\n 6 Convict", true);
  message.channel.send({embed});
}
