var fs=require('fs');
// reading of file
var read=fs.readFileSync('test.txt','utf8');
console.log(read);
// writing of file
fs.writeFileSync('k.txt',read);
