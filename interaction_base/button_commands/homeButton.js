const { MessageEmbed, MessageButton, MessageActionRow } = require("discord.js");
module.exports = {
  name: "home",
  description: "home from ava builds select menus",
  execute(interaction, client) {
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
    interaction.update({
      embeds: [embed],
      components: [
        new MessageActionRow().addComponents(listButton, closeButton),
      ],
    });
  },
};
