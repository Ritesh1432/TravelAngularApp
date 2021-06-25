const mongoose = require('mongoose');

const flightDetails = new mongoose.Schema({
    fname:{
        type:String,
        required:'Please enter your first name'
    },
    lname:{
        type:String,
        required:'Please enter your last name'
    },
    contactno:{
        type:String,
        required:'Enter your contact number'
    },
    emailid:{
        type:String,
        required:'Enter your emailid'
    },
    sourcecity:{
        type:String,
        required:'Enter source city '
    },
    destcity:{
        type:String,
        required:'Enter destination city'
    },
    deptdate:{
        type:String,
        required:'Enter departure date'
    },
    noofadults:{
        type:Number
    },
    noofchildrens:{
        type:Number
    },
    travelclass:{
        type:String,
        required:'Enter travel class'
    },
    typeof:{
        type:String,
        default:'Flight'
    }

});

module.exports = new mongoose.model("FlightDetails", flightDetails)