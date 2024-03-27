const path=require("path");
const Growermodel=require("../models/growermodel");
const Availmodel=require("../models/availModel");
function dosavegrower(req,resp)
{
    console.log(req.files)
    var filename = "nopic.jpg";
    if (req.files != null) {
        filename = req.files.pic1.name;
        var path = process.cwd() + "/uploads/" + filename;
        req.files.pic1.mv(path);}
        req.body.picname1=filename;
        const doc=new Growermodel(req.body);
    doc.save().then((retDoc)=>
    {
        resp.set("json");
        resp.json({status:true,res:retDoc});//retdoc is an object
    })
}
function doupdategrower(req,resp)
{
    console.log(req.body);
    var filename;
    if(req.files!=null)
    {
        filename=req.files.pic1.name;
        // console.log(__dirname);
        var picpath=path.join(__dirname,"..","uploads",filename);
        req.files.pic1.mv(picpath);
    }
    else{
        filename=req.body.hdn;
    }
    req.body.picname1=filename;
    const {name,email,categories,city,address,picname1,aadhar}=req.body;
    Growermodel.findOneAndUpdate({email:email},{name:name,email:email,categories:categories,aadhar:aadhar,city:city,address:address,picname1:picname1},{new:true})
    .then(function(result)
    {
        resp.json({status:true,res:result});
    }).catch((err)=>
    {
        resp.json({status:false,err:err.message});
    })
}
function dofetchgrower(req,resp)
{
    console.log(req.query.email);
    Growermodel.findOne({email:req.query.email})
    .then(function(result)
    {
        if(result!=null){
            console.log(__dirname);
        resp.json({status:true,res:result});
        req.body.hdn=result.picname1;}
        else
        resp.json({status:true,msg:"item not there"});
    }).catch(function(err)
    {
        console.log(err);
    })
}
async function doavailproduct(req,resp)
{

    //add a new column in collection "location" -update model
   
    console.log(req.files)
    var filename = "nopic.jpg";
    if (req.files != null) {
        filename = req.files.picpath.name;
        var path = process.cwd() + "/uploads/" + filename;
        req.files.picpath.mv(path);}
        req.body.picname2=filename;
        const growercity=await Growermodel.find({email:req.body.email})
        req.body.city=growercity[0].city;
 // fetch location/city from profile table against coming "emailid" 
            //req.location=city(fetched Recently)_
         const doc=new Availmodel(req.body);
     await doc.save().then((retDoc)=>
    {
        resp.set("json");
        resp.json({status:true,res:retDoc,city:growercity[0].city});//retdoc is an object
    }) 
}
function dofetchitems(req,resp)
{
    console.log(req.query);
    Availmodel.find({email:req.query.email}).then((retdoc)=>{
        console.log(retdoc);
        if(retdoc!=[])
        resp.json({status:1,res:retdoc})
    else resp.json({status:2,res:"wrong emailid"})
    }).catch((err)=>{
        resp.json({status:0,err:err.message})
})
}

module.exports={dosavegrower,doupdategrower,dofetchgrower,doavailproduct,dofetchitems};