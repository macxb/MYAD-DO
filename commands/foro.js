const Discord = require("discord.js");
const client = new Discord.Client();

exports.run = async (client, message) => {
		const embed = new Discord.RichEmbed()
		.setTitle("**DarkOrbit**")
		.setAuthor("MYAD DO","https://cdn.discordapp.com/emojis/401818289023483904.png?v=1%22")
		.setColor(0x00AE86)
		.setDescription("**Foros:**")
		.setFooter("MYAD TECHNOLOGIES S.L.E.","https://cdn.discordapp.com/emojis/401818289023483904.png?v=1%22")
		.setThumbnail("http://myriad.bitcoinbetmaster.com/wp-content/uploads/2016/08/DarkOrbit.png")
		.setTimestamp()
		.setURL("http://myriad.bitcoinbetmaster.com/")
		.addField("**Oficiales:**", "**[Foro Oficial ESP](http://es.bigpoint.com/darkorbit/board/)\n[Foro Oficial EN](http://www.bigpoint.com/darkorbit/board/)**", true)
	message.channel.send({embed});
}
