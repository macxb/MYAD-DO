const Discord = require("discord.js");
const client = new Discord.Client();
const config = require("../config.json");


exports.run = async (client, message) => {

  const prefix  = config.prefix;
  //SERVER-ONLY-------------------------------------------------
  // salir y parar si el canal es un md.
  if (message.channel.type === "dm") {
    let commandName = "/server"
    return message.reply("No se puede usar ese comando en privado usalo en un servidor donde estoy presente.\n:robot::no_entry: :exclamation: ").catch(error => console.log(error.stack)).then(console.log("guildOnly command " + commandName + " tried in dm channel by " + message.author.username));
  }

  const embed = new Discord.RichEmbed()
		.setTitle("**Estadisticas del Servidor**")
		.setAuthor("MYAD DO","https://cdn.discordapp.com/emojis/401818289023483904.png?v=1%22")
		.setColor(0x00AF46)
		.setDescription("**Comprobando...**")
		.setFooter("MYAD TECHNOLOGIES S.L.E.","https://cdn.discordapp.com/emojis/401818289023483904.png?v=1%22")
		.setThumbnail(message.guild.iconURL)
		.setTimestamp()
		.setURL("http://myriad.bitcoinbetmaster.com/")
		.addField("Nombre:", message.guild.name, true)
		.addField("Creado:", message.guild.createdAt, true)
		.addField("Region:", message.guild.region, true)
		.addField("Uniste:", message.member.joinedAt, true)
		.addField("Usuarios:", message.guild.memberCount, true)
		.addField("Admin:", message.guild.owner, true);

	message.channel.send({embed}).catch(error => console.log(error.stack));
};
