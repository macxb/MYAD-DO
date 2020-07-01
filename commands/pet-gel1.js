const Discord = require("discord.js");
const client = new Discord.Client();

exports.run = async (client, message) => {
	const embed = new Discord.RichEmbed()
		.setTitle("**Rastreador de Enemigos. (G-EL1)**")
		.setAuthor("MYAD DO","https://cdn.discordapp.com/emojis/401818289023483904.png?v=1%22")
		.setColor(0x00AF46)
		.setDescription("**Con el modulo rastreador de enemigos puedes localizar la posición de todos los alienigenas que se encuentran en ese sistema.**")
		.setFooter("MYAD TECHNOLOGIES S.L.E.","https://cdn.discordapp.com/emojis/401818289023483904.png?v=1%22")
		.setThumbnail("http://myriad.bitcoinbetmaster.com/wp-content/uploads/2018/10/darkorbit-g-el1.gif")
		.setTimestamp()
		.setURL("http://myriad.bitcoinbetmaster.com/")
		.addField("**Nivel 1:**","Alcance: 2000.")
		.addField("**Nivel 2:**","Alcance: 3000.")
		.addField("**Nivel 3:**","Alcance: 5000.")
		.addField("**Coste:**","Nivel 1: 6.000 Uridium.\nNivel 2: 12.500 Uridium.\nNivel 3: 37.500 Uridium.");
	message.channel.send({embed});
}
