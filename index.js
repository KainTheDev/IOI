const { Client, GatewayIntentBits } = require("discord.js");
const { existsSync, writeFileSync, readFileSync } = require("fs");

const client = new Client({
    intents: Object.keys(GatewayIntentBits)
})
client.commands  = new Map()
module.exports = client
if (!existsSync("token.txt")) writeFileSync('token.txt', "")
const token = readFileSync("token.txt", "utf-8")
if (token === "") return console.log("Missing token.")

require('./handlers/index')
client.login(token)