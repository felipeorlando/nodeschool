const http = require('http')
const bl   = require('bl')
const urls = process.argv.slice(2, 5)

let results = []
let count   = 0

const showResult = () => {
  results.forEach((result) => {
    console.log(result)
  })
}

const requisition = (url, index) => {
  http.get(url, (response) => {
    response.pipe(bl((error, data) => {
      if (error) return console.error(error)

      results[index] = data.toString()
      count++

      if (count === 3) return showResult()
    }))
  })
}

urls.forEach((url, index) => requisition(url, index))
