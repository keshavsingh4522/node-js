var http=require('http');//importing library

http.createServer(function(req,res){
  res.end('hello node');
}).listen(3000); //port number 30000
console.log('your server is running on 127.0.0.1:3000');
