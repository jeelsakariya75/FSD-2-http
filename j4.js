var http=require('http')
http.createServer((req,res)=>{
    res.writeHead(200,{'Content-Type':'application/json'})
    const data={subject:"Fsd-2",Toipc:"Nodejs"}
    res.end(JSON.stringify(data))
}).listen(8080,()=>{
    console.log('Server Started')
})