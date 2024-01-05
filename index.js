const { existsSync, readFileSync, readdirSync } = require("fs");
const { Collection, CommandClient } = require('eris');
const config = require('./config.json');
const { join } = require("path");
if (!existsSync("token.txt")) {
  console.error("Token file does not exist.");
  process.exit(1);
}

const token = readFileSync("token.txt", "utf-8").trim();
if (!token) {
  console.error("Token is missing.");
  process.exit(1);
}

const client = new CommandClient(token, {
    intents: ['all']
}, {
    prefix: ';',
    defaultHelpCommand: false,
    defaultCommandOptions: {
        guildOnly: true
    }
});
const categories = new Collection()
module.exports = {client, categories, config}

const commandsFolder = join(process.cwd(), 'commands');

client.on('ready', () => {
  console.log(`Logged in as ${client.user.username}`);
  loadCommands();
  console.log(categories)
});

function loadCommands() {
  const commandFolders = readdirSync(commandsFolder);
  for (const folder of commandFolders) {
    const commandFiles = readdirSync(join(commandsFolder, folder)).filter(file => file.endsWith('.js'));
    categories.set(folder.replace('.js', ''), commandFiles.map(fileName => fileName.replace('.js', '')))
    for (const file of commandFiles) {
      const command = require(join(commandsFolder, folder, file));
      client.registerCommand(command.label, command.execute, command)
    }
  }
}
client.connect();
