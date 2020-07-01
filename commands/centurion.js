const Discord = require("discord.js");
const client = new Discord.Client();

exports.run = async (client, message) => {
  const embed = new Discord.RichEmbed()
    .setTitle("**Naves**")
    .setAuthor("MYAD DO","https://cdn.discordapp.com/emojis/401818289023483904.png?v=1%22")
    .setColor(0x00AF46)
    .setDescription("**Centurion**")
    .setFooter("MYAD TECHNOLOGIES S.L.E.","https://cdn.discordapp.com/emojis/401818289023483904.png?v=1%22")
    .setThumbnail("https://cdn.discordapp.com/attachments/507454734139916288/530354982784991243/Centurion3.gif")
    .setTimestamp()
    .setURL("http://myriad.bitcoinbetmaster.com/darkorbit-servidor-de-prueba-nuevas-naves-2017-mimesis-cyborg-y-hammerclaw-y-evento-hitac/")
    .addField("**Descripcion en el Juego:**","De base, la Centurion no cuenta con bonos o habilidades pasivas. Sin embargo, dispone de 50 diseños inestables que le permiten modificar sus atributos y, en casos excepcionales, adquirir habilidades.", true)
    .addField("**Especificaciones:**","Puntos maximos de vida	265,000\nMax Nanocasco 			265,000\nVelocidad				 300\nLaser: 				   16\nGeneradores			   16\nExtra:				    -\nCarga:				    -", true)
    .addField("**Como Obtener:**","Se obtiene al completar su receta en el Ensamblaje.\nRecursos necesarios:\n200 Llaves.\n750.000.000 Créditos.\n75.000 UCB-100.\n15.000 RSB-75.\n15.000 Black Light Trace.", true)
    .addField("**Series**","Estos diseños proporcionan a la Centurion efectos positivos y negativos.\nCada uno de ellos incluye un conjunto de cambios diferentes para cada tipo de efecto.\nLos diseños inestables se dividen en 5 series.\nCada una cuenta con 10 diseños:\n**Serie Damage**\n**Serie Shield**\n**Serie HP**\n**Serie Speed**\n**Serie Ability.**", true)
    .setImage("https://cdn.discordapp.com/attachments/507454734139916288/522030998053978132/centurionunstabledesigns-1-png.png");
  message.channel.send({embed});
}
