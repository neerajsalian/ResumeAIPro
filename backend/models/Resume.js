const mongoose = require('mongoose');

// Stores uploaded resume metadata + extracted text. Supports version history
// via the `version` field and `previousVersion` self-reference.
const resumeSchema = new mongoose.Schema(
  {
    user: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true, index: true },
    originalFileName: { type: String, required: true },
    storedFileName: { type: String, required: true },
    filePath: { type: String, required: true },
    fileSizeBytes: { type: Number },
    mimeType: { type: String, default: 'application/pdf' },
    extractedText: { type: String, default: '' },
    version: { type: Number, default: 1 },
    previousVersion: { type: mongoose.Schema.Types.ObjectId, ref: 'Resume', default: null },
    isActive: { type: Boolean, default: true }, // latest active resume for the user
    status: {
      type: String,
      enum: ['uploaded', 'parsing', 'parsed', 'analyzed', 'failed'],
      default: 'uploaded',
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model('Resume', resumeSchema);
