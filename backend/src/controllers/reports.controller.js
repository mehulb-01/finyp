const { catchAsync } = require('../middlewares/error.middleware');

const MOCK_REPORTS = [
  { id: 'rep-001', title: 'Monthly Clinical Overview - March', date: '2026-04-01', type: 'PDF', size: '2.4MB' },
  { id: 'rep-002', title: 'High Risk Patients Summary', date: '2026-03-28', type: 'CSV', size: '128KB' },
  { id: 'rep-003', title: 'Quarterly Equipment Calibration Log', date: '2026-03-10', type: 'PDF', size: '1.1MB' },
];

const getReports = catchAsync(async (req, res) => {
  res.status(200).json({
    status: 'success',
    data: MOCK_REPORTS,
  });
});

module.exports = {
  getReports
};
