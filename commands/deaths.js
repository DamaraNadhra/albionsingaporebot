const axios = require("axios");
const { MessageEmbed } = require("discord.js");
module.exports = {
  name: "deaths",
  description:
    "Returns you a list of 10 recent death from the corresponding person",
  async execute(message, args) {
    let personName = args[0];
    if (!personName) return message.reply("U need to state the person");
    let test = [];
    axios
      .get(
        `https://gameinfo.albiononline.com/api/gameinfo/search?q=${personName}`
      )
      .then((ress) => {
        console.log(ress.data.players);
        let drago = ress.data.players[0].Id;
        message.channel.send("Hold on ah, I'm sending u pm");
        message.author.send("Generating list...");

        axios
          .get(
            `https://gameinfo.albiononline.com/api/gameinfo/players/${drago}/deaths`
          )
          .then((res) => {
            let kematian = res.data
              .map(
                (redo, i) =>
                  `**Death #${i + 1}**` +
                  "\n" +
                  `Killed by [${redo.Killer.AllianceName}] [${redo.Killer.GuildName}] ${redo.Killer.Name}` +
                  "\n" +
                  `Death fame: ${redo.TotalVictimKillFame}` +
                  "\n" +
                  `Time: ${new Date(
                    "2021-02-20T11:45:04.342798700Z"
                  ).toDateString()}` +
                  "\n" +
                  `Death ID: ${redo.EventId}` +
                  "\n" +
                  `[Link for validation](https://albiononline.com/en/killboard/kill/${redo.EventId})`
              )
              .join("\n\n");
            console.log(kematian);
            const embed = new MessageEmbed()
              .setColor("#EC330B ")
              .setTitle("List of Battle ID links for fast check:")
              .setDescription(`[Alliance][GuildName] KillerName | DeathFame | Death Timestamp | BattleID
            of ${personName} \n\n${kematian}`);
            message.author.send({
              embeds: [embed],
            });
          });
      })
      .catch((e) => {
        return message.channel.send("I think you might insert the wrong name");
      });
  },
};
