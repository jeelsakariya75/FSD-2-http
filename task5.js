var fs=require("fs")
var url=require("url")
addr="https://www.google.com/exam.txt?c1=Hello&c2=FSD2 T1 Test&c3=Welcome to LJU#AllTheBest"
var u=new URL(addr)
// var q=url.parse(addr)
// console.log(q)
// console.log(q.query)
// console.log(q.query.c1)
// console.log(q.query.c3)
// console.log(q.query.c2)
// console.log(q.hash)

var q=url.parse(addr)
var data=q.query
console.log(data)
fs.writeFile("exam.txt",data,(err)=>{
    if(err) throw err
})