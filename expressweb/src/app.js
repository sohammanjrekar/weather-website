const express =require('express');
const path =require('path');
const app = express();
const port=8000;
// public static path

const static_path = path.join(__dirname,"../public");
app.use(express.static(static_path));

// routing
app.get("",(req,res)=>{
    res.send("welcome to soham world")
})
app.get("/about",(req,res)=>{
    res.send("welcome to About page")
})
app.get("/weather",(req,res)=>{
    res.send("welcome to Weather page")
})
app.get("*",(req,res)=>{
    res.send("404 error page")
})
app.listen(port,()=>{
    console.log(`listen to ${port}`)
})