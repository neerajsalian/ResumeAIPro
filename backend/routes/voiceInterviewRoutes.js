const express = require('express');
const router = express.Router();
const { protect } = require('../middleware/auth');
const interviewController = require('../controllers/interviewController');

/**
 * Voice interviews reuse the same Interview/InterviewQuestion/InterviewAnswer models
 * and evaluation logic as text interviews (mode: 'voice' vs 'text').
 *
 * The browser handles Text-to-Speech (reading questionText aloud) and
 * Speech-to-Text (transcribing the candidate's spoken answer) via the
 * Web Speech API on the frontend — see frontend voice-interview component.
 * The transcript is then POSTed here exactly like a text answer.
 */
router.use(protect);

// Force mode='voice' regardless of what the client sends on this endpoint
router.post('/', (req, res, next) => {
  req.body.mode = 'voice';
  next();
}, interviewController.createInterview);

router.get('/', interviewController.listInterviews);
router.get('/:id', interviewController.getInterview);
router.post('/:id/answer', interviewController.submitAnswer);
router.post('/:id/complete', interviewController.completeInterview);
router.post('/:id/abandon', interviewController.abandonInterview);

module.exports = router;
