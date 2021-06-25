const mongoose = require('mongoose');
const FlightDetails = mongoose.model("FlightDetails");
require('../models/flight_model');

module.exports.bookFlight = (req, res, next)=>{
    var flightdetails = new FlightDetails();

    flightdetails.fname = req.body.fname;
    flightdetails.lname = req.body.lname;
    flightdetails.contactno = req.body.contactno;
    flightdetails.emailid = req.body.emailid;
    flightdetails.sourcecity = req.body.sourcecity;
    flightdetails.destcity = req.body.destcity;
    flightdetails.deptdate = req.body.deptdate;
    flightdetails.noofadults = req.body.noofadults;
    flightdetails.noofchildrens = req.body.noofchildrens;
    flightdetails.travelclass = req.body.travelclass;

    flightdetails.save((err, result)=>{
        if(!err){
            res.send(result);
        }
        else{
            return next(err);
        }
    })

}