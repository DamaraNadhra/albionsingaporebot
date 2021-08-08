const blacklist = require("../models/blacklist");
module.exports = {
  name: "unblacklist",
  description: "un-blacklist people from the blacklist",
  async execute(message, args) {
    let personName = args[0];
    if (!personName)
      return message.reply({
        content: "You must state the person",
      });
    let isPersonBlacklisted = await blacklist.findOne({
      blname: personName.toLowerCase(),
    });
    if (!isPersonBlacklisted)
      return message.reply({
        content: `I cannot find a person with \`${personName}\` inside the blacklist :D`,
      });
    await blacklist.findOneAndDelete({ blname: personName.toLowerCase() });
    message.reply({
      content: `Player **${personName}** has been unblacklisted`,
    });
  },
};
