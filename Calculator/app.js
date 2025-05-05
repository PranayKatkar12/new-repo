const http = require("http");
const handleRoute = require('./incoming')

const server = http.createServer(handleRoute)

const PORT = 3000;
server.listen(PORT, () => {
    console.log(`server is running on http://localhost:${PORT}`)
})