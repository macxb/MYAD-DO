const Discord = require("discord.js");
const client = new Discord.Client();

exports.run = async (client, message) => {
  const embed = new Discord.RichEmbed()
    .setTitle("**Naves**")
    .setAuthor("MYAD DO","https://cdn.discordapp.com/emojis/401818289023483904.png?v=1%22")
    .setColor(0x00AF46)
    .setDescription("**Venom**")
    .setFooter("MYAD TECHNOLOGIES S.L.E.","https://cdn.discordapp.com/emojis/401818289023483904.png?v=1%22")
    .setThumbnail("https://cdn.discordapp.com/attachments/507454734139916288/521655762334908416/venom-ocean.gif")
    .setTimestamp()
    .setURL("http://myriad.bitcoinbetmaster.com/")
    .addField("**Descripcion en el Juego:**","El Venom solia ser una poderosa nave PvP cuando Singularity inflingia  500,000 de dano en total al jugador al que estaba dirigido si no usaban un PEM para eliminarlo.", true)
    .addField("**Especificaciones:**","Puntos maximos de vida	256,000\nMax Nanocasco 			256,000\nVelocidad				 300\nLaser: 				   15\nGeneradores			   15\nExtra:				    3\nCarga:				    1600", true)
    .addField("**Bonificaciones:**","Daños ``5%``", true)
    .addField("**Habilidad:**","**Singularidad I:**\nLa Venom te permite repartir daño directamente al casco de un enemigo.\nLa singularidad de la Venom es capaz de repartir un total de 180,000 de daño a P.V.", true);
  message.channel.send({embed});
}
