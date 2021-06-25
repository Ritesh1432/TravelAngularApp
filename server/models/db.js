
const mongoose = require("mongoose");
require('./user_model');
require('./flight_model');

const conn_str = "mongodb://localhost:27017/TravelSystem";
mongoose.connect(conn_str, { useUnifiedTopology: true, useNewUrlParser: true, useUnifiedTopology: true })
	.then( () => console.log("Connected Successfully..."))
    .catch( (error) => console.log(error));
    
