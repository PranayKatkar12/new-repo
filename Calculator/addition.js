const { URLSearchParams } = require('url');

const sumRequestHandler = (req,res) => {
  const body=[]
  req.on('data', (chunk) => {
     body.push(chunk)
  })

  
  req.on('end',() => {
     const fullBody = Buffer.concat(body).toString();
     const params = new URLSearchParams(fullBody);

     const bodyObject = Object.fromEntries(params);
     console.log(bodyObject)
     const sum = Number(bodyObject.number1) + Number(bodyObject.number2);
     console.log(sum)
    
    
     res.write(
        `
      <html lang="en">
          <head>
              <meta charset="UTF-8">
              <meta name="viewport" content="width=device-width, initial-scale=1.0">
              <title>Document</title>
          </head>
          <body>
              <h2>Sum Is : ${sum} </h2>
          </body>
      </html>
              `
      );
      return res.end();
  });

  
}

exports.sumRequestHandler = sumRequestHandler;