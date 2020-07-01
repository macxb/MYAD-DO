const Discord = require("discord.js");
const config = require("../config.json");


module.exports = async (client, message) => {
  const prefix  = config.prefix;
  // Ignore all bots
  if (message.author.bot) return;
  
  if (message.content.indexOf(config.prefix) !== 0) return;
  
  const args = message.content.slice(prefix.length).trim().split(/ +/g);
  const command = args.shift().toLowerCase();

  client.channels.get("IDCANALREGISTRODELBOT").send(`Comando: /${command}\nServer: ${message.guild}\n Canal: ${message.channel}\nUsuario: ${message.author}\n${message.createdAt}.`)
  
  const cmd = client.commands.get(command);

  if (!cmd) {
    return message.reply("**Ese comando no existe... :expressionless: **\n:robot: :arrows_clockwise: :interrobang: ");
  }

  cmd.run(client, message, args);
};
