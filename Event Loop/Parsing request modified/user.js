
const { error } = require('console');
const fs=require('fs');
const { URLSearchParams } = require('url');

 const userRequestHandler = (req,res) => {
    console.log(req.url, req.method, req.headers);
        
        if(req.url === '/'){
            res.setHeader('Content-Type', 'text/html');
            res.write('<html>')
            res.write('<head><title>Complete Coding</title></head>');
            res.write('<body><h1>Enter Your Details:</h1>')
            res.write('<form action="/submit-details" method="POST">')
            res.write('<input type="text" name="username" placeholder="Enter Your Name"/><br>')
    
            res.write('<label for="male">Male:</label>');
            res.write('<input type="radio" id="male" name="gender" value="male"/>')
            
            res.write('<label for="female">Female</label>')
            res.write('<input type="radio" id="female" name="gender" value="female"/>')
            
            res.write('<br><input type="submit" value="Submit"/>')
            res.write('</form>')
            res.write('</body>')
            res.write('</html>')
            return res.end();
        }else if(req.url.toLowerCase() === "/submit-details" && req.method == "POST"){
            const body=[];
            req.on('data', (chunk) => {
               console.log(chunk);
               body.push(chunk);
            });

            req.on('end', () => {
                const fullBody=Buffer.concat(body).toString();
                console.log(fullBody);
                const params=new URLSearchParams(fullBody);

                
                const bodyObject = Object.fromEntries(params);
                console.log(bodyObject);
                
                //file me bhi vohi write ho jo hame bodyObject me mila hai (user.txt)
                //after filling the form check user.txt for confirmation of details changes
                // using the file.writeFile() instead of file.writeFileSync() which is async
                fs.writeFile('user.txt', JSON.stringify(bodyObject),error => {
                    console.log('Data send successfully');
                    res.statusCode=302;//for redirecting
                    res.setHeader('Location', '/'); //redirect hoke home pe jana hai
                    return res.end()
                });
            })     
        }
        //pura part else me rahega matlab agar upar valo me se koi condition match
        //nahi hui to else case chalega
        else{
            res.setHeader('Content-Type', 'text/html');
            res.write('<html>');
            res.write('<head><title> Complete Coding</title></head>');
            res.write('<body><h1>Like /Share /Subscribe</h1></body>');
            res.write('</html>');
            return res.end();
        }
}

module.exports = userRequestHandler;