const {
  Interaction,
  Client,
  MessageEmbed,
  MessageButton,
  MessageActionRow,
} = require("discord.js");
const { zvzlist } = require("../../list");
module.exports = {
  name: "heals",
  description: "none",
  async execute(interaction, client) {
    Object.keys(zvzlist.heals).forEach((m, i) => {
      const healList = zvzlist.heals;
      if (interaction.values.includes(m)) {
        const embed = new MessageEmbed()
          .setColor("ORANGE")
          .setAuthor(healList[m].label, healList[m].pic)
          .setImage(healList[m].icon);
        const embedDesc = new MessageEmbed()
          .setColor("ORANGE")
          .setDescription(`**Shortcut:** \`!${m}\` \n**Requirement:** 1100+ IP`)
          .setFooter(
            `Requested by ${interaction.user.username}`,
            interaction.user.displayAvatarURL()
          );
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
          .setURL(healList[m].reference)
          .setLabel("ARCH main discord reference");
        if (interaction.replied) {
          interaction.editReply({
            content: "Hold on",
            components: [
              new MessageActionRow().addComponents(
                buttonback,
                referenceButton,
                deleteButton
              ),
            ],
            embeds: [embed, embedDesc],
          });
        } else {
          interaction.update({
            content: "Hold on",
            components: [
              new MessageActionRow().addComponents(
                buttonback,
                referenceButton,
                deleteButton
              ),
            ],
            embeds: [embed, embedDesc],
          });
        }
      }
    });
  },
};
