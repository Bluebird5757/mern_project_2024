const express=require("express");
const admin2=require("./router2/admin2");
const user2=require("./router2/user2");
const app=express();
app.listen(2006,()=>{
    console.log("server started at 2006");
})
app.use("/admin2",admin2);
app.use("/user2",user2);