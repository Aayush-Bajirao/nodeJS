//to get http as library
const http = require('http');

//to accept any available port
const port = process.env.PORT || 3000;

//creating server
const server = http.createServer((req, res)=> {
    //diffrent statusCodes to declare the status i.e. 200 OK, 404 Error
    res.statusCode = 200;
    //clearfy the type of content and in which form we want response i.e. text or html
    res.setHeader('type-content','text/html');

    //server response 
    res.end('<h1> Hello world <h1>');
});

server.listen(port, () => {
    console.log('Server is listening on', port);
});