const { catchAsync } = require('../middlewares/error.middleware');

const healthCheck = catchAsync(async (req, res) => {
  res.status(200).json({
    status: 'UP',
    timestamp: new Date(),
    uptime: process.uptime()
  });
});

module.exports = {
  healthCheck
};
