const { MessageEmbed, MessageButton, MessageActionRow } = require("discord.js");
module.exports = {
  name: "ava-help",
  description: "Ava guide and ava builds inside",
  async execute(message, args, client) {
    let botCommandChannel =
      message.guild.channels.cache.get("760731834354499585");
    if (
      (message.channel.id === "760731834354499585") |
      (message.channel.id === "779514684797091850") |
      message.member.roles.cache.has("759793776439984170") |
      message.member.permissions.has("ADMINISTRATOR")
    ) {
      message.delete();
      const listButton = new MessageButton()
        .setCustomId("avabuildsbutton")
        .setEmoji("🚀")
        .setLabel("Ava builds")
        .setStyle("SUCCESS");
      const closeButton = new MessageButton()
        .setCustomId("closebutton")
        .setEmoji("❌")
        .setLabel("Close")
        .setStyle("DANGER");
      let embed = new MessageEmbed()
        .setColor("ORANGE")
        .setAuthor("Singapore Ava Slave", client.user.displayAvatarURL())
        .setTitle("Introduction...")
        .setDescription(
          `Avalonian Elite Dungeon is a difficult dungeon which can only be finished with 20 men. \nYou can only find the **Avalonian Elite Dungeon** around the outlands, you can also find **Avalonian Elite Dungeon** inside the Avalonian Roads as well. The tier starts from T6. \n\nHowever, finding a natural spawn dungeon is a little bit difficult, that's why people used to pop it from a map. \nIn Singapore guild we always do **8.2+ Avalonian Elite Dungeon** that's why you are expected to wear **8.3 gears** and hit at least **1650 IP**. \n\nAs for the shape of the dungeon entrance is like the image below `
        )
        .setImage("https://i.imgur.com/vjQoBtm.png")
        .setFooter("Singapore", client.user.displayAvatarURL());
      message.channel.send({
        embeds: [embed],
        components: [
          new MessageActionRow().addComponents(listButton, closeButton),
        ],
      });
    }
  },
};
