const Discord = require("discord.js");
const client = new Discord.Client();

exports.run = async (client, message) => {
	const embed = new Discord.RichEmbed()
		.setTitle("**Combomodulo de Reparacion. (C-SR2)**")
		.setAuthor("MYAD DO","https://cdn.discordapp.com/emojis/401818289023483904.png?v=1%22")
		.setColor(0x00AF46)
		.setDescription("**Repara tu nave mientras te encuentras en vuelo. Consume combustible extra por cada reparacion. No se puede usar durante el combate.**")
		.setFooter("MYAD TECHNOLOGIES S.L.E.","https://cdn.discordapp.com/emojis/401818289023483904.png?v=1%22")
		.setThumbnail("http://myriad.bitcoinbetmaster.com/wp-content/uploads/2018/10/C-SR2.gif")
		.setTimestamp()
		.setURL("http://myriad.bitcoinbetmaster.com/")
		.addField("**Nivel 1:**","Efecto: Repara 10000 PV por segundo.\nDuracion: 5 seg.\nProbabilidad de rechazo: ``65%``\nConsumo: 200 de combustible.\nConsumo extra: ``35%`` de combustible.", true)
    .addField("**Coste:**","Nivel 1: 20.000 Uridium.\nNivel 2: 30.000 Uridium.\nNivel 3: 55.000 Uridium.", true)
    .addField("**Nivel 2:**","Efecto: Repara 15000 PV por segundo.\nDuracion: 5 seg.\nProbabilidad de rechazo: ``75%``\nConsumo: 400 de combustible\nConsumo extra: ``35%`` de combustible. ", true)
		.addField("**Nivel 3:**","Efecto: Repara 25000 PV por segundo.\nDuracion: 5 seg.\nProbabilidad de rechazo: ``85%``\nConsumo: 750 de combustible.\nConsumo extra: ``35%`` de combustible.", true);
	message.channel.send({embed});
}
