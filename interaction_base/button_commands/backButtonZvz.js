const {
  Interaction,
  Client,
  MessageEmbed,
  MessageButton,
  MessageActionRow,
} = require("discord.js");
const { row, tankRow, healRow } = require("../../list");
module.exports = {
  name: "back",
  description: "BACK button from ZVZ Select Menus",
  async execute(interaction, client) {
    if (interaction.replied) {
      interaction.editReply({
        content: "ZvZ build list! According to ARCH main zvz gears",
        components: [row, tankRow, healRow],
      });
    } else {
      const deleteButton = new MessageButton()
        .setStyle("DANGER")
        .setCustomId("delete")
        .setLabel("Delete")
        .setEmoji("🚨");
      interaction.update({
        content: "ZvZ build list! According to ARCH main zvz gears",
        components: [
          row,
          tankRow,
          healRow,
          new MessageActionRow().addComponents(deleteButton),
        ],
        embeds: [],
      });
    }
  },
};
