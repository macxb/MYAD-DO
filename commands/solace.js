const Discord = require("discord.js");
const client = new Discord.Client();

exports.run = async (client, message) => {
  const embed = new Discord.RichEmbed()
    .setTitle("**Naves**")
    .setAuthor("MYAD DO","https://cdn.discordapp.com/emojis/401818289023483904.png?v=1%22")
    .setColor(0x00AF46)
    .setDescription("**Solace**")
    .setFooter("MYAD TECHNOLOGIES S.L.E.","https://cdn.discordapp.com/emojis/401818289023483904.png?v=1%22")
    .setThumbnail("http://myriad.bitcoinbetmaster.com/wp-content/uploads/2018/09/darkorbit-solace.png")
    .setTimestamp()
    .setURL("http://myriad.bitcoinbetmaster.com/")
    .addField("**Descripcion en el Juego:**","En el espacio, nadie puede oirte gritar... ¡Pero puedes venir al rescate! En Solace, eres un oasis y faro para tus aliados en un desierto oscuro y hostil.", true)
    .addField("**Especificaciones:**","Puntos maximos de vida	256,000\nMax Nanocasco 			250,000\nVelocidad				 300\nLaser: 				   15\nGeneradores			   15\nExtra:				    3\nCarga:				    1500", true)
    .addField("**Bonificaciones:**","Escudo ``10%``", true)
    .addField("**Habilidad:**","**Reparador Nano-Cluster:**\nRepara el ``35%`` de su propio HP y el ``15%`` de los miembros de su grupo. ", true);
  message.channel.send({embed});
}
