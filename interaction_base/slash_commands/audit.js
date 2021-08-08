const fs = require("fs");
module.exports = {
  name: "audit",
  description: "Search through the audit log and return the answer",
  async execute(interaction, client) {
    try {
      const type = interaction.options.getString("type");
      const executors = interaction.options.getUser("executor");
      const targets = interaction.options.getUser("target");
      const keys = interaction.options.getString("key");
      const limitz = interaction.options.getNumber("limit");
      const fetchedGuildAuditLogs = await interaction.guild.fetchAuditLogs({
        type: type,
        limit: Boolean(limitz) ? limitz : 20,
      });
      const finalResult = fetchedGuildAuditLogs.entries
        .filter((m) =>
          Boolean(executors) ? m.executor.id === executors.id : m
        )
        .filter((m) => (Boolean(targets) ? m.target.id === targets.id : m))
        .filter((m) => (Boolean(keys) ? m.changes[0].key === keys : m));
      const final = finalResult
        .map((element) => {
          const elementChanges = element.changes;
          switch (element.action) {
            case "MEMBER_ROLE_UPDATE":
              switch (element.changes[0].key) {
                case "$add":
                  changesString = `Added ${elementChanges
                    .map((m) => m.new.map((m) => m.name).join(", "))
                    .join("\n")}`;
                  break;
                case "$remove":
                  changesString = `Removed ${elementChanges[0].new[0].name}`;
                  break;
                default:
                  break;
              }
              break;
            case "MEMBER_UPDATE":
              if (element.changes[0].new == undefined)
                changesString = `Changed from ${elementChanges[0].old} to ${elementChanges[0].new}`;
              else changesString = `Changed to ${elementChanges[0].new}`;
              break;
            case "CHANNEL_DELETE":
              changesString = `Deleted ${elementChanges[0].old}`;
              break;
            case "CHANNEL_UPDATE":
              changesString = `Changed from ${elementChanges[0].old} to ${elementChanges[0].new}`;
              break;
            default:
              break;
          }
          return `#showing audit log entry: ${element.id}\nExecutor = '${element.executor.tag}' \nTarget = '${element.target.tag}' \nType = '${element.action}' \nChanges = '${changesString}'`;
        })
        .join("\n\n");
      if (finalResult.size === 1) {
        interaction.reply({
          content: `\`\`\`prolog\n${final}\`\`\``,
        });
      } else {
        fs.writeFile("auditlog.pl", final, (err) => {
          if (err) {
            console.log(err);
          }
        });
        await interaction.reply({
          files: [
            {
              attachment: "auditlog.pl",
              name: "entry.prolog",
            },
          ],
        });
        setTimeout(() => {
          fs.unlink("auditlog.pl", (err) => {
            if (err) console.log(err);
          });
        }, 4000);
      }
    } catch (error) {
      interaction.reply(
        "I cannot find audit log entry with that information, please be more spesific!"
      );
      console.log(error);
    }
  },
};
