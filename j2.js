var fs=require("fs")
var url=require("url")
addr="http://localhost:8080/test?T1=20&T2=24&T3=23"
var u=new URL(addr)
// console.log(q)
// a=parseInt(q.query.T1)
// b=parseInt(q.query.T2)
// c=parseInt(q.query.T3)

// d=(a+b+c)/3
// console.log(d)


// var q=url.parse(addr)
// var data=q.query
// console.log(data)
// fs.writeFile("abc.txt",data,(err)=>{
//     if(err) throw err
// })

// q=url.parse(addr,true)
// data=JSON.stringify(q.query)
// fs.writeFile("pqr.txt",data,(err)=>{if(err) throw err})