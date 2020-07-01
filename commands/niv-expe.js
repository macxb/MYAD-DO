const Discord = require("discord.js");
const client = new Discord.Client();

exports.run = async (client, message) => {
  const embed = new Discord.RichEmbed()
    .setTitle("**Niveles por Experiencia**")
    .setAuthor("MYAD DO","https://cdn.discordapp.com/emojis/401818289023483904.png?v=1%22")
    .setColor(0x00AF46)
    .setDescription("**Niveles:**")
    .setFooter("MYAD TECHNOLOGIES S.L.E.","https://cdn.discordapp.com/emojis/401818289023483904.png?v=1%22")
    .setThumbnail("https://cdn.discordapp.com/attachments/507454734139916288/516690712943919119/ep-b02_icon.png")
    .setTimestamp()
    .setURL("http://myriad.bitcoinbetmaster.com")
    .addField("**NIVEL		EXPERIENCIA**","1	--\n2	10.000\n3	20.000\n4	40.000\n5	80.000\n6	160.000\n7	320.000\n8	640.000\n9	1.280.000\n10	2.560.000\n11	5.120.000\n12	10.240.000\n13	20.480.000\n14	40.960.000\n15	81.920.000", true)
    .addField("**NIVEL	EXPERIENCIA**","16		163.840.000\n17		327.680.000\n18		655.536.000\n19		1.310.720.000\n20		2.621.440.000\n21		5.242.880.000\n22		10.485.760.000\n23		20.971.520.000\n24		41.943.040.000\n25		83.886.080.000\n26		167.772.160.000\n27		335.544.320.000\n28		671.088.640.000\n29		1.342.177.280.000\n30		2.684.354.560.000\n31		5.368.709.120.000\n32		10.737.418.240.000", true);
  message.channel.send({embed});
}
