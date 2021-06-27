
const mongoose = require("mongoose");
require('./user_model');
require('./flight_model');

const conn_str = 'mongodb+srv://RItesh:rQRewIhciZnpFRjX@cluster0.igu49.mongodb.net/TravelSystem?retryWrites=true&w=majority';
mongoose.connect(conn_str, { useUnifiedTopology: true, useNewUrlParser: true, useUnifiedTopology: true })
	.then( () => console.log("Connected Successfully..."))
    .catch( (error) => console.log(error));
    
