const { Interaction, Client } = require("discord.js");
const { dateMaker, nicknameMaker } = require("../../functions");
module.exports = {
  name: "rep",
  description: "Shows yours or specified user reputation",
  /**
   *
   * @param {Interaction} interaction
   * @param {Client} client
   * @returns
   */
  async execute(interaction, client) {
    if (
      (interaction.channelID === "840239735129767997") |
      (interaction.channelID === "752110992405692456")
    )
      return;
    let isPersonHasReputation;
    const blabla = interaction.options.get("user");
    if (interaction.options.get("user")) {
      const { user } = interaction.options.get("user");
      isPersonHasReputation = await rep.findOne({ id: user.id });
      if (!isPersonHasReputation) {
        interaction.reply({
          content: `**${nicknameMaker(
            interaction,
            user.id
          )}**: 0 **Rep** (#**#ω**)`,
        });
      } else {
        let blabla =
          (await (
            await rep.find().sort({ rep: -1 })
          ).findIndex((i) => i.id === user.id)) + 1;
        switch (blabla) {
          case 1:
            rank = "#1 NUMBA WANNN! 🥇🥇🥇";
            break;
          case 2:
            rank = "#2 NUMBA TWO 🥈🥈";
            break;
          case 3:
            rank = "#3 NUMBA THREE 🥉";
            break;
          default:
            rank = "#" + blabla;
            break;
        }
        interaction.reply({
          content: `**${isPersonHasReputation.name}**: ${isPersonHasReputation.rep} **Rep** (**${rank}**)`,
        });
      }
    } else {
      isPersonHasReputation = await rep.findOne({
        id: interaction.member.id,
      });
      if (!isPersonHasReputation) {
        interaction.reply({
          content: `**${nicknameMaker(
            interaction,
            interaction.member.id
          )}**: 0 **Rep** (#**#ω**)`,
        });
      } else {
        let blabla =
          (await (
            await rep.find().sort({ rep: -1 })
          ).findIndex((i) => i.id === interaction.member.id)) + 1;
        switch (blabla) {
          case 1:
            rank = "#1 NUMBA WANNN! 🥇🥇🥇";
            break;
          case 2:
            rank = "#2 NUMBA TWO 🥈🥈";
            break;
          case 3:
            rank = "#3 NUMBA THREE 🥉";
            break;
          default:
            rank = "#" + blabla;
            break;
        }
        interaction.reply({
          content: `**${isPersonHasReputation.name}**: ${isPersonHasReputation.rep} **Rep** (**${rank}**)`,
        });
      }
    }
  },
};
