const axios = require("axios");
const { MessageEmbed } = require("discord.js");
module.exports = {
  name: "calculate",
  description: "calculate estimated market value of total gear lost",
  async execute(message, args) {
    let deathId = args[0];
    if (!deathId) return message.reply("You must state the death ID!");
    let nicknameasli;
    let username = message.guild.members.cache.get(message.author.id).nickname;
    if (username === null) {
      nicknameasli = message.author.username;
    } else {
      nicknameasli = username;
    }
    axios
      .get(
        `https://gameinfo.albiononline.com/api/gameinfo/search?q=${nicknameasli}`
      )
      .then((res) => {
        let playerID = res.data.players[0].Id;
        console.log(playerID);
        axios
          .get(
            `https://gameinfo.albiononline.com/api/gameinfo/players/${playerID}/deaths`
          )
          .then(async (response) => {
            let data = response.data.find(
              (m) => m.EventId === parseInt(deathId)
            );
            let event = data.Victim.Equipment;
            let finalPrice = [];
            let sum = 0;
            let prices = [];
            let priceRequest = [];

            // console.log('event var length ='+ equipmentLastIndex);
            Object.keys(event).forEach(async function (m, curIndex) {
              if (event[m] != null) {
                let Type = event[m].Type;
                let quality = event[m].Quality;
                priceRequest.push(
                  axios.get(
                    `https://www.albion-online-data.com/api/v2/stats/Prices/${Type}?locations=Martlock&qualities=${quality}`
                  )
                );
                axios
                  .get(
                    `https://www.albion-online-data.com/api/v2/stats/Prices/T3_MOUNT_HORSE?locations=Martlock&qualities=0`
                  )
                  .then((price) => {
                    let z = price.data.map((i) => i.sell_price_min);
                    let b = Math.min(...z);
                    var min = price.data[0];
                    console.log(b);
                  });
              }
            });
            Promise.all(priceRequest).then((priceResults) => {
              let equipmentLastIndex = Object.keys(priceResults).length - 1;
              priceResults.forEach(function (priceResult, curIndex) {
                let z = priceResult.data.map((i) => i.sell_price_min);
                let b = Math.min(...z);
                sum += b;
                if (curIndex === equipmentLastIndex) {
                  console.log(sum);
                  let y;
                  if (sum.toString().length < 7) {
                    y = (sum / 1000).toFixed(0) + "k";
                  } else if (sum.toString().length > 6) {
                    y = (sum / 1000000).toFixed(2) + "m";
                  }

                  const embed = new MessageEmbed()
                    .setColor("BLACK")
                    .setDescription(
                      ` \`\`\`css\n[${res.data.players[0].GuildName}] ${nicknameasli}                      ${y}\`\`\``
                    )
                    .setFooter(`Total gear lost -${sum / 1000}`);
                  message.channel.send(embed);
                }
              });
            });
          });
      });
  },
};
