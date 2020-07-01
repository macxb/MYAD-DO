const Discord = require("discord.js");
const client = new Discord.Client();

exports.run = async (client, message) => {
  const embed = new Discord.RichEmbed()
    .setTitle("**Naves**")
    .setAuthor("MYAD DO","https://cdn.discordapp.com/emojis/401818289023483904.png?v=1%22")
    .setColor(0x00AE86)
    .setDescription("**Defcom**")
    .setFooter("MYAD TECHNOLOGIES S.L.E.","https://cdn.discordapp.com/emojis/401818289023483904.png?v=1%22")
    .setThumbnail("https://cdn.discordapp.com/attachments/507454734139916288/514184040211939350/defcom_100x100.png")
    .setTimestamp()
    .setURL("http://myriad.bitcoinbetmaster.com/")
    .addField("**Descripción en el Juego**","La ultima version de esta nave trae un dispositivo de camuflaje de ultima generación!", true)
    .addField("**Especificaciones:**","Puntos maximos de vida	12000\nMax Nanocasco 			12000\nVelocidad				 280\nLaser: 				3\nGeneradores			   5\nExtra:				    2\nCarga:				    300", true)
    .addField("**Habilidades:**","**Camuflaje Definitivo**\nPermite un camuflaje total, incluso del minimapa, evitando ser localizado.", true);
  message.channel.send({embed});
}
