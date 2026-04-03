const { catchAsync } = require('../middlewares/error.middleware');
const db = require('../services/db');

const getPatients = catchAsync(async (req, res) => {
  res.status(200).json({
    status: 'success',
    data: db.patients,
  });
});

const getPatientById = catchAsync(async (req, res) => {
  const searchTerm = req.params.id.toLowerCase().trim();
  const patient = db.patients.find(p => 
    p.id.toLowerCase() === searchTerm || p.name.toLowerCase().includes(searchTerm)
  );
  
  if (!patient) {
    return res.status(404).json({
      status: 'error',
      message: 'Patient not found'
    });
  }
  
  // Aggregate scans for this patient
  const patientScans = db.scans.filter(s => s.patientId === patient.id);
  
  res.status(200).json({
    status: 'success',
    data: {
      ...patient,
      scans: patientScans
    },
  });
});

const updatePatient = catchAsync(async (req, res) => {
  const { name, age, gender, status } = req.body;
  const patientIndex = db.patients.findIndex(p => p.id === req.params.id);
  
  if (patientIndex === -1) {
    return res.status(404).json({ status: 'error', message: 'Patient not found' });
  }

  // Update fields
  if (name !== undefined) db.patients[patientIndex].name = name;
  if (age !== undefined) db.patients[patientIndex].age = parseInt(age);
  if (gender !== undefined) db.patients[patientIndex].gender = gender;
  if (status !== undefined) db.patients[patientIndex].status = status;

  res.status(200).json({
    status: 'success',
    data: db.patients[patientIndex]
  });
});

module.exports = {
  getPatients,
  getPatientById,
  updatePatient
};
