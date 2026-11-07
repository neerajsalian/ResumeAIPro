const mongoose = require('mongoose');

const reportSchema = new mongoose.Schema(
  {
    user: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true, index: true },
    type: { type: String, enum: ['resume-analysis', 'interview'], required: true },
    resumeAnalysis: { type: mongoose.Schema.Types.ObjectId, ref: 'ResumeAnalysis' },
    interview: { type: mongoose.Schema.Types.ObjectId, ref: 'Interview' },
    filePath: { type: String, required: true },
    fileName: { type: String, required: true },
    emailedTo: { type: String, default: '' },
    emailedAt: { type: Date },
  },
  { timestamps: true }
);

module.exports = mongoose.model('Report', reportSchema);
