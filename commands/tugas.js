const { Message, Client, MessageEmbed, MessageButton } = require("discord.js");
const task = require("../models/tugas");
module.exports = {
  name: "tugas",
  aliases: ["tugasku", "deadline", "task"],
  description: "list tugas saya",
  /**
   *
   * @param {Message} message
   * @param {*} args
   * @param {Client} client
   */
  async execute(message, args, client) {
    let firstArgument = args[0];
    if (firstArgument === "list") {
      let data = await task.find();
      let listMapel = data.map((e) => `${e.mapel} (\`${e.id}\`)`).join("\n");
      let listDeskripso = data.map((e) => e.description).join("\n");
      let listID = data.map((e) => e.id).join("\n");
      let deadline = data
        .map((e) => {
          const date = new Date(e.deadline);
          const now = new Date();
          let deadline = date - now;

          return `${(deadline / 86400000).toFixed(0)} hari lagi!`;
        })
        .join("\n");
      const embed = new MessageEmbed()
        .setColor("RED")
        .setAuthor("Daftar Tugas!", message.author.displayAvatarURL())
        .setDescription("Memperlihatkan daftar tugas untuk gato!")
        .addFields([
          { name: "**Mapel**", value: listMapel, inline: true },
          { name: "**Deskripsi**", value: listDeskripso, inline: true },
          { name: "**Deadline**", value: deadline, inline: true },
        ]);
      message.channel.send({
        embeds: [embed],
      });
    } else if (firstArgument === "add") {
      try {
        let mapel = args[1];
        let tanggal = args[2];
        let description = args.slice(3).join(" ");
        const date = new Date(tanggal);
        const now = new Date();
        let deadline = date - now;
        let dataCount = await task.estimatedDocumentCount();
        await task.create({
          mapel,
          deadline: tanggal,
          description,
          id: dataCount,
        });
        message.reply("Task created!").then((msg) => {
          setTimeout(() => {
            msg.delete();
            message.delete();
          }, 5000);
        });
      } catch (error) {
        message.reply("Something went wrong!");
      }
    } else if (firstArgument === "remove") {
      let tugasID = args[1];
      let existable = await task.findOne({ id: tugasID });
      if (!existable)
        return message.reply(
          `Tidak dapat menemukan tugas dengan ID: \`${tugasID}\``
        );
      else {
        await task.findOneAndRemove({ id: tugasID });
        const embed = new MessageEmbed()
          .setColor("GREEN")
          .setAuthor("Damara", message.author.displayAvatarURL())
          .setDescription(
            `**Tugas!** \n**Mapel:** ${existable.mapel}. \n**Deskripsi:** ${existable.description} \n\nTelah dinyatakan **SELESAI**`
          )
          .setTimestamp(new Date());
        message.channel.send({
          embeds: [embed],
        });
      }
    }
  },
};
