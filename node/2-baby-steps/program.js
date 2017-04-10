var input  = process.argv.slice(2);
var result = input.reduce((a, b) => parseInt(a) + parseInt(b), 0);

console.log(result);
