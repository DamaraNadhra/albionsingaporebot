const {
  Interaction,
  Client,
  MessageEmbed,
  MessageActionRow,
  MessageButton,
  MessageSelectMenu,
  CommandInteraction,
} = require("discord.js");
const { avalist, AvArow } = require("../../list");
module.exports = {
  name: "ava-builds",
  description: "Shows the current meta builds for Avalonian Raid dungeon",
  /**
   *
   * @param {CommandInteraction} interaction
   * @param {Client} client
   */
  async execute(interaction, client) {
    if (
      (interaction.channel.id === "760731834354499585") |
      (interaction.channel.id === "779514684797091850") |
      interaction.member.roles.cache.has("759793776439984170") |
      interaction.member.permissions.has("ADMINISTRATOR")
    ) {
      const buildType = interaction.options.getString("builds");
      if (buildType) {
        Object.keys(avalist).forEach((m, i) => {
          if (m.includes(buildType)) {
            let listButton = new MessageButton()
              .setCustomId("listbutton")
              .setStyle("SUCCESS")
              .setLabel("Look for more builds!")
              .setEmoji("<:jennielove:844893922634235904>");
            let embed = new MessageEmbed()
              .setAuthor(avalist[m].name, avalist[m].icon)
              .setColor("ORANGE")
              .setImage(avalist[m].pic)
              .setDescription(avalist[m].string);
            const embedDesc = new MessageEmbed()
              .setColor("ORANGE")
              .setDescription(
                `**Shortcut:** \`!${m}\` \n**Requirement:** 1100+ IP`
              )
              .setFooter(
                `Requested by ${
                  interaction.guild.members.cache.get(interaction.user.id)
                    .displayName
                }`,
                interaction.user.displayAvatarURL()
              );
            interaction.reply({
              content: "Processing...",
              embeds: [embed, embedDesc],
              components: [new MessageActionRow().addComponents(listButton)],
            });
          }
        });
      } else {
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
        interaction.reply({
          content: "Avalonian Builds!",
          components: [
            AvArow,
            new MessageActionRow().addComponents(closeButton, homeButton),
          ],
        });
      }
    } else {
      interaction.reply(
        "To prevent clutter, please redo this command at the bot commands channel!"
      );
    }
  },
};
