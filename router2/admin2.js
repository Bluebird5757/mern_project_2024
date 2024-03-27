const express=require("express");
const router=express.Router();
const warn=(req,resp,next)=>
{
    console.log("$$$$$");
    next();
}
router.use(warn);
router.get("/",(req,resp)=>
{
    console.log("amdin page");
    resp.send("admin page");
})
const ok=(req,resp)=>
{
    resp.send("user blocked");
}
router.get("/block",ok);
router.get("*",(req,resp)=>
{
    resp.send("invalid url");
})
module.exports=router;