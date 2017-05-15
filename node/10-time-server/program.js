const net  = require('net')
const port = Number(process.argv[2])

const zeroFill = (i) => {
  return (i < 10 ? '0' : '') + String(i)
}

const now = () => {
  let date = new Date()
  return date.getFullYear() + '-' +
    zeroFill(date.getMonth() + 1) + '-' +
    zeroFill(date.getDate()) + ' ' +
    zeroFill(date.getHours()) + ':' +
    zeroFill(date.getMinutes())
}

const server = net.createServer((socket) => {
  socket.end(now() + '\n')
})

server.listen(port)
