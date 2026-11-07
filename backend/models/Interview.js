const mongoose = require('mongoose');

const interviewSchema = new mongoose.Schema(
  {
    user: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true, index: true },
    resume: { type: mongoose.Schema.Types.ObjectId, ref: 'Resume' },
    interviewType: {
      type: String,
      enum: ['HR', 'Technical', 'Project-Based', 'Behavioral'],
      required: true,
    },
    jobRole: { type: String, default: '' },
    mode: { type: String, enum: ['text', 'voice'], default: 'text' },
    status: {
      type: String,
      enum: ['created', 'in-progress', 'completed', 'abandoned'],
      default: 'created',
    },
    totalQuestions: { type: Number, default: 0 },
    answeredQuestions: { type: Number, default: 0 },
    overallScore: { type: Number, min: 0, max: 100 },
    confidenceScore: { type: Number, min: 0, max: 100 },
    communicationScore: { type: Number, min: 0, max: 100 },
    technicalAccuracyScore: { type: Number, min: 0, max: 100 },
    strengths: [String],
    weaknesses: [String],
    recommendedLearningAreas: [String],
    startedAt: { type: Date },
    completedAt: { type: Date },
    durationSeconds: { type: Number },
  },
  { timestamps: true }
);

module.exports = mongoose.model('Interview', interviewSchema);
