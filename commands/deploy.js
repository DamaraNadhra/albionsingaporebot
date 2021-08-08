const { Message, Client, MessageButton } = require("discord.js");
module.exports = {
  name: "deploy",
  description: "none",
  permissions: "ADMINISTRATOR",
  /**
   *
   * @param {Message} message
   * @param {Client} client
   * @param {*} args
   */
  async execute(message, args, client) {
    const commanz = await client.guilds.cache
      .get("703862691608920114")
      .commands.set([
        {
          name: "audit",
          description:
            "Search through the audit log and return the answer to you",
          options: [
            {
              name: "type",
              type: "STRING",
              description: "Type of the audit log you searching for",
              required: true,
              choices: [
                { name: "GUILD_UPDATE", value: "GUILD_UPDATE" },
                { name: "CHANNEL_CREATE", value: "CHANNEL_CREATE" },
                { name: "CHANNEL_UPDATE", value: "CHANNEL_UPDATE" },
                { name: "CHANNEL_DELETE", value: "CHANNEL_DELETE" },
                {
                  name: "CHANNEL_OVERWRITE_UPDATE",
                  value: "CHANNEL_OVERWRITE_UPDATE",
                },
                { name: "MEMBER_BAN_ADD", value: "MEMBER_BAN_ADD" },
                { name: "MEMBER_BAN_REMOVE", value: "MEMBER_BAN_REMOVE" },
                { name: "MEMBER_UPDATE", value: "MEMBER_UPDATE" },
                { name: "MEMBER_ROLE_UPDATE", value: "MEMBER_ROLE_UPDATE" },
                { name: "ROLE_CREATE", value: "ROLE_CREATE" },
                { name: "ROLE_DELETE", value: "ROLE_DELETE" },
                { name: "ROLE_UPDATE", value: "ROLE_UPDATE" },
                { name: "MESSAGE_DELETE", value: "MESSAGE_DELETE" },
                {
                  name: "MESSAGE_BULK_DELETE",
                  value: "MESSAGE_BULK_DELETE",
                },
                { name: "MESSAGE_PIN", value: "MESSAGE_PIN" },
                { name: "MESSAGE_UNPIN", value: "MESSAGE_UNPIN" },
                { name: "EMOJI_DELETE", value: "EMOJI_DELETE" },
                { name: "EMOJI_CREATE", value: "EMOJI_CREATE" },
                { name: "EMOJI_UPDATE", value: "EMOJI_UPDATE" },
                { name: "STICKER_CREATE", value: "STICKER_CREATE" },
                { name: "STICKER_UPDATE", value: "STICKER_UPDATE" },
                { name: "STICKER_DELETE", value: "STICKER_DELETE" },
              ],
            },
            {
              name: "executor",
              type: "USER",
              description: "the executor of the changes.",
              required: false,
            },
            {
              name: "target",
              type: "USER",
              description: "The target of the changes",
              required: false,
            },
            {
              name: "key",
              type: "STRING",
              description: "Object change key",
              required: false,
              choices: [
                { name: "nick", value: "nick" },
                { name: "name", value: "name" },
                { name: "permissions", value: "permissions" },
                { name: "color", value: "color" },
                { name: "allow", value: "allow" },
                { name: "deny", value: "deny" },
                { name: "code", value: "code" },
                { name: "mute", value: "mute" },
                { name: "avatar_hash", value: "avatar_hash" },
                { name: "$add", value: "$add" },
                { name: "$remove", value: "$remove" },
              ],
            },
            {
              name: "limit",
              type: "NUMBER",
              description: "Entry limit for the audit log, this is OPTIONAL",
              required: false,
            },
          ],
        },
        {
          name: "zvz-builds",
          description:
            "Returns you a list of approved ZvZ builds according to ARCH main Discord",
        },
        {
          name: "giverep",
          description: "Gives rep to someone",
          options: [
            {
              name: "user",
              description: "define the person you want to give rep to..",
              type: "USER",
              required: true,
            },
          ],
        },
        {
          name: "rep",
          description:
            "Shows yours or the specified users current reputation and rank",
          options: [
            {
              name: "user",
              description:
                "the user, or dont fill if you want to check your reputation",
              type: "USER",
              required: false,
            },
          ],
        },
        {
          name: "docs",
          description:
            "showing the documents of the most frequently asked questions.",
          options: [
            {
              name: "query",
              description: "the question.",
              type: "STRING",
              required: true,
            },
            {
              name: "target",
              description:
                "the target to mention, this is optional, just to make it looks cooler.",
              type: "USER",
              required: false,
            },
          ],
        },
      ]);
    console.log(commanz);
  },
};
