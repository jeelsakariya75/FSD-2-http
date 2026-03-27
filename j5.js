var http=require('http')
Server=http.createServer((req,res)=>{
    if(req.url=='/')
    {
        res.writeHead(200,{'Content-Type':'text/html'})
        res.write("<h1>Hello Home Page</h1>")
        res.end()
    }
    else if (req.url=='/about')
    {
        res.writeHead(200,{'content-Type':'text/html'})
        res.write("<h1>This is about page</h1>")
        res.end()
    }
    else{
        res.writeHead(200,{'content-Type':'text/html'})
        res.write("<h1>page not found</h1>")
        res.end()
    }
})
Server.listen(8080,()=>{"Server started"})
console.log("Server Start")