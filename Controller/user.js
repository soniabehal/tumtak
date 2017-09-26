const mongoose = require("mongoose");
const user = require("../Model/user");
const survey = require("../Model/survey");
exports.createNewUser = function (req, res) {
    var newUser = new user(req.body);
    newUser.save()
        .then((data) => {
            res.json(data);
        })
        .catch((err) => {
            res.json(err);
        })
}
exports.createQuery = function (req, res) {
    var newQuery = new survey(req.body);
    newQuery.save()
        .then((data) => {
            user.findOneAndUpdate({ _id: req.params.userID },{$push:{surveys:data._id}})
                .exec(function (err, data) {
                    if (err) {
                        res.json(err);
                    }
                    else {
                        res.json(data);
                    }
                })
        })
        .catch((err) => {
            res.json(err);
        })




}
    exports.getUser=function(req,res){
        user.find({_id:req.params.userID})
         .populate("surveys")
        .exec(function(err,data){
            if(err){
                res.json(err);
            }
            else{
                res.json(data);
            }
        })
    }
    exports.reviews=function(req,res){
        survey.find({_id:req.params.surveyID})
        .exec(function(err,data){
            if(err){
                res.json(err);
            }
            else{
                res.json(data);
            }
        })
    }