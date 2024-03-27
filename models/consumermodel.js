let consumerprofile=new mongoose.Schema({
    name:{type:String,index:true},
    email:{type:String},
    address:{type:String},
    city:{type:String},
    mobile:Number,
    aadhar:Number,
    picnameconsumer:{type:String,required:true}
},
{
    versionKey:false,
})
module.exports = mongoose.model("consumercollections",consumerprofile);