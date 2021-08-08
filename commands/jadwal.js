const { Message, Client, MessageEmbed } = require("discord.js");
module.exports = {
  name: "jadwal",
  aliases: ["j"],
  description: "jadwal man2",
  /**
   *
   * @param {Message} message
   * @param {*} args
   * @param {Client} client
   */
  async execute(message, args, client) {
    const embed = new MessageEmbed()
      .setColor("YELLOW")
      .setImage("https://i.imgur.com/67LO9sA.jpg");
    message.channel.send({
      embeds: [embed],
    });
  },
};
