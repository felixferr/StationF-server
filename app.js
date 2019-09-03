const express = require('express');
const roomsRouter = require('./routes/roomsRoute');
const cors = require('cors');

const app = express();

app.use(express.json());
app.use(cors());
// ROUTES

app.use('/api/v1/rooms', roomsRouter);

module.exports = app;