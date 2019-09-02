const fs = require('fs');
const mongoose = require('mongoose');
const dotenv = require('./node_modules/dotenv');
const Reservation = require('./../../model/reservationModel');


dotenv.config({ path: './config.env' });

const DB = process.env.DATABASE.replace(
  '<PASSWORD>',
  process.env.DATABASE_PASSWORD
);

mongoose
  .connect(DB, {
    useNewUrlParser: true,
    useCreateIndex: true,
    useFindAndModify: false
  })
  .then(() => console.log('DB connection successful!'));

  // READ JSON FILE
const reservation = JSON.parse(fs.readFileSync(`${__dirname}/reservation.json`, 'utf-8'));

// IMPORT DATA INTO DB
const importData = async () => {
    try {
      await Reservation.create(reservation);
      console.log('Data successfully loaded!');
    } catch (err) {
      console.log(err);
    }
    process.exit();
  };


  // DELETE ALL DATA FROM DB
const deleteData = async () => {
  try {
    await Reservation.deleteMany();
    console.log('Data successfully deleted!');
  } catch (err) {
    console.log(err);
  };

  
  }
  process.exit();
  if (process.argv[2] === '--import') {
    importData();
  } else if (process.argv[2] === '--delete') {
    deleteData();
  }