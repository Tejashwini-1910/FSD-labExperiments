//import a http module

const http=require('http');

http.createServer((req,res)=>{

    res.writeHead(200,{'Content-Type':'text/plain'});
    res.write('Hello World');
    res.end();
    console.log("server running");

}).listen(8080);