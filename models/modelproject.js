const mongoose=require("mongoose");
function getprofilemodel()
{
let profile=new mongoose.Schema(
    {
        name:{type:String,index:true},
        email:{type:String},
        address:{type:String},
        city:{type:String},
        country:{type:String},
        gender:{type:String},
        zipcode:Number,
        picname:{type:String}
    },
    {
        versionKey:false,// to avoid __v field in table come by default
    })
    const Profilemodel=mongoose.model("profilecollections",profile);
    return Profilemodel;
}
// function getsignup()
// {
// let profile=new mongoose.Schema(
//     {
//         email:{type:String,unique:true,required:true},
//         password:{type:String},
//         type:{type:String}
//     },
//     {
//         versionKey:false,// to avoid __v field in table come by default
//     })
//     const Signupmodel=mongoose.model("Signupcollections",profile);
//     return Signupmodel;
// }
// function growermodel()
// {
//     let growerprofile=new mongoose.Schema({
//         name:{type:String,index:true},
//         email:{type:String},
//         address:{type:String},
//         city:{type:String},
//         categories:{type:String},
//         mobile:Number,
//         aadhar:Number,
//         picname1:{type:String,required:true}
// },
// {
//     versionKey:false,
// })
// const Growermodel=mongoose.model("Growercollections",growerprofile);
// return Growermodel;
// }
// function availmodel()
// {
//     let availprofile=new mongoose.Schema(
//         {
//             email:{type:String},
//             categories:{type:String},
//             items:{type:String},
//             city:{type:String},
//             picname2:{type:String}
//         },
//         {
//             versionKey:false,
//         }
//     )
//     const availmodell=mongoose.model("availcollections",availprofile);
//     return availmodell();
// }
function consumermodel()
{
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
    const Consumermodel=mongoose.model("consumercollections",consumerprofile);
    return Consumermodel;
}

// const availModel = availmodel();

module.exports={getprofilemodel,consumermodel};