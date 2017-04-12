var fs   = require('fs')
var path = require('path')

var directory = process.argv[2]
var extension = `.${process.argv[3]}`

fs.readdir(directory, (error, list) => {
  if (error) return console.log(error)

  list.forEach((file) => {
    if (path.extname(file) === extension) {
      console.log(file)
    }
  })
})
