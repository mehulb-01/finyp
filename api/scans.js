const express = require('express');
const multer = require('multer');
const cors = require('cors');

const app = express();

// Enable CORS
app.use(cors({
  origin: process.env.CORS_ORIGIN || '*'
}));

// Parse JSON and URL-encoded bodies
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Configure multer for file uploads
const upload = multer({ storage: multer.memoryStorage() });

// Mock database
const db = {
  patients: [
    { id: 'P-1001', name: 'Eleanor Vance', age: 68, gender: 'Female', lastVisit: '2026-03-15', status: 'High Risk' },
    { id: 'P-1002', name: 'Robert Blake', age: 72, gender: 'Male', lastVisit: '2026-03-20', status: 'Moderate' }
  ],
  scans: [
    { id: 'SCAN-0982', patientId: 'P-1001', patientName: 'Eleanor Vance', scanType: 'DEXA', date: new Date().toISOString(), tScore: -2.8, status: 'High Risk', aiDiagnosis: 'Osteoporosis', confidence: 98.4 },
    { id: 'SCAN-0983', patientId: 'P-1002', patientName: 'Robert Blake', scanType: 'X-Ray', date: new Date().toISOString(), tScore: -1.5, status: 'Moderate', aiDiagnosis: 'Osteopenia', confidence: 91.2 }
  ]
};

// GET /api/scans
app.get('/', (req, res) => {
  res.status(200).json({
    status: 'success',
    data: db.scans,
  });
});

// POST /api/scans/analyze
app.post('/analyze', upload.single('image'), async (req, res) => {
  try {
    if (!req.file) {
      return res.status(400).json({
        status: 'error',
        message: 'Please upload an image file'
      });
    }

    const { patientType = 'new', patientId: existingId = '', patientName = 'Unknown Patient', patientAge = 50, patientGender = 'Not Specified' } = req.body;

    // Mock AI response for demo purposes
    const diagnoses = ['Normal', 'Osteopenia', 'Osteoporosis'];
    const diagnosis = diagnoses[Math.floor(Math.random() * diagnoses.length)];
    const confidence = 0.85 + Math.random() * 0.14; // 85-99%
    const requiresVerification = Math.random() > 0.7;
    const secondHighestConfidence = Math.random() * 0.3;
    const allProbabilities = {
      'Normal': diagnosis === 'Normal' ? confidence : Math.random() * 0.2,
      'Osteopenia': diagnosis === 'Osteopenia' ? confidence : Math.random() * 0.3,
      'Osteoporosis': diagnosis === 'Osteoporosis' ? confidence : Math.random() * 0.4
    };

    const tScore = parseFloat(
      diagnosis === 'Normal' 
        ? (Math.random() * 2.0 - 1.0).toFixed(1)
        : diagnosis === 'Osteopenia' 
        ? (Math.random() * 1.5 - 2.5).toFixed(1)
        : (Math.random() * 2.0 - 4.5).toFixed(1)
    );
    const status = diagnosis === 'Normal' ? 'Normal' : diagnosis === 'Osteopenia' ? 'Moderate' : 'High Risk';

    let finalPatientId = '';
    let finalPatientName = '';

    // Handle Patient Record Routing
    if (patientType === 'existing') {
      const existingPatient = db.patients.find(p => p.id === existingId);
      if (!existingPatient) {
        return res.status(400).json({
          status: 'error',
          message: `Patient ID ${existingId} not found in database. Please check the ID or create a new patient.`
        });
      }
      finalPatientId = existingPatient.id;
      finalPatientName = existingPatient.name;
      existingPatient.lastVisit = new Date().toISOString().split('T')[0];
      if (status === 'High Risk' || (status === 'Moderate' && existingPatient.status === 'Normal')) {
        existingPatient.status = status;
      }
    } else {
      // Auto-create New Patient
      finalPatientId = `P-${Math.floor(Math.random() * 9000) + 1000}`;
      finalPatientName = patientName;
      const newPatient = {
        id: finalPatientId,
        name: finalPatientName,
        age: parseInt(patientAge),
        gender: patientGender,
        lastVisit: new Date().toISOString().split('T')[0],
        status: status
      };
      db.patients.push(newPatient);
    }

    // Auto-create Scan Record
    const scanId = `SCAN-${Math.floor(Math.random() * 9000) + 1000}`;
    const newScan = {
      id: scanId,
      patientId: finalPatientId,
      patientName: finalPatientName,
      scanType: 'DEXA AP Spine',
      date: new Date().toISOString(),
      tScore: tScore,
      status: status,
      aiDiagnosis: diagnosis,
      confidence: confidence
    };
    db.scans.push(newScan);

    res.status(200).json({
      status: 'success',
      data: {
        filename: req.file.originalname,
        diagnosis: diagnosis,
        confidence: confidence,
        requiresVerification: requiresVerification,
        secondHighestConfidence: secondHighestConfidence,
        allProbabilities: allProbabilities,
        patientId: finalPatientId,
        scanId: scanId,
        message: 'Image analyzed successfully and records created.'
      }
    });

  } catch (err) {
    console.error('Error analyzing scan:', err.message);
    res.status(500).json({
      status: 'error',
      message: 'Failed to analyze scan'
    });
  }
});

// Export for Vercel
module.exports = (req, res) => {
  app(req, res);
};
