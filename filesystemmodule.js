const fs = require('fs');

//err -> stands for error
//data -> content of the file

//smooth working
//fs.readFile('fiel.txt', 'utf8', (err,data) => {
//    console.log(err,data)
//})

//fs.writeFile('fiel.txt','This is data.', ()=> {
//    console.log('Written to File')
//});

b = fs.writeFileSync('fiel.txt','This is data.');
console.log(b);

 //intentionally blocking 
const a = fs.readFileSync('fiel.txt');
console.log(a.toString());

console.log("FS module");       