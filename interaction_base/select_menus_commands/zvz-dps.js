const {
  Interaction,
  Client,
  MessageEmbed,
  MessageButton,
  MessageActionRow,
} = require("discord.js");
const { dpsList } = require("../../list");
module.exports = {
  name: "dps",
  description: "selectMenu for zvz dps",
  async execute(interaction, client) {
    Object.keys(dpsList).forEach((m, i) => {
      if (interaction.values.includes(m)) {
        const embed = new MessageEmbed()
          .setColor("ORANGE")
          .setAuthor("'zl [SING] LongLiveLuai", client.user.displayAvatarURL())
          .setImage(dpsList[m][0])
          .setFooter("According to ARCH main discord zvz gears");
        const button = new MessageButton()
          .setStyle("LINK")
          .setURL(dpsList[m][1])
          .setLabel("Link to the Website");
        const buttonback = new MessageButton()
          .setStyle("SUCCESS")
          .setCustomId("back")
          .setLabel("Back to the List")
          .setEmoji("🚀");
        const deleteButton = new MessageButton()
          .setStyle("DANGER")
          .setCustomId("delete")
          .setLabel("Delete this message")
          .setEmoji("🚨");
        const referenceButton = new MessageButton()
          .setStyle("LINK")
          .setURL(dpsList[m][2])
          .setLabel("ARCH main discord reference");
        if (interaction.replied) {
          interaction.editReply({
            content: "Hold on",
            components: [
              new MessageActionRow().addComponents(
                button,
                buttonback,
                referenceButton,
                deleteButton
              ),
            ],
            embeds: [embed],
          });
        } else {
          interaction.update({
            content: "Hold on",
            components: [
              new MessageActionRow().addComponents(
                button,
                buttonback,
                referenceButton,
                deleteButton
              ),
            ],
            embeds: [embed],
          });
        }
      }
    });
  },
};
