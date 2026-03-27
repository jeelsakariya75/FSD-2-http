var http=require('http')
http.createServer((req,res)=>{
    res.writeHead(200,{'Content-Type':'text/html'})
    // res.writeHead(200,{'Content-Type':'text/html'})
    // res.write("Good Morning")
    // res.write("<h1>Hello Server</h1>")
    // res.end()
    res.write(req.url+"<br>")
    res.end('url Featched')
}).listen(8080,()=>{
    console.log('Server Started')
})