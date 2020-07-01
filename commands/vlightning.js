const Discord = require("discord.js");
const client = new Discord.Client();

exports.run = async (client, message) => {
  const embed = new Discord.RichEmbed()
    .setTitle("**Naves**")
    .setAuthor("MYAD DO","https://cdn.discordapp.com/emojis/401818289023483904.png?v=1%22")
    .setColor(0x00AF46)
    .setDescription("**Vengeance Lightning**")
    .setFooter("MYAD TECHNOLOGIES S.L.E.","https://cdn.discordapp.com/emojis/401818289023483904.png?v=1%22")
    .setThumbnail("https://cdn.discordapp.com/attachments/507454734139916288/519483627474518026/lightning.gif")
    .setTimestamp()
    .setURL("http://myriad.bitcoinbetmaster.com/")
    .addField("**Descripcion en el Juego:**","Esta nave te permitirá repartir un ``5%`` mas de daño que la Vengeance Normal. Tambien te dará la habilidad unica, **Postquemador**, que puedes usar para aumentar la velocidad de tu nave en un ``30%`` durante un periodo de cinco segundos!", true)
    .addField("**Especificaciones:**","Puntos maximos de vida	230,000\nMax Nanocasco 			230,000\nVelocidad				 380\nLaser: 				   10\nGeneradores			   10\nExtra:				    2\nCarga:				    1000", true)
    .addField("**Habilidades:**","**Postquemador Lightning**\nEsta habilidad le proporciona un quemador especial que incrementa la velocidad de la nave en un ``30%`` durante 5 segundos. ", true)
    .addField("**Bonificaciones:**","Daños ``5%``", true);
  message.channel.send({embed});
}
