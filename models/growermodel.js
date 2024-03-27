const mongoose = require("mongoose");
let growerprofile=new mongoose.Schema({
    name:{type:String,index:true},
    email:{type:String},
    address:{type:String},
    city:{type:String},
    categories:{type:String},
    mobile:Number,
    aadhar:Number,
    picname1:{type:String,required:true}
},
{
versionKey:false,
})
module.exports = mongoose.model("Growercollections",growerprofile);