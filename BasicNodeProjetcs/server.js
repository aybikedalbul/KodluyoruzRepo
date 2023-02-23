const http = require('http');

const server = http.createServer((req,res) => {
     // We should capture url of the req.
    const url = req.url;

    if(url === "/"){
        res.writeHead(200, {"Content-Type": "text/html"});
        res.write("<h2>WELCOME TO INDEX PAGE<h2>");
    }else if(url === "/about"){
        res.writeHead(200, {"Content-Type": "text/html"});
        res.write("<h2>WELCOME TO ABOUT PAGE<h2>");
    }else if(url === "/contact"){
        res.writeHead(200, {"Content-Type": "text/html"});
        res.write("<h2>WELCOME TO CONTACT PAGE<h2>");
    }else{
        res.writeHead(404, {"Content-Type": "text/html"});
        res.write("<h2>PAGE NOT FOUND</h2>")
    }
    res.end();
})

//Server is listening: 
const port = 5000;
server.listen(port, () =>{
    console.log(`Server started ad ${port}`);
})