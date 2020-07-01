const Discord = require("discord.js");
const client = new Discord.Client();

exports.run = async (client, message) => {
  message.delete((message));
  const embed = new Discord.RichEmbed()
  .setTitle("**Dia Doble Puertas para Kronos**")
  .setAuthor("MYAD DO","https://cdn.discordapp.com/emojis/401818289023483904.png?v=1%22")
  .setColor(0x00AF46)
  .setDescription("**Recompensas:**")
  .setFooter("MYAD TECHNOLOGIES S.L.E.","https://cdn.discordapp.com/emojis/401818289023483904.png?v=1%22")
  .setThumbnail("http://myriad.bitcoinbetmaster.com/wp-content/uploads/2018/10/darkorbit-doble-kronos.png")
  .setTimestamp()
  .setURL("http://myriad.bitcoinbetmaster.com/")
  .addField("**En que consiste el dia Doble Kronos GG?**","Duplica las partes, duplica la diversion! Obten las partes de tu puerta Kronos mientras puedas.Ahora si visitas la Puerta Intergalactica sera el doble de lucrativa que lo normal! Por un tiempo limitado puedes obtener dos partes de la Puerta Kronos, la mas cotizada, cuando juegues a traves de una de las puertas intergalacticas.Muchos de ustedes han expresado que les gustaria poder desbloquear la Puerta Kronos mas rapido de lo normal. Y ahora finalmente podran!", true)
  .addField("**Excepciones:**","Las puertas que te dan 1 parte de la puerta Kronos (ejemplo: Delta) no forman parte de la oferta. Las puertas que te dan un numero impar de partes (ejemplo: 3 piezas) solamente daran a parte en el ultimo pasaje.", true)
  .addField("**Tiempo y duracion**","El evento de Doble Kronos GG es cada Sabado, empieza a las 23:59 del Viernes y acaba a las 00:00 del Domingo. Aunque aveces cambia.", true)
  message.channel.send({embed});
}
