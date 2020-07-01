const Discord = require("discord.js");
const client = new Discord.Client();

exports.run = async (client, message) => {
  message.delete((message));
  const embed = new Discord.RichEmbed()
    .setTitle("**Naves**")
    .setAuthor("MYAD DO","https://cdn.discordapp.com/emojis/401818289023483904.png?v=1%22")
    .setColor(0x00AF46)
    .setDescription("**Cyborg**")
    .setFooter("MYAD TECHNOLOGIES S.L.E.","https://cdn.discordapp.com/emojis/401818289023483904.png?v=1%22")
    .setThumbnail("https://cdn.discordapp.com/attachments/507454734139916288/519176736974307330/Cyborg.gif")
    .setTimestamp()
    .setURL("http://myriad.bitcoinbetmaster.com/darkorbit-servidor-de-prueba-nuevas-naves-2017-mimesis-cyborg-y-hammerclaw-y-evento-hitac/")
    .addField("**Descripción en el Juego:**","La Cyborg esta disenada a partir del diseno fundamental de la Goliath, combinado con las formas que se encuentran en el mundo de los insectos para darle un impacto adicional!", true)
    .addField("**Especificaciones:**","Puntos maximos de vida	256,000\nMax Nanocasco 			256,000\nVelocidad				 300\nLaser: 				   16\nGeneradores			   16\nExtra:				    3\nCarga:				    1500", true)
    .addField("**Bonificacion:**","``10%`` Danos", true)
    .addField("**Habilidades:**","Singularity II: Mas fuerte que Singularity I.\nDano de enfoque en HP de un solo objetivo.\nPEM anula el efecto.\nEl dano de Singularity II es de aproximadamente 480 000 en total.\nEnfriamiento es 270 segundos.", true)
    .addField("**Como Obtener:**","Esta nave no se puede comprar con Uridium.\nPuede ser elaborado exclusivamente en el Ensamblaje.\n \n**Receta de Ensamblaje:**\n450 Infiltraceite\n20 Procesadores Hibridos\n15 Micro Transistores\n30 Nanocondensadores", true);
  message.channel.send({embed});
}
