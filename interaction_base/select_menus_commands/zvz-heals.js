const {
  Interaction,
  Client,
  MessageEmbed,
  MessageButton,
  MessageActionRow,
} = require("discord.js");
const { healList } = require("../../list");
module.exports = {
  name: "heals",
  description: "none",
  async execute(interaction, client) {
    Object.keys(healList).forEach((m, i) => {
      if (interaction.values.includes(m)) {
        const embed = new MessageEmbed()
          .setColor("ORANGE")
          .setAuthor("'zl [SING] LongLiveLuai", client.user.displayAvatarURL())
          .setImage(healList[m][0])
          .setFooter("According to ARCH main discord zvz gears");
        const button = new MessageButton()
          .setStyle("LINK")
          .setURL(healList[m][1])
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
          .setURL(healList[m][2])
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
