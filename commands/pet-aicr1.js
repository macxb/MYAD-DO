const Discord = require("discord.js");
const client = new Discord.Client();

exports.run = async (client, message) => {
	const embed = new Discord.RichEmbed()
		.setTitle("**Protocolo de Carga (AI-CR1)**")
		.setAuthor("MYAD DO","https://cdn.discordapp.com/emojis/401818289023483904.png?v=1%22")
		.setColor(0x00AF46)
		.setDescription("**El protocolo de carga aumenta la capacidad de la bodega de carga del P.E.T. en un porcentaje determinado que depende del nivel del protocolo instalado.**")
		.setFooter("MYAD TECHNOLOGIES S.L.E.","https://cdn.discordapp.com/emojis/401818289023483904.png?v=1%22")
		.setThumbnail("http://myriad.bitcoinbetmaster.com/wp-content/uploads/2018/10/darkorbit-ai-cr1.gif")
		.setTimestamp()
		.setURL("http://myriad.bitcoinbetmaster.com/")
		.addField("**Nivel 1:**","Incremento de bodega: ``3%``")
		.addField("**Nivel 2:**","Incremento de bodega: ``6%``")
		.addField("**Nivel 3:**","Incremento de bodega: ``12%``")
		.addField("**Nivel 4:**","Incremento de bodega: ``15%``")
		.addField("**Coste:**","Nivel 1: 3.000 Uridium.\nNivel 2: 7.500 Uridium.\nNivel 3: 25.000 Uridium.\nNivel 4: Solo disponible como recompensa en eventos.");
	message.channel.send({embed});
}
