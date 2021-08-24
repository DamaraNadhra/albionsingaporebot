const { Message, Client, MessageAttachment } = require("discord.js");
const collect = require("collect.js");
module.exports = {
  name: "copychannel",
  description: "Copy all the messages inside that channel",
  /**
   *
   * @param {Message} message
   * @param {Array} args
   * @param {Client} client
   */
  async execute(message, args, client) {
    if (!args[0])
      return message.reply("Please state the guild ID that you want to copy!");
    if (!args[1])
      return message.reply(
        "Please state the channel ID that you want to copy!"
      );
    const guild = client.guilds.cache.get(args[0]);
    const channel = guild.channels.cache.get(args[1]);
    let fetchedMessage = await channel.messages.fetch({ limit: 100 });
    let mapped = fetchedMessage.map((e) => {
      return {
        content: e.content,
        attachment: e.attachments,
      };
    });
    console.log(mapped);
    for (var i = mapped.length - 1; i >= 0; i--) {
      let content = mapped[i].content.length > 1 ? mapped[i].content : null;
      let attachments = mapped[i].attachment.map((e) => e.url)[0];
      if (content !== null) {
        message.channel.send({
          content: content,
        });
      }
      if (typeof attachments !== "undefined") {
        message.channel.send({
          content: attachments,
        });
      }
    }
    message.channel.send("Copy is complete!");
  },
};
