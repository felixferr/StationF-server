const express = require('express');
const reservationController = require('./../controller/reservationController');

const router = express.Router();

router
.route('/id')
.get(reservationController.getReservation);



module.exports = router;