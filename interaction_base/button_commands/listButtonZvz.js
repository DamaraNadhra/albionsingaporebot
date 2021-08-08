const { row, tankRow, healRow } = require("../../list");
module.exports = {
  name: "listbuttonzvz",
  description: "listbuttonzvz from !zvz-builds",
  execute(interaction, client) {
    interaction.update({
      content: "Listing the approved zvz builds",
      embeds: [],
      components: [tankRow, row, healRow],
    });
  },
};
