const Discord = require("discord.js");
const client = new Discord.Client();

exports.run = async (client, message) => {
  const embed = new Discord.RichEmbed()
    .setTitle("**Formaciones de VANT**")
    .setAuthor("MYAD DO","https://cdn.discordapp.com/emojis/401818289023483904.png?v=1%22")
    .setColor(0x00AE86)
    .setDescription("**Menú**")
    .setFooter("MYAD TECHNOLOGIES S.L.E.","https://cdn.discordapp.com/emojis/401818289023483904.png?v=1%22")
    .setThumbnail("https://cdn.discordapp.com/attachments/507454734139916288/568096257290010645/droneFormationLaunch.gif")
    .setTimestamp()
    .setURL("http://myriad.bitcoinbetmaster.com/")
    .addField("**Formaciones** 2D","**Comandos para las formaciones 2D:**\n**/form-tortuga**  Formación Tortuga\n** /form-flecha**   Formación Flecha\n** /form-lanza**   Formación Lanza\n** /form-estrella**   Formación Estrella\n** /form-tenazas**   Formación Tenazas\n** /form-dobleflecha**   Formación Doble Flecha\n**/form-diamante**   Formación Diamante\n**/form-galon**   Formación Galón\n** /form-mariposa**   Formación Mariposa\n** /form-cangrejo**   Formación Cangrejo\n** /form-corazon**   Formación Corazón\n** /form-barrera**  Formación Barrera\n** /form-murcielago**   Formación Murciélago\n", true)
    .addField("**Formaciones 3D**","**Comandos para las formaciones 3D:**\n** /form-anillo**   Formación Anillo\n** /form-taladro**   Formación Taladro\n** /form-veterano**   Formación Veterano\n** /form-boveda**   Formación Bóveda\n** /form-rueda**   Formación Rueda\n** /form-X**  Formación X\n** /form-ola**   Formación Ola", true);
  message.channel.send({embed});
}
