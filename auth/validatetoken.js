const jwt=require("jsonwebtoken");
const jwtAuth=(req,resp)=>
{
    const full_token=req.headers['authorization'];//keyword
    console.log(full_token);
    var ary=full_token.split(" ");
    let actualToken=ary[1];
    const isTokenValid=jwt.verify(actualToken,process.env.SEC_KEY);
    if(isTokenValid)
    {
        console.log("*****************************");
        const obj=jwt.decode(ary[1]);
        resp.json({status:true,message:"**Authorized",item:obj});
    }
    else{
        resp.json({status:false,message:"unauthorized"});
        return;
    }
}
module.exports=jwtAuth;