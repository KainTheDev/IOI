const { Command, Message } = require("eris");

module.exports = new Command('ping',
    /**
     * 
     * @param {Message} message 
     * @param {string[]} args 
     */
    async function (message, args) {
        return await message.channel.createMessage(`**Pong! 🏓 - ${Date.now() - message.timestamp}ms**`)
    }, {
    description: "Show bot's ping"
}
)