const express=require("express");
const app=express();

app.get("/",function(req,res){
    res.send("the server is up");
})


app.listen(80,function(){
    console.log("the server is started on port 80");
});