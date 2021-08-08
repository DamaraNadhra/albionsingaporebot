const { dateMaker, nicknameMaker } = require("../../functions");
module.exports = {
  name: "giverep",
  description: "gives reputation to the specified user.",
  async execute(interaction, client) {
    if (
      (interaction.channelID === "722753194496753745") |
      (interaction.channelID === "752110992405692456")
    )
      return;
    const logChannel =
      interaction.guild.channels.cache.get("864669032811331584");
    const { user } = interaction.options.get("user");
    if (user.id === interaction.member.id)
      return interaction.reply({
        content: `You can give reputation to yourself haiz...., but nice try <:weirdchamp:839890533244862474>`,
      });
    let isPersonHasRep = await rep.findOne({ id: user.id });
    let personID = user.id;
    if (isPersonHasRep) {
      await isPersonHasRep.updateOne({
        rep: parseInt(isPersonHasRep.rep) + 1,
      });
    } else {
      await rep.create({
        name: nicknameMaker(interaction, personID),
        id: personID,
        rep: 1,
      });
    }
    let personData = await rep.findOne({ id: personID });
    let blabla =
      (await (
        await rep.find().sort({ rep: -1 })
      ).findIndex((i) => i.id === personID)) + 1;
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
      content: `Gave \`1\` Rep to **${personData.name}** (current: \`${rank}\` -\`${personData.rep}\`)`,
    });
    recentlyRan.push(interaction.member.id);
    setTimeout(() => {
      recentlyRan = recentlyRan.filter(
        (string) => string !== interaction.member.id
      );
    }, 420000);
    logChannel.send({
      content: `**${nicknameMaker(
        interaction,
        interaction.member.id
      )}** has given \`1\` Rep to **${personData.name}** in <#${
        interaction.channelID
      }> at ${dateMaker(new Date())}`,
    });
  },
};
