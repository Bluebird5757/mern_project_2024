const express=require("express");
const router=express.Router();
router.get("/signup",(req,resp)=>
{
    const data=JSON.stringify(req.query);
    resp.send("signed into"+data);
});
router.get("/login",(req,resp)=>
{
    console.log(resp.send("ur logged in"));
});
module.exports=router;