const express = require("express");
const mongoose = require('mongoose');
const Users = mongoose.model("Users");
const session = require("express-session");
require('../models/user_model');


const app = express();



module.exports.userRegister = (req, res, next)=>{
         var user = new Users();

    user.fname = req.body.fname;
    user.email = req.body.email;
    user.contactno = req.body.contactno;
    user.username = req.body.username,
    user.password = req.body.password;

    user.save((err, result) => {
       if(!err){
           res.send(result);
       }
       else {
        if (err.code == 11000)
            res.status(422).send(['Duplicate email address found.']);
        else
            return next(err);
    }
    });

}

module.exports.userLogin = async(req, res) =>{
    const username = await Users.findOne({username: req.body.username});
    if(!username){
        return res.status(400).send(['Username is not valid']);
        
    } 

    const password = await Users.findOne({password: req.body.password});
    if(!password) return res.status(400).send(['Enter valid password']);
    res.send({message:"User Logged in", user:{username}});

}

