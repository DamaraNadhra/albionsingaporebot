const rep = require("../models/reputation");
const { nicknameMaker, dateMaker } = require("../functions");
let { recentlyRan } = require("../cooldown");
const { MessageButton, MessageEmbed, MessageActionRow } = require("discord.js");
let repLogButton = new MessageButton()
  .setStyle("LINK")
  .setLabel("Message Link");
module.exports = {
  name: "giverep",
  description: "gives reputation to provided player!",
  aliases: ["+rep", "reputation"],
  async execute(message, args, client) {
    if (message.channel.id === "722753194496753745") return;
    if (recentlyRan.includes(message.author.id)) {
      let cooldownMessage = await message.reply("This command is on cooldown");
      setTimeout(() => {
        cooldownMessage.delete();
        message.delete();
      }, 7000);
      return;
    }
    let logChannel = message.guild.channels.cache.get("864669032811331584");
    let personID;
    let isPersonHasRep;
    let guildNickname;
    let firstArgument = args[0];
    let argument = args.slice(0).join(" ");
    if (!firstArgument)
      return message.reply({
        content: "Please state the person name or his mention",
      });
    if (message.mentions.members.first()) {
      let mentionsNumber = message.mentions.members.map((e) => e.user.id);
      console.log(mentionsNumber.length);
      if (mentionsNumber.length > 3)
        return message
          .reply({
            content: `Max people you can give reputation to is \`3\`, ||This message will self destruct in 10s||`,
          })
          .then((m) =>
            setTimeout(() => {
              m.delete();
              message.delete();
            }, 10000)
          );
      if (mentionsNumber.length > 1 && mentionsNumber.length < 4) {
        let theMap = message.mentions.members;
        let mentionArray = [];
        let array = theMap.map((m) => m.user.id);
        if (array.includes(message.author.id)) {
          array = array.filter((m) => {
            return m !== message.author.id;
          });
        }
        var bar = new Promise((resolve, reject) => {
          array.forEach(async (m, index) => {
            console.log(m);
            let guildNickname = (await message.guild.members.fetch()).get(
              m
            ).displayName;
            isPersonHasRep = await rep.findOne({ id: m });

            if (isPersonHasRep) {
              await isPersonHasRep.updateOne({
                rep: parseInt(isPersonHasRep.rep) + 1,
              });
            } else {
              await rep.create({
                name: guildNickname,
                id: m,
                rep: "1",
              });
            }
            let personData = await rep.findOne({ id: m });
            mentionArray.push(personData.name);
            console.log(m, mentionArray, theMap.map((m) => m.id).length, index);
            if (index === array.length - 1) resolve();
          });
        });
        bar.then(async () => {
          let finalString = mentionArray.map((m) => "**" + m + "**").join(", ");
          console.log(finalString);
          message.reply({
            content: `Gave \`1\` **Rep** to ${finalString} at the same time!`,
          });
          recentlyRan.push(message.author.id);
          setTimeout(() => {
            recentlyRan = recentlyRan.filter(
              (string) => string !== message.author.id
            );
          }, 420000);
          logChannel.send({
            content: `**${nicknameMaker(
              message,
              message.author.id
            )}** has given \`1\` Rep to ${finalString} in <#${
              message.channel.id
            }> at ${dateMaker(new Date())}`,
            components: [
              new MessageActionRow().addComponents(
                repLogButton.setURL(message.url)
              ),
            ],
          });
        });
      } else {
        let person = message.mentions.members.first().user;
        personID = person.id;
        isPersonHasRep = await rep.findOne({ id: person.id });
        if (personID === message.author.id) {
          let returnMessage = await message.reply({
            content: `You can give reputation to yourself haiz...., but nice try <:weirdchamp:839890533244862474>`,
          });
          setTimeout(() => {
            returnMessage.delete();
            message.delete();
          }, 7000);
          return;
        }
        if (isPersonHasRep) {
          await isPersonHasRep.updateOne({
            rep: parseInt(isPersonHasRep.rep) + 1,
          });
        } else {
          await rep.create({
            name: nicknameMaker(message, personID),
            id: personID,
            rep: 1,
          });
        }
        let personData = await rep.findOne({ id: personID });
        let blabla =
          (await (
            await rep.find().sort({ rep: -1 })
          ).findIndex((i) => i.id === personID)) + 1;
        switch (blabla) {
          case 1:
            rank = "#1 NUMBA WANNN! 🥇🥇🥇";
            break;
          case 2:
            rank = "#2 NUMBA TWO 🥈🥈";
            break;
          case 3:
            rank = "#3 NUMBA THREE 🥉";
            break;
          default:
            rank = "#" + blabla;
            break;
        }
        message.reply({
          content: `Gave \`1\` Rep to **${personData.name}** (current: \`${rank}\` -\`${personData.rep}\`)`,
        });
        recentlyRan.push(message.author.id);
        setTimeout(() => {
          recentlyRan = recentlyRan.filter(
            (string) => string !== message.author.id
          );
        }, 420000);
        logChannel.send({
          content: `**${nicknameMaker(
            message,
            message.author.id
          )}** has given \`1\` Rep to **${personData.name}** in <#${
            message.channel.id
          }> at ${dateMaker(new Date())}`,
          components: [
            new MessageActionRow().addComponents(
              repLogButton.setURL(message.url)
            ),
          ],
        });
      }
    } else {
      var person;
      let nickname = (await message.guild.members.fetch()).find((user) =>
        user.displayName.toLowerCase().includes(args[0].toLowerCase())
      );
      if (!nickname) {
        let called = await message.reply({
          content: "I couldn't find this person inside this server",
        });
        setTimeout(() => {
          called.delete();
          message.delete();
        }, 7000);
        return;
      }
      isPersonHasRep = await rep.findOne({ id: nickname.id });
      personID = nickname.id;
      if (personID === message.author.id) {
        let returnMessage = await message.reply({
          content: `You can give reputation to yourself haiz...., but nice try <:weirdchamp:839890533244862474>`,
        });
        setTimeout(() => {
          returnMessage.delete();
          message.delete();
        }, 7000);
        return;
      }
      if (isPersonHasRep) {
        await isPersonHasRep.updateOne({
          rep: parseInt(isPersonHasRep.rep) + 1,
        });
      } else {
        await rep.create({
          name: nicknameMaker(message, personID),
          id: personID,
          rep: "1",
        });
      }
      let personData = await rep.findOne({ id: personID });
      let blabla =
        (await (
          await rep.find().sort({ rep: -1 })
        ).findIndex((i) => i.id === personID)) + 1;
      message.reply({
        content: `Gave \`1\` Rep to **${personData.name}** (current: \`#${blabla}\` -\`${personData.rep}\`)`,
      });
      recentlyRan.push(message.author.id);
      setTimeout(() => {
        recentlyRan = recentlyRan.filter(
          (string) => string !== message.author.id
        );
      }, 420000);
      logChannel.send({
        content: `**${nicknameMaker(
          message,
          message.author.id
        )}** has given \`1\` Rep to **${personData.name}** in <#${
          message.channel.id
        }> at ${dateMaker(new Date())}`,
        components: [
          new MessageActionRow().addComponents(
            repLogButton.setURL(message.url)
          ),
        ],
      });
    }
  },
};
