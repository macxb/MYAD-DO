const Discord = require("discord.js");
const client = new Discord.Client();

exports.run = async (client, message) => {
	const embed = new Discord.RichEmbed()
		.setTitle("**Menu P.E.T.**")
		.setAuthor("MYAD DO","https://cdn.discordapp.com/emojis/401818289023483904.png?v=1%22")
		.setColor(0x00AF46)
		.setDescription("**Listado de Comandos P.E.T.**")
		.setFooter("MYAD TECHNOLOGIES S.L.E.","https://cdn.discordapp.com/emojis/401818289023483904.png?v=1%22")
		.setThumbnail("http://myriad.bitcoinbetmaster.com/wp-content/uploads/2018/10/darkorbit-pet.png")
		.setTimestamp()
		.setURL("http://myriad.bitcoinbetmaster.com/")
		.addField("**Modulos:**","**/pet-gal1** Autorrecolector. (G-AL1)\n**/pet-gar1** Recolector de Recursos. (G-AR1)\n**/pet-gel1** Rastreador de Enemigos. (G-EL1)\n**/pet-grl1** Rastreador de Recursos. (G-RL1)\n**/pet-gtra1** Modulo de Comercio. (G-TRA1)\n**/pet-grep1** Modulo de Reparacion (G-REP1)\n**/pet-gkk1** Modulo Kamikaze (G-KK1)\n**/pet-gsf1** Modulo LLama expiatoria(G-SF1)", true)
    .addField("**Combomodulos:**","**/pet-csr2** Combomodulo de Reparacion. (C-SR2)\n/**pet-cgm2** Combomodulo de Defensa. (C-GM2)", true)
		.addField("**Protocolos:**","**/pet-aicr1** Protocolo de Carga (AI-CR1)\n**/pet-air1** Protocolo de Radar (AI-R1)```Conectando con servidor DO...\nRecopilando informacion...\n\n¡¡ERROR!!: ¡CONEXION AL SERVIDOR CAIDA!\n\nPor favor haga clic en:\n\n<<Volver a conectar>> ```:flushed: :joy: :smirk: ", );
	message.channel.send({embed});
}
