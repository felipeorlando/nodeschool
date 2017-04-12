var fs = require('fs');

var userInput = process.argv[2];

fs.readFile(userInput, 'utf8', function(error, data) {
  if (!error) {
    console.log(data.split('\n').length - 1);
  }
});
