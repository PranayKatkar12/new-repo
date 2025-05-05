const http = require('http');

const server = http.createServer( (req,res) => {
    console.log(req.url, req.method, req.headers);

    res.setHeader('Content-Type', 'text/html');

        res.write(
            `
            <html>
            <head>
                <title>Myntra</title>
            </head>
            <body>
                <a href='/'>Home</a>
                <br>
                <br>
                <a href='/men'>Men</a>
                <br>
                <br>
                <a href='/women'> Women </a>
                <br>
                <br>
                <a href='/kids'>Kids</a>
                <br>
                <br>
                <a href='/cart'>Cart</a>
            </body>
            </html>
            `
        )
      

       if(req.url === '/'){
          res.write(`<h1>Welcome To Home</h1>`)
          //return res.end();
      }
      else if(req.url === '/men'){
          res.write(`<h1>Welcome To Men Section</h1>`)
          //return res.end();
      }else if(req.url === '/women'){
          res.write(`<h1>Welcome To Women Section`)
          //return res.end();
      }else if(req.url === '/kids'){
          res.write('<h1>Welcome To Kids Section</h1>');
          //return res.end();
      }else if(req.url === '/cart'){
        res.write('<h1>Welcome To Cart Section</h1>');
        //return res.end();
      }

      return res.end()
})

const PORT=3002;
server.listen(PORT, () =>{
    console.log(`server running on http://localhost:${PORT}`);
})