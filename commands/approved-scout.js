const { MessageEmbed } = require("discord.js");
module.exports = {
  name: "approved-scout",
  description:
    "Returns you an embed message with comprehensive explanation about approved scout",
  async execute(message, args, client) {
    let embed = new MessageEmbed()
      .setAuthor(
        "Approved Scout",
        "https://render.albiononline.com/v1/item/T6_MAIN_ROCKMACE_KEEPER.png"
      )
      .setColor("ORANGE")
      .setDescription(
        `**Approved Scout** is a title given to trusted and tested scout, in order to be an **approved scout**, you must **follow the steps** explained below: \n\n**1.** Wear build that can buy time for the party to port out from the dungeon once the **divers/gankers** came in. (build example will show below) \n**2.** You must report the situation **regularly** to the party member. \n**3.** Turn on **mastery volume and combat log**, so you can hear gankers steps and whenever they pick stuff. \n**4.** After you have followed all the steps, contact one of the officers and send **a screenshot of your scout build**. \n**5.** The officer will add you into the **ARCH approved scout List** \n\n**Note:** \n**1.** If let's say your party got doved by divers. You **are not** responsible to regear / compensate the deaths, but they have the right **to not invite you** again in the future. \n**2.** If gankers came in, and you died when you are trying to hold them, it's **mandatory** to regear and come back to the dungeon asap. \n**3.** Not completing the task **means no PAYMENT** \n\n click this link below to see Singapore's approved scout list: \nhttps://arch.gay/scouts/g/singapore`
      )
      .setImage("https://i.imgur.com/eCq54NK.jpg")
      .setFooter("Singapore ontop baby", client.user.displayAvatarURL());
    message.channel.send({
      embeds: [embed],
    });
  },
};
