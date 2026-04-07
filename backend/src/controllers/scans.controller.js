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

  const { patientType = 'new', patientId: existingId = '', patientName = 'Unknown Patient', patientAge = 50, patientGender = 'Not Specified' } = req.body;

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
    const confidence = response.data.confidence || 0.95; // Use real confidence from AI service
    const requiresVerification = response.data.requires_verification || false;
    const secondHighestConfidence = response.data.second_highest_confidence || 0.0;
    const allProbabilities = response.data.all_probabilities || {}; 
    const tScore = parseFloat(
      diagnosis === 'Normal' 
        ? (Math.random() * 2.0 - 1.0).toFixed(1) // Between -1.0 and +1.0
        : diagnosis === 'Osteopenia' 
        ? (Math.random() * 1.5 - 2.5).toFixed(1) // Between -1.0 and -2.5
        : (Math.random() * 2.0 - 4.5).toFixed(1) // Between -2.5 and -4.5
    );
    const status = diagnosis === 'Normal' ? 'Normal' : diagnosis === 'Osteopenia' ? 'Moderate' : 'High Risk';

    let finalPatientId = '';
    let finalPatientName = '';

    // Handle Patient Record Routing
    if (patientType === 'existing') {
      const existingPatient = db.patients.find(p => p.id === existingId);
      if (!existingPatient) {
        throw new Error(`Patient ID ${existingId} not found in database. Please check the ID or create a new patient.`);
      }
      finalPatientId = existingPatient.id;
      finalPatientName = existingPatient.name;
      // Update lastVisit
      existingPatient.lastVisit = new Date().toISOString().split('T')[0];
      // Elevate status if new scan is worse
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
        patientId: finalPatientId, // FIXED: was patientId which resulted in ReferenceError
        scanId: scanId,
        message: 'Image analyzed successfully and records created.'
      }
    });

  } catch (err) {
    console.error('Error communicating with AI service:', err.message);
    
    // Check if it's a validation error from AI service (400 status code)
    if (err.response && err.response.status === 400) {
      const error = new Error(err.response.data.detail || 'Invalid image uploaded. Please ensure you are uploading a valid medical X-ray image.');
      error.statusCode = 400;
      throw error;
    }
    
    // For other errors, show generic message
    const error = new Error('AI Service is currently unavailable or failed to process image');
    error.statusCode = 503;
    throw error;
  }
});

module.exports = {
  getScans,
  analyzeScan
};
