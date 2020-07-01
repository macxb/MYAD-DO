const Discord = require("discord.js");
const client = new Discord.Client();

exports.run = async (client, message) => {
  const embed = new Discord.RichEmbed()
    .setTitle("DarkOrbit: Puerta Galactica Hades")
    .setAuthor("MYAD DO","https://cdn.discordapp.com/emojis/401818289023483904.png?v=1%22")
    .setColor(0x00AF46)
    .setDescription("La puerta Hades debe ser construida (45 piezas) usando el materializador, una vez completada podras acceder a ella. El portal de esta Galaxy Gate se encuentra en el mapa x-1 de tu empresa junto a la base. Al contrario del resto de puertas, se hace en grupo con un minimo de 4 pilotos y un maximo de 8.")
    .setFooter("MYAD TECHNOLOGIES S.L.E.","https://cdn.discordapp.com/emojis/401818289023483904.png?v=1%22")
    .setThumbnail("https://cdn.discordapp.com/attachments/507454734139916288/568071663908945922/hades_1.png")
    //.setImage("http://myriad.bitcoinbetmaster.com/wp-content/uploads/2016/09/hades-1.png")
    .setTimestamp()
    .setURL("http://myriad.bitcoinbetmaster.com/darkorbit-puerta-galactica-hades/")
    .addField("Hades consiste de 3 rondas(mapas) en 12 oleadas. ","**Rondas y Oleadas.**")
    .addField("Rondas 1-3","1 Ronda\n50 Sibelones\n20 Boss Sibelones\n10 Uber Sibelones\n1 Emperador Sibelon\n \n2 Ronda\n50 Lordakium\n20 Boss Lordakium\n10 Uber Lordakium\n1 Emperador Lordakium\n \n3 Ronda\n50 Kristallones\n20 Boss Kristallones\n10 Uber Kristallones\n1 Emperador Kristallon", true)
  message.channel.send({embed});
}
