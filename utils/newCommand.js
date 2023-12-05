const { Message } = require("discord.js");

/**
 * @param {{name: string, description: string, aliases: string[], subCommands: Array.<{name: string, description: string, group: boolean, subCommands: Array.<{name: string, description: string}>}>, arguments: Array.<{name: string, optional: boolean}>, cooldown: number, callback: function({message: Message, args: Array.<{name: string, content: string}>, subCommands: Array.<string>})}} data
 * @returns {JSON}
 */
function newCommand(data) {
    return {
        ...data
    }
}
module.exports = newCommand