const express=require("express");
const path=require("path");
const router=express.Router();
router.get("/",(req,resp)=>
{
    console.log("admin");
    let pathh=path.join(__dirname,"..","public/admin-dash.html");
    console.log(pathh);
    resp.sendFile(pathh);
});
router.get("/block",(req,resp)=>
{
    console.log("blocked");
    resp.send("user blocked");
});
router.get("/allusers",(req,resp)=>
{
    console.log("allusers");
    resp.send("allusers");
})
module.exports=router;