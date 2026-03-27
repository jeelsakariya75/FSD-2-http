var fs=require('fs')
var http=require('html')
Server=http.createServer((req,res)=>{
    if(req.url=='/')
    {
        res.writeHead(200,{'Content-Type':'text/html'})
        res.write("<h1>Hello Home Page</h1>")
        res.end()
    }
    else if(req.url==='/img1.png')
        {
            const img=fs.readFileSync('img1.png')
            res.writeHead(200,{'Content-Type':'image/png'})
            res.end(img)
        }
        else
        {
            res.writeHead(200,{'Content-Type':'text/html'})
            res.write(data)
            res.end()
        }
})