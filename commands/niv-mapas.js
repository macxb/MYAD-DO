const Discord = require("discord.js");
const client = new Discord.Client();

exports.run = async (client, message) => {
  const embed = new Discord.RichEmbed()
    .setTitle("**Acceso a Mapas por Nivel**")
    .setAuthor("MYAD DO","https://cdn.discordapp.com/emojis/401818289023483904.png?v=1%22")
    .setColor(0x00AF46)
    .setDescription("**Niveles:**")
    .setFooter("MYAD TECHNOLOGIES S.L.E.","https://cdn.discordapp.com/emojis/401818289023483904.png?v=1%22")
    .setThumbnail("http://myriad.bitcoinbetmaster.com/wp-content/uploads/2018/09/navigation_icon_experience_42x49.png")
    .setTimestamp()
    .setURL("http://myriad.bitcoinbetmaster.com")
    .addField("**NIVEL		MAPAS**","1	x-1 y x-2 tu empresa\n2	x-3 y x-4 tu empresa\n3	Portal x-3 a x-4 tu empresa\n5	x-3 y x-4 otra emp.\n6	Portal x-3 a x-4 otra emp.\n8	PVP(4-1, 4-2 y 4-3)\n9	PVP 4-4\n10	x-5 tu emp. y PVP 4-5\n11	x-6 y x-7  tu empresa\n12	x-8 tu empresa\n13	x-2 otra emp.\n14	x-5 otra emp.\n15	x-6 y x-7 otra emp.\n16	x-1 otra emp.\n17	x-8 otra emp.");
  message.channel.send({embed});
}
