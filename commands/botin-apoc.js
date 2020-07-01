const Discord = require("discord.js");
const client = new Discord.Client();

exports.run = async (client, message) => {
  message.delete((message));
  const embed = new Discord.RichEmbed()
    .setTitle("**Botines Apocalipsis**")
    .setAuthor("MYAD DO","https://cdn.discordapp.com/emojis/401818289023483904.png?v=1%22")
    .setColor(0x00AF46)
    .setDescription("**Como conseguir:**")
    .setFooter("MYAD TECHNOLOGIES S.L.E.","https://cdn.discordapp.com/emojis/401818289023483904.png?v=1%22")
    .setThumbnail("http://myriad.bitcoinbetmaster.com/wp-content/uploads/2018/10/darkorbit-botin-apocalipsis.gif")
    .setTimestamp()
    .setURL("http://myriad.bitcoinbetmaster.com/")
    .addField("**Las llaves pueden fabricarse en el ensamblaje o comprarse en la tienda.**","La receta para ensamblar las llaves estara disponible mientras dure el evento; la duracion del ensamblado es de 5 segundos y las llaves se podran acumular.\n**Receta:**\nChatarra 20\nAurus 10\nCristales cismaticos 5")
    .addField("**Contenido:**","Disenos comunes para vants ``22%``\nDisenos especiales para vants ``6%``\nDisenos Legend para vants ``2%``\nContenido adicional ``70%``\n**Cada Pack tiene probabilidad de dar lo siguiente:**")
    .addField("**Contenido Adicional:**","Infiltraceite (no afectan potens) 5 ``0,2%``\nVant zeus 1 ``1%``\nVant apis 1 ``1%``\nDiseno havoc 1 ``0,5%``\nDiseno hercules 1 ``0,5%``\nLF-4 1 ``0,5%``\nLF-4 inestable 1 ``5%``\nKyhalon 10 ``2%``\nTetratrina 15 ``2%``\nEnergias extras 30 ``6%``\nMCB-50 5.000 ``6,8%``\nSAB-50 5.000 ``19,8%``\nHSTRM-01 800 ``25%`` \nAR-02 15.000 ``25%``\nEMP-01 10 ``5%``", true)
    .addField("**Disenos Comunes P.E.T.**","Pusat Sandstorm ``12,5%``\nSpectrum Sandstorm ``12,5%``\nA-Elite Poison ``12,5%``\nEnigma Poison ``12,5%``\nPhantom Poison ``12,5%``\nEnigma Blaze ``12,5%``\nSpectrum Ocean ``12,5%``\nPhantom Ocean ``12,5%``", true)
    .addField("**Disenos Legend P.E.T.**","G-Champion Legend ``34%``\nEnigma Legend ``33%``\nPhantom Legend ``33%``", true)
    .addField("**Disenos Especiales P.E.T.**","A-Elite Lava ``20%``\nHammerclaw Argon ``20%``\nDiminisher Argon ``20%``\nSentinel Argon ``20%``\nCyborg Argon ``20%``", true);
  message.channel.send({embed});
}
