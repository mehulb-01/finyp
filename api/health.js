const express = require('express');
const cors = require('cors');

const app = express();

// Enable CORS
app.use(cors({
  origin: process.env.CORS_ORIGIN || '*'
}));

// Parse JSON and URL-encoded bodies
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// GET /api/health
app.get('/', (req, res) => {
  res.json({ 
    status: 'ok', 
    message: 'OsteoGuard-AI API is running',
    timestamp: new Date().toISOString()
  });
});

module.exports = app;
