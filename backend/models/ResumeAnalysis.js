const mongoose = require('mongoose');

const resumeAnalysisSchema = new mongoose.Schema(
  {
    resume: { type: mongoose.Schema.Types.ObjectId, ref: 'Resume', required: true, index: true },
    user: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true, index: true },
    atsScore: { type: Number, min: 0, max: 100 },
    resumeStrengthScore: { type: Number, min: 0, max: 100 },
    skills: {
      technicalSkills: [String],
      programmingLanguages: [String],
      frameworks: [String],
      databases: [String],
      cloudSkills: [String],
      softSkills: [String],
    },
    missingSkills: [String],
    missingKeywords: [String],
    grammarSuggestions: [String],
    formattingSuggestions: [String],
    improvementRecommendations: [String],
    strengths: [String],
    weaknesses: [String],
    summary: { type: String, default: '' },
    rawModelOutput: { type: mongoose.Schema.Types.Mixed },
    aiProvider: { type: String, default: 'openai' },
  },
  { timestamps: true }
);

module.exports = mongoose.model('ResumeAnalysis', resumeAnalysisSchema);
