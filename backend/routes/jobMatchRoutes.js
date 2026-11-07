const express = require('express');
const router = express.Router();
const { protect } = require('../middleware/auth');
const { matchJobDescription, listJobMatches, getJobMatch } = require('../controllers/jobMatchController');

router.use(protect);

router.post('/:resumeId', matchJobDescription);
router.get('/', listJobMatches);
router.get('/:id', getJobMatch);

module.exports = router;
