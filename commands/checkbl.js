const axios = require("axios");
const { MessageEmbed } = require("discord.js");
const blacklist = require("../models/blacklist");
module.exports = {
  name: "checkbl",
  description: "Check person's blacklist status",
  async execute(message, args, client) {
    let channel = message.guild.channels.cache.get("760731834354499585");
    let existable = await blacklist.findOne({
      blname: args[0].toLowerCase(),
    });
    const embedz = new MessageEmbed()
      .setColor("RED")
      .setAuthor(
        "Singapore Police",
        "https://cdn.discordapp.com/icons/703862691608920114/669f0e6605601754a64fbb829ede2c00.webp?size=256"
      )
      .setDescription(
        `**ERROR** \nThis command is disabled in this channel to prevent clutter, please redo this command at ${channel}`
      )
      .setFooter("If this is wrong please contact the officers :D");
    if (
      (message.channel.id === "779514684797091850") |
      (message.channel.id === "760731834354499585")
    ) {
      let firstArgument = args[0];
      if (!firstArgument)
        return message.reply("Please state the person you want to check!");
      axios
        .get(`https://api.aotools.net/v2/blacklist/${firstArgument}`)
        .then(async (result) => {
          if (result.data.isBlacklisted === true) {
            const embed = new MessageEmbed()
              .setColor("AQUA")
              .setAuthor(
                "Singapore Police",
                "https://cdn.discordapp.com/icons/703862691608920114/669f0e6605601754a64fbb829ede2c00.webp?size=256"
              )
              .setDescription(
                "**This player is blacklisted! by ARCH** Please dont invite him over to the guild or just kick him directly! Please look into ARCH main discord for more info"
              )
              .setFooter("If this is wrong please contact the officers :D");
            message.channel.send({
              embeds: [embed],
            });
          } else if (existable) {
            const embed = new MessageEmbed()
              .setColor("RED")
              .setAuthor("Singapore Police", client.user.displayAvatarURL())
              .setTitle("Warning! Player blacklisted! by SG")
              .addFields(
                { name: "**Player**", value: existable.blname, inline: true },
                {
                  name: "**Blacklisted by**",
                  value: `<@${existable.blacklister}> ${existable.date}`,
                  inline: true,
                },
                {
                  name: "**Reason**",
                  value: `\`\`\`${existable.reason} \`\`\``,
                }
              );
            message.channel.send({
              embeds: [embed],
            });
          } else {
            message.reply(`**${result.data.name}** is not blacklisted :D`);
          }
        });
    } else {
      return message.channel.send(embedz);
    }
  },
};
