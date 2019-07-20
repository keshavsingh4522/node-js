var http=require('http');
http.createServer(function(req,res){
	var data="hi my name is keshav singh and this my first node project";
	var content_length=data.length;
	res.writeHead(200,{'content-Type':'text/plane','content-Length':content_length});
	res.end(data);
}).listen(3080);
console.log('hi your server is running on 127.0.0.1:3080');

//global object 
setTimeout(function(){
	console.log('KESHAV SINGH');
},5000);
var time=0;

var timer=setInterval(function(){
	time+=1
	console.log(time);
	if (time>=4)
		clearInterval(timer);
},1000);
//
console.log('direcotry name is: '+__dirname);
console.log('file name is: '+__filename);
