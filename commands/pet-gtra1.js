const Discord = require("discord.js");
const client = new Discord.Client();

exports.run = async (client, message) => {
	const embed = new Discord.RichEmbed()
		.setTitle("**Modulo de Comercio (G-TRA1)**")
		.setAuthor("MYAD DO","https://cdn.discordapp.com/emojis/401818289023483904.png?v=1%22")
		.setColor(0x00AF46)
		.setDescription("**El modulo de comercio te permite vender mercancias donde y cuando quieras.**")
		.setFooter("MYAD TECHNOLOGIES S.L.E.","https://cdn.discordapp.com/emojis/401818289023483904.png?v=1%22")
		.setThumbnail("http://myriad.bitcoinbetmaster.com/wp-content/uploads/2018/10/darkorbit-g-tra1.gif")
		.setTimestamp()
		.setURL("http://myriad.bitcoinbetmaster.com/")
		.addField("**Nivel 1:**","Bono de comercio: ``5%``\nTiempo de venta: 2 minutos.")
		.addField("**Nivel 2:**","Bono de comercio: ``15%``\nTiempo de venta: 1 minuto.")
		.addField("**Nivel 3:**","Bono de comercio: ``30%``\nTiempo de venta: 30 segundos.")
		.addField("**Coste:**","Nivel 1: 6.000 Uridium.\nNivel 2: 12.500 Uridium.\nNivel 3: 37.500 Uridium.")
	message.channel.send({embed});
}
