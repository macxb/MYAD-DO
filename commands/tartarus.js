const Discord = require("discord.js");
const client = new Discord.Client();

exports.run = async (client, message) => {
  const embed = new Discord.RichEmbed()
    .setTitle("**Naves**")
    .setAuthor("MYAD DO","https://cdn.discordapp.com/emojis/401818289023483904.png?v=1%22")
    .setColor(0x00AF46)
    .setDescription("**Tartarus**")
    .setFooter("MYAD TECHNOLOGIES S.L.E.","https://cdn.discordapp.com/emojis/401818289023483904.png?v=1%22")
    .setThumbnail("http://myriad.bitcoinbetmaster.com/wp-content/uploads/2018/09/darkorbit-tartarus-poison.png")
    .setTimestamp()
    .setURL("http://myriad.bitcoinbetmaster.com/la-tartarus-el-raptor-veloz/")
    .addField("**Descripcion en el Juego:**","La Tartarus es en definitiva una Vengeance con la estanqueidad y casi la misma potencia de fuego que Goliath , es la segunda nave mas rapido en el juego, con Speed Boost activado.", true)
    .addField("**Especificaciones:**","Puntos maximos de vida	260,000\nMax Nanocasco 			250,000\nVelocidad				 260\nLaser: 				   14\nGeneradores			   15\nExtra:				    3\nCarga:				    1500", true)
    .addField("**Habilidad Rafaga.**","Esta habilidad reduce el tiempo de carga y de recarga del lanzamisiles.\nUna vez activada, el lanzamisiles se cargara inmediatamente y, podras disparar hasta 3 salvas de 5 misiles cada una.", true)
    .addField("**Habilidad Propulsor**","Cuando esta activa, la velocidad base de la Tartarus pasa a 300 (en vez de 260, valor por defecto), mientras que los danos de laseres de tus VANT se reducen un ``5%``", true);
  message.channel.send({embed});
}
