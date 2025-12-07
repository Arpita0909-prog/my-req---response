const http=require('http');
const server = http.createServer((req, res) => {
    console.log("server is created");

    req.setHeader('Content-Type', 'text/html');
    if(req.url === '/') {
        res.statusCode = 200;
        res.end('<h1>hello world</h1>');
    } else if(req.url === '/pizza') {
        res.statusCode = 200;
        res.end('<h1>this is your pizza</h1>');
    } else {
        res.statusCode = 404;
        res.end('<h1>page not found</h1>');
    }
});

const PORT = 3000;
server.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});