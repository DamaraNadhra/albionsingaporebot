const { Message } = require("discord.js");
module.exports = {
  name: "add",
  aliases: ["addperson", "addcase"],
  description: "Add a person personally into the case",
  /**
   *
   * @param {Message} message
   * @param {*} args
   * @returns
   */
  async execute(message, args) {
    if (
      message.member.roles.cache.has("759793776439984170") ||
      message.member.roles.cache.has("855688610782248980") ||
      message.member.roles.cache.has("855689169018814464") ||
      message.member.permissions.has("ADMINISTRATOR")
    ) {
      let personMention = message.mentions.members.first();
      const channelmention = message.mentions.channels.first();
      const channelMention = message.guild.channels.cache.get(
        channelmention.id
      );
      message.delete().then(() => {
        if (!personMention)
          return message.reply(`Please state the person's mention`);
        if (!channelMention)
          return message.reply(`Please state the channel's mention`);
        if (
          (channelMention.parentId === "853522303811321876") |
          (channelMention.parentId === "853522605684686878")
        ) {
          channelMention.permissionOverwrites.edit(personMention.user, {
            SEND_MESSAGES: true,
            VIEW_CHANNEL: true,
          });
          message.reply({
            content: `${personMention} has been added to ${channelMention}`,
          });
        } else {
          return message.reply({
            content:
              "This command only works for ticket channels, thank you, <:jennielove:844893922634235904>",
          });
        }
      });
    } else {
      return message.reply({
        content: "You don't have permission to use this command",
      });
    }
  },
};
