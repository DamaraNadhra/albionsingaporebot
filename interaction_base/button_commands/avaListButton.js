const { MessageEmbed, MessageButton, MessageActionRow } = require("discord.js");
const { AvArow } = require("../../list");
module.exports = {
  name: "listbutton",
  description: "Listbutton whenever someone typed the !ava-[builds]",
  execute(interaction, client) {
    const closeButton = new MessageButton()
      .setCustomId("delete")
      .setEmoji("❌")
      .setLabel("Close")
      .setStyle("DANGER");
    const homeButton = new MessageButton()
      .setCustomId("home")
      .setEmoji("🏘️")
      .setLabel("Home")
      .setStyle("PRIMARY");
    interaction.update({
      components: [AvArow, new MessageActionRow().addComponents(closeButton)],
    });
  },
};
