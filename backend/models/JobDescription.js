const mongoose = require('mongoose');

const jobDescriptionSchema = new mongoose.Schema(
  {
    user: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true, index: true },
    resume: { type: mongoose.Schema.Types.ObjectId, ref: 'Resume' },
    title: { type: String, default: '' },
    company: { type: String, default: '' },
    rawText: { type: String, required: true },
    matchPercentage: { type: Number, min: 0, max: 100 },
    matchedKeywords: [String],
    missingKeywords: [String],
    suggestions: [String],
    atsOptimizationTips: [String],
  },
  { timestamps: true }
);

module.exports = mongoose.model('JobDescription', jobDescriptionSchema);
