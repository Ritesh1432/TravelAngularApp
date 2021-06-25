const express = require('express');
const mongoose = require('mongoose');
const router = express.Router();



const ctrlUser = require('../controllers/user_controller');
const ctrlFlightBook = require('../controllers/bookflight_controller');
const ctrlHotelBook = require('../controllers/bookhotel_controller');

router.post('/register', ctrlUser.userRegister);
router.post('/login', ctrlUser.userLogin);
router.post('/flight-ticket', ctrlFlightBook.bookFlight);
router.post('/hotel-ticket', ctrlHotelBook.bookHotel);

module.exports = router;