const {
  Interaction,
  Client,
  MessageEmbed,
  MessageButton,
  MessageActionRow,
} = require("discord.js");
const { zvzlist } = require("../../list");
module.exports = {
  name: "tanks",
  description: "ZvZ Tanks Select Menu",
  async execute(interaction, client) {
    Object.keys(zvzlist.tanks).forEach((m, i) => {
      const tankList = zvzlist.tanks;
      if (interaction.values.includes(m)) {
        const embed = new MessageEmbed()
          .setColor("ORANGE")
          .setAuthor(tankList[m].label, tankList[m].pic)
          .setImage(tankList[m].icon);
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
          .setURL(tankList[m].reference)
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
