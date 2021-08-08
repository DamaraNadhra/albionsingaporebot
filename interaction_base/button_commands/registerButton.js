const {
  Interaction,
  Client,
  MessageEmbed,
  MessageButton,
  MessageActionRow,
} = require("discord.js");
module.exports = {
  name: "register",
  description: "REGISTER button from register application",
  async execute(interaction, client) {
    const registerButton = new MessageButton()
      .setCustomId("register")
      .setStyle("SUCCESS")
      .setEmoji("✅")
      .setLabel("I have read all the rules");
    const permissionGiven = new MessageButton()
      .setLabel("Permission Given!")
      .setCustomId("permissiongiven")
      .setDisabled(true)
      .setEmoji("🔓")
      .setStyle("PRIMARY");
    const role = interaction.guild.roles.cache.get("706471167971557447");
    const recruitRole = interaction.guild.roles.cache.get("849947414508863519");
    const botCommandChannel =
      interaction.guild.channels.cache.get("752110992405692456");
    const welcomeChannel =
      interaction.guild.channels.cache.get("742733429132754975");
    interaction.member.roles.add(recruitRole);
    if (
      interaction.member.roles.cache.has("706471167971557447") |
      interaction.member.roles.cache.has("849947414508863519")
    ) {
      return interaction.reply({
        content: "You have already signed up! Please dont joke around!",
        ephemeral: true,
      });
    }
    interaction.user.send({
      content: `Permission Given!, Please post your application at ${botCommandChannel} \nPlease refer to ${welcomeChannel} for application instruction! \n\nPlease remember that **after you have joined the guild** you **MUST** register in ARCH Main Discord by typing \`!register\` in #register-here. If we found out that you were not registered, we will kick you :D`,
      files: ["https://i.imgur.com/9gsA1SO.png"],
    });

    interaction.update({
      components: [new MessageActionRow().addComponents(permissionGiven)],
    });
    setTimeout(() => {
      interaction.editReply({
        components: [new MessageActionRow().addComponents(registerButton)],
      });
    }, 1500);
  },
};
