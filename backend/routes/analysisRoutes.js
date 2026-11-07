const express = require('express');
const router = express.Router();
const { protect } = require('../middleware/auth');
const { analyzeResume, getLatestAnalysis, getAnalysisHistory } = require('../controllers/analysisController');

router.use(protect);

router.post('/:resumeId', analyzeResume);
router.get('/history/all', getAnalysisHistory);
router.get('/:resumeId', getLatestAnalysis);

module.exports = router;
