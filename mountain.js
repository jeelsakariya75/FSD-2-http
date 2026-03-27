var url=require("url")
addr="https://www.google.com/search?q=mountain+view+photos&rlz=1C1YTUH_enIN1091IN1091&oq=mountain+view+phot&gs_lcrp=EgZjaHJvbWUqDAgAEAAYQxiABBiKBTIMCAAQABhDGIAEGIoFMgYIARBFGDkyBwgCEAAYgAQyBwgDEAAYgAQyBwgEEAAYgAQyBwgFEAAYgAQyBwgGEAAYgAQyBwgHEAAYgAQyBwgIEAAYgAQyCAgJEAAYFhge0gEJMTM4MzBqMGo3qAIIsAIB8QWlnCUoqywrlfEFpZwlKKssK5U&sourceid=chrome&ie=UTF-8"
var u=new URL(addr)
var q=url.parse(addr,true)
console.log(q)