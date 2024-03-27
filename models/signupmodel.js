const mongoose = require("mongoose");
let profile=new mongoose.Schema(
    {
        email:{type:String,unique:true,required:true},
        password:{type:String},
        type:{type:String}
    },
    {
        versionKey:false,// to avoid __v field in table come by default
    })
module.exports=mongoose.model("Signupcollections",profile);