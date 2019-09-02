const mongoose = require('mongoose');

const reservationSchema = new mongoose.Schema({
  reservation: {
    type: mongoose.Schema.ObjectId,
    ref: 'Reservation',
    required: [true]
  },
  name: {
    type: String,
    required: [true, 'A tour must have a name'],
    unique: true
  },
  description: {
    type: String
  },
  capacity: {
    type: Number
  },
  equipements: [
    {
      name: String
    },
    {
      name: String
    }
  ],
  createdAt: {
    type: Number
  },
  updatedAt: {
    type: Number
  }
});

const Reservation = mongoose.model('Reservation', reservationSchema);

module.exports = Reservation;
