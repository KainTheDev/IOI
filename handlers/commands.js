const { readdirSync } = require("fs")
const { join } = require("path")
for (const eventFilePath of readdirSync('commands')) {
    const command = require(join('..', 'commands', eventFilePath))
}
console.log('Commands: ✅')