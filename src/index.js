const http = require("http");
const getUsers = require ("./modules/users");

const hostname = "127.0.0.1";
const port = 3003;
const name = 'name';


const server = http.createServer((req, res) => {
    if (req.url === `/hello=${name}`) {
        if (name === '') {
            res.statusCode = 400;
            res.statusMessage = "Error";
            res.setHeader = "Content-Type", "text/plain";
            res.write('Enter a name')
            res.end()
        }
        res.statusCode = 200;
        res.statusMessage = "OK";
        res.setHeader = "Content-Type", "text/plain";
        res.write(`Hello,${name}`)
        res.end()        
    }
    if (req.url === '/users') {
        res.statusCode = 200;
        res.statusMessage = "OK";
        res.setHeader = "Content-Type: application/json";
        res.write(getUsers())
        res.end()
    }
    res.statusCode = 200;
    res.statusMessage = "OK";
    res.setHeader = "Content-Type", "text/plain";
    res.write('Hello world')
    res.end()
});
server.listen(port, hostname, () => {
  console.log("Сервер запущен по адресу http://${hostname}:${port}/");
});
