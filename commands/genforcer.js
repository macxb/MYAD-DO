const Discord = require("discord.js");
const client = new Discord.Client();

exports.run = async (client, message) => {
  const embed = new Discord.RichEmbed()
    .setTitle("**Naves**")
    .setAuthor("MYAD DO","https://cdn.discordapp.com/emojis/401818289023483904.png?v=1%22")
    .setColor(0x00AF46)
    .setDescription("**Goliath Enforcer**")
    .setFooter("MYAD TECHNOLOGIES S.L.E.","https://cdn.discordapp.com/emojis/401818289023483904.png?v=1%22")
    .setThumbnail("http://myriad.bitcoinbetmaster.com/wp-content/uploads/2018/09/g-enforcer_100x100.png")
    .setTimestamp()
    .setURL("http://myriad.bitcoinbetmaster.com/")
    .addField("**Descripcion en el Juego:**","Un bono de daño del ``5%`` hace que la Enforcer Goliath tenga una fuerza a tener en cuenta y es una necesidad para cada clan.\nSu poder destructivo esta revolucionando el arte de la guerra:\ninfundirá terror en los corazones de los clanes enemigos y los alienigenas", true)
    .addField("**Especificaciones:**","Puntos maximos de vida	256,000\nMax Nanocasco 			250,000\nVelocidad				 300\nLaser: 				   15\nGeneradores			   15\nExtra:				    3\nCarga:				    1500", true)
    .addField("**Bonificaciones:**","Daños ``5%``", true);
  message.channel.send({embed});
}
