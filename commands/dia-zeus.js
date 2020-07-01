const Discord = require("discord.js");
const client = new Discord.Client();

exports.run = async (client, message) => {
  message.delete((message));
  const embed = new Discord.RichEmbed()
  .setTitle("**Dia Zeus**")
  .setAuthor("MYAD DO","https://cdn.discordapp.com/emojis/401818289023483904.png?v=1%22")
  .setColor(0x00AF46)
  .setDescription("**Dia VANT Zeus**")
  .setFooter("MYAD TECHNOLOGIES S.L.E.","https://cdn.discordapp.com/emojis/401818289023483904.png?v=1%22")
  .setThumbnail("http://myriad.bitcoinbetmaster.com/wp-content/uploads/2018/10/darkorbit-dia-zeus.png")
  .setTimestamp()
  .setURL("http://myriad.bitcoinbetmaster.com/")
  .addField("**Informacion:**","**Aprovecha esta ventaja temporal:** \nHan aparecido planos de construccion para el 10 VANT!\nAl parecer, los piratas han perdido una gran carga de estos botines piratas dorados en uno de sus intentos de contrabando esporadicos.\nEstos botines piratas pueden abrirse con las llaves de botin normales.\nSin embargo, son mas valiosos, ya que esconden en su interior partes de los planos de construccion del VANT Zeus.Sal al espacio y recoge ahora los codiciados botines piratas dorados!\nNuestros tecnicos han preparado ya todo para que puedas construir tambien el VANT Zeus siguiendo el sistema del VANT Apis en la tecnofabrica.", true)
  .addField("**Promocion**","Los botines dorados suelen salir los viernes cada semana o casi cada semana, aprovecha!", true)
  message.channel.send({embed});
}
