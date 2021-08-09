const {
  Client,
  Interaction,
  MessageButton,
  MessageActionRow,
  CommandInteraction,
} = require("discord.js");
const { row, tankRow, healRow, zvzlist } = require("../../list");
module.exports = {
  name: "zvz-builds",
  description: "Showing list of approved zvz builds",
  aliases: ["buildsofzvz"],
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
        Object.keys(zvzlist).forEach((m, i) => {
          Object.keys(zvzlist[m]).forEach((element, index) => {
            if (element.includes(buildType)) {
              const build = zvzlist[m][element];
              let zvzlistButton = new MessageButton()
                .setCustomId("listbuttonzvz")
                .setStyle("SUCCESS")
                .setLabel("Look for more builds!")
                .setEmoji("<:jennielove:844893922634235904>");
              let referenceButton = new MessageButton()
                .setStyle("LINK")
                .setURL(build.reference)
                .setLabel("ARCH main discord reference");
              let embed = new MessageEmbed()
                .setAuthor(build.label, build.pic)
                .setColor("ORANGE")
                .setImage(build.icon);
              const embedDesc = new MessageEmbed()
                .setColor("ORANGE")
                .setDescription(
                  `**Shortcut:** \`!${element}\` \n**Requirement:** 1100+ IP`
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
                components: [
                  new MessageActionRow().addComponents(
                    zvzlistButton,
                    referenceButton
                  ),
                ],
              });
            }
          });
        });
      } else {
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
    } else {
      interaction.reply({
        content:
          "To prevent clutter, please redo this command at the bot commands channel,",
        ephemeral: true,
      });
    }
  },
};
