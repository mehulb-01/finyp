const express = require('express');
const helmet = require('helmet');
const cors = require('cors');
const compression = require('compression');
const rateLimit = require('express-rate-limit');
const morgan = require('morgan');
const routes = require('./routes');
const { errorHandler } = require('./middlewares/error.middleware');

const app = express();

if (process.env.NODE_ENV !== 'test') {
  app.use(morgan.successHandler || morgan('dev'));
}

// set security HTTP headers
app.use(helmet());

// parse json request body
app.use(express.json());

// parse urlencoded request body
app.use(express.urlencoded({ extended: true }));

// gzip compression
app.use(compression());

// enable cors
app.use(cors({
  origin: process.env.CORS_ORIGIN || '*'
}));

// limit repeated failed requests (Significantly increased for local dashboard polling)
const limiter = rateLimit({
  windowMs: 15 * 60 * 1000, // 15 minutes
  max: 10000, // Changed from 100 to 10000 to prevent Dashboard live-polling from crashing it
  message: { status: 'error', message: 'Too many requests, please try again later.' }
});
app.use('/api', limiter);

// v1 api routes
app.use('/api/v1', routes);

// send back a 404 error for any unknown api request
app.use((req, res, next) => {
  const err = new Error('Not found');
  err.statusCode = 404;
  next(err);
});

// handle error
app.use(errorHandler);

module.exports = app;
