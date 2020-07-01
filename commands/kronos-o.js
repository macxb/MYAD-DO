const Discord = require("discord.js");
const client = new Discord.Client();

exports.run = async (client, message) => {
  message.delete((message));
  const embed = new Discord.RichEmbed()
  .setTitle("DarkOrbit: Puerta Galactica Kronos")
  .setAuthor("MYAD DO","https://cdn.discordapp.com/emojis/401818289023483904.png?v=1%22")
  .setColor(0x00AF46)
  .setDescription("La puerta Kronos no se construye como el resto de las puertas. Solo si completas y superas el resto de puertas, recibiras las distintas partes de la puerta (21 piezas), una vez completada podras acceder a ella. El portal de esta Galaxy Gate se encuentra en el mapa x-1 de tu empresa junto a la base.")
  .setFooter("MYAD TECHNOLOGIES S.L.E.","https://cdn.discordapp.com/emojis/401818289023483904.png?v=1%22")
  //.setImage("https://cdn.discordapp.com/attachments/507454734139916288/516691169774796801/Kronos_Gate.png")
  .setThumbnail("https://cdn.discordapp.com/attachments/507454734139916288/516691169774796801/Kronos_Gate.png")
  .setTimestamp()
  .setURL("http://myriad.bitcoinbetmaster.com/darkorbit-puerta-galactica-Kronos/")
  .addField("Kronos consiste de 13 rondas(mapas) en 49 oleadas. ","**Rondas y Oleadas.**")
  .addField("Rondas 1-7","1 Ronda\n10 Saturn Phoenix\n15 Saturn Yamato\n15 Saturn Yamato\n \n2 Ronda\n10 Saturn Defcom\n10 Saturn Defcom\n15 Saturn Liberator\n15 Saturn Liberator\n \n3 Ronda\n10 Saturn Nostromo\n15 Saturn Piranha\n15 Saturn Piranha\n10 Saturn Nostromo\n \n4 Ronda\n10 Saturn Bigboy\n5 Saturn Bigboy\n10 Saturn Bigboy\n5 Saturn Bigboy\n \n5 Ronda\n5 Saturn Vengeance\n5 Saturn Vengeance\n5 Saturn Vengeance\n8 Saturn Goliath\n \n6 Ronda\n5 Saturn Leonov\n5 Saturn Leonov\n5 Saturn Leonov\n5 Saturn Leonov\n \n7 Ronda\n5 Saturn Venom\n5 Saturn Sentinel\n5 Saturn Spectrum\n5 Saturn Diminisher\n5 Saturn Solace\n", true)
  .addField("Rondas 8-13","\n8 Ronda\n5 Saturn Revenge\n5 Saturn Revenge\n5 Saturn Enforcer\n5 Saturn Enforcer\n5 Saturn Enforcer\n\n9 Ronda\n6 Saturn Lightning\n6 Saturn Avenger\n6 Saturn Lightning\n6 Saturn Avenger\n6 Saturn Lightning\n \n10 Ronda\n6 Saturn Bastion\n6 Saturn Enforcer\n6 Saturn Bastion\n \n11 Ronda\n10 Saturn Spearhead\n5 Saturn Citadel\n8 Saturn Aegis\n10 Saturn Goliath\n \n12 Ronda\n8 Saturn Crimsom\n8 Saturn Jade\n8 Saturn Sapphire\n \n13 Ronda\n1 Evil tu\n8 Evil Iris ", true);
  message.channel.send({embed});
}
