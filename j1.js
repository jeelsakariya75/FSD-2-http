var url=require("url")
addr="http://localhost:8080/defult.html?year=2026&month=march#warupdate"
var u=new URL(addr)
var q=url.parse(addr,true)
process.noDeprecation=true;
// console.log(q)
console.log(q.query)
console.log(q.query.year)
// console.log(u.href)
// console.log(u.query)
// console.log(u.parse)
// console.log(u.hostname)