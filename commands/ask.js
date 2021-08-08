const { MessageEmbed } = require("discord.js");
module.exports = {
  name: "ask",
  description: "fun command, answering question with random asnwers",
  async execute(message, args) {
    let question = args.slice(0).join(" ");
    if (!question)
      return message.reply({
        content: "You didn't specify your question!",
      });
    let responses = [
      "Yes definitely.",
      "Most likely",
      "I'm not really sure, but he's gay",
      "Nope definitely not",
      "Ask again later.",
      "My reply is no.",
      "Better not tell you now.",
      "You may rely on it.",
    ];
    let answer = responses[Math.floor(Math.random() * responses.length)];
    message.reply({
      content: answer,
    });
  },
};
