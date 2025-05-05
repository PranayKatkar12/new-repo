const { URLSearchParams } = require("url");


const sumRequestHandler = (req,res) => {
    console.log("1:in sumRequestHandler:",req.url)
    const body=[];
    req.on('data', (chunk) => {
        console.log('2:enters in chunk callback')
        body.push(chunk)
    })

    let result;
    req.on('end', () => {
        console.log('3:enters in end block')
        const fullBody = Buffer.concat(body).toString();
        const params = new URLSearchParams(fullBody);

        const bodyObject = Object.fromEntries(params);
        console.log(bodyObject);

        result = bodyObject.number1 + bodyObject.number2;
        console.log(result)
    })

    console.log('4:sending the sum response using res.write()')
    res.write(
        `
                    <html lang="en">
            <head>
                <meta charset="UTF-8">
                <meta name="viewport" content="width=device-width, initial-scale=1.0">
                <title>Document</title>
            </head>
            <body>
                <h1>sum is : ${result}</h1>
            </body>
            </html>
        `
    )

    return res.end();
}

module.exports = sumRequestHandler;