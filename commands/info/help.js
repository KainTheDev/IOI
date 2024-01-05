const { Command, Message } = require("eris");

module.exports = new Command('help',
    /**
     * 
     * @param {Message} message 
     * @param {string[]} args 
     */
    async function (message, args) {
        /**
         * @type {import("eris").Embed}
         */
        const embed = {
            title: 'Help menu',
            fields: [
                {
                    name: 'Commands',
                    value: `\`\`\`${config.p}\`\`\``
                }
            ]
        }
        return await message.channel.createMessage({embed})
    },
    {
        description: "Show bot's help menu"
    }
)