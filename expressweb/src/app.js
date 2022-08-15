const express =require('express');
const path =require('path');
const hbs =require('hbs');
const app = express();
const port=8000;
// public static path

const static_path = path.join(__dirname,"../public");
const template_path = path.join(__dirname,"../templates/views");
const partials_path = path.join(__dirname,"../templates/partials")
app.set('view engine','hbs');
app.use(express.static(static_path));
app.set('views',template_path);
hbs.registerPartials(partials_path);




// routing
app.get("",(req,res)=>{
    // res.send("welcome to soham world")
    res.render('index')
})
app.get("/about",(req,res)=>{
    // res.send("welcome to About page")
    res.render('about')
})
app.get("/weather",(req,res)=>{
    // res.send("welcome to Weather page")
    res.render('weather')
})
app.get("/contact",(req,res)=>{
    // res.send("welcome to Weather page")
    res.render('contact')
})
app.get("*",(req,res)=>{
    // res.send("404 error page")
    res.render('404error',{
        error:"Opps! Page Not Found",
    })
})
app.listen(port,()=>{
    console.log(`listen to ${port}`)
})