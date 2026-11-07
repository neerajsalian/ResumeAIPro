const Resume = require('../models/Resume');
const ResumeAnalysis = require('../models/ResumeAnalysis');
const asyncHandler = require('../utils/asyncHandler');
const ApiError = require('../utils/apiError');
const aiService = require('../services/aiService');

// @route POST /api/analysis/:resumeId
// Runs (or re-runs) full AI analysis on a resume and stores the result.
const analyzeResume = asyncHandler(async (req, res) => {
  const resume = await Resume.findOne({ _id: req.params.resumeId, user: req.user._id });
  if (!resume) throw new ApiError(404, 'Resume not found');
  if (!resume.extractedText) throw new ApiError(422, 'Resume text was not extracted successfully; re-upload the PDF');

  const targetJobRole = req.body.targetJobRole || req.user.targetJobRole || '';
  const result = await aiService.analyzeResume(resume.extractedText, targetJobRole);

  const analysis = await ResumeAnalysis.create({
    resume: resume._id,
    user: req.user._id,
    atsScore: result.atsScore,
    resumeStrengthScore: result.resumeStrengthScore,
    skills: result.skills,
    missingSkills: result.missingSkills,
    missingKeywords: result.missingKeywords,
    grammarSuggestions: result.grammarSuggestions,
    formattingSuggestions: result.formattingSuggestions,
    improvementRecommendations: result.improvementRecommendations,
    strengths: result.strengths,
    weaknesses: result.weaknesses,
    summary: result.summary,
    rawModelOutput: result,
    aiProvider: process.env.AI_PROVIDER || 'openai',
  });

  resume.status = 'analyzed';
  await resume.save();

  res.status(201).json({ success: true, message: 'Analysis complete', data: { analysis } });
});

// @route GET /api/analysis/:resumeId
const getLatestAnalysis = asyncHandler(async (req, res) => {
  const analysis = await ResumeAnalysis.findOne({ resume: req.params.resumeId, user: req.user._id }).sort({ createdAt: -1 });
  if (!analysis) throw new ApiError(404, 'No analysis found for this resume yet');
  res.json({ success: true, data: { analysis } });
});

// @route GET /api/analysis/history/all
const getAnalysisHistory = asyncHandler(async (req, res) => {
  const analyses = await ResumeAnalysis.find({ user: req.user._id }).sort({ createdAt: -1 }).populate('resume', 'originalFileName version');
  res.json({ success: true, data: { analyses } });
});

module.exports = { analyzeResume, getLatestAnalysis, getAnalysisHistory };
