var http=require('http')
var url=require('url')
var fs=require('fs')

var addr="https://www.google.com/exam.txt?c1=Hello&c2=FSD2 T1 Test&c3=Welcome to LJU#AllTheBest"
q=url.parse(addr,true)
console.log(q)
const c1=q.query.c1
const c2=q.query.c2
const c3=q.query.c3
const hash=q.hash
// const fname=q.pathname.split("/").pop()
const fname="."+q.pathname
const data=c1+"!\n"+c3+" "+c2+'\n'+hash
console.log(data)

fs.writeFileSync(fname,data)
http.createServer((req,res)=>{
    if(req.url=='/')
    {
        ans=fs.readFileSync(fname,'utf-8')
        res.writeHead(200,{'Content-Type':'text/html'})
        res.write("<h1 style='color:red'><pre>"+ans+"</pre></h1>")
        res.end()
    }
    else
    {
        res.end('Page not found')
    }
}).listen(8080)