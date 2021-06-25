const mongoose = require("mongoose");

const userDetails = new mongoose.Schema({
    fname:{
        type:String,
        required:'Please enter name'
    },
    
    email:{
        type:String,
        required:'Email id cant be empty'
    },
    contactno:{
        type:Number,
        required:'Contact no cant be empty',
    },
    username:{
        type:String,
        required:'Username is required'
    },
    password:{
        type:String,
        minlength:[6,'Password length must be greater than 6']
    }

});

// Custom validation for email
userDetails.path('email').validate((val) => {
    emailRegex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return emailRegex.test(val);
}, 'Invalid e-mail.');


const Users = new mongoose.model("Users", userDetails)


