const mongoose = require('mongoose');
const HotelDetails = mongoose.model("HotelDetails");
require('../models/hotel_model');

module.exports.bookHotel = (req, res, next)=>{
    var hoteldetails = new HotelDetails();

    hoteldetails.fname = req.body.fname;
    hoteldetails.lname = req.body.lname;
    hoteldetails.contactno = req.body.contactno;
    hoteldetails.emailid = req.body.emailid;
    hoteldetails.checkindate = req.body.checkindate;
    hoteldetails.checkintime = req.body.checkintime;
    hoteldetails.checkoutdate = req.body.checkoutdate;
    hoteldetails.checkouttime = req.body.checkouttime;
    hoteldetails.roompref = req.body.roompref;
    hoteldetails.noofadults = req.body.noofadults;
    hoteldetails.noofchildrens = req.body.noofchildrens;

    hoteldetails.save((err, result)=>{
        if(!err){
            res.send(result);
        }
        else{
            return next(err);
        }
    })

}