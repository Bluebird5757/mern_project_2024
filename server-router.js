const express=require("express");
const admin=require("./router/admin")
const users=require("./router/users");
const app=express();
app.listen(2005,function()
{
    console.log("server started at 2005");
})
app.use("/user",users);
app.use("/admin",admin);