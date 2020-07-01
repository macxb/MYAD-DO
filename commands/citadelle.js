const Discord = require("discord.js");
const client = new Discord.Client();

exports.run = async (client, message) => {
  message.delete((message));
  const embed = new Discord.RichEmbed()
    .setTitle("**Naves**")
    .setAuthor("MYAD DO","https://cdn.discordapp.com/emojis/401818289023483904.png?v=1%22")
    .setColor(0x00AE86)
    .setDescription("**Citadelle**")
    .setFooter("MYAD TECHNOLOGIES S.L.E.","https://cdn.discordapp.com/emojis/401818289023483904.png?v=1%22")
    .setThumbnail("https://cdn.discordapp.com/attachments/507454734139916288/516694504934342656/c-elite-mmo.gif")
    .setTimestamp()
    .setURL("http://myriad.bitcoinbetmaster.com/")
    .addField("**Descripcion en el Juego:**","La Citadelle es un crucero superpesado.\nEntre sus caracteristicas hay que destacar la presencia de ranuras para dos lanzamisiles.\nEs una nave que adopta los colores de la empresa a la que pertenece (azul para EIC, rojo para MMO y verde para VRU).", true)
    .addField("**Especificaciones:**","Puntos maximos de vida	550,000\nMax Nanocasco 			550,000\nVelocidad				 240\nLaser: 				   7\nGeneradores			   20\nExtra:				    5\nCarga:				    4000", true)
    .addField("**Habilidades:**","**Atraccion del fuego:**\nCon esta habilidad, la nave desvia temporalmente el fuego enemigo de las naves de alrededor hacia ella.\n**Rayo veloz:**\nEsta habilidad aumenta durante un corto periodo de tiempo la velocidad de la nave.\n**Escudo protector:**\nAl usar esta habilidad, se despliega un escudo protector alrededor de la nave, haciendo que parte de los danos recibidos por los miembros de tu grupo en la cercania se desvien hacia la nave.\n**Fortaleza:**\nProporciona un blindaje protector y reduce los danos recibidos. Sin embargo, la nave no podra moverse durante su uso. ", true)
    .addField("**Citadelle Veteran:**","El diseno Veteran de la Citadelle otorga un bono del ``5%`` a los puntos de experiencia y de honor.", true)
    .addField("**Citadelle Elite:**","Un diseño implacable.\nEnsenales a tus enemigos lo que es el temor: ``5%`` de daños extra.\nAumenta la duracion de las habilidades Escudo protector y Atraccion de fuego en un ``50%``\nReduce la de Fortaleza en un ``25%`` y la de Rayo Veloz en un ``15%``", true);
  message.channel.send({embed});
}
