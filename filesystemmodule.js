const fs = require('fs');

//err -> stands for error
//data -> content of the file

//smooth working
//fs.readFile('fiel.txt', 'utf8', (err,data) => {
//    console.log(err,data)
//})

 //intentionally blocking 
const a = fs.readFileSync('fiel.txt');
console.log(a.toString())

console.log("FS module")