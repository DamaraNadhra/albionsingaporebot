module.exports = {
  name: "delete",
  description: "universal delete button",
  async execute(interaction, client) {
    interaction.message.delete();
  },
};
