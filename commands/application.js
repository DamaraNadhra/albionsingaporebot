const { MessageButton, MessageActionRow } = require("discord.js");
module.exports = {
  name: "application",
  description: "Application for new players",
  async execute(message, args) {
    let guildRulesChannel =
      message.guild.channels.cache.get("841918364863430666");
    let botCommandChannel =
      message.guild.channels.cache.get("760731834354499585");
    let registerButton = new MessageButton()
      .setCustomId("register")
      .setStyle("SUCCESS")
      .setEmoji("✅")
      .setLabel("I have read all the rules");
    message.channel
      .send({
        content: `Congratulations on joining the SINGAPORE Guild, we're happy to have you here! \nPlease take note and act on the following. \n\n> **1.** Join the Alliance Discord with this invite. \nhttps://discord.gg/TQcgeFjyw3`,
      })
      .then(() =>
        message.channel.send({
          content: `> **2.** Type \`!register\` in the #register-here channel, **after you have joined our guild!**`,
          files: ["https://i.imgur.com/9gsA1SO.png"],
        })
      )
      .then(() => {
        message.channel.send({
          content: `> **3.** Read ${guildRulesChannel}. \n\n> **4.** ZvZ builds can be found in the Arch alliance discord or just simply type \`!zvz-builds\` in ${botCommandChannel}. \n\n> **5.** Please click the button below once you have read the rules to have access to all the server channels.`,
          components: [new MessageActionRow().addComponents(registerButton)],
        });
      });
  },
};
