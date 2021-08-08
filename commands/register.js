const register = require("../models/register");
const { MessageEmbed } = require("discord.js");
const axios = require("axios");
module.exports = {
  name: "register",
  description: "Register to get permission to the Albion Singapore discord",
  async execute(message, args) {
    let personExistable = await register.findOne({
      discordID: message.author.id,
    });
    if (personExistable) {
      if (personExistable.guildName === "CN") {
        return message.reply(
          `对不起，但我认为你的 Discord account 已与 **${personExistable.personName}** 关联`
        );
      } else if (personExistable.guildName === "SG") {
        return message.reply(
          `Oof sorry, but it looks like your discord account has already linked with **${personExistable.personName}**`
        );
      } else {
        return message.reply(
          `Oof sorry, but it looks like your discord account has already linked with **${personExistable.personName}**`
        );
      }
    }
    let name = args[0];
    let tanggal = new Date();
    var hari = tanggal.getDay();
    var bulan = tanggal.getMonth();
    var tahun = tanggal.getFullYear();
    let tanggalfix = `${hari}/${bulan}/${tahun}`;
    if (!name) {
      return message.reply(
        "I'm sorry but you have to insert your IGN to register yourself \n\n"
      );
    }
    axios
      .get(`https://gameinfo.albiononline.com/api/gameinfo/search?q=${name}`)
      .then(async (res) => {
        let playerId = res.data.players[0].Id;
        let guildname = res.data.players[0].GuildName;
        console.log(res.data.players);
        if (guildname === "CN Avalonian Company") {
          message.reply("已注册，欢迎!");
          message.guild.members.cache.get(message.author.id).setNickname(name);
          message.guild.members.cache
            .get(message.author.id)
            .roles.add("851706125065388042");
          await register.create({
            personName: name,
            discordID: message.author.id,
            personID: playerId,
            guildName: "CN",
          });
        } else if (guildname !== "Singapore") {
          axios
            .get(
              `https://gameinfo.albiononline.com/api/gameinfo/players/${playerId}`
            )
            .then(async (playerInfo) => {
              axios
                .get(`https://api.aotools.net/v2/blacklist/${name}`)
                .then(async (blacklisted) => {
                  if (blacklisted.data.isBlacklisted === true)
                    return message.channel.send(
                      "I'm sorry but looks like you're already blacklisted from ARCH Alliance, please contact them to remove your blacklist mark"
                    );
                  let fameAmount =
                    parseInt(playerInfo.data.LifetimeStatistics.PvE.Total) +
                    parseInt(playerInfo.data.KillFame);
                  if (fameAmount > 2000000) {
                    message.channel.send(
                      `<@${message.author.id}> Your name has been registered. you should be good soon =)`
                    );
                    await register.create({
                      personName: name,
                      discordID: message.author.id,
                      personID: playerId,
                      guildName: "SG",
                    });
                  } else {
                    message.channel.send(
                      "Oof looks like your pve and pvp fame are below requirement"
                    );
                    console.log(fameAmount);
                  }
                });
            });
        } else if (guildname === "Singapore") {
          message.reply("You're in singapore already -_-");
          message.guild.members.cache.get(message.author.id).setNickname(name);
          await register.create({
            personName: name,
            discordID: message.author.id,
            personID: playerId,
            guildName: "SG",
          });
        }
      })
      .catch((e) => {
        return message.channel.send(`That person isnt exist in this game bro`);
      });
  },
};
