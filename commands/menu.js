const Discord = require("discord.js");
const client = new Discord.Client();
const config = require("../config.json");

exports.run = async (client, message) => {
  const ownerID = config.ownerID;
     //si no es propitario del bot salir y hacer nada
    if(message.author.id !== ownerID) return;

    const clientIcon = client.user.avatarURL
    const clientTag = client.user.tag

    if (message.channel.type !== "dm"){
    message.delete(message).catch(error => console.log(error.stack));
    }
    else;
  const embed = new Discord.RichEmbed()
    .setTitle("**Menu de Ayuda**")
    .setAuthor(`${clientTag}`, `${clientIcon}`)
    .setColor(0x00AF46)
    .setDescription("**Comandos del BOT:**")
    .setFooter("MYAD TECHNOLOGIES S.L.E.","https://cdn.discordapp.com/attachments/507454734139916288/539136351967117343/MYS-logo-450x450.png")
		.setThumbnail(`${clientIcon}`)
    .setTimestamp()
    .setURL("http://myriad.bitcoinbetmaster.com/")
    .addField("**Iniciando...**","```BOT ACTIVO\nRecopilando informacion...```\n:robot: :100: :white_check_mark: ", true)
    .addField("**General:**","**/foro** Ver enlaces a los foros oficiales DO.\n**/stats** Ver las estadisticas del BOT.\n**/devs** Ver los desarrolladores del BOT.\n**/lag** Ver enlace para ayuda con el lag.\n**/server** Ver información del server discord(SO).\n\n**SO = Comando solo disponible en server.**", true)
    //**/nuevo** Ver lo nuevo del bot.\n
    .addField("**Puertas Galacticas:**","**/puertas-menu** - ver la lista de comandos para las Puertas.", true)
    .addField("**Naves:**","**/naves-menu** - ver la lista de comandos para las Naves.", true)
    .addField("**Botines de Pirata:**","**/botin-menu** - ver la lista de comandos para Botines.", true)
    .addField("**P.E.T:**","**/pet-menu** - ver la lista de comandos para el P.E.T.", true)
    .addField("**Dias Especiales:**","**/dia-menu** - ver la lista de comandos de los Dias Especiales.", true)
    .addField("**VANT:**","**/vant-menu** - ver la lista de comandos para los diseños de VANTS épicos.", true)
    .addField("**Formaciones de VANT:**","**/form-menu** - ver la lista de comandos para las formaciones de VANT.", true)
    .addField("**LF4:**","**/lf4-menu** - ver la lista de comandos para los tipos de LF4.", true)
    .addField("**Disponible de Pronto:**","Mas Naves\nNuevos mapas BL.", true);
  message.channel.send({embed});
}
