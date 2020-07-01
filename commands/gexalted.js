const Discord = require("discord.js");
const client = new Discord.Client();

exports.run = async (client, message) => {
  const embed = new Discord.RichEmbed()
    .setTitle("**Naves**")
    .setAuthor("MYAD DO","https://cdn.discordapp.com/emojis/401818289023483904.png?v=1%22")
    .setColor(0x00AE86)
    .setDescription("**Goliath Exalted**")
    .setFooter("MYAD TECHNOLOGIES S.L.E.","https://cdn.discordapp.com/emojis/401818289023483904.png?v=1%22")
    .setThumbnail("http://myriad.bitcoinbetmaster.com/wp-content/uploads/2018/10/darkorbit-exalted.png")
    .setTimestamp()
    .setURL("http://myriad.bitcoinbetmaster.com/")
    .addField("**Descripcion en el Juego:**","El crucero de batalla Goliath K2, conocido popularmente como La Goli, es sin ninguna duda, la nave con mayor potencia de fuego y uno de los enemigos mas temidos.")
    .addField("**Especificaciones:**","Puntos maximos de vida:\nMax Nanocasco:\nVelocidad:\nLaser:\nGeneradores:\nExtra:\nCarga:", true)
    .addField("**Valores**","256000\n256000\n300\n15\n15\n3\n1500", true)
    .addField("**Bonificaciones:**","Honor ``10%``");
  message.channel.send({embed});
}
