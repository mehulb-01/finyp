const express = require('express');
const helmet = require('helmet');
const cors = require('cors');
const compression = require('compression');
const rateLimit = require('express-rate-limit');
const scanRoutes = require('../backend/src/routes/scan.routes');
const reportRoutes = require('../backend/src/routes/report.routes');
const uploadRoutes = require('../backend/src/routes/upload.routes');
const healthRoutes = require('../backend/src/routes/health.routes');
const { errorHandler } = require('../backend/src/middlewares/error.middleware');

const app = express();

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

// limit repeated failed requests
const limiter = rateLimit({
  windowMs: 15 * 60 * 1000, // 15 minutes
  max: 10000,
  message: { status: 'error', message: 'Too many requests, please try again later.' }
});
app.use('/api', limiter);

// API routes
app.use('/api/v1/scans', scanRoutes);
app.use('/api/v1/reports', reportRoutes);
app.use('/api/v1/upload', uploadRoutes);
app.use('/api/v1/health', healthRoutes);

// send back a 404 error for any unknown api request
app.use((req, res, next) => {
  const err = new Error('Not found');
  err.statusCode = 404;
  next(err);
});

// handle error
app.use(errorHandler);

module.exports = app;
