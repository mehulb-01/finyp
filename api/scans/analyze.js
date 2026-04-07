const express = require('express');
const multer = require('multer');
const cors = require('cors');
const { analyzeScan } = require('../../backend/src/controllers/scans.controller');

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

// POST /api/v1/scans/analyze
app.post('/api/v1/scans/analyze', upload.single('image'), analyzeScan);

module.exports = app;
