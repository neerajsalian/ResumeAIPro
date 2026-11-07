const Resume = require('../models/Resume');
const asyncHandler = require('../utils/asyncHandler');
const ApiError = require('../utils/apiError');
const { runDeterministicChecks } = require('../services/atsService');

// @route GET /api/ats/:resumeId/checks
// Rule-based, deterministic ATS parsing checks (fast, no AI call needed).
const runAtsChecks = asyncHandler(async (req, res) => {
  const resume = await Resume.findOne({ _id: req.params.resumeId, user: req.user._id });
  if (!resume) throw new ApiError(404, 'Resume not found');
  if (!resume.extractedText) throw new ApiError(422, 'Resume text not available');

  const result = runDeterministicChecks(resume.extractedText);
  res.json({ success: true, data: result });
});

module.exports = { runAtsChecks };
