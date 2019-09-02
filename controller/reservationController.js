const Reservation = require('./../model/reservationModel');
const catchAsync = require('./../utils/catchAsync');
const AppError = require('./../utils/appError');

exports.getReservation = catchAsync(async (req, res, next) => {
    const reservation = await Reservation.findById(req.params.id);
   
  
    if (!reservation) {
      return next(new AppError('No reservation found with that ID', 404));
    }
  
    res.status(200).json({
      status: 'success',
      data: {
        reservation
      }
    });
  });