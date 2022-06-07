//to get http as library
const http = require('http');
const fs = require('fs');

//to accept any available port
const port = process.env.PORT || 3000;

//creating server
const server = http.createServer((req, res)=> {
    console.log(req)
    //diffrent statusCodes to declare the status i.e. 200 OK, 404 Error
    res.statusCode = 200;
    //clearfy the type of content and in which form we want response i.e. text or html
    res.setHeader('type-content','text/html');
    //server response 
    if(req.url == '/hello'){
        statusCode = 200;
        res.end('<h1> Hello world </h1>');
    }
    else if(req.url == '/about'){
        statusCode = 200;
        res.end('<h1> Hello world about</h1>');
    }
    else if(req.url == '/'){        
        statusCode = 200;
        const a = fs.readFileSync('index.html');    
        res.end(a.toString());
    }
    else{
        statusCode = 404;        
        res.end('<h1>404 Not Found</h1>')
    }   
}); 

server.listen(port, () => {
    console.log('Server is listening on', port);
});