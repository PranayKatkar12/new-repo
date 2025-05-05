//external module
const express = require('express');

//local module
const userRouter = require("./routes/userRouter")
const hostRouter = require("./routes/hostRouter")

const app = express();

app.use((req, res, next) => {
    console.log(req.url, req.method)
    next();
})

app.use(express.urlencoded())

app.use(userRouter)
app.use("/host",hostRouter)

// app.use((req, res, next) => {
//     res.status(404).send(`<h1>404 Your page is Not Found On airbnb</h1>`)
// })

const PORT = 3000;
app.listen(PORT, () => {
    console.log(`server is running on http://localhost:${PORT}`)
})