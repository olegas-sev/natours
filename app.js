const express = require('express');
const morgan = require('morgan');
const tourRouter = require('./routes/tourRoutes');
const userRouter = require('./routes/userRoutes');
// Initialize express
const app = express();

// Middlewares
app.use(express.json());
if (process.env.NODE_ENV === 'development') app.use(morgan('dev'));

// Static
// app.use(express.static(`${__dirname}/public`));

// Mounting routes
app.use('/api/v1/tours', tourRouter);
app.use('/api/v1/users', userRouter);

module.exports = app;
