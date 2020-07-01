const Discord = require("discord.js");
const client = new Discord.Client();

exports.run = async (client, message) => {
  const embed = new Discord.RichEmbed()
    .setTitle("**Naves**")
    .setAuthor("MYAD DO","https://cdn.discordapp.com/emojis/401818289023483904.png?v=1%22")
    .setColor(0x00AE86)
    .setDescription("**Leonov**")
    .setFooter("MYAD TECHNOLOGIES S.L.E.","https://cdn.discordapp.com/emojis/401818289023483904.png?v=1%22")
    .setThumbnail("http://myriad.bitcoinbetmaster.com/wp-content/uploads/2018/10/darkorbit-leonov.png")
    .setTimestamp()
    .setURL("http://myriad.bitcoinbetmaster.com/")
    .addField("**Descripcion en el Juego:**","La starjet Leonov es una nave a tener en cuenta en los mapas bajos ya que, en los mapas de su empresa posee unos atributos mejorados. Es pequena, rapida y con una potencia media de fuego. Ideal para pilotos en la caza de alienigenas.", true)
    .addField("**Especificaciones:**","Puntos maximos de vida	64000\nMax Nanocasco 			64000\nVelocidad				 360\nLaser: 				6\nGeneradores			   6\nExtra:				    1\nCarga:				    500", true)
    .addField("**Bonificaciones:**","En sus mapas base (X-1 a X-4), la Leonov tiene las siguientes mejoras:\nPuntos de vida             160,000\nVelocidad            380\nCarga             1,000");
  message.channel.send({embed});
}
