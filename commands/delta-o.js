const Discord = require("discord.js");
const client = new Discord.Client();

exports.run = async (client, message) => {
  const embed = new Discord.RichEmbed()
    .setTitle("DarkOrbit: Puerta Galactica Delta")
    .setAuthor("MYAD DO","https://cdn.discordapp.com/emojis/401818289023483904.png?v=1%22")
    .setColor(0x00AF46)
    .setDescription("La puerta Delta debe ser construida (128 piezas) usando el materializador, una vez completada podras acceder a ella. El portal de esta Galaxy Gate se encuentra en el mapa x-1 de tu empresa junto a la base.")
    .setFooter("MYAD TECHNOLOGIES S.L.E.","https://cdn.discordapp.com/emojis/401818289023483904.png?v=1%22")
    //.setImage("http://myriad.bitcoinbetmaster.com/wp-content/uploads/2016/09/delta-1.png%22")
    .setThumbnail("https://cdn.discordapp.com/attachments/507454734139916288/568071637455339520/Galaxy_Gate_Delta.png")
    .setTimestamp()
    .setURL("http://myriad.bitcoinbetmaster.com/darkorbit-puerta-galactica-delta/")
    .addField("Delta consiste de 10 rondas(mapas) de 4 oleadas(40) cada una y el dano de los NPC es del doble al cuadruple de lo normal. ","**Rondas y Oleadas.**")
    .addField("Rondas 1-5","1 Ronda \n 5 Lordakias\n10 Mordones\n15 Saimons\n \n2 Ronda\n1 StreuneR\n11 Streuner\n \n 3 Ronda\n5 Mordones\n10 Saimons\n15 Kristallines\n \n 4 Ronda\n12 Lordakias\n1 Lordakium\n \n 5 Ronda \n10 Boss Lordakias\n6 Boss Saimons\n8 Boss Mordones\n ", true)
    .addField("Rondas 6-10","6 Ronda\n 15 Sibelonit\n1 Sibelon\n \n 7 Ronda\n 5 Sibelonit\n10 Kristallines\n5 Boss StreuneRs\n \n 8 Ronda\n 10 Kristallines\n1 Kristallon\n \n 9 Ronda\n 15 Protegit\n3 Boss Lordakiums\n \n 10 Ronda\n 3 demaNeRs.", true);
  message.channel.send({embed});
}
