const Discord = require("discord.js");
const client = new Discord.Client();
const config = require("../config.json");

exports.run = (client, message, args) => {

  //const ownerID = config.ownerID;

  //si no es propitario del bot mandar mensaje y hacer nada
 // if(message.author.id !== ownerID) {
 //   return message.reply("No tienes permisos para utilzar ese comando.\n:robot::no_entry: :exclamation: ");
 // }

  message.channel.send("Hola noob! :) Si escribes ```/ayuda``` en un canal donde tengo permisos y yo, vuestro DarkOrbit bot de discord, te mandaré mis comandos por privado.\nLos comandos se pueden usar ahi mismo en privado o en el canal #darkorbit-info-bot  ");

};
