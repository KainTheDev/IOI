const { readdirSync } = require("fs");
const { join } = require("path");

const handlerFiles = readdirSync('handlers').filter((fileName) => fileName !== __filename)
for (const handlerFile of handlerFiles) {
    require(join('..', 'handlers', handlerFile))
}