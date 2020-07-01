const Discord = require("discord.js");
const client = new Discord.Client();

exports.run = async (client, message) => {
  const embed = new Discord.RichEmbed()
    .setTitle("**Naves**")
    .setAuthor("MYAD DO","https://cdn.discordapp.com/emojis/401818289023483904.png?v=1%22")
    .setColor(0x00AE86)
    .setDescription("**Nave Admin Policía**")
    .setFooter("MYAD TECHNOLOGIES S.L.E.","https://cdn.discordapp.com/emojis/401818289023483904.png?v=1%22")
    .setTimestamp()
    .setURL("http://myriad.bitcoinbetmaster.com/")
    .addField("Descripción en el Juego","Se dice que los barcos de la Policia Administrativa tienen hasta 13,266,000 puntos de golpe o mas (invencibles), lo que los hace casi imposibles de destruir, incluso con un escudo diferente al de los barcos regulares, y es el barco más rápido en orbita oscura", true)
    .addField("Especificaciones:","Puntos maximos de vida	N/A\nMax Nanocasco 			N/A\nVelocidad				 N/A\nLaser: 				N/A\nGeneradores			   N/A\nExtra:				    N/A\nCarga:				    N/A", true);
  message.channel.send({embed});
}
