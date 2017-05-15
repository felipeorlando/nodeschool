const input  = process.argv.slice(2)
const result = input.reduce((a, b) => parseInt(a) + parseInt(b), 0)

console.log(result)
