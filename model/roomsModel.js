const mongoose = require('mongoose');

const roomsSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
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
    type: String
  },
  updatedAt: {
    type: String
  }
});

const Rooms = mongoose.model('Rooms', roomsSchema);

module.exports = Rooms;
