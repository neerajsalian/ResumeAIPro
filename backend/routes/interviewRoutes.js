const express = require('express');
const router = express.Router();
const { protect } = require('../middleware/auth');
const {
  createInterview,
  listInterviews,
  getInterview,
  submitAnswer,
  completeInterview,
  abandonInterview,
} = require('../controllers/interviewController');

router.use(protect);

router.post('/', createInterview);
router.get('/', listInterviews);
router.get('/:id', getInterview);
router.post('/:id/answer', submitAnswer);
router.post('/:id/complete', completeInterview);
router.post('/:id/abandon', abandonInterview);

module.exports = router;
