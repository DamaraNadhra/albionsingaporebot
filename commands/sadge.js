module.exports = {
  name: "sadge",
  description: "encourage people after getting ganked",
  async execute(message, args) {
    if (message.author.id === "694488949980135444") {
      message.delete();
      let list = [
        "https://i.imgur.com/UcKOUlE.jpg",
        "https://i.imgur.com/CvnpC2X.png",
      ];
      let answer = list[Math.floor(Math.random() * list.length)];
      message.channel.send({
        content:
          "Life is hard, but you must keep going <:godbless:824231355331510274> \n**Gato2021**",
        files: [answer],
      });
    } else if (message.author.id === "209607795505496065") {
      message.delete();
      message.channel.send(
        "Life is hard, but you must keep going <:godbless:824231355331510274> \n**MightyG2021**"
      );
    }
  },
};
