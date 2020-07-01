const Discord = require("discord.js");
const client = new Discord.Client();

exports.run = async (client, message) => {
  const embed = new Discord.RichEmbed()
    .setTitle("**Naves**")
    .setAuthor("MYAD DO","https://cdn.discordapp.com/emojis/401818289023483904.png?v=1%22")
    .setColor(0x00AF46)
    .setDescription("**Hammerclaw**")
    .setFooter("MYAD TECHNOLOGIES S.L.E.","https://cdn.discordapp.com/emojis/401818289023483904.png?v=1%22")
    .setThumbnail("https://cdn.discordapp.com/attachments/507454734139916288/519176700748103682/Hammerclaw.gif")
    .setTimestamp()
    .setURL("http://myriad.bitcoinbetmaster.com/darkorbit-servidor-de-prueba-nuevas-naves-2017-mimesis-cyborg-y-hammerclaw-y-evento-hitac/")
    .addField("**Descripción en el Juego:**","La Hammerclaw es la primera nave nueva de la serie, Acero Pesado disenada para ser dificil de matar con una serie de habilidades que ayudan a su rendimiento en cualquier batalla espacial.", true)
    .addField("**Especificaciones:**","Puntos maximos de vida	277,500\nMax Nanocasco 			277,500\nVelocidad				 310\nLaser: 				   12\nGeneradores			   14\nExtra:				    3\nCarga:				    1500", true)
    .addField("**Bonificacion:**","``25%`` Vida", true)
    .addField("**Habilidades:**","**Reparacion HP:**\nReparacion PV le permite restaurar gradualmente los PV de naves aliadas.\n\n**Reparacion Escudo:**\nEsta habilidad te permite enviar nueva energia de escudo a un nave aliado seleccionado.\n\n**Baliza de reparacion PV:**\nEsta habilidad hace que la Hammerclaw suelte una baliza de reparacion para reparar la vida gradualmente todas las naves aliadas en la vecinidad.", true)
    .addField("**Como Obtener:**","Esta nave no se puede comprar con Uridium.\nPuede ser elaborado exclusivamente en el Ensamblaje.\n \n**Receta de Ensamblaje:**\n450 Infiltraceite\n20 Procesadores Hibridos\n15 Micro Transistores\n30 Nanocondensadores", true);
  message.channel.send({embed});
}
