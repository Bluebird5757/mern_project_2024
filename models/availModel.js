//importing the mongoose module
const mongoose = require("mongoose");

//creating the schema
let availprofile=new mongoose.Schema(
        {
            email:{type:String},
            categories:{type:String},
            items:{type:Array},
            city:{type:String},
            picname2:{type:String}
        },
        {
            versionKey:false,
        }
    )

    //creating the model and then exporting the model
module.exports = mongoose.model("availcollections",availprofile);
