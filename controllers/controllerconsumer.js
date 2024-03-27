const {consumermodel}=require("../models/modelproject");
// const {availmodel}=require("../models/modelproject");
const path=require("path");
const Consumermodel=consumermodel();
const Availmodel=require("../models/availModel");
function dosaveconsumer(req,resp)
{
    console.log(req.files)
    var filename = "nopic.jpg";
    if (req.files != null) {
        filename = req.files.picconsumer.name;
        var path = process.cwd() + "/uploads/" + filename;
        req.files.picconsumer.mv(path);}
        req.body.picnameconsumer=filename;
        const doc=new Consumermodel(req.body);
    doc.save().then((retDoc)=>
    {
        resp.set("json");
        resp.json({status:true,res:retDoc});//retdoc is an object
    })
}
function doupdateconsumer(req,resp)
{
    console.log(req.body);
    var filename;
    if(req.files!=null)
    {
        filename=req.files.picconsumer.name;
        // console.log(__dirname);
        var picpath=path.join(__dirname,"..","uploads",filename);
        req.files.picconsumer.mv(picpath);
    }
    else{
        filename=req.body.hdn;
    }
    req.body.picnameconsumer=filename;
    const {name,email,categories,city,address,picnameconsumer,aadhar}=req.body;
    Consumermodel.findOneAndUpdate({email:email},{name:name,email:email,categories:categories,aadhar:aadhar,city:city,address:address,picnameconsumer:picnameconsumer},{new:true})
    .then(function(result)
    {
        resp.json({status:true,res:result});
    }).catch((err)=>
    {
        resp.json({status:false,err:err.message});
    })
}
function dofetchconsumer(req,resp)
{
    console.log(req.query.email);
    Consumermodel.findOne({email:req.query.email})
    .then(function(result)
    {
        if(result!=null){
            console.log(__dirname);
        resp.json({status:true,res:result});
        req.body.hdn=result.picnameconsumer;}
        else
        resp.json({status:true,msg:"item not there"});
    }).catch(function(err)
    {
        console.log(err);
    })
}
function dofindgrower(req,resp)
{
    console.log(req.query.city);
    console.log(req.query.items);
    Availmodel.find({ $and: [{ city: req.query.city }, { items: { $in: [req.query.items] } }] })
    .then((result)=>
    {
        console.log(result);
        resp.json(result[0]);
    }).catch((err)=>
    {
        console.log(err);
        resp.json(err.message);
    })
    
}
// function dofindgrower(req,resp)
// {

//     //add a new column in collection "location" -update model
   
//     console.log(req.files)
//     var filename = "nopic.jpg";
//     if (req.files != null) {
//         filename = req.files.picpath.name;
//         var path = process.cwd() + "/uploads/" + filename;
//         req.files.picpath.mv(path);}
//         req.body.picnameconsumer=filename;
// //  fetch location/city from profile table against coming "emailid" 
            // req.location=city(fetched Recently)_
    //     const doc=new Availmodel(req.body);
    // doc.save().then((retDoc)=>
    // {
    //     resp.set("json");
    //     resp.json({status:true,res:retDoc});//retdoc is an object
    // }) 
// }
// function dofetchitems(req,resp)
// {
//     console.log(req.query);
//     Availmodel.find({email:req.query.email}).then((retdoc)=>{
//         console.log(retdoc);
//         if(retdoc!=[])
//         resp.json({status:1,res:retdoc})
//     else resp.json({status:2,res:"wrong emailid"})
//     }).catch((err)=>{
//         resp.json({status:0,err:err.message})
// })
// }
module.exports={dosaveconsumer,doupdateconsumer,dofetchconsumer,dofindgrower};