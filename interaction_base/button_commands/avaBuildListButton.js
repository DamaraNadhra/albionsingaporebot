const {
  Interaction,
  Client,
  MessageButton,
  MessageActionRow,
} = require("discord.js");
const { AvArow } = require("../../list");
module.exports = {
  name: "avabuildsbutton",
  description: "avabuildsbutton from AVA HELP",
  execute(interaction, client) {
    const closeButton = new MessageButton()
      .setCustomId("closebutton")
      .setEmoji("❌")
      .setLabel("Close")
      .setStyle("DANGER");
    const homeButton = new MessageButton()
      .setCustomId("home")
      .setEmoji("🏘️")
      .setLabel("Home")
      .setStyle("PRIMARY");
    interaction.update({
      embeds: [],
      content: "Listing avalonian builds...",
      components: [
        AvArow,
        new MessageActionRow().addComponents(homeButton, closeButton),
      ],
    });
  },
};
