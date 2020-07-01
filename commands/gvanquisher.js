const Discord = require("discord.js");
const client = new Discord.Client();

exports.run = async (client, message) => {
  const embed = new Discord.RichEmbed()
    .setTitle("**Naves**")
    .setAuthor("MYAD DO","https://cdn.discordapp.com/emojis/401818289023483904.png?v=1%22")
    .setColor(0x00AE86)
    .setDescription("**Goliath Vanquisher**")
    .setFooter("MYAD TECHNOLOGIES S.L.E.","https://cdn.discordapp.com/emojis/401818289023483904.png?v=1%22")
    .setThumbnail("https://cdn.discordapp.com/attachments/507454734139916288/514167766153035778/g-vanquisher_100x100.png")
    .setTimestamp()
    .setURL("http://myriad.bitcoinbetmaster.com/")
    .addField("**Descripción** en el Juego","Un diseño especial de la Goliath y de edicion limitada solo para autenticos pilotos de la MMO", true)
    .addField("**Especificaciones:**","Puntos maximos de vida	256000\nMax Nanocasco 			256000\nVelocidad				 300\nLaser: 				15\nGeneradores			   15\nExtra:				    3\nCarga:				    1500", true)
    .addField("Bonificaciones:","La Vanquisher te proporciona un bono del ``5%`` en la obtencion de influencia, ademas de un bono del ``7%`` en los danos contra todos los pilotos enemigos");
  message.channel.send({embed});
}
