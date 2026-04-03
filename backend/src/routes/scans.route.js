const express = require('express');
const multer = require('multer');
const { getScans, analyzeScan } = require('../controllers/scans.controller');

const router = express.Router();
const upload = multer({ storage: multer.memoryStorage() });

router.get('/', getScans);
router.post('/analyze', upload.single('image'), analyzeScan);

module.exports = router;
