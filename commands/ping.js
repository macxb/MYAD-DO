exports.run = async (client, message) => {
  message.channel.send(`Ping del BOT: \`${Date.now() - message.createdTimestamp} ms\``);
};
