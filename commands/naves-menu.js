const Discord = require("discord.js");
const client = new Discord.Client();

exports.run = async (client, message) => {
  const embed = new Discord.RichEmbed()
    .setTitle("**Menu de Naves**")
    .setAuthor("MYAD DO","https://cdn.discordapp.com/emojis/401818289023483904.png?v=1%22")
    .setColor(0x00AF46)
    .setDescription("**Disponibles en mi base de datos:**")
    .setFooter("MYAD TECHNOLOGIES S.L.E.","https://cdn.discordapp.com/emojis/401818289023483904.png?v=1%22")
    .setThumbnail("https://cdn.discordapp.com/emojis/401818289023483904.png?v=1%22")
    .setTimestamp()
    .setURL("http://myriad.bitcoinbetmaster.com/")
    .addField("**Comandos:**","**/cyborg\n/hammerclaw\n/mimesis\n/tartarus\n/surgeon\n/diminisher\n/venom\n/sentinel\n/spectrum\n/solace**", true)
    .addField("**Cont.**","**/gchamp\n/genforcer\n/aegis\n/aveteran\n/aelite\n/vlightning\n/citadelle\n/spearhead\n/pusat\n/gsaturn\n/centurion**", true);
  message.channel.send({embed});
}
