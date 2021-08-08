const { Message } = require("discord.js");
const { dateMaker } = require("../functions");
const blacklist = require("../models/blacklist");
module.exports = {
  name: "blacklist",
  description: "Blacklists people from joining Singapore Guild",
  aliases: ["bl"],
  /**
   * @param {Message} message
   */
  async execute(message, args) {
    if (!args[0]) return message.reply("Please be serious");
    let personName = args[0];
    let isBlacklisted = await blacklist.findOne({
      blname: personName.toLowerCase(),
    });
    let reason = args.slice(1).join(" ");
    if (!personName) return message.reply("You must state the personName");
    if (!reason)
      return message.reply(
        "You must state the reason why you're blacklisting this guy"
      );
    if (isBlacklisted)
      return message.reply(`This \`${personName}\` has already blacklisted`);
    await blacklist.create({
      blname: personName.toLowerCase(),
      blacklister: message.author.id,
      date: dateMaker(new Date()),
      reason: reason,
    });
    message.reply(
      `${personName} has been blacklisted! <:jennielove:844893922634235904>`
    );
  },
};
