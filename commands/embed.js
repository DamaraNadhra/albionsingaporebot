const { Message, Client, MessageEmbed } = require("discord.js");
module.exports = {
  name: "embed",
  description: "none",
  permissions: 'MANAGE_MESSAGES',
  /**
   *
   * @param {Message} message
   * @param {*} args
   * @param {Client} client
   */
  async execute(message, args, client) {
    let arguments = args.slice(0).join(' ')
    let splittedArguments = arguments.split('&')
    let embed = new MessageEmbed()
    let image;
    message.delete().then(() => {
        for (const result of splittedArguments) {
            let arg = result.split('=')
            if (arg[0].includes('Author') || arg[0].includes('Footer')) {
                if (arg[1].includes(',')) {
                    let split = arg[1].split(',')
                    arg[1] = split[0]
                    split[1] = split[1].replace('{bot}', client.user.displayAvatarURL())
                    split[1] = split[1].replace('{myavatar}', message.author.avatarURL())
                    image = split[1]
                }
            } 
            console.log(arg[1])
            embed = embed['set' + arg[0]](arg[1], image)
        }
        
        message.channel.send({
            embeds: [embed]
        })
    })
  },
};
