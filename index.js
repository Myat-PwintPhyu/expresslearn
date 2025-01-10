import express, { request, response } from "express";

const sever = express();

sever.get("/",(request,response,next)=>{
    console.log("request server");
    response.send("Hello server")
    
})

sever.get("/about",(req,res)=>{
    res.send("hello about")
})

sever.post ("/post",(req,res)=>{
    res.send("hello post")
})
sever.get("/*",(req,res)=>{
res.send("Page not Found ,404")
})
const port = 3000
sever.listen(port,() => {
    console.log("App is Running");
    
})