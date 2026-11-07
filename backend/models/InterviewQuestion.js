const mongoose = require('mongoose');

const interviewQuestionSchema = new mongoose.Schema(
  {
    interview: { type: mongoose.Schema.Types.ObjectId, ref: 'Interview', required: true, index: true },
    order: { type: Number, required: true },
    questionText: { type: String, required: true },
    category: {
      type: String,
      enum: ['skill', 'project', 'experience', 'certification', 'hr', 'behavioral', 'general'],
      default: 'general',
    },
    basedOn: { type: String, default: '' }, // e.g. which skill/project this was generated from
    difficulty: { type: String, enum: ['easy', 'medium', 'hard'], default: 'medium' },
  },
  { timestamps: true }
);

module.exports = mongoose.model('InterviewQuestion', interviewQuestionSchema);
