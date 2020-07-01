const Discord = require("discord.js");
const client = new Discord.Client();

exports.run = async (client, message) => {
  const embed = new Discord.RichEmbed()
    .setTitle("**Naves**")
    .setAuthor("MYAD DO","https://cdn.discordapp.com/emojis/401818289023483904.png?v=1%22")
    .setColor(0x00AE86)
    .setDescription("**Spearhead**")
    .setFooter("MYAD TECHNOLOGIES S.L.E.","https://cdn.discordapp.com/emojis/401818289023483904.png?v=1%22")
    .setThumbnail("http://myriad.bitcoinbetmaster.com/wp-content/uploads/2018/10/darkorbit-spear-elite-mmo.gif")
    .setTimestamp()
    .setURL("http://myriad.bitcoinbetmaster.com/")
    .addField("**Descripcion en el Juego:**","La Spearhead es una nave ligera de reconocimiento, practicamente es la espia del grupo.\nEs una nave que adopta los colores de la empresa a la que pertenece (azul para EIC, rojo para MMO y verde para VRU).", true)
    .addField("**Especificaciones:**","Puntos maximos de vida	100,000\nMax Nanocasco 			100,000\nVelocidad				 370\nLaser: 				   12\nGeneradores			   6\nExtra:				    2\nCarga:				    500", true)
    .addField("**Habilidades**","**Camuflaje definitivo:**\nPermite un camuflaje total, incluso del minimapa, evitando ser localizado.\n**Paralizador:**\nDetiene las habilidades de las naves enemigas y que esten siendo utilizadas.\n**Marcacion de objetivo:**\nCon esta habilidad se marcan los objetivos para los miembros del grupo y aumenta los daños causados por todos los miembros.\n**Reconocimiento:**\nProporciona el doble de alcance de reconocimiento en el minimapa.", true)
    .addField("**Spearhead Veteran**","El diseño Veteran de la Spearhead otorga un bono del ``5%`` a los puntos de experiencia y de honor.", true)
    .addField("**Spearhead Elite**","Amenazante y efectivo:\nCon este diseño, tu Spearhead provocara un ``5%`` mas de danos.\nLa duracion de las habilidades Camuflaje Definitivo y Reconocimiento aumenta en un ``50%``, mientras que la de Marcacion de objetivo se reduce en un ``25%``\nEntretanto, el tiempo de recarga del Paralizador aumenta en un ``15%``", true);
  message.channel.send({embed});
}
