var express=require("express");
const router=express.Router();
router.get("/signup",(req,resp)=>
{
    console.log("signup");
    resp.send("signup");
});
router.get("/login",(req,resp)=>
{
    console.log("login");
    resp.send("login");
});
module.exports=router;