var fs = require('fs');

var userInput = process.argv[2];

var fileContent = fs.readFileSync(userInput).toString();

var result = fileContent.split('\n').length - 1;

console.log(result);
