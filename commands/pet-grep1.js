const Discord = require("discord.js");
const client = new Discord.Client();

exports.run = async (client, message) => {
	const embed = new Discord.RichEmbed()
		.setTitle("**Modulo de Reparación (G-REP1)**")
		.setAuthor("MYAD DO","https://cdn.discordapp.com/emojis/401818289023483904.png?v=1%22")
		.setColor(0x00AF46)
		.setDescription("**El modulo de reparación repara tu P.E.T. a una velocidad de 2000 por segundo.**")
		.setFooter("MYAD TECHNOLOGIES S.L.E.","https://cdn.discordapp.com/emojis/401818289023483904.png?v=1%22")
		.setThumbnail("http://myriad.bitcoinbetmaster.com/wp-content/uploads/2018/10/darkorbit-g-rep1.gif")
		.setTimestamp()
		.setURL("http://myriad.bitcoinbetmaster.com/")
		.addField("**Nivel 1:**","Repara 2000 PV/seg.\nDuración: 120 seg.")
		.addField("**Nivel 2:**","Repara 6000 PV/seg.\nDuración: 45 seg.")
		.addField("**Nivel 3:**","Repara 12000 PV/seg.\nDuración: 30 seg.")
		.addField("**Coste:**","Nivel 1: 6.000 Uridium.\nNivel 2: 12.500 Uridium.\nNivel 3: 37.500 Uridium.");
	message.channel.send({embed});
}
