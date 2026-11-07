const express = require('express');
const router = express.Router();
const { protect } = require('../middleware/auth');
const { runAtsChecks } = require('../controllers/atsController');

router.use(protect);

router.get('/:resumeId/checks', runAtsChecks);

module.exports = router;
