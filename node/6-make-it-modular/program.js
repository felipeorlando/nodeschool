var listByExt = require('./listbyext.js')

var showFile = function(error, files) {
  if (error) return console.log(error)

  files.forEach((file) => {
    console.log(file);
  })
}

var directory = process.argv[2]
var extension = process.argv[3]

listByExt(directory, extension, showFile)
