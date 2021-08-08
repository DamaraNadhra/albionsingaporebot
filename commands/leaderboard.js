const { MessageEmbed, MessageButton, MessageActionRow } = require("discord.js");
module.exports = {
  name: "leaderboard",
  description: "shows top 15 of all reputations",
  async execute(message, args, client) {
    if (
      (message.channel.id === "864389467975974943") |
      message.member.permissions.has("MANAGE_MESSAGES")
    ) {
      let datta = await rep.find().sort({ rep: -1 }).limit(15);
      let pointsMap = datta.map((m) => m.rep).join("\n");
      let nameMap = datta.map((m) => m.name).join("\n");
      let rankMap = datta
        .map(function (element, index) {
          return "**" + "#" + (parseInt(index) + 1) + "**";
        })
        .join("\n");
      let thisbutton = new MessageButton()
        .setStyle("PRIMARY")
        .setEmoji("🔄")
        .setCustomId("refreshbutton")
        .setLabel("Refresh");
      const embed = new MessageEmbed()
        .setColor("ORANGE")
        .setDescription(
          "**Reputation Leaderboard!** \n**Syntax:** \n`!+rep [playerMention]` \n`!giverep [playerMention]` \n`thanks/thx/ty/thankyou [playerMentionS]` \n"
        )
        .setAuthor("Singapore Love Guardian", client.user.displayAvatarURL())
        .setThumbnail("https://i.imgur.com/GHJ9FLw.png")
        .addFields(
          { name: "**Rank**", value: rankMap, inline: true },
          { name: "**Name**", value: nameMap, inline: true },
          { name: "**Points**", value: pointsMap, inline: true }
        )
        .setFooter("Click the refresh button below to refresh the list!");
      message.channel.send({
        embeds: [embed],
        components: [new MessageActionRow().addComponents(thisbutton)],
      });
    }
  },
};
