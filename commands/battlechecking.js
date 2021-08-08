const { MessageEmbed } = require("discord.js");
const { compareSet, sets } = require("../functions");
const axios = require("axios");
module.exports = {
  name: "battlechecking",
  description: "none",
  async execute(message, client, battleId) {
    const channel = message.guild.channels.cache.get("855097807378448424");
    axios
      .get(`https://gameinfo.albiononline.com/api/gameinfo/battles/${battleId}`)
      .then(async (result) => {
        let events = result.data;
        await axios
          .get(
            `https://gameinfo.albiononline.com/api/gameinfo/events/battle/${battleId}?ofset=0&limit=50`
          )
          .then(async (result) => {
            let event = result.data;
            let eventVictim = event.filter(
              (m) => m.Victim.GuildName === "Singapore"
            );
            let eventKiller = event.filter(
              (m) => m.Killer.GuildName === "Singapore"
            );
            let hasTriggered = true;
            eventVictim.forEach(async (m, i) => {
              let gear = m.Victim.Equipment;
              let test = Object.keys(gear).filter(
                (m) =>
                  gear[m] != null &&
                  m !== "Bag" &&
                  m !== "Potion" &&
                  m !== "Cape" &&
                  m !== "Mount" &&
                  m !== "Food"
              );
              if (
                (gear.MainHand == null) |
                (gear.Head == null) |
                (gear.Armor == null) |
                (gear.Shoes == null)
              ) {
                hasTriggered = false;
                console.log(test);
                let MainHand;
                let OffHand;
                let Head;
                let Armor;
                let Shoes;
                if (m.Victim.Equipment.MainHand == null) {
                  MainHand = "";
                } else {
                  MainHand = m.Victim.Equipment.MainHand.Type;
                }
                if (m.Victim.Equipment.OffHand == null) {
                  OffHand = "";
                } else {
                  OffHand = m.Victim.Equipment.OffHand.Type;
                }
                if (m.Victim.Equipment.Head == null) {
                  Head = "";
                } else {
                  Head = m.Victim.Equipment.Head.Type;
                }
                if (m.Victim.Equipment.Armor == null) {
                  Armor = "";
                } else {
                  Armor = m.Victim.Equipment.Armor.Type;
                }
                if (m.Victim.Equipment.Shoes == null) {
                  Shoes = "";
                } else {
                  Shoes = m.Victim.Equipment.Shoes.Type;
                }
                let person = events.players[m.Victim.Id];
                const time = (param) => {
                  let z = new Date(param);
                  let timeFix = z.toLocaleTimeString();
                  let dateFix = z.toLocaleDateString();
                  let final = dateFix + " " + timeFix;
                  return final;
                };
                let personMention = (await message.guild.members.fetch()).find(
                  (m) => m.displayName === person.name
                );
                const embed = new MessageEmbed()
                  .setAuthor(
                    "SIngapore ZvZ Tool",
                    client.user.displayAvatarURL()
                  )
                  .setColor("RED")
                  .setTitle("Bad ZvZ Build!")
                  .setDescription(
                    `Bad ZvZ build detected! Battle: ${events.id} \n**Reason:** Not using proper ZvZ build!`
                  )
                  .addFields(
                    {
                      name: "__**PLAYER INFO**__",
                      value: `**Player Name:** ${person.name} \n**Guild:** ${
                        person.guildName
                      } \n**IP:** ${Math.round(
                        m.Victim.AverageItemPower
                      )} \n**Aliance:** ${person.allianceName} \n**Kills:** ${
                        person.kills
                      } | **Deaths:** ${
                        person.deaths
                      } \n**Killboard:** [click the link](https://albiononline.com/en/killboard/kill/${
                        m.EventId
                      })`,
                      inline: true,
                    },
                    {
                      name: "__**BATTLE INFO**__",
                      value: `**Battleboard:** [${
                        events.id
                      }](https://kill-board.com/battles/${
                        events.id
                      }) \n**Start time:** ${time(
                        events.startTime
                      )} \n**End time:** ${time(
                        events.startTime
                      )} \n**Total kills:** ${
                        events.totalKills
                      } \n**Total fame:** ${events.totalFame}`,
                      inline: true,
                    }
                  )
                  .setFooter("Singapore on top", client.user.displayAvatarURL())
                  .setTimestamp(new Date())
                  .setImage(
                    `https://aolootlog.com/api/api.php?image=yes&main=${MainHand}&off=${OffHand}&head=${Head}&armor=${Armor}&shoes=${Shoes}`
                  );
                channel.send({
                  content: Boolean(personMention)
                    ? `<@${personMention.id}>`
                    : `<@${lohit.id}>`,
                  embeds: [embed],
                });
              } else if (parseInt(m.Victim.AverageItemPower) < 1100) {
                hasTriggered = false;
                console.log(test);
                let MainHand;
                let OffHand;
                let Head;
                let Armor;
                let Shoes;
                if (m.Victim.Equipment.MainHand == null) {
                  MainHand = "";
                } else {
                  MainHand = m.Victim.Equipment.MainHand.Type;
                }
                if (m.Victim.Equipment.OffHand == null) {
                  OffHand = "";
                } else {
                  OffHand = m.Victim.Equipment.OffHand.Type;
                }
                if (m.Victim.Equipment.Head == null) {
                  Head = "";
                } else {
                  Head = m.Victim.Equipment.Head.Type;
                }
                if (m.Victim.Equipment.Armor == null) {
                  Armor = "";
                } else {
                  Armor = m.Victim.Equipment.Armor.Type;
                }
                if (m.Victim.Equipment.Shoes == null) {
                  Shoes = "";
                } else {
                  Shoes = m.Victim.Equipment.Shoes.Type;
                }
                let person = events.players[m.Victim.Id];
                const time = (param) => {
                  let z = new Date(param);
                  let timeFix = z.toLocaleTimeString();
                  let dateFix = z.toLocaleDateString();
                  let final = dateFix + " " + timeFix;
                  return final;
                };
                let personMention = (await message.guild.members.fetch()).find(
                  (m) => m.displayName === person.name
                );
                const embed = new MessageEmbed()
                  .setAuthor(
                    "SIngapore ZvZ Tool",
                    client.user.displayAvatarURL()
                  )
                  .setColor("RED")
                  .setTitle("Bad ZvZ Build!")
                  .setDescription(
                    `Bad ZvZ build detected! Battle: ${events.id} \n**Reason:** Low IP`
                  )
                  .addFields(
                    {
                      name: "__**PLAYER INFO**__",
                      value: `**Player Name:** ${person.name} \n**Guild:** ${
                        person.guildName
                      } \n**IP:** ${Math.round(
                        m.Victim.AverageItemPower
                      )} \n**Aliance:** ${person.allianceName} \n**Kills:** ${
                        person.kills
                      } | **Deaths:** ${
                        person.deaths
                      } \n**Killboard:** [click the link](https://albiononline.com/en/killboard/kill/${
                        m.EventId
                      })`,
                      inline: true,
                    },
                    {
                      name: "__**BATTLE INFO**__",
                      value: `**Battleboard:** [${
                        events.id
                      }](https://kill-board.com/battles/${
                        events.id
                      }) \n**Start time:** ${time(
                        events.startTime
                      )} \n**End time:** ${time(
                        events.startTime
                      )} \n**Total kills:** ${
                        events.totalKills
                      } \n**Total fame:** ${events.totalFame}`,
                      inline: true,
                    }
                  )
                  .setFooter("Singapore on top", client.user.displayAvatarURL())
                  .setTimestamp(new Date())
                  .setImage(
                    `https://aolootlog.com/api/api.php?image=yes&main=${MainHand}&off=${OffHand}&head=${Head}&armor=${Armor}&shoes=${Shoes}`
                  );
                channel.send({
                  content: Boolean(personMention)
                    ? `<@${personMention.id}>`
                    : `<@${lohit.id}>`,
                  embeds: [embed],
                });
              } else {
                if (
                  compareSet(
                    gear.MainHand,
                    gear.OffHand,
                    gear.Head,
                    gear.Armor,
                    gear.Shoes
                  ) == true
                ) {
                  hasTriggered = false;
                  let MainHand;
                  let OffHand;
                  let Head;
                  let Armor;
                  let Shoes;
                  if (m.Victim.Equipment.MainHand == null) {
                    MainHand = "";
                  } else {
                    MainHand = m.Victim.Equipment.MainHand.Type;
                  }
                  if (m.Victim.Equipment.OffHand == null) {
                    OffHand = "";
                  } else {
                    OffHand = m.Victim.Equipment.OffHand.Type;
                  }
                  if (m.Victim.Equipment.Head == null) {
                    Head = "";
                  } else {
                    Head = m.Victim.Equipment.Head.Type;
                  }
                  if (m.Victim.Equipment.Armor == null) {
                    Armor = "";
                  } else {
                    Armor = m.Victim.Equipment.Armor.Type;
                  }
                  if (m.Victim.Equipment.Shoes == null) {
                    Shoes = "";
                  } else {
                    Shoes = m.Victim.Equipment.Shoes.Type;
                  }
                  let person = events.players[m.Victim.Id];
                  const time = (param) => {
                    let z = new Date(param);
                    let timeFix = z.toLocaleTimeString();
                    let dateFix = z.toLocaleDateString();
                    let final = dateFix + " " + timeFix;
                    return final;
                  };
                  let personMention = (
                    await message.guild.members.fetch()
                  ).find((m) => m.displayName === person.name);
                  const embed = new MessageEmbed()
                    .setAuthor(
                      "SIngapore ZvZ Tool",
                      client.user.displayAvatarURL()
                    )
                    .setColor("RED")
                    .setTitle("Bad ZvZ Build!")
                    .setDescription(
                      `Bad ZvZ build detected! Battle: ${events.id} \n**Reason:** Not using proper ZvZ Build`
                    )
                    .addFields(
                      {
                        name: "__**PLAYER INFO**__",
                        value: `**Player Name:** ${person.name} \n**Guild:** ${
                          person.guildName
                        } \n**IP:** ${Math.round(
                          m.Victim.AverageItemPower
                        )} \n**Aliance:** ${person.allianceName} \n**Kills:** ${
                          person.kills
                        } | **Deaths:** ${
                          person.deaths
                        } \n**Killboard:** [click the link](https://albiononline.com/en/killboard/kill/${
                          m.EventId
                        })`,
                        inline: true,
                      },
                      {
                        name: "__**BATTLE INFO**__",
                        value: `**Battleboard:** [${
                          events.id
                        }](https://kill-board.com/battles/${
                          events.id
                        }) \n**Start time:** ${time(
                          events.startTime
                        )} \n**End time:** ${time(
                          events.startTime
                        )} \n**Total kills:** ${
                          events.totalKills
                        } \n**Total fame:** ${events.totalFame}`,
                        inline: true,
                      }
                    )
                    .setFooter(
                      "Singapore on top",
                      client.user.displayAvatarURL()
                    )
                    .setTimestamp(new Date())
                    .setImage(
                      `https://aolootlog.com/api/api.php?image=yes&main=${MainHand}&off=${OffHand}&head=${Head}&armor=${Armor}&shoes=${Shoes}`
                    );
                  channel.send({
                    content: Boolean(personMention)
                      ? `<@${personMention.id}>`
                      : `<@${lohit.id}>`,
                    embeds: [embed],
                  }); //done lol ez
                }
              }
            });
          });
      });
  },
};
