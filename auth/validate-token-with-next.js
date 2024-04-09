const jwt=require("jsonwebtoken");
// const { isValidElement } = require("react");
const jwtAuthWwithNext=(req,res,next)=>
{
    const full_token=req.headers['authorization'];//keyword
    console.log(full_token);

    var ary=full_token.split(" ");
    let actualToken=ary[1];
    let isTokenvalid;
    try{
        isTokenvalid=jwt.verify(actualToken,process.env.SEC_KEY);
    }
    catch(err)
    {
        console.log("token expired");
        res.json({status:false,message:"unauthorized"});
        return;
    }
    if(isTokenvalid)
    {
        console.log("*************");
        const obj=jwt.decode(ary[1]);
        // req.query.item=obj.retDoc.item;
        console.log(obj);

        next();
    }
    else{
        res.json({status:false,message:"unauthorized"});
        return;
    }
}
module.exports=jwtAuthWwithNext;