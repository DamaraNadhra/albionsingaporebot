const { row, tankRow, healRow } = require("../list");
const {
  MessageEmbed,
  MessageButton,
  MessageActionRow,
  MessageSelectMenu,
} = require("discord.js");
module.exports = {
  name: "zvz-builds",
  description:
    "Shows you a list of approved ZvZ builds according at ARCH Main Discord",
  async execute(message, args) {
    if (
      (message.channel.id === "760731834354499585") |
      (message.channel.id === "779514684797091850") |
      message.member.roles.cache.has("759793776439984170") |
      message.member.permissions.has("ADMINISTRATOR")
    ) {
      message.delete();
      let deleteButton = new MessageButton()
        .setStyle("DANGER")
        .setCustomId("delete")
        .setLabel("Delete")
        .setEmoji("🚨");
      await message.channel.send({
        content: "ZvZ build List! according to ARCH official zvz builds",
        components: [
          row,
          tankRow,
          healRow,
          new MessageActionRow().addComponents(deleteButton),
        ],
      });
    } else {
      const channel = message.guild.channels.cache.get("760731834354499585");
      const embedz = new MessageEmbed()
        .setColor("RED")
        .setAuthor(
          "Singapore Police",
          "https://cdn.discordapp.com/icons/703862691608920114/669f0e6605601754a64fbb829ede2c00.webp?size=256"
        )
        .setDescription(
          `**ERROR** \nThis command is disabled in this channel to prevent clutter, please redo this command at ${channel}`
        )
        .setFooter("If this is wrong please contact the officers :D");
      message.reply({
        embeds: [embedz],
      });
    }
  },
};
