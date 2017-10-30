var http =require('http');

var server = http.createServer(function(req,res){

	console.log('Got a Request');
	res.write('hello this is server response');
	res.end();
});

server.listen(3000);