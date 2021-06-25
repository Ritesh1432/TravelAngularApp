require('./models/db');
require('./models/user_model');
const Flights = require('./models/flight_model');
const Hotels = require('./models/hotel_model');
require('./routes/routes');




const express = require('express');
const bodyParser = require('body-parser');
var unirest = require("./node_modules/unirest");
const cors = require('cors');
const destinationId = require('./HotelsDestinationId.json');
const mongoose = require('mongoose');
var unirest = require("./node_modules/unirest");
const indxRouter = require('./routes/routes');
const { request, response } = require('express');
const { all } = require('./routes/routes');

var app = express();
//  sess = "";
//middleware

// app.use(express.json());
app.use(express.json());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());
app.use('/api', indxRouter);


// error handler
app.use((err, req, res, next) => {
    if (err.name === 'ValidationError') {
        var valErrors = [];
        Object.keys(err.errors).forEach(key => valErrors.push(err.errors[key].message));
        res.status(422).send(valErrors)
    }
});


app.post('/searchFlight', (request,response)=>{
 
    console.log(request.body);
var URL = `https://skyscanner-skyscanner-flight-search-v1.p.rapidapi.com/apiservices/browseroutes/v1.0/IN/INR/en-IN/${request.body.sourceCode}-sky/${request.body.destinationCode}-sky/${request.body.date}`    
var req = unirest("GET", URL);

req.headers({
	"x-rapidapi-key": "f260198894msh15c120b0e9b7840p130d58jsn27dbf62188c3",
	"x-rapidapi-host": "skyscanner-skyscanner-flight-search-v1.p.rapidapi.com",
	"useQueryString": true
});


req.end(function (res) {
	if (res.error) throw new Error(res.error);

	console.log(res.body);
    response.send({flightData:res.body})
});
})


app.post('/searchHotel',(request, response)=>{

    var destinationName = request.body.location;
    for (let i = 0; i < destinationId.length; i++) {
        const element = destinationId[i];
        if (element.location == destinationName) {
            var id = element.destinationId;
            break
        }
    }
console.log(request.body);
console.log(id);
var req = unirest("GET", "https://hotels4.p.rapidapi.com/properties/list");

req.query({
	"destinationId": id,
	"pageNumber": "1",
	"checkindate": request.body.checkindate,
	"checkoutdate": request.body.checkoutdate,
	"pageSize": "25",
	"adults1": "1",
	"currency": "INR",
	"locale": "en_IN",
	"sortOrder": "PRICE",
});

req.headers({
	"x-rapidapi-key": "f260198894msh15c120b0e9b7840p130d58jsn27dbf62188c3",
	"x-rapidapi-host": "hotels4.p.rapidapi.com",
	"useQueryString": true
});


req.end(function (res) {
	if (res.error) throw new Error(res.error);

	console.log(res.body);
    response.send({ hotelData: res.body });
});
})


app.get('/my-account', function(req,res){
	
    var allTickets = []
	Hotels.find({} ,function(err,result){
		if(err){
			console.log(err);
		}else{
			result.forEach(item => {
				allTickets.push(item)
				console.log(item)
				console.log(allTickets)
			})
		    
		}
	});
	console.log("Hotels: ", allTickets);
	Flights.find({}, function(err, flights){
		if(err){
			console.log(err);

		}else{
			flights.forEach(item => {
				allTickets.push(item)
			})
			res.json({result: allTickets})
		}
	})
	console.log("Flights: ", allTickets);
	

	
});


//start server
app.listen(3000, ()=>
{
    console.log("Server running...");
});



