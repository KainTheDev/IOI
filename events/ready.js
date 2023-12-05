const client = require("..");

client.on('ready', () => {
    console.log(client.user.tag)
    console.log('Bot is online.')
})