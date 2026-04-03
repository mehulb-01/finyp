const { catchAsync } = require('../middlewares/error.middleware');
const db = require('../services/db');

const getOverview = catchAsync(async (req, res) => {
  const highRiskCount = db.scans.filter(s => s.aiDiagnosis === 'Osteoporosis').length;
  const avgConfidence = db.scans.length > 0 ? (db.scans.reduce((a, b) => a + b.confidence, 0) / db.scans.length).toFixed(1) : 0;
  
  res.status(200).json({
    status: 'success',
    data: {
      totalPatients: db.patients.length,
      recentScans: db.scans.length,
      criticalAlerts: highRiskCount,
      averageConfidence: avgConfidence,
      recentHistory: [...db.scans].reverse().slice(0, 5) // Send latest 5 scans
    }
  });
});

module.exports = {
  getOverview
};
