const mongoose = require("mongoose");
const user = require("../Model/user");
const survey = require("../Model/survey");
const Promise = require('bluebird').Promise;
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
console.log(req.params.userID);

    //console.log(newQuery);
    newQuery.save()
        .then((data) => {
            user.find({ _id: req.params.userID })
                .exec(function (err, data) {
                    if (err) {
                        res.json(err);
                    }
                    else {
                        res.json(data);
                    }
                })
            //res.json(data);
        })
        .catch((err) => {
            res.json(err);
        })




}