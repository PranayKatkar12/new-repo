const sumRequestHandler = require('./sum')
const handleRoute = (req,res) => {
    if(req.url === '/'){
        res.write(`
            <html>
               <head>
                 <title>Calculator</title>
                 <body>
                   <h1>Welcome to Our Calculator App </h1>
                   <a href='/calculator'>Click to view Calculator</a>
                 </body>
               </head>
            </html>
       `);

       return res.end();
    }

    else if(req.url === '/calculator'){
        res.write(
            `
          <html lang="en">
              <head>
                  <meta charset="UTF-8">
                  <meta name="viewport" content="width=device-width, initial-scale=1.0">
                  <title>Document</title>
              </head>
              <body>
                  <h2>Enter Two Numbers</h2>
                      <form action="/calculate-result" method="POST">
                          <label for="number1">Number 1:</label>
                          <input type="number" id="number1" name="number1" required><br><br>
      
                          <label for="number2">Number 2:</label>
                          <input type="number" id="number2" name="number2" required>
                          <input type="submit" value="Submit"/>
                      </form>
              </body>
          </html>
                  `
          );

          return res.end();
    }

    else if(req.url.toLowerCase() === '/calculate-result' && req.method === 'POST'){
        return sumRequestHandler(req,res);
    }

    res.write(`
        <html>
           <head>
             <title>Calculator</title>
             <body>
               <h1>404 Page Not Found </h1>
               <a href='/'>Go To Home</a>
             </body>
           </head>
        </html>
    `);
    
    return res.end();
}

module.exports = handleRoute;