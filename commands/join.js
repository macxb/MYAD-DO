const Discord = require("discord.js");
const client = new Discord.Client();
const config = require("../config.json");
require = "ffmpeg"

exports.run = async (client, message) => {
 const ownerID = config.ownerID;

  //si no es propitario del bot salir y hacer nada
  if(message.author.id !== ownerID) {
    return message.reply("```No tienes permisos para utilzar ese comando.```\n:robot::no_entry: :exclamation: ").catch(error => console.log(error.stack));
  }

  let voiceChan = message.member.voiceChannel;
  if (!voiceChan || voiceChan.type !== "voice") {
    return message.channel.send("```No estas conectado a un canal de voz.```").catch(error => console.log(error.stack));
    } else if (message.guild.voiceConnection) {
    return message.channel.send("```Ya estoy en el canal de voz.```").catch(error => console.log(error.stack));
    } else {
    message.channel.send("```Conectando al canal de voz...```").then(() => {
      message.member.voiceChannel.join().then(() => {
        message.channel.send("```Conectado con exito...✓```").catch(error => console.log(error.stack));
      }).catch(error => console.log(error.stack));
    }).catch(error => console.log(error.stack));
  }
}
