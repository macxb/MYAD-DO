const Discord = require("discord.js");
const client = new Discord.Client();

exports.run = async (client, message) => {
  const embed = new Discord.RichEmbed()
    .setTitle("**Naves**")
    .setAuthor("MYAD DO","https://cdn.discordapp.com/emojis/401818289023483904.png?v=1%22")
    .setColor(0x00AF46)
    .setDescription("**Mimesis**")
    .setFooter("MYAD TECHNOLOGIES S.L.E.","https://cdn.discordapp.com/emojis/401818289023483904.png?v=1%22")
    .setThumbnail("http://myriad.bitcoinbetmaster.com/wp-content/uploads/2018/09/darkorbit-mimesis.png")
    .setTimestamp()
    .setURL("http://myriad.bitcoinbetmaster.com/la-mimesis-un-amigo-entre-enemigos/")
    .addField("**Descripcion en el Juego:**","La Mimesis es uno de los primeros Cazas de Sigilo Halcon en salir de la linea de produccion. Elegante y astuta, el nave cuenta con dos habilidades, Encriptacion, para interrumpir las armas de otras naves y una habilidad de Fase, lo que le permite utilizar un salto aleatorio limitado desde su ubicacion.", true)
    .addField("**Especificaciones:**","Puntos maximos de vida	286,000\nMax Nanocasco 			286,000\nVelocidad				 300\nLaser: 				   14\nGeneradores			   14\nExtra:				    3\nCarga:				    1500", true)
    .addField("**Bonificacion:**","``10%`` Escudo\n``5%`` Penetracion adicional del escudo enemigo", true)
    .addField("**Habilidades:**","**Ecriptacion:**\nLos enemigos tienen un 80% de posibilidades de **NO** acertar a tu nave. + ``25%`` de dano de laser + ``25%`` Velocidad. PEM no tiene ningun efecto contra esta habilidad.\n\n**Desfase:**\nSu nave es teletransportada instantaneamente 50 unidades en una direccion aleatoria, excluyendo las restricciones de la zona de radiacion.", true)
    .addField("**Como Obtener:**","Esta nave no se puede comprar con Uridium.\nPuede ser elaborado exclusivamente en el Ensamblaje.\n \n**Receta de Ensamblaje:**\n450 Infiltraceite\n20 Procesadores Hibridos\n15 Micro Transistores\n30 Nanocondensadores", true);
  message.channel.send({embed});
}
