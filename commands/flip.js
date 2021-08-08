module.exports = {
  name: "flip",
  description: "fun command, flip head or tails",
  async execute(message, args, client) {
    let responses = ["HEAD", "TAIL"];
    let answer = responses[Math.floor(Math.random() * responses.length)];
    message.channel
      .send({
        content:
          "After some consideration with my 70000 IQ brain for 100000 years.... <a:loading:867969408864243763> \nhttps://tenor.com/view/calculation-math-hangover-allen-zach-galifianakis-gif-6219070",
      })
      .then((msg) =>
        setTimeout(() => {
          msg.edit({
            content: `The answer is **${answer}**`,
          });
        }, 6000)
      );
  },
};
