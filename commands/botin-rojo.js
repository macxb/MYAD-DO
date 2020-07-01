const Discord = require("discord.js");
const client = new Discord.Client();

exports.run = async (client, message) => {
  message.delete((message));
  const embed = new Discord.RichEmbed()
    .setTitle("**Botines Rojos**")
    .setAuthor("MYAD DO","https://cdn.discordapp.com/emojis/401818289023483904.png?v=1%22")
    .setColor(0x00AF46)
    .setDescription("**Como conseguir:**")
    .setFooter("MYAD TECHNOLOGIES S.L.E.","https://cdn.discordapp.com/emojis/401818289023483904.png?v=1%22")
    .setThumbnail("http://myriad.bitcoinbetmaster.com/wp-content/uploads/2018/10/botin-rojo.gif")
    .setTimestamp()
    .setURL("http://myriad.bitcoinbetmaster.com/")
    .addField("**Las llaves pueden fabricarse en el ensamblaje o comprarse en la tienda.**","La receta para ensamblar las llaves estara disponible mientras dure el evento; la duracion del ensamblado es de 5 segundos y las llaves se podran acumular.\n**Receta:**\nChatarra 10\nAurus 5\nCristales Cismaticos 3", true)
    .addField("**Contenido:**","Disenos comunes para el P.E.T. ``20%``\nDisenos especiales para el P.E.T. ``7%``\nDisenos Legend para el P.E.T. ``3%``\nContenido adicional ``70%``\n**Cada Pack tiene probabilidad de dar lo siguiente:**", true)
    .addField("**Contenido Adicional:**","Infiltraceite (no afectan potens) 5 ``0,2%``\nLF-4 1 ``0,5%``\nLF-4 inestable 1 ``5%``\nKyhalon 10 ``2%``\nTetratrina 15 ``2%``\nEnergias extras 30 ``6%``\nMCB-25 15.000 ``25%``\nMCB-50 30.000 ``25%``\nUCB-100 2.000 ``9,5%``\nHSTRM-01 1.200 ``19,8%``\nEMP-01 10 ``5%``", true)
    .addField("**Disenos Comunes P.E.T.**","Pusat Poison ``12,5%``\nSpectrum Ocean ``12,5%``\nA-Elite Ocean ``12,5%``\nA-Elite Sandstorm ``12,5%``\nGoliath-X Sandstorm ``12,5%``\nChimera Poison ``12,5%``\nChimera Blaze ``12,5%``\nPusat Blaze ``12,5%``", true)
    .addField("**Disenos Especiales P.E.T.**","Hammerclaw Carbonite ``25%``\nCyborg Carbonite ``25%``\nCyborg Argon ``25%``\nDiminisher Lava ``25%``", true)
    .addField("Disenos Legend P.E.T.","Mirage Legend ``34%``\nDiminisher Legend ``33%``\nMirage Legend ``34%``", true);
  message.channel.send({embed});
}
