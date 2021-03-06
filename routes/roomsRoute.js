const express = require('express');
const roomsController = require('../controller/roomsController');

const router = express.Router();

router
.route('/')
.get(roomsController.getAllRooms);

router
.route('/:id')
.get(roomsController.getRoom)
.patch(roomsController.updateRoom)
.delete(roomsController.deleteRoom);


module.exports = router;