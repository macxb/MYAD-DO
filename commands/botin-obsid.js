const Discord = require("discord.js");
const client = new Discord.Client();

exports.run = async (client, message) => {
  message.delete((message));
  const embed = new Discord.RichEmbed()
    .setTitle("Botines Obsidianas")
    .setAuthor("MYAD DO","https://cdn.discordapp.com/emojis/401818289023483904.png?v=1%22")
    .setColor(0x00AF46)
    .setDescription("Como conseguir:")
    .setFooter("MYAD TECHNOLOGIES S.L.E.","https://cdn.discordapp.com/emojis/401818289023483904.png?v=1%22")
    .setThumbnail("http://myriad.bitcoinbetmaster.com/wp-content/uploads/2018/10/darkorbit-llave-obsidiana.gif")
    .setTimestamp()
    .setURL("http://myriad.bitcoinbetmaster.com/")
    .addField("**Las llaves pueden fabricarse en el ensamblaje o comprarse en la tienda.**","La receta para ensamblar las llaves estara disponible mientras dure el evento; la duracion del ensamblado es de 5 segundos y las llaves se podran acumular.\n**Receta:**\nChatarra 20\nAurus 10\nCristales cismaticos 5")
    .addField("**Contenido:**","Pack Disenos comunes ``17%``\nPack Disenos especiales ``10%``\nPack Disenos Legend	``3%``\nContenido adicional	``70%``\n**Cada Pack tiene probabilidad de dar lo siguiente:**", true)
    .addField("**Contenido Adicional:**","Infiltraceite(no afectan potens) 5, ``0,2%``\nLF-4 1, ``0,5%``\nLF-4 inestable 1, ``5%``\nKyhalon 10, ``2%``\nTetratrina 15, ``2%``\nEnergias extras 30, ``6%``\nSAB-50 5.000, ``19,8%``\nUBR-100 800, ``9,5%``\nSAR-02 1.500, ``25%``\nHSTRM-01 800, ``25%``\nEMP-01 10, ``5%``", true)
    .addField("**Disenos Legend:**","G-Champion Legend ``25%``\nA-Elite Legend ``25%``\nPusat Legend ``25%``\nSpectrum Legend ``25%``", true)
    .addField("**Disenos comunes:**","Venom Blaze	``12,5%``\nTartarus Ocean	``12,5%``\nGoliath-X Sandstorm	``12,5%``\nGoliath-X Borealis ``12,5%``\nSolace Borealis	``12,5%``\nVenom Ocean	``12,5%``\nSpectrum Ocean ``12,5%``\nSolace Blaze ``12,5%``", true)
    .addField("**Disenos Especiales:**","Sentinel Argon ``16,66%``\nCyborg Carbonite ``16,66%``\nHammerclaw Carbonite ``16,66%``\nMimesis Argon ``16,66%``\nSolace Argon ``16,66%``\nDiminisher Lava ``16,66%``", true);
  message.channel.send({embed});
}
