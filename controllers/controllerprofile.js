const {getprofilemodel}=require("../models/modelproject");
const Profilemodel=getprofilemodel();
function dosaveprofile(req,resp)
{
    var filename = "nopic.jpg";
    if (req.files != null) {
        filename = req.files.pic.name;
        var path = process.cwd() + "/public/uploads/" + filename;
        req.files.pic.mv(path);}
        req.body.pic=filename;
        const doc=new Profilemodel(req.body);
    doc.save().then((retDoc)=>
    {
        resp.set("json");
        resp.json({status:true,res:retDoc});//retdoc is an object
    })
}
// function doremove(req,resp)
// {
//     Profilemodel.deleteOne({item:req.body.item})
//     .then(function(result)
//     {
//         if(result.deletedCount==1)
//             resp.json({status:true,msg:"deleted"});
//         else
//             resp.json({status:true,msg:"invalid item"})
//     }).catch(function(err)
//     {
//         resp.json({status:false,err:err.message})
//     });
// }


function doupdate(req,resp)
{
    console.log(req.body);
    var filename;
    if(req.files!=null)
    {
        filename=req.files.pic.name;
        var picpath=path.join(__dirname,"..","uploads",filename);
        req.files.pic.mv(picpath);
    }
    else{
        filename=req.body.hdn;
    }
    req.body.picname=filename;
    const {name,email,country,gender,city,address,picname,zipcode}=req.body;
    Profilemodel.findOneAndUpdate({email:email},{name:name,email:email,country:country,gender:gender,zipcode:zipcode,city:city,address:address,picname:picname},{new:true})
    .then(function(result)
    {
        resp.json({status:true,res:result});
    }).catch((err)=>
    {
        resp.json({status:false,err:err.message});
    })
}   
function dofetch(req,resp)
{
    console.log(req.query.email);
    Profilemodel.findOne({email:req.query.email})
    .then(function(result)
    {
        if(result!=null){
        resp.json({status:true,res:result});
        req.body.hdn=result.pic;}
        else
        resp.json({status:true,msg:"item not there"});
    }).catch(function(err)
    {
        console.log(err);
    })
}
module.exports={dosaveprofile,doupdate,dofetch};