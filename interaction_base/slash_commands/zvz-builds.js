const {
  Client,
  Interaction,
  MessageButton,
  MessageActionRow,
} = require("discord.js");
const { row, tankRow, healRow } = require("../../list");
module.exports = {
  name: "zvz-builds",
  description: "Showing list of approved zvz builds",
  aliases: ["buildsofzvz"],
  /**
   *
   * @param {Interaction} interaction
   * @param {Client} client
   */
  async execute(interaction, client) {
    if (
      (interaction.channel.id === "760731834354499585") |
      (interaction.channel.id === "779514684797091850") |
      interaction.member.roles.cache.has("759793776439984170") |
      interaction.member.permissions.has("ADMINISTRATOR")
    ) {
      const deleteButton = new MessageButton()
        .setStyle("DANGER")
        .setCustomId("delete")
        .setLabel("Delete")
        .setEmoji("🚨");
      await interaction.reply({
        content: "ZvZ build List! according to ARCH official zvz builds",
        components: [
          row,
          tankRow,
          healRow,
          new MessageActionRow().addComponents(deleteButton),
        ],
      });
    }
  },
};
