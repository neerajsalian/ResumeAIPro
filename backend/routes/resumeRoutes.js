const express = require('express');
const router = express.Router();
const { protect } = require('../middleware/auth');
const upload = require('../middleware/upload');
const {
  uploadResume,
  listResumes,
  getResume,
  getResumeVersionHistory,
  deleteResume,
  downloadResume,
} = require('../controllers/resumeController');

router.use(protect);

router.post('/upload', upload.single('resume'), uploadResume);
router.get('/', listResumes);
router.get('/:id', getResume);
router.get('/:id/versions', getResumeVersionHistory);
router.get('/:id/download', downloadResume);
router.delete('/:id', deleteResume);

module.exports = router;
