const Discord = require("discord.js");
const client = new Discord.Client();

exports.run = async (client, message) => {
  const embed = new Discord.RichEmbed()
    .setTitle("**Naves**")
    .setAuthor("MYAD DO","https://cdn.discordapp.com/emojis/401818289023483904.png?v=1%22")
    .setColor(0x00AE86)
    .setDescription("**Goliath Centaur**")
    .setFooter("MYAD TECHNOLOGIES S.L.E.","https://cdn.discordapp.com/emojis/401818289023483904.png?v=1%22")
    .setThumbnail("https://cdn.discordapp.com/attachments/507454734139916288/514126682928578581/g-centaur_100x100.png")
    .setTimestamp()
    .setURL("http://myriad.bitcoinbetmaster.com/")
    .addField("**Descripción en el Juego**","El crucero de batalla Goliath K2, conocido popularmente como Goli, es, sin ninguna duda, la nave con mayor potencia de fuego y uno de los enemigos más temidos.", true)
    .addField("**Especificaciones:**","Puntos maximos de vida	256000\nMax Nanocasco 			256000\nVelocidad				 300\nLaser: 				15\nGeneradores			   15\nExtra:				    3\nCarga:				    1500", true)
    .addField("Bonificaciones:","Vida ``10%``");
  message.channel.send({embed});
}
