const Discord = require("discord.js");
const client = new Discord.Client();

exports.run = async (client, message) => {
  const embed = new Discord.RichEmbed()
    .setTitle("**Naves**")
    .setAuthor("MYAD DO","https://cdn.discordapp.com/emojis/401818289023483904.png?v=1%22")
    .setColor(0x00AF46)
    .setDescription("**Surgeon**")
    .setFooter("MYAD TECHNOLOGIES S.L.E.","https://cdn.discordapp.com/emojis/401818289023483904.png?v=1%22")
    .setThumbnail("https://cdn.discordapp.com/attachments/507454734139916288/516741469143564308/surgeon.gif")
    .setTimestamp()
    .setURL("http://myriad.bitcoinbetmaster.com/")
    .addField("**Descripcion en el Juego:**","La Surgeon es un diseno Elite basado en la Goliath. Salio durante el evento de Infeccion en 2015 y estuvo disponible en la Tienda durante ese tiempo. Ademas se puede conseguir en los cofres de obsidiana.", true)
    .addField("**Especificaciones:**","Puntos maximos de vida	256,000\nMax Nanocasco 			256,000\nVelocidad				 300\nLaser: 				   15\nGeneradores			   16\nExtra:				    3\nCarga:				    1500", true)
    .addField("**Bonificaciones:**","Esta nave tiene los bonos siguientes:\nDaños ``6%``\nExpe ``6%``\nHonor del ``6%``\n1 ranura de generador adicional ", true);
  message.channel.send({embed});
}
