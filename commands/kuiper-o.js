const Discord = require("discord.js");
const client = new Discord.Client();

exports.run = async (client, message) => {
  const embed = new Discord.RichEmbed()
  .setTitle("DarkOrbit: Puerta Galactica Kuiper")
  .setAuthor("MYAD DO","https://cdn.discordapp.com/emojis/401818289023483904.png?v=1%22")
  .setColor(0x00AF46)
  .setDescription("La puerta Kuiper no se construye como el resto de las puertas. Solo si completas y superas el resto de puertas, recibiras las distintas partes de la puerta (100 piezas), una vez completada podras acceder a ella. El portal de esta Galaxy Gate se encuentra en el mapa x-1 de tu empresa junto a la base. A tener en cuenta que una vez dentro de la puerta y finalizado un mapa, se podra acceder al siguiente a traves del portal de la derecha y al mapa x-1 a traves del portal de la izquierda (al contrario que en el resto de puertas)")
  .setFooter("MYAD TECHNOLOGIES S.L.E.","https://cdn.discordapp.com/emojis/401818289023483904.png?v=1%22")
  //.setImage("http://myriad.bitcoinbetmaster.com/wp-content/uploads/2016/09/kuiper.gif")
  .setThumbnail("https://cdn.discordapp.com/attachments/507454734139916288/568071672742281217/kuiper.gif")
  .setTimestamp()
  .setURL("http://myriad.bitcoinbetmaster.com/darkorbit-puerta-galactica-kuiper/")
  .addField("Kuiper consiste de 5 rondas(mapas) en 54 oleadas.","**Rondas y Oleadas.**")
  .addField("Rondas 1-3","1 Ronda\n20 StreuneR\n5 StreuneR\n1 Streuner Rocketeer\n \n2 Ronda\n10 Uber StreuneR\n10 Boss Saimons\n1 Streuner Rocketeer\n2 Streuner Soldier\n10 Streuner Soldier\n15 Saimons\n \n3 Ronda\n5 Streuner Soldier\n1 Streuner Specialist\n10 Streuner Soldier\n4 Boss Sibelones\n1 Streuner Rocketeer\n10 Streuner Soldier\n2 Streuner Specialist\n10 Streuner Soldier\n2 Streuner Specialist\n1 Streuner Rocketeer", true)
  .addField("Rondas 4-5","4 Ronda\n1 Streuner Turret\n1 Streuner Turret\n1 Streuner Turret (arriba)\n1 Streuner Turret (abajo)\n2 Streuner Soldier\n1 Streuner Specialist\n1 Streuner Rocketeer\n1 Streuner Rocketeer\n2 Uber Sibelones\n10 Boss Saimons\n3 Streuner Soldier\n1 Streuner Specialist\n1 Streuner Rocketeer\n3 Streuner Soldier\n1 Streuner Specialist\n2 Streuner Soldier\n1 Streuner Specialist\n1 Streuner Rocketeer\n10 Streuner Soldier\n2 Streuner Specialist\n \n5 Ronda\n1 Streuner Rocketeer\n2 Streuner Rocketeer\n6 Streuner Rocketeer\n1 Streuner Emperor\n1 Streuner Turret\n5 Streuner Soldier\n1 Streuner Specialist\n2 Uber Sibelones\n1 Streuner Rocketeer\n10 Streuner Soldier\n2 Streuner Specialist\n10 Streuner Soldier\n2 Streuner Specialist\n2 Streuner Rocketeer\n10 Streuner Soldier", true);
  message.channel.send({embed});
}
