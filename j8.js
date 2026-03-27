var fs=require('fs')
var http=require('http')
http.createServer((req,res)=>{
    let file="."+(req.url==="/"?"/a.html":req.url)
    fs.readFile(file,(err,data)=>{
        if(err)
        {
            res.end("File Not Found")
        }
        else
        {
            res.writeHead(200,{'Content-Type':'text/html'})
            res.write(data)
            res.end()
        }
    })
}).listen(8080)
console.log("Server Started")