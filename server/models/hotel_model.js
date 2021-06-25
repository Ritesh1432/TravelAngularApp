const mongoose = require('mongoose');

const hotelDetails = new mongoose.Schema({
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
    checkindate:{
        type:String,
        required:'Enter Check In Date '
    },
    checkintime:{
        type:String,
        required:'Enter Check In Time'
    },
    checkoutdate:{
        type:String,
        required:'Enter Check Out Date'
    },
    checkouttime:{
        type:String,
        required:'Enter Check Out Time'
    },
    roompref:{
        type:String,
        required:'Enter your room preference'
    },
    noofadults:{
        type:Number
    },
    noofchildrens:{
        type:Number
    },
    typeof:{
        type:String,
        default:'Hotel'
    }
});

module.exports = new mongoose.model("HotelDetails", hotelDetails)