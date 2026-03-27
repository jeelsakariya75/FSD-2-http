var fs=require('fs')
var http=require('http')
Server=http.createServer((req,res)=>{
    if(req.url=='/')
    {
        res.writeHead(200,{'Content-Type':'text/html'})
        res.write('<h1>Hello</h1>')
    }
    else if(req.url==='/a.html')
    {
        const html=fs.readFileSync('a.html')
        res.writeHead(200,{'Content-Type':'text/html'})
        res.end(html)
    }
}).listen(8080)

console.log("Server Start")