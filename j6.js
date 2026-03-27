var fs=require('fs')
var http=require('http')
Server=http.createServer((req,res)=>{
    if(req.url=='/')
    {
        res.writeHead(200,{'Content-Type':'text/html'})
        res.write('<h1>Hello</h1><img src="img1.png"/>')
    }
    else if(req.url==='/img1.png')
    {
        const img=fs.readFileSync('img1.png')
        res.writeHead(200,{'Content-Type':'image/png'})
        res.end(img)
    }
}).listen(8080)
console.log("Server Start")