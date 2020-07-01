const Discord = require("discord.js");
const client = new Discord.Client();

exports.run = async (client, message) => {
	const embed = new Discord.RichEmbed()
		.setTitle("**Modulo Kamikaze (G-KK1)**")
		.setAuthor("MYAD DO","https://cdn.discordapp.com/emojis/401818289023483904.png?v=1%22")
		.setColor(0x00AF46)
		.setDescription("**Al activarlo, se inicia en cuando tu nave o tu P.E.T estan a punto de ser destruidos. La P.E.T. iniciará un último y destructor ataque kamikaze sobre tus enemigos.**")
		.setFooter("MYAD TECHNOLOGIES S.L.E.","https://cdn.discordapp.com/emojis/401818289023483904.png?v=1%22")
		.setThumbnail("http://myriad.bitcoinbetmaster.com/wp-content/uploads/2018/10/darkorbit-g-kk1.gif")
		.setTimestamp()
		.setURL("http://myriad.bitcoinbetmaster.com/")
		.addField("**Nivel 1:**","DAÑO: 25.000\nRadio: 250\nEnfriamiento: 2 min.")
		.addField("**Nivel 2:**","DAÑO: 45.000\nRadio: 350\nEnfriamiento: 1 min.")
		.addField("**Nivel 3:**","DAÑO: 75.000\nRadio: 450\nEnfriamiento: 30 seg.")
		.addField("**Coste:**","Nivel 1: 7.500 Uridium.\nNivel 2: 17.500 Uridium.\nNivel 3: 50.000 Uridium.");
	message.channel.send({embed});
}
