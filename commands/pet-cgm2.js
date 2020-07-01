const Discord = require("discord.js");
const client = new Discord.Client();

exports.run = async (client, message) => {
	const embed = new Discord.RichEmbed()
		.setTitle("**Combomodulo de Defensa. (C-GM2)**")
		.setAuthor("MYAD DO","https://cdn.discordapp.com/emojis/401818289023483904.png?v=1%22")
		.setColor(0x00AF46)
		.setDescription("**Une el conocido modo de defensa con el nuevo escudo Insta.**")
		.setFooter("MYAD TECHNOLOGIES S.L.E.","https://cdn.discordapp.com/emojis/401818289023483904.png?v=1%22")
		.setThumbnail("http://myriad.bitcoinbetmaster.com/wp-content/uploads/2018/10/darkorbit-cgm-02.gif")
		.setTimestamp()
		.setURL("http://myriad.bitcoinbetmaster.com/")
		.addField("**Nivel 1:**","Probabilidad de rechazo: ``65%``\nConsumo extra: ``35%`` de combustible.", true)
    .addField("**Coste:**","Nivel 1: 20.000 Uridium.\nNivel 2: 30.000 Uridium.\nNivel 3: 55.000 Uridium.", true)
    .addField("**Nivel 2:**","Probabilidad de rechazo: ``75%``\nConsumo extra: ``35%`` de combustible.", true)
		.addField("**Nivel 3:**","Probabilidad de rechazo: ``85%``\nConsumo extra: ``35%`` de combustible.", true);
	message.channel.send({embed});
}
