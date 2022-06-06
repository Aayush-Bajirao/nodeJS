const path = require('path');

const a1 = path.basename('C:\\temp\\myfile.html');
console.log(a1,' basename')

const a2 = path.dirname('C:\\temp\\myfile.html');
console.log(a2,' dirname');

const a3 = path.extname('C:\\temp\\myfile.html');
console.log(a3,'extname');

const a4 = path.format({
                root: '/',
                name: 'index',
                ext: '.js'
            });
console.log(a4, 'format');

console.log(path.dirname(__filename))
console.log(path.basename(__filename),' basename')

const a5 = path.parse(__filename);
console.log(a5.dir);
console.log(a5)