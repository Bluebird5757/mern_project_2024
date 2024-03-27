const {getproductmodel}=require("../models/modelproduct");
const Productmodel=getproductmodel();
function dosaveproduct(req,resp)
{
    var filename = "nopic.jpg";
    if (req.files != null) {
        filename = req.files.pic.name;
        var path = process.cwd() + "/public/uploads/" + filename;
        req.files.pic.mv(path);}
        req.body.pic=filename;
    const doc=new Productmodel(req.body);
    doc.save().then((retDoc)=>
    {
        resp.set("json");
        resp.json({status:true,rec:retDoc});//retdoc is an object
    })
}
function doremove(req,resp)
{
    Productmodel.deleteOne({item:req.body.item})
    .then(function(result)
    {
        if(result.deletedCount==1)
            resp.json({status:true,msg:"deleted"});
        else
            resp.json({status:true,msg:"invalid item"})
    }).catch(function(err)
    {
        resp.json({status:false,err:err.message})
    });
}
function doupdate(req,resp)
{
    Productmodel.updateOne({item:req.body.item},{$set:{category:req.body.category,price:req.body.price,dop:req.body.dop}})
    .then(function(result)
    {
        if(result.matchedCount==1)
        resp.json({status:true,msg:"updated"});
        else
        resp.json({status:true,msg:"invalid item"});
    }).catch(function(err)
    {
        resp.json({status:false,err:err.message});
    })
}
function dofetch(req,resp)
{
    Productmodel.findOne({item:req.body.item})
    .then(function(result)
    {
        if(result!=null)
        resp.json(result);
        else
        resp.json({status:true,msg:"item not there"});
    }).catch((err)=>
    {
        console.log(err);
    })
}
module.exports={dosaveproduct,doremove,doupdate,dofetch};