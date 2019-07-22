var fs=require('fs');
fs.readFile('test.txt','utf8',function(err,data){
	if (err)
		console.error(err);
	console.log(data);
});
console.log('file is read successfully');
//it is good method for file read b/c first all code execute after that file reading process start
