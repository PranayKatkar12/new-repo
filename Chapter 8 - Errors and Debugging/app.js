const http = require('http');
const testingSyntax = require('./syntax');
const runtimeError = require('./runtime');
const logicalError = require('./logical')

const server = http.createServer((req,res) => {
    //testingSyntax();
    //runtimeError();
    logicalError();
})

const PORT = 3000;
server.listen(PORT, () => {
    console.log(`server is running on http://localhost:${PORT}`)
})