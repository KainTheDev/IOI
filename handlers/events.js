const { readdirSync } = require("fs")
const { join } = require("path")
for (const eventFilePath of readdirSync('events')) {
    require(join('..', 'events', eventFilePath))
}
console.log('Events: ✅')