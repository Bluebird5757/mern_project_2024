const Signupmodel=require("../models/signupmodel");
const jwt=require("jsonwebtoken");
function dosaveemail(req,resp)
{
    const doc=new Signupmodel(req.body);
    doc.save().then(function(retdoc)
    {
        resp.set("json");
        resp.json({status:true,res:retdoc});
    })
}
function dofetchsignup(req,resp)
{
    console.log("cnsjdch");
    const {email,password}=req.body;
    console.log(req.body);
    Signupmodel.findOne({email:email,password:password})
    .then(function(result)
    {   console.log(result);
        /////////
        let skey=process.env.SEC_KEY;
        let token=jwt.sign({result},skey);
        if(result!=null){
        resp.json({status:true,res:result.type,jtoken:token});}
        else
        resp.json({status:true,msg:"account not there"});
    }).catch(function(err)
    {
        console.log(err);
    })
}
module.exports={dosaveemail,dofetchsignup};