const mongoose=require("mongoose");
const user=require("../Model/user");
const surveySchema=mongoose.Schema({
    heading:{type:String},
    traits:[{
        name:{type:String},
        rating:{type:Number,default:0}
    }],
    users:{type:Number,default:0}
})
module.exports=mongoose.model("survey",surveySchema);