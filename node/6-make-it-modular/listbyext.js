const fs   = require('fs')
const path = require('path')

module.exports = function(directory, extension, callback) {
  fs.readdir(directory, (error, files) => {
    if (error) return callback(error)

    let listFiles = []

    files.forEach((file) => {
      if (path.extname(file) === '.' + extension) {
        listFiles.push(file)
      }
    })

    callback(null, listFiles)
  })
}
