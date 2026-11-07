const mongoose = require('mongoose');

const interviewAnswerSchema = new mongoose.Schema(
  {
    interview: { type: mongoose.Schema.Types.ObjectId, ref: 'Interview', required: true, index: true },
    question: { type: mongoose.Schema.Types.ObjectId, ref: 'InterviewQuestion', required: true },
    answerText: { type: String, default: '' },
    audioTranscript: { type: String, default: '' }, // filled when mode === 'voice' via speech-to-text
    recordingUrl: { type: String, default: '' }, // pointer to stored audio, if recording enabled
    responseTimeSeconds: { type: Number },
    evaluation: {
      score: { type: Number, min: 0, max: 100 },
      confidenceScore: { type: Number, min: 0, max: 100 },
      communicationScore: { type: Number, min: 0, max: 100 },
      technicalAccuracyScore: { type: Number, min: 0, max: 100 },
      feedback: { type: String, default: '' },
      idealAnswerPointers: [String],
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model('InterviewAnswer', interviewAnswerSchema);
