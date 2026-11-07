const express = require('express');
const router = express.Router();
const { protect } = require('../middleware/auth');
const { getCareerGuidance } = require('../controllers/careerController');

router.use(protect);

router.get('/guidance/:resumeId', getCareerGuidance);

module.exports = router;
