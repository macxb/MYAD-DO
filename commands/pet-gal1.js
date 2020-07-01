const Discord = require("discord.js");
const client = new Discord.Client();

exports.run = async (client, message) => {
	const embed = new Discord.RichEmbed()
		.setTitle("**Autorrecolector. (C-AL1)**")
		.setAuthor("MYAD DO","https://cdn.discordapp.com/emojis/401818289023483904.png?v=1%22")
		.setColor(0x00AF46)
		.setDescription("**Al activar el modulo de autorrecolección, tu P.E.T. recogerá automaticamente todas las cajas de carga y cajas bono de los alrededores.**")
		.setFooter("MYAD TECHNOLOGIES S.L.E.","https://cdn.discordapp.com/emojis/401818289023483904.png?v=1%22")
		.setThumbnail("http://myriad.bitcoinbetmaster.com/wp-content/uploads/2018/10/darkorbit-g-al1.gif")
		.setTimestamp()
		.setURL("http://myriad.bitcoinbetmaster.com/")
		.addField("**Nivel 1:**","Alcance: 700.")
		.addField("**Nivel 2:**","Alcance: 1500. ")
		.addField("**Nivel 3:**","Alcance: 2500.")
		.addField("**Coste:**","Nivel 1: 7.500 Uridium.\nNivel 2: 17.500 Uridium.\nNivel 3: 37.500 Uridium.")
	message.channel.send({embed});
}
