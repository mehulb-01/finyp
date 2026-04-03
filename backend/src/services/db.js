const db = {
  patients: [],
  scans: []
};

// Seed with some initial data for visual presentation
db.patients.push({ id: 'P-1001', name: 'Eleanor Vance', age: 68, gender: 'Female', lastVisit: '2026-03-15', status: 'High Risk' });
db.patients.push({ id: 'P-1002', name: 'Robert Blake', age: 72, gender: 'Male', lastVisit: '2026-03-20', status: 'Moderate' });

db.scans.push({ id: 'SCAN-0982', patientId: 'P-1001', patientName: 'Eleanor Vance', scanType: 'DEXA', date: new Date().toISOString(), tScore: -2.8, status: 'High Risk', aiDiagnosis: 'Osteoporosis', confidence: 98.4 });
db.scans.push({ id: 'SCAN-0983', patientId: 'P-1002', patientName: 'Robert Blake', scanType: 'X-Ray', date: new Date().toISOString(), tScore: -1.5, status: 'Moderate', aiDiagnosis: 'Osteopenia', confidence: 91.2 });

module.exports = db;
