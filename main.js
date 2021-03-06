const Discord = require("discord.js");
const {
  MessageEmbed,
  MessageButton,
  MessageActionRow,
  MessageSelectMenu,
} = require("discord.js");
const client = new Discord.Client({
  intents: ["GUILDS", "GUILD_MESSAGES", "DIRECT_MESSAGES", "GUILD_MEMBERS"],
  partials: ["MESSAGE", "CHANNEL", "REACTION"],
});
const {
  avalist,
  zvzlist,
  negativeResponses,
  positiveResponses,
} = require("./list");
var z = 1;
const report = require("./models/report");
const axios = require("axios");
const prefix = "!";
const blacklist = require("./models/blacklist");
const database = require("mongoose");
const rep = require("./models/reputation");
const { dateMaker, nicknameMaker, getDate } = require("./util");
let { recentlyRan } = require("./cooldown");
let repLogButton = new MessageButton()
  .setStyle("LINK")
  .setLabel("Message Link");
const fs = require("fs");
client.commander = new Discord.Collection();
client.interactionCommand = new Discord.Collection();
const Sentiment = require("sentiment");
const sentiment = new Sentiment();
const commandFiles = fs
  .readdirSync("./commands")
  .filter((file) => file.endsWith(".js"));
for (const file of commandFiles) {
  const command = require(`./commands/${file}`);
  client.commander.set(command.name, command);
}
const commandFolders = fs.readdirSync("./interaction_base");
for (const folder of commandFolders) {
  const commandFiles = fs
    .readdirSync(`./interaction_base/${folder}`)
    .filter((file) => file.endsWith(".js"));
  for (const file of commandFiles) {
    const command = require(`./interaction_base/${folder}/${file}`);
    client.interactionCommand.set(command.name, command);
  }
}
client.on("messageCreate", async (message) => {
  // Auto checking application blacklist status
  if (message.channel.id === "752110992405692456") {
    if (
      message.content.toLowerCase().includes("my in-game name") ||
      message.content.toLowerCase().includes("ign")
    ) {
      let appString = message.content;
      appString = appString.replace(/\n/g, ":");
      let splittedArray = appString.split(":");
      splittedArray = splittedArray.map((m) => m.trim());
      let personName = splittedArray[1];
      message.member.setNickname(personName);
      let existable = await blacklist.findOne({
        blname: personName.toLowerCase(),
      });
      axios
        .get(`https://api.aotools.net/v2/blacklist/${personName}`)
        .then(async (result) => {
          const referenceButton = new MessageButton()
            .setStyle("LINK")
            .setLabel("Application reference");
          if (result.data.isBlacklisted === true) {
            const embed = new MessageEmbed()
              .setColor("AQUA")
              .setAuthor(
                "Singapore Police",
                "https://cdn.discordapp.com/icons/703862691608920114/669f0e6605601754a64fbb829ede2c00.webp?size=256"
              )
              .setDescription(
                "**This player is blacklisted! by ARCH** Please dont invite him over to the guild or just kick him directly! Please look into ARCH main discord for more info"
              )
              .setFooter("If this is wrong please contact the officers :D");
            await message.react("???");
            message
              .reply(
                "Haha... hilarious, when you think you can join our guild when you are **blacklisted** from ARCH"
              )
              .then(async () => {
                setTimeout(async () => {
                  await message.member.ban({ reason: "Blacklisted from ARCH" });
                }, 5000);
              });
            message.guild.channels.cache.get("779514684797091850").send({
              embeds: [embed],
              components: [
                new MessageActionRow().addComponents(
                  referenceButton.setURL(message.url)
                ),
              ],
            });
          } else if (existable) {
            const embed = new MessageEmbed()
              .setColor("RED")
              .setAuthor("Singapore Police", client.user.displayAvatarURL())
              .setTitle("Warning! Player blacklisted! by SG")
              .addFields(
                { name: "**Player**", value: existable.blname, inline: true },
                {
                  name: "**Blacklisted by**",
                  value: `<@${existable.blacklister}> ${existable.date}`,
                  inline: true,
                },
                {
                  name: "**Reason**",
                  value: `\`\`\`${existable.reason} \`\`\``,
                }
              );
            await message.react("???");
            message
              .reply(
                "Haha... hilarious, when you think you can join our guild when you are **blacklisted** from ARCH"
              )
              .then(async () => {
                setTimeout(async () => {
                  await message.member.ban({ reason: "Blacklisted from ARCH" });
                }, 5000);
              });
            message.guild.channels.cache.get("779514684797091850").send({
              embeds: [embed],
              components: [
                new MessageActionRow().addComponents(
                  referenceButton.setURL(message.url)
                ),
              ],
            });
          } else {
            await message.react("???");
            message.guild.channels.cache.get("779514684797091850").send({
              content: `**${result.data.name}** is not blacklisted :D`,
              components: [
                new MessageActionRow().addComponents(
                  referenceButton.setURL(message.url)
                ),
              ],
            });
          }
        });
    }
    // Battle Checking from #battlebot
  } else if (message.channel.id === "779629935920152596") {
    if (!message.embeds[0]) return;
    let value = message.embeds[0].fields[0].value;
    value = value.replace(")", "/");
    client.commander
      .get("battlechecking")
      .execute(message, client, value.split("/")[6]);
  }
  const args = message.content.slice(prefix.length).trim().split(/ +/g);
  // Auto trigger rep system whenever someone say thanks / thank you / thx
  /*if (
    message.content.toLowerCase().includes("thanks") |
    message.content.toLowerCase().includes("thank you") |
    message.content.toLowerCase().includes("thx")
  ) {
    if (message.channel.id === "722753194496753745") return;
    if (!message.content.includes("<@")) return;
    let logChannel = message.guild.channels.cache.get("864669032811331584");
    if (recentlyRan.includes(message.author.id)) return;
    let personID;
    let isPersonHasRep;
    let guildNickname;
    let mentionsNumber = message.mentions.members.map((e) => e.user.id);
    console.log(mentionsNumber.length);
    if (mentionsNumber.includes(message.author.id)) return;
    console.log("should be stopped here after the return statement");
    if (mentionsNumber.length > 3) return;
    console.log("Should be stopped");
    if (mentionsNumber.length > 1 && mentionsNumber.length < 4) {
      let theMap = message.mentions.members;
      let mentionArray = [];
      let array = theMap.map((m) => m.user.id);
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
      let firstArgument = args[0];
      let person = message.mentions.members.first().user;
      guildNickname = nicknameMaker(message, person.id);
      personID = person.id;
      isPersonHasRep = await rep.findOne({ id: person.id });

      if (isPersonHasRep) {
        await isPersonHasRep.updateOne({
          rep: parseInt(isPersonHasRep.rep) + 1,
        });
      } else {
        await rep.create({
          name: guildNickname.toLowerCase(),
          id: personID,
          rep: "1",
        });
      }
      let personData = await rep.findOne({ id: personID });
      let blabla =
        (await (
          await rep.find().sort({ rep: -1 })
        ).findIndex((i) => i.id === personID)) + 1;
      recentlyRan.push(message.author.id);
      message.channel.send({
        content: `Gave \`1\` Rep to **${guildNickname}** (current: \`#${blabla}\` -\`${personData.rep}\`)`,
      });
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
  }*/
  const RNG = Math.floor(Math.random() * 22);
  if (
    RNG === 12 &&
    message.content.length > 30 &&
    message.channel.id !== "752110992405692456" &&
    message.channel.id !== "849121401390628914" &&
    message.channel.id !== "711887933266853950" &&
    message.channel.id !== "864680889128583218" &&
    !message.author.bot
  ) {
    if (z === negativeResponses.length) z = 0;
    var resp = sentiment.analyze(message.content.toLowerCase());

    console.log(resp.score);
    if (resp.score < 0) {
      const response = negativeResponses[z];
      message.channel.send({
        content: `<@${message.author.id}>, ${response}`,
      });
    } else {
      const response =
        positiveResponses[Math.floor(Math.random() * positiveResponses.length)];
      message.channel.send({
        content: `<@${message.author.id}>, ${response}`,
      });
    }
    z++;
  } else if (message.cleanContent.toLowerCase().includes("stupid bot")) {
    message.reply(
      "You think I'm stupid???? okay fine dont u ever use my command ever again!!"
    );
  }
  if (!message.content.startsWith(prefix) || message.author.bot) return;
  const command = args.shift().toLowerCase();
  const commands =
    client.commander.get(command) ||
    client.commander.find(
      (cmd) => cmd.aliases && cmd.aliases.includes(command)
    );
  if (commands && commands.permissions) {
    const authorPerms = message.channel.permissionsFor(message.author);
    if (!authorPerms || !authorPerms.has(commands.permissions)) {
      return message.reply(
        `Missing Permission... FLAG: \`${commands.permissions}\``
      );
    }
  } else if (commands && commands.roles) {
    for (const role of commands.roles) {
      const autorRoles = message.member.roles.cache.has(role);
      if (!autorRoles) {
        return message.reply(
          "You don't have the sufficient role to execute this command!"
        );
      }
    }
  }
  try {
    commands.execute(message, args, client);
  } catch (error) {}
  Object.keys(avalist).forEach((m, i) => {
    if (command.includes(m)) {
      let botCommandChannel =
        message.guild.channels.cache.get("760731834354499585");
      if (
        (message.channel.id === "760731834354499585") |
        (message.channel.id === "779514684797091850") |
        message.member.roles.cache.has("759793776439984170") |
        message.member.permissions.has("ADMINISTRATOR")
      ) {
        let listButton = new MessageButton()
          .setCustomId("listbutton")
          .setStyle("SUCCESS")
          .setLabel("Look for more builds!")
          .setEmoji("<:jennielove:844893922634235904>");
        let embed = new MessageEmbed()
          .setAuthor(avalist[m].name, avalist[m].icon)
          .setColor("ORANGE")
          .setImage(avalist[m].pic)
          .setDescription(avalist[m].string);
        const embedDesc = new MessageEmbed()
          .setColor("ORANGE")
          .setDescription(`**Shortcut:** \`!${m}\` \n**Requirement:** 1100+ IP`)
          .setFooter(
            `Requested by ${
              message.guild.members.cache.get(message.author.id).displayName
            }`,
            message.author.displayAvatarURL()
          );
        message.channel.send({
          content: "Processing...",
          embeds: [embed, embedDesc],
          components: [new MessageActionRow().addComponents(listButton)],
        });
      } else {
        message.reply(`Please redo this command at ${botCommandChannel}`);
      }
    }
  });
  Object.keys(zvzlist).forEach((m, i) => {
    Object.keys(zvzlist[m]).forEach((element, index) => {
      if (!command.startsWith("zvz-")) return;
      if (element.includes(command)) {
        const build = zvzlist[m][element];
        let botCommandChannel =
          message.guild.channels.cache.get("760731834354499585");
        if (
          (message.channel.id === "760731834354499585") |
          (message.channel.id === "779514684797091850") |
          message.member.roles.cache.has("759793776439984170") |
          message.member.permissions.has("ADMINISTRATOR")
        ) {
          let zvzlistButton = new MessageButton()
            .setCustomId("listbuttonzvz")
            .setStyle("SUCCESS")
            .setLabel("Look for more builds!")
            .setEmoji("<:jennielove:844893922634235904>");
          let referenceButton = new MessageButton()
            .setStyle("LINK")
            .setURL(build.reference)
            .setLabel("ARCH main discord reference");
          let embed = new MessageEmbed()
            .setAuthor(build.label, build.pic)
            .setColor("ORANGE")
            .setImage(build.icon);
          const embedDesc = new MessageEmbed()
            .setColor("ORANGE")
            .setDescription(
              `**Shortcut:** \`!${element}\` \n**Requirement:** 1100+ IP`
            )
            .setFooter(
              `Requested by ${
                message.guild.members.cache.get(message.author.id).displayName
              }`,
              message.author.displayAvatarURL()
            );
          message.channel.send({
            content: "Processing...",
            embeds: [embed, embedDesc],
            components: [
              new MessageActionRow().addComponents(
                zvzlistButton,
                referenceButton
              ),
            ],
          });
        }
      }
    });
  });
});

client.on("guildMemberAdd", (member) => {
  if (member.guild.id !== "703862691608920114") return;
  member.send(
    `**[ARCH] Singapore are recruiting for S13** \nSingapore is not only open to Singaporeans if you're wondering and we're looking for players from all over the WORLD who would like to look for content within Albion during all time zone. **12 to 15 UTC** is our prime time. We mainly speak English in game but we do speak other languages as well as we have players across SEA. \n\n**What we offer:** \n**PvE Content:** \n:one: Fame Farming efficiently in T8 Zones (solo, group and ava dungeons). \n:two: Safe Gathering Zones with multiple hideouts in the black zone. \n:three: Daily Avalonian Buff, Full Clear 8.2+ \n:four: Hideout in T8 Zone. \n:five: Gathering Contents in Royals & Roads. \n:six: Tax Rebate for HCE players. \n:free: Weekly Give Away : **8.3 Gears & Mounts** \n\n**PvP Content:** \n\???? Daily Police & Ganking Sessions \n\???? Organized Faction Fights \n\???? Organized Scrims for Practice \n\???? Mandatory ZvZ when needed \n\n**Minimum Requirements:** \n:heart: 10M PvE Fame \n:heart:Mature \n:heart:Willing to Learn \n:heart:Able to speak and understand basic English \n\n**Do join our discord at** https://discord.gg/yXRWK8WDct \nApply at application and read rules & react after being accepted. \n**Thank you very much!**`
  );
});
client.on("interactionCreate", async (interaction) => {
  if (interaction.isButton()) {
    try {
      await client.interactionCommand
        .get(interaction.customId)
        .execute(interaction, client);
    } catch (error) {
      console.error(error);
      await interaction.reply({
        content: "There was an error while executing this button!",
        ephemeral: true,
      });
    }
  } else if (interaction.isSelectMenu()) {
    if (!client.interactionCommand.get(interaction.customId)) return;
    try {
      await client.interactionCommand
        .get(interaction.customId)
        .execute(interaction, client);
    } catch (error) {
      console.error(error);
      await interaction.reply({
        content: "There was an error while executing this select menus!",
        ephemeral: true,
      });
    }
  } else if (interaction.isCommand()) {
    if (!client.interactionCommand.get(interaction.commandName)) return;
    try {
      client.interactionCommand
        .get(interaction.commandName)
        .execute(interaction, client);
    } catch (error) {
      console.error(error);
      await interaction.reply({
        content: "There was an error while executing this slashcommand",
        ephemeral: true,
      });
    }
  }
});
client.on("channelDelete", async (channel) => {
  const channelId = channel.id;

  await report.findOneAndDelete({ channelId: channelId });
});
client.on("guildMemberRemove", (member) => {
  let logchannel = member.guild.channels.cache.get("703862691608920118");
  logchannel.send(
    `${member.user.tag} has left the server <:stare:861994964137541653>`
  );
});

client.on("ready", async () => {
  const statusArray = [
    "Gato #1",
    "Luai is rich but gay",
    "Ybibaboo my god",
    "current prefix is !",
    "Didi Kempot selalu di hati",
    "Godfather of Brokenheart",
  ];
  console.log("The Bot is Online");
  await database
    .connect(
      `mongodb+srv://${process.env.databaseusername}:${process.env.databasepass}@cluster0.knsns.mongodb.net/database4?retryWrites=true&w=majority`,
      {
        useNewUrlParser: true,
        useUnifiedTopology: true,
        useFindAndModify: true,
      }
    )
    .then(() => {
      console.log("Connected to the database");
    });
  let channel = client.guilds.cache
    .get("703862691608920114")
    .channels.cache.get("870254501603467274");
  let sgmyChannel = client.guilds.cache
    .get("565550094590672898")
    .channels.cache.get("870570785163599924");
  let dateChannel = client.guilds.cache
    .get("703862691608920114")
    .channels.cache.get("871562052009865238");
  let index = 0;
  setInterval(() => {
    if (index === statusArray.length) index = 0;
    const status = statusArray[index];
    client.user.setActivity(status, { type: "WATCHING" });
    index++;
  }, 3000);
  setInterval(() => {
    const date = new Date();
    const finalArray = date.toUTCString().split(/ +/g)[4].split(":");
    const finalString = finalArray[0] + ":" + finalArray[1];
    channel.setName(`????UTC: ${finalString}`).catch(console.error);
    dateChannel.setName(getDate());
    sgmyChannel.setName(`????UTC: ${finalString}`).catch(console.error);
  }, 600000);
});
module.exports = {
  recentlyRan,
};

client.login(process.env.token);
