const Rooms = require('../model/roomsModel');
const catchAsync = require('../utils/catchAsync');
const AppError = require('../utils/appError');
const fs = require('fs');

exports.getAllRooms = catchAsync(async (req, res, next) => {
  const allRooms = await Rooms.find();

  res.status(201).json({
    status: 'success',
    data: {
      allRooms
    }
  });
});

exports.getRoom = catchAsync(async (req, res, next) => {
  const room = await Rooms.findById(req.params.id);
  const id = req.params.id;

  fs.writeFile(`data/reservation/reservation${id}.json`, JSON.stringify(room), err => {
    if (err) throw err;
    console.log('The file has been saved!');
  });
  if (!room) {
    return next(new AppError('No room found with that ID', 404));
  }

  res.status(200).json({
    status: 'success',
    data: {
      room
    }
  });
});

exports.deleteRoom = catchAsync(async (req, res, next) => {
  const deleteRoom = await Rooms.findById(req.params.id);
  const id = req.params.id;
  const path = `data/reservation/reservation${id}.json`

fs.unlink(path, (err) => {
  if (err) {
    console.error(err)
    return
  }
})
  res.status(201).json({
    status: 'success',
    data: {
      deleteRoom
    }
  });
});
/*const rooms = JSON.parse(
  fs.readFileSync(`${__dirname}/../data/rooms-data.json`)
);

exports.getAllRooms = (req, res) => {
  console.log(req.requestTime);

  res.status(200).json({
    status: 'success',
    requestedAt: req.requestTime,
    data: {
      rooms
    }
  });
};

exports.getRoom = (req, res) => {
  console.log(req.params);
  const id = req.params.id * 1;

  const room = rooms.find(el => el.id === id);

  res.status(200).json({
    status: 'success',
    data: {
      room
    }
  });
};
*/
