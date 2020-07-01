const Discord = require("discord.js");
const client = new Discord.Client();

exports.run = async (client, message) => {
	const embed = new Discord.RichEmbed()
		.setTitle("**Nuevo**")
		.setAuthor("MYAD DO","https://cdn.discordapp.com/emojis/401818289023483904.png?v=1%22")
		.setColor(0x00AF46)
		.setDescription("**Comprobando...**")
		.setFooter("MYAD TECHNOLOGIES S.L.E.","https://cdn.discordapp.com/emojis/401818289023483904.png?v=1%22")
		.setThumbnail("https://cdn.discordapp.com/emojis/401818289023483904.png?v=1%22")
		.setTimestamp()
		.setURL("http://myriad.bitcoinbetmaster.com/")
		.addField("**¡Buen Dia!**","Hola," + message.author.toString() + ", ¿Como estas?```LEYENDO BASE DE DATOS.........``` ```¡COMPLETADO!```\n:100: :white_check_mark:\n\n**:new: Niveles por Experiencia (/niv/expe)\n:new: Info del Servidor Discord (/server)\n:new: Estadisticas del Bot (/stats)\n:new: Lista de Naves (/naves/menu)\n:new: Acceso a Mapas por Nivel (/niv/mapas)\n:new: Menu de Botines de pirata (/botin/menu)\n:new: Menu de Comandos GG (/puertas/menu)\n:new: Menu de Comandos P.E.T. (/pet/menu)\n:new: Foros Oficiales DO (/foro)**", );

	message.channel.send({embed});
}
