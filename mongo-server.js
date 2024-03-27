const express=require("express");
var fileuploader = require("express-fileupload");
const mongoose=require("mongoose");
const cors=require("cors");
const routerproduct=require("./router/routeproduct");
const routerproject=require("./router/routerproject");
const configObj=require("./config/nikhilconfig");
const dotenv=require("dotenv");
const server=configObj.server;
var bodyparser=require("body-parser");
var app=express();
app.use(cors());
app.use(fileuploader());
app.use(bodyparser.json());//for parsing POST data coming from Client
app.listen(2007,()=>
{
    console.log("server started at 2007");
})
app.use(express.urlencoded(true));
app.use("/uploads", express.static("uploads"));

mongoose.connect(server).then(()=>
{
    console.log("badhaiii");
}).catch(function(err)
{
    console.log(err);
})
dotenv.config();
app.use("/products",routerproduct);
app.use("/profile",routerproject);
// let product=new mongoose.Schema(
// {
//     item:{type:String,unique:true,index:true},
//     catgeory:String,
//     price:Number,
//     dop:{type:Date}
// },
// {
//     versionKey:false,// to avoid __v field in table come by default
// })
// const Productmodel=mongoose.model("productcollections",product);
// app.post("/add-product",(req,resp)=>
// {
//     console.log(req.body);
//     const doc=new Productmodel(req.body);
//     doc.save().then((retDoc)=>
//     {
//         resp.send(retDoc);
//     })
// })
// app.post("/delete-product",(req,resp)=>
// {
//     console.log(req.body);
//     Productmodel.deleteOne({item:req.body.item})
//     .then(function(result){
//         resp.send(result);
//     })
//     .catch(function(err)
//     {
//         resp.send({err:"error"});
//     });
// });
// app.post("/all-item",(req,resp)=>
// {
//     Productmodel.find()
//     .then(function(result)
//     {
//         resp.send(result);
//     })
//     .catch(function(err)
//     {
//         resp.send({err:"error"});
//     });
// });
app.post("/one-item",(req,resp)=>
{
    Productmodel.find({item:req.body.item})
    .then(function(result)
    {
        resp.send(result);
    })
    .catch(function(err)
    {
        resp.send(err);
    });
});