const express=require('express')


const app = express();

app.use((req,res,next) => {
    console.log("First Dummy Middleware",req.url, req.method);
    next();
})

app.use((req,res,next) => {
    console.log("Second Dummy Middleware",req.url, req.method);
    next();
})

// app.use((req,res,next) => {
//     console.log("Third Middleware")
//     res.send("<h1>Welcome To My Website</h1>");
// })

app.get("/", (req,res,next) => {
    console.log("Handling / for GET");
    res.send(`<h1> Welcome To My Website </h1>`)
    next();
})

app.get("/contact-us", (req,res,next) => {
    console.log("Handling contact us page");
    res.send(`
        <h1>Please Give Your Details here</h1>
         <form action="/contact-us" method="POST">
        <label for="name">Name:</label><br>
        <input type="text" id="name" name="name" required><br><br>

        <label for="email">Email:</label><br>
        <input type="email" id="email" name="email" required><br><br>

        <button type="submit">Submit</button>
    </form>
        `)
    next();
})

app.post("/contact-us", (req, res, next) => {
    console.log("Handling /contact-us for POST method",req.url, req.method);
    res.send(`<h1>Thanks for your details</h1>`)
})

const PORT = 3000;
app.listen(PORT, () => {
    console.log(`server is running on http://localhost:${PORT}`)
})