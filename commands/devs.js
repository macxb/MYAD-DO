const Discord = require("discord.js");
const client = new Discord.Client();

exports.run = async (client, message) => {
	const embed = new Discord.RichEmbed()
		.setTitle("**Desarrolladores de MYAD DO**")
		.setAuthor("MYAD DO","https://cdn.discordapp.com/emojis/401818289023483904.png?v=1%22")
		.setColor(0x00AF46)
		.setDescription("**¡Muchas gracias por crearme!**")
		.setFooter("MYAD TECHNOLOGIES S.L.E.","https://cdn.discordapp.com/emojis/401818289023483904.png?v=1%22")
		.setThumbnail("https://cdn.discordapp.com/emojis/401818289023483904.png?v=1%22")
		.setTimestamp()
		.setURL("http://myriad.bitcoinbetmaster.com/")
		.addField("**Dev:**","```@Midas[Μ¥ĄĐ]#9004 ```", true)
		.addField("**Investigacion & Edicion:**","```@´¯¥¯`P∆ΝỢCỢ´¯¥¯`#1489 ```", true)
		.addField("**Dev Contribuyente:**","```@-=[Kristallon]=-#5703 ```", true)
	message.channel.send({embed});
}
