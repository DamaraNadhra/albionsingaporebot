const { Interaction, Client, MessageEmbed } = require("discord.js");
const { avalist } = require("../../list");
module.exports = {
  name: "avabuilds",
  description: "Shows the current meta for Avalonian Raid clearing dungeon",
  async execute(interaction, client) {
    Object.keys(avalist).forEach((m, i) => {
      if (interaction.values.includes(m)) {
        const embed = new MessageEmbed()
          .setAuthor(avalist[m].name, avalist[m].icon)
          .setColor("ORANGE")
          .setImage(avalist[m].pic)
          .setDescription(avalist[m].string)
          .setFooter(
            `Requested by ${
              Boolean(
                interaction.guild.members.cache.get(interaction.user.id)
                  .nickname
              )
                ? interaction.guild.members.cache.get(interaction.user.id)
                    .nickname
                : interaction.user.username
            }`,
            interaction.user.displayAvatarURL()
          );
        interaction.update({
          content: "Processing...",
          embeds: [embed],
        });
      }
    });
  },
};
