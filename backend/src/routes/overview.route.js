const express = require('express');
const { getOverview } = require('../controllers/overview.controller');

const router = express.Router();

router.get('/', getOverview);

module.exports = router;
