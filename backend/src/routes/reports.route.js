const express = require('express');
const { getReports } = require('../controllers/reports.controller');

const router = express.Router();

router.get('/', getReports);

module.exports = router;
