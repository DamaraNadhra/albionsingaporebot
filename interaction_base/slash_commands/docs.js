const {
  MessageEmbed,
  MessageButton,
  MessageActionRow,
  CommandInteraction,
  Client,
} = require("discord.js");
const { faq, errorSelectMenus } = require("../../list");
const { faqTitle } = require("../../util");
module.exports = {
  name: "docs",
  description: "Showing docs of the guilds",
  /**
   * @param {CommandInteraction} interaction
   * @param {Client} client
   */
  execute(interaction, client) {
    let question = interaction.options.getString("query");
    let target = interaction.options.getUser("target");
    let answer = Object.keys(faq).find((m) =>
      m.toLowerCase().includes(question.toLowerCase())
    );
    if (answer !== undefined && answer !== "approvedScout") {
      const title = faqTitle(answer);
      interaction.reply({
        content: `_Showing answer for <@${
          target ? target.id : interaction.user.id
        }>_ \n<:singaporeDiscordEmoji:873354185645625414> __**${title}**__ \n${
          Boolean(faq[answer].attachment) ? faq[answer].string : faq[answer]
        }`,
        files: Boolean(faq[answer].attachment) ? faq[answer].attachment : [],
      });
    } else if (answer === "approvedScout") {
      interaction.reply({
        content: `_Showing answer for <@${interaction.user.id}>_ \n<:singaporeDiscordEmoji:873354185645625414> __**Approved Scout**__`,
        embeds: [
          new MessageEmbed()
            .setAuthor(faq.approvedScout.author[0], faq.approvedScout.author[1])
            .setColor(faq.approvedScout.color)
            .setDescription(faq.approvedScout.description)
            .setImage(faq.approvedScout.image)
            .setFooter("Singapore ontop baby", client.user.displayAvatarURL()),
        ],
      });
    } else {
      interaction
        .reply({
          ephemeral: true,
          content: `<:singaporeDiscordEmoji:873354185645625414> No match, please search through the docs below`,
          components: [errorSelectMenus],
        })
        .then((msg) => {
          const filter = (interaction) => interaction.customId === "document";
          interaction.channel
            .awaitMessageComponent({ filter, time: 60000 })
            .then((reaction) => {
              reaction
                .update({
                  ephemeral: true,
                  content: "Suggestion sent!",
                  components: [],
                })
                .then(() => {
                  Object.keys(faq).forEach((val, index) => {
                    if (reaction.values.includes(val)) {
                      const title = faqTitle(val);
                      if (val === "approvedScout") {
                        reaction.followUp({
                          content: `_Showing answer for <@${
                            target ? target.id : reaction.user.id
                          }>_ \n<:singaporeDiscordEmoji:873354185645625414> __**Approved Scout**__`,
                          embeds: [
                            new MessageEmbed()
                              .setAuthor(
                                faq.approvedScout.author[0],
                                faq.approvedScout.author[1]
                              )
                              .setColor(faq.approvedScout.color)
                              .setDescription(faq.approvedScout.description)
                              .setImage(faq.approvedScout.image)
                              .setFooter(
                                "Singapore ontop baby",
                                client.user.displayAvatarURL()
                              ),
                          ],
                        });
                      } else {
                        reaction.followUp({
                          content: `_Showing answer for <@${
                            target ? target.id : reaction.user.id
                          }>_ \n<:singaporeDiscordEmoji:873354185645625414> __**${title}**__ \n${
                            Boolean(faq[reaction.values].attachment)
                              ? faq[reaction.values].string
                              : faq[reaction.values]
                          }`,
                          files: Boolean(faq[reaction.values].attachment)
                            ? faq[reaction.values].attachment
                            : [],
                        });
                      }
                    }
                  });
                });
            });
        });
    }
  },
};
