module.exports = {
  name: "hardtime",
  description: "fun command",
  async execute(message, args, client) {
    if (message.author.id === "694488949980135444") {
      message.delete().then(() => {
        message.channel.send({
          content:
            "If you are having a hardtime, please remember this AnCeo guy",
          files: ["https://i.imgur.com/UgKlq3J.png"],
        });
      });
    }
  },
};
