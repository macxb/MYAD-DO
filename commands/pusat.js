const Discord = require("discord.js");
const client = new Discord.Client();

exports.run = async (client, message) => {
  const embed = new Discord.RichEmbed()
    .setTitle("**Naves**")
    .setAuthor("MYAD DO","https://cdn.discordapp.com/emojis/401818289023483904.png?v=1%22")
    .setColor(0x00AE86)
    .setDescription("**Pusat**")
    .setFooter("MYAD TECHNOLOGIES S.L.E.","https://cdn.discordapp.com/emojis/401818289023483904.png?v=1%22")
    .setThumbnail("https://cdn.discordapp.com/attachments/507454734139916288/517070750537220106/Pusat.gif")
    .setTimestamp()
    .setURL("http://myriad.bitcoinbetmaster.com/")
    .addField("**Descripcion en el Juego:**","La Pusat es una nave resbaladiza capaz de moverse a una velocidad muy alta y al mismo tiempo mantener un buen daño.", true)
    .addField("**Especificaciones:**","Puntos maximos de vida	125,000\nMax Nanocasco 			125,000\nVelocidad				 370\nLaser: 				   16\nGeneradores			   12\nExtra:				    3\nCarga:				    1000", true);
  message.channel.send({embed});
}
