const fs = require('fs')

const userInput = process.argv[2]

const fileContent = fs.readFileSync(userInput).toString()

const result = fileContent.split('\n').length - 1

console.log(result)
