const report = require("../models/report");
module.exports = {
  name: "handle",
  description: "officer's command to handle a case",
  async execute(message, args) {
    if (
      message.member.roles.cache.has("759793776439984170") |
      message.member.roles.cache.has("855688610782248980") |
      message.member.roles.cache.has("855689169018814464")
    ) {
      if (message.channel.parentID === "853522303811321876") {
        let isHandled = await report.findOne({
          channelId: message.channel.id,
        });
        if (isHandled) {
          return message.author.send(
            `I'm sorry but ${
              message.guild.members.cache.get(isHandled.officerId).nickname
            } is handling this case`
          );
        } else {
          if (message.author.id === "694488949980135444") {
            const ticketNumber = message.channel.name.slice("ticket".length);
            const channel =
              message.guild.channels.cache.get("779514684797091850");
            const channelID = message.channel.id;
            message.channel.setName(`gremory${ticketNumber}`);
            channel.send(
              `<@${message.author.id}> is handling case <#${channelID}>`
            );
            message.delete();
            console.log(ticketNumber);
            await report.create({
              officer: message.guild.members.cache.get(message.author.id)
                .nickname,
              officerId: message.author.id,
              channelId: message.channel.id,
              status: "Ongoing",
            });
          } else if (message.author.id === "382507136883621889") {
            const ticketNumber = message.channel.name.slice("ticket".length);
            const channel =
              message.guild.channels.cache.get("779514684797091850");
            const channelID = message.channel.id;
            message.channel.setName(`luai${ticketNumber}`);
            channel.send(
              `<@${message.author.id}> is handling case <#${channelID}>`
            );
            message.delete();
            console.log(ticketNumber);
            await report.create({
              officer: message.guild.members.cache.get(message.author.id)
                .nickname,
              officerId: message.author.id,
              channelId: message.channel.id,
              status: "Ongoing",
            });
          } else if (message.author.id === "412598799081406465") {
            const ticketNumber = message.channel.name.slice("ticket".length);
            const channel =
              message.guild.channels.cache.get("779514684797091850");
            const channelID = message.channel.id;
            message.channel.setName(`amorkia${ticketNumber}`);
            channel.send(
              `<@${message.author.id}> is handling case <#${channelID}>`
            );
            message.delete();
            console.log(ticketNumber);
            await report.create({
              officer: message.guild.members.cache.get(message.author.id)
                .nickname,
              officerId: message.author.id,
              channelId: message.channel.id,
              status: "Ongoing",
            });
          } else if (message.author.id === "229238295257677835") {
            const ticketNumber = message.channel.name.slice("ticket".length);
            const channel =
              message.guild.channels.cache.get("779514684797091850");
            const channelID = message.channel.id;
            message.channel.setName(`fatmeow${ticketNumber}`);
            channel.send(
              `<@${message.author.id}> is handling case <#${channelID}>`
            );
            message.delete();
            console.log(ticketNumber);
            await report.create({
              officer: message.guild.members.cache.get(message.author.id)
                .nickname,
              officerId: message.author.id,
              channelId: message.channel.id,
              status: "Ongoing",
            });
          } else if (message.author.id === "590791325759045643") {
            const ticketNumber = message.channel.name.slice("ticket".length);
            const channel =
              message.guild.channels.cache.get("779514684797091850");
            const channelID = message.channel.id;
            message.channel.setName(`gnamo${ticketNumber}`);
            channel.send(
              `<@${message.author.id}> is handling case <#${channelID}>`
            );
            message.delete();
            console.log(ticketNumber);
            await report.create({
              officer: message.guild.members.cache.get(message.author.id)
                .nickname,
              officerId: message.author.id,
              channelId: message.channel.id,
              status: "Ongoing",
            });
          } else if (message.author.id === "409717155035217922") {
            const ticketNumber = message.channel.name.slice("ticket".length);
            const channel =
              message.guild.channels.cache.get("779514684797091850");
            const channelID = message.channel.id;
            message.channel.setName(`lightdragneel${ticketNumber}`);
            channel.send(
              `<@${message.author.id}> is handling case <#${channelID}>`
            );
            message.delete();
            console.log(ticketNumber);
            await report.create({
              officer: message.guild.members.cache.get(message.author.id)
                .nickname,
              officerId: message.author.id,
              channelId: message.channel.id,
              status: "Ongoing",
            });
          } else if (message.author.id === "263996887131095041") {
            const ticketNumber = message.channel.name.slice("ticket".length);
            const channel =
              message.guild.channels.cache.get("779514684797091850");
            const channelID = message.channel.id;
            message.channel.setName(`lightdragneel${ticketNumber}`);
            channel.send(
              `<@${message.author.id}> is handling case <#${channelID}>`
            );
            message.delete();
            console.log(ticketNumber);
            await report.create({
              officer: message.guild.members.cache.get(message.author.id)
                .nickname,
              officerId: message.author.id,
              channelId: message.channel.id,
              status: "Ongoing",
            });
          } else {
            const ticketNumber = message.channel.name.slice("ticket".length);
            const channel =
              message.guild.channels.cache.get("779514684797091850");
            const channelID = message.channel.id;
            const fetchedNicknames = await message.guild.members.fetch();
            const nickname = fetchedNicknames.displayName;
            message.channel.setName(`${nickname}${ticketNumber}`);
            channel.send(
              `<@${message.author.id}> is handling case <#${channelID}>`
            );
            message.delete();
            console.log(ticketNumber);
            await report.create({
              officer: message.guild.members.cache.get(message.author.id)
                .nickname,
              officerId: message.author.id,
              channelId: message.channel.id,
              status: "Ongoing",
            });
          }
        }
      } else {
        message.author.send("This command is used to handle cases!");
        message.delete();
      }
    } else {
      message.delete();
      message.author.send(
        "I'm sorry but you don't have the right to use this command"
      );
    }
  },
};
