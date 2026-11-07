const express = require('express');
const router = express.Router();
const { protect } = require('../middleware/auth');
const {
  generateResumeReport,
  generateInterviewReport,
  listReports,
  downloadReport,
  emailReport,
} = require('../controllers/reportController');

router.use(protect);

router.post('/resume-analysis/:analysisId', generateResumeReport);
router.post('/interview/:interviewId', generateInterviewReport);
router.get('/', listReports);
router.get('/:id/download', downloadReport);
router.post('/:id/email', emailReport);

module.exports = router;
