const rep = require("../models/reputation");
const { nicknameMaker } = require("../functions");
module.exports = {
  name: "rep",
  description: "check someone's reputation!",
  async execute(message, args, client) {
    if (message.channel.id === "722753194496753745") return;
    let firstArgument = args[0];
    let argument = args.slice(0).join(" ");
    let isPersonHasReputation;
    if (!firstArgument)
      return message.reply({
        content: "State the person mentions or his nickname",
      });
    if (message.mentions.members.first()) {
      let person = message.mentions.members.first();
      let personNickname = message.guild.members.cache.get(person.id).nickname;
      isPersonHasReputation = await rep.findOne({ id: person.id });
      if (!isPersonHasReputation) {
        message.channel.send({
          content: `**${nicknameMaker(
            message,
            person.id
          )}**: 0 **Rep** (#**#ω**)`,
        });
      } else {
        let blabla =
          (await (
            await rep.find().sort({ rep: -1 })
          ).findIndex((i) => i.id === person.id)) + 1;
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
        message.channel.send({
          content: `**${isPersonHasReputation.name}**: ${isPersonHasReputation.rep} **Rep** (**${rank}**)`,
        });
      }
    } else {
      let hisID = (await message.guild.members.fetch()).find((user) =>
        user.displayName.toLowerCase().includes(args[0].toLowerCase())
      );
      if (!hisID)
        return message.reply({
          content: `I couldnt find a person with \`${argument}\` nickname`,
        });
      isPersonHasReputation = await rep.findOne({ id: hisID.id });
      if (!isPersonHasReputation) {
        message.channel.send({
          content: `**${nicknameMaker(
            message,
            hisID.id
          )}**: 0 **Rep** (#**#ω**)`,
        });
      } else {
        let blabla =
          (await (
            await rep.find().sort({ rep: -1 })
          ).findIndex((i) => i.id === hisID.id)) + 1;
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
        message.channel.send({
          content: `**${isPersonHasReputation.name}**: ${isPersonHasReputation.rep} **Rep** (**${rank}**)`,
        });
      }
    }
  },
};
