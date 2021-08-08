const { MessageEmbed } = require("discord.js");
module.exports = {
  name: "helpofficer",
  description: "Returns a list of officer commands",
  async execute(message, args, client) {
    const embed = new MessageEmbed()
      .setAuthor("Singapore Police", client.user.displayAvatarURL())
      .setColor("ORANGE")
      .setDescription("List of admin commands for officers")
      .addFields({
        name: "__**Commands**__",
        value:
          "```!add [playerMention] [ticketChannel] \n!checkbl [IGN] \n!checkbattle [battleID] \n!deaths [IGN] \n!fastcheck [KillboardID]```",
      })
      .setFooter(
        "If this is wrong please contact the officers",
        client.user.displayAvatarURL()
      )
      .setTimestamp(new Date());
    message.channel.send({
      embeds: [embed],
    });
  },
};
