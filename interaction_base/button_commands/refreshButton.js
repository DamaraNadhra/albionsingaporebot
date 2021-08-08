const { MessageEmbed, MessageButton, MessageActionRow } = require("discord.js");
const rep = require("../../models/reputation");
module.exports = {
  name: "refreshbutton",
  description: "refresh button from reputation system",
  async execute(interaction, client) {
    const datta = await rep.find().sort({ rep: -1 }).limit(15);
    const pointsMap = datta.map((m) => m.rep).join("\n");
    const nameMap = datta.map((m) => m.name).join("\n");
    const rankMap = datta
      .map(function (element, index) {
        return "**" + "#" + (parseInt(index) + 1) + "**";
      })
      .filter((m) =>
        m.replace("#1", "🥇").replace("#2", "🥈").replace("#3", "🥉")
      )
      .join("\n");
    const thisbutton = new MessageButton()
      .setStyle("PRIMARY")
      .setEmoji("🔄")
      .setCustomId("refreshbutton")
      .setLabel("Refresh");
    const embed = new MessageEmbed()
      .setColor("ORANGE")
      .setDescription(
        "**Reputation Leaderboard!** \n**Syntax:** \n`!+rep [playerMention]` \n`!giverep [playerMention(s)]` \n`thanks/thx/thank you [playerMention(s)]`\n\n**Countdown:** "
      )
      .setAuthor("Singapore Love Guardian", client.user.displayAvatarURL())
      .setThumbnail("https://i.imgur.com/GHJ9FLw.png")
      .addFields(
        { name: "**Rank**", value: rankMap, inline: true },
        { name: "**Name**", value: nameMap, inline: true },
        { name: "**Points**", value: pointsMap, inline: true }
      )
      .setFooter("Click the refresh button below to refresh the list!");
    interaction.update({
      embeds: [embed],
      components: [new MessageActionRow().addComponents(thisbutton)],
    });
  },
};
