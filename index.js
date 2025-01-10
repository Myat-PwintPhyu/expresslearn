import express, { request, response } from "express";

const sever = express();
sever.use(express.json())

const fakeData = {
    id:1,
    name:"redmi note 8"
}

sever.get("/",(request,response,next)=>{
   
    response.status(200).json(fakeData)
    
});

sever.post("/",(req,res)=>{
const {name} = req.body// const data  ={"name":"hh","age":20}
console.log("name is  ", name);
if (!name){
    return res.status(400).json({"message":"invaild name"})
}
if(name.length < 2){
    return res.status(400).json({"message":"name must be at least 2char"})
}
return res.status(200).json({"message":"ok"})
});

const port = 3000

sever.listen(port,() => {
    console.log("App is Running");
    
})