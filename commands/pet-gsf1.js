const Discord = require("discord.js");
const client = new Discord.Client();

exports.run = async (client, message) => {
	const embed = new Discord.RichEmbed()
		.setTitle("**Modulo Llama Expiatoria (G-SF1)**")
		.setAuthor("MYAD DO","https://cdn.discordapp.com/emojis/401818289023483904.png?v=1%22")
		.setColor(0x00AF46)
		.setDescription("**Con el modulo Llama Expiatoria sacrificas tu P.E.T. para ayudar a un compañero durante la batalla. Si se activa, vuela hacia una nave amiga cercana y transfiere un porcentaje del escudo del P.E.T al jugador amigo. Para poder acceder al nivel 4, tu P.E.T. debería ser nivel 20.**")
		.setFooter("MYAD TECHNOLOGIES S.L.E.","https://cdn.discordapp.com/emojis/401818289023483904.png?v=1%22")
		.setThumbnail("http://myriad.bitcoinbetmaster.com/wp-content/uploads/2018/10/darkorbit-g-kk1.gif")
		.setTimestamp()
		.setURL("http://myriad.bitcoinbetmaster.com/")
		.addField("**Nivel 1:**","Alcance: 350\nEscudo transferido: ``30%``\nEnfriamiento: 90 seg.")
		.addField("**Nivel 2:**","Alcance: 400\nEscudo transferido: ``40%``\nEnfriamiento: 75 seg.")
		.addField("**Nivel 3:**","Alcance: 450\nEscudo transferido: ``50%``\nEnfriamiento: 60 seg.")
		.addField("**Nivel 4:**","Alcance: 500\nEscudo transferido: ``60%``\nEnfriamiento: 45 seg.")
		.addField("**Coste:**","Nivel 1: 9.500 Uridium.\nNivel 2: 12.500 Uridium.\nNivel 3: 45.000 Uridium.\nNivel 4: Solo disponible como recompensa en eventos.");
	message.channel.send({embed});
}
