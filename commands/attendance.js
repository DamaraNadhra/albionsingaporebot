const { MessageEmbed } = require("discord.js");
const axios = require("axios");
module.exports = {
  name: "attendance",
  description: "Map a zvz players attender",
  roles: ["759793776439984170", "855689169018814464"],
  async execute(message, args, client) {
    if (
      message.member.roles.cache.has("759793776439984170") |
      message.member.roles.cache.has("855689169018814464")
    ) {
      let battleID = args[0];
      if (!battleID) return message.reply("Please state the battle ID!");
      axios
        .get(
          `https://gameinfo.albiononline.com/api/gameinfo/battles/${battleID}`
        )
        .then(async (result) => {
          let event1 = result.data;
          const embed = new MessageEmbed()
            .setColor("ORANGE")
            .setAuthor("Singapore Police", client.user.displayAvatarURL())
            .setDescription(
              `Player who attended ZvZ In Singapore for battle ${battleID}: \n ${Object.keys(
                event1.players
              )
                .filter((m) => event1.players[m].guildName === "Singapore")
                .map((m, i) => event1.players[m].name)
                .join("\n")}`
            );
          message.channel.send({
            embeds: [embed],
          });
        });
    } else {
      return message.reply({
        content: `I'm sorry but you don't have the right to execute this command`,
      });
    }
  },
};
