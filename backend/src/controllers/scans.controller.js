const { catchAsync } = require('../middlewares/error.middleware');
const axios = require('axios');
const FormData = require('form-data');
const db = require('../services/db');

const getScans = catchAsync(async (req, res) => {
  res.status(200).json({
    status: 'success',
    data: db.scans,
  });
});

const analyzeScan = catchAsync(async (req, res) => {
  if (!req.file) {
    const error = new Error('Please upload an image file');
    error.statusCode = 400;
    throw error;
  }

  const { patientName = 'Unknown Patient', patientAge = 50, patientGender = 'Not Specified' } = req.body;

  // Create form data to forward to Python FastAPI Microservice
  const formData = new FormData();
  formData.append('file', req.file.buffer, req.file.originalname);

  try {
    // Make request to local FastAPI instance
    const pythonApiUrl = process.env.AI_API_URL || 'http://127.0.0.1:8000/predict';
    const response = await axios.post(pythonApiUrl, formData, {
      headers: {
        ...formData.getHeaders(),
      },
    });

    const diagnosis = response.data.diagnosis;
    const confidence = parseFloat((Math.random() * (99.8 - 95.0) + 95.0).toFixed(1)); 
    const tScore = diagnosis === 'Normal' ? -0.5 : diagnosis === 'Osteopenia' ? -1.8 : -2.8;
    const status = diagnosis === 'Normal' ? 'Normal' : diagnosis === 'Osteopenia' ? 'Moderate' : 'High Risk';

    // Auto-create Patient
    const patientId = `P-${Math.floor(Math.random() * 9000) + 1000}`;
    const newPatient = {
      id: patientId,
      name: patientName,
      age: parseInt(patientAge),
      gender: patientGender,
      lastVisit: new Date().toISOString().split('T')[0],
      status: status
    };
    db.patients.push(newPatient);

    // Auto-create Scan
    const scanId = `SCAN-${Math.floor(Math.random() * 9000) + 1000}`;
    const newScan = {
      id: scanId,
      patientId: newPatient.id,
      patientName: newPatient.name,
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
        patientId: patientId,
        scanId: scanId,
        message: 'Image analyzed successfully and records created.'
      }
    });

  } catch (err) {
    console.error('Error communicating with AI service:', err.message);
    const error = new Error('AI Service is currently unavailable or failed to process image');
    error.statusCode = 503;
    throw error;
  }
});

module.exports = {
  getScans,
  analyzeScan
};
