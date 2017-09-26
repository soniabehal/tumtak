const mongoose=require('mongoose');
const survey=require("../Model/survey");
const userSchema=new mongoose.Schema({
    email:{
        type:String,
        unique:true
    },
    name:{
        type:String
    },
    password:{
        type:String,
        required:true
    },
    surveys:[{type:mongoose.Schema.Types.ObjectId,
    ref:"survey"}]
})
module.exports= mongoose.model('user',userSchema)