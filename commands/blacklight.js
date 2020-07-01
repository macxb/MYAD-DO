const Discord = require("discord.js");
const client = new Discord.Client();

exports.run = async (client, message) => {
  const clientIcon = client.user.avatarURL
  const clientTag = client.user.tag
  const embed = new Discord.RichEmbed()
    .setTitle("**Juego**")
    .setAuthor(`${clientTag}`, `${clientIcon}`)
    .setColor(0x00AF46)
    .setDescription("**BlackLight**")
    .setFooter("MYAD TECHNOLOGIES S.L.E.","https://cdn.discordapp.com/attachments/507454734139916288/564833137025089539/myad-logo-2017-150x129.png")
    .setThumbnail("https://cdn.discordapp.com/attachments/507454734139916288/631130462781308958/1-jpg.png")
    .setTimestamp()
    .setURL("http://es.bigpoint.com/darkorbit/board/threads/faqs-black-light.139610/")
    .addField("**¡Ya ha está aquí el contenido de Black Light!**","Te permitirá explorar y acceder a una gran variedad de elementos nuevos en el juego,entre los que se incluyen:\n -3 mapas nuevos, uno para cada empresa.\n -75 misiones nuevas.\n -Varios NPC nuevos con novedosas e interesantes recompensas que serán cruciales para fabricar nuevas recetas en el Ensamblaje.\n -Un láser nuevo, el láser de dispersión III mejorado. Con él te resultará más fácil acabar con los recién llegados NPC.\n -Nueva munición láser que aumentará aún más el daño infligido a los nuevos NPC con las recompensas más valiosas.\n -Una nueva nave, disponible en el Ensamblaje.\n -50 diseños inestables para la nave, cada uno con su propio conjunto de bonos y, en algunos casos, combinaciones de habilidades.\n **Además os informamos de los siguientes cambios:**\n -La probabilidad de obtener un LF-4 en cofres verdes y dorados se ha triplicado ligeramente. Esto también se aplica a la promoción del LF-4 (LF-4 Day).\n -La recompensa de Kyhalon y Tetratrina en las prueba diarias y semanales ha aumentado x4.", true)
    //  .addField("","", true);
    .addField("**¿Por dónde empezar?**","Acércate al personaje encargado de dar misiones más cercano y encontrarás dos misiones nuevas, Voces desamparadas y Dentro de los límites:\n**Voces desamparadas:** Iniciará una cadena de 15 misiones que te dará munición y uridium para ayudarte en los enfrentamientos con los enemigos más duros de estos mapas.\n**Dentro de los límites:** Iniciará una cadena de 60 misiones relacionadas con los mapas y el contenido nuevo. En las 10 misiones iniciales de esta cadena recibirás 10 de los valiosos láseres Prometheus como recompensa. No te olvides equiparlos, infligen daño adicional a los nuevos NPC de Black Light.", true);
  message.channel.send({embed});
}
