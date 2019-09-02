const express = require('express');
const reservationRouter = require('./routes/reservationRoute');
const cors = require('cors');

const app = express();

app.use(express.json());
app.use(cors());
// ROUTES

app.use('/api/v1/reservation', reservationRouter);

module.exports = app;