const Discord = require("discord.js");
const client = new Discord.Client();

exports.run = async (client, message) => {
  const embed = new Discord.RichEmbed()
  .setTitle("DarkOrbit: Puerta Galactica Zeta")
  .setAuthor("MYAD DO","https://cdn.discordapp.com/emojis/401818289023483904.png?v=1%22")
  .setColor(0x00AF46)
  .setDescription("La puerta Zeta debe ser construida (111 piezas) usando el materializador, una vez completada podras acceder a ella. El portal de esta Galaxy Gate se encuentra en el mapa x-1 de tu empresa junto a la base.")
  .setFooter("MYAD TECHNOLOGIES S.L.E.","https://cdn.discordapp.com/emojis/401818289023483904.png?v=1%22")
  //.setImage("http://myriad.bitcoinbetmaster.com/wp-content/uploads/2016/09/zeta.gif")
  .setThumbnail("https://cdn.discordapp.com/attachments/507454734139916288/568071687892107280/zeta.gif")
  .setTimestamp()
  .setURL("http://myriad.bitcoinbetmaster.com/darkorbit-puerta-galactica-zeta/")
  .addField("Zeta consiste de 16 rondas(mapas). ","**Rondas y Oleadas.**")
  .addField("Rondas 1-5","Ronda 1\n3 Infernal\n4 Infernal\n3 Infernal\n \nRonda 2\n4 Infernal\n5 Infernal\n3 Scorcher\n \nRonda 3\n5 Infernal\n5 Scorcher\n2 Scorcher\n\nRonda 4\n4 Scorcher\n3 Scorcher\n2 Scorcher\n \nRonda 5\n4 Scorcher\n4 Scorcher\n2 Melter", true)
  .addField("Rondas 6-11","Ronda 6\n3 Scorcher\n4 Melter\n2 Melter\n \nRonda 7\n3 Melter\n4 Melter\n3 Melter\n \nRonda 8\n4 Melter\n5 Melter\n4 Melter\n \nRonda 9\n6 Infernal, 1 Devourer (ISH)\n \nRonda 10\n2 Infernal, 1 Devourer (ISH)\n \nRonda 11\n14 Scorcher", true)
  .addField("Rondas 12-16","Ronda 12\n3 Boss Streuner + 3 Uber Streuner + 3 StreuneR\n \nRonda 13\n3 Lordakia + 3 Boss Lordakia + 3 Uber Lordakia\n \nRonda 14\n3 Saimon + 3 Boss Saimon + 3 Uber Saimon\n \nRonda 15\n3 Sibelonit + 3 Boss Sibelonit + 3 Uber Sibelonit\n \nRonda 16\n3 Kristallin + 3 Boss Kristallin + 3 Uber Kristallin", true);
  message.channel.send({embed});
}
