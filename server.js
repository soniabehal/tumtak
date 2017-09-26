const express=require("express");
const mongoose=require("mongoose");
const bodyParser=require("body-parser");
const app=express();
const userRoute=require("./Route/user");

//Connecting to database
mongoose.Promise = global.Promise;
mongoose.connect("mongodb://tumtakteam:tumtak123@ds149874.mlab.com:49874/tumtak", { 'useMongoClient': true })
    .then(() => console.log("Connected to database..."))
    
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use("/",userRoute);
app.listen(3000,function(err){
    if(err){
        console.log("Error occured ");
    }
    else{
        console.log("Tum tak running ");
    }
});