const mongoose=require("mongoose");
function getproductmodel()
{
let product=new mongoose.Schema(
    {
        item:{type:String,unique:true,index:true},
        category:{type:String},
        price:Number,
        dop:{type:Date},
        pic:{type:String}
    },
    {
        versionKey:false,// to avoid __v field in table come by default
    })
    const Productmodel=mongoose.model("productcollections",product);
    return Productmodel;
}
module.exports={getproductmodel};