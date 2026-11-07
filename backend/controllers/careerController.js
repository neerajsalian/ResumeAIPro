const Resume = require('../models/Resume');
const asyncHandler = require('../utils/asyncHandler');
const ApiError = require('../utils/apiError');
const aiService = require('../services/aiService');

// @route GET /api/career/guidance/:resumeId?targetJobRole=...
const getCareerGuidance = asyncHandler(async (req, res) => {
  const resume = await Resume.findOne({ _id: req.params.resumeId, user: req.user._id });
  if (!resume) throw new ApiError(404, 'Resume not found');
  if (!resume.extractedText) throw new ApiError(422, 'Resume text not available; re-upload the PDF');

  const targetJobRole = req.query.targetJobRole || req.user.targetJobRole || '';
  const guidance = await aiService.careerGuidance({ resumeText: resume.extractedText, targetJobRole });

  res.json({ success: true, data: { guidance } });
});

module.exports = { getCareerGuidance };
