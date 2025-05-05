//core module
//const http = require('http');

//external module
const express = require('express');

//local module
const userRequestHandler = require('./user')

const app = express();

app.get("/", (req, res, next) => {
   console.log("came in first middleware",req.url, req.method);
//    res.send(`<p>Came from first middleware</p>`);
   next();
})

app.post("/submit-details", (req, res, next) => {
    console.log("came in second middleware ",req.url, req.method);
    res.send("<p>Welcome To Express Js</p>");
})

app.use("/", (req, res, next) => {
    console.log("came in another middleware",req.url, req.method);
    res.send(`<p>Came from another middleware</p>`);
 })





const PORT = 3000;
app.listen(PORT, () => {
    console.log(`server is running on http://localhost:${PORT}`)
})