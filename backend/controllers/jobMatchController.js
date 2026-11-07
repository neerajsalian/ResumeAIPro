const Resume = require('../models/Resume');
const JobDescription = require('../models/JobDescription');
const asyncHandler = require('../utils/asyncHandler');
const ApiError = require('../utils/apiError');
const aiService = require('../services/aiService');

// @route POST /api/job-match/:resumeId
// Body: { title, company, jdText }
const matchJobDescription = asyncHandler(async (req, res) => {
  const { title, company, jdText } = req.body;
  if (!jdText || jdText.trim().length < 30) {
    throw new ApiError(400, 'Please paste a full job description (at least 30 characters)');
  }

  const resume = await Resume.findOne({ _id: req.params.resumeId, user: req.user._id });
  if (!resume) throw new ApiError(404, 'Resume not found');
  if (!resume.extractedText) throw new ApiError(422, 'Resume text not available; re-upload the PDF');

  const result = await aiService.matchJobDescription(resume.extractedText, jdText);

  const jd = await JobDescription.create({
    user: req.user._id,
    resume: resume._id,
    title: title || '',
    company: company || '',
    rawText: jdText,
    matchPercentage: result.matchPercentage,
    matchedKeywords: result.matchedKeywords,
    missingKeywords: result.missingKeywords,
    suggestions: result.suggestions,
    atsOptimizationTips: result.atsOptimizationTips,
  });

  res.status(201).json({ success: true, message: 'Job match analysis complete', data: { jobMatch: jd } });
});

// @route GET /api/job-match
const listJobMatches = asyncHandler(async (req, res) => {
  const matches = await JobDescription.find({ user: req.user._id })
    .sort({ createdAt: -1 })
    .populate('resume', 'originalFileName version');
  res.json({ success: true, data: { matches } });
});

// @route GET /api/job-match/:id
const getJobMatch = asyncHandler(async (req, res) => {
  const jd = await JobDescription.findOne({ _id: req.params.id, user: req.user._id });
  if (!jd) throw new ApiError(404, 'Job match not found');
  res.json({ success: true, data: { jobMatch: jd } });
});

module.exports = { matchJobDescription, listJobMatches, getJobMatch };
