const Resume = require('../models/Resume');
const Interview = require('../models/Interview');
const InterviewQuestion = require('../models/InterviewQuestion');
const InterviewAnswer = require('../models/InterviewAnswer');
const asyncHandler = require('../utils/asyncHandler');
const ApiError = require('../utils/apiError');
const aiService = require('../services/aiService');

const VALID_TYPES = ['HR', 'Technical', 'Project-Based', 'Behavioral'];

// @route POST /api/interview
// Body: { resumeId, interviewType, jobRole, mode: 'text'|'voice', questionCount }
// Creates an interview and generates questions from the resume via the LLM.
const createInterview = asyncHandler(async (req, res) => {
  const { resumeId, interviewType, jobRole, mode, questionCount } = req.body;

  if (!VALID_TYPES.includes(interviewType)) {
    throw new ApiError(400, `interviewType must be one of: ${VALID_TYPES.join(', ')}`);
  }

  const resume = await Resume.findOne({ _id: resumeId, user: req.user._id });
  if (!resume) throw new ApiError(404, 'Resume not found');
  if (!resume.extractedText) throw new ApiError(422, 'Resume text not available; re-upload the PDF');

  const interview = await Interview.create({
    user: req.user._id,
    resume: resume._id,
    interviewType,
    jobRole: jobRole || req.user.targetJobRole || '',
    mode: mode === 'voice' ? 'voice' : 'text',
    status: 'in-progress',
    startedAt: new Date(),
  });

  const { questions } = await aiService.generateInterviewQuestions({
    resumeText: resume.extractedText,
    interviewType,
    jobRole: interview.jobRole,
    count: questionCount || 8,
  });

  const created = await InterviewQuestion.insertMany(
    questions.map((q, idx) => ({
      interview: interview._id,
      order: idx + 1,
      questionText: q.questionText,
      category: q.category || 'general',
      basedOn: q.basedOn || '',
      difficulty: q.difficulty || 'medium',
    }))
  );

  interview.totalQuestions = created.length;
  await interview.save();

  res.status(201).json({ success: true, message: 'Interview created', data: { interview, questions: created } });
});

// @route GET /api/interview
const listInterviews = asyncHandler(async (req, res) => {
  const interviews = await Interview.find({ user: req.user._id }).sort({ createdAt: -1 });
  res.json({ success: true, data: { interviews } });
});

// @route GET /api/interview/:id
const getInterview = asyncHandler(async (req, res) => {
  const interview = await Interview.findOne({ _id: req.params.id, user: req.user._id });
  if (!interview) throw new ApiError(404, 'Interview not found');

  const questions = await InterviewQuestion.find({ interview: interview._id }).sort({ order: 1 });
  const answers = await InterviewAnswer.find({ interview: interview._id });

  res.json({ success: true, data: { interview, questions, answers } });
});

// @route POST /api/interview/:id/answer
// Body: { questionId, answerText, responseTimeSeconds, recordingUrl }
// answerText for voice mode is the client-side speech-to-text transcript.
const submitAnswer = asyncHandler(async (req, res) => {
  const { questionId, answerText, responseTimeSeconds, recordingUrl } = req.body;

  const interview = await Interview.findOne({ _id: req.params.id, user: req.user._id });
  if (!interview) throw new ApiError(404, 'Interview not found');
  if (interview.status === 'completed') throw new ApiError(400, 'This interview has already been completed');

  const question = await InterviewQuestion.findOne({ _id: questionId, interview: interview._id });
  if (!question) throw new ApiError(404, 'Question not found for this interview');

  const evalResult = await aiService.evaluateAnswer({
    questionText: question.questionText,
    answerText,
    category: question.category,
    interviewType: interview.interviewType,
  });

  const answer = await InterviewAnswer.create({
    interview: interview._id,
    question: question._id,
    answerText: answerText || '',
    audioTranscript: interview.mode === 'voice' ? answerText || '' : '',
    recordingUrl: recordingUrl || '',
    responseTimeSeconds,
    evaluation: evalResult,
  });

  interview.answeredQuestions = await InterviewAnswer.countDocuments({ interview: interview._id });
  await interview.save();

  res.status(201).json({ success: true, message: 'Answer submitted and evaluated', data: { answer } });
});

// @route POST /api/interview/:id/complete
// Aggregates all Q&A + evaluations into final interview-level scores.
const completeInterview = asyncHandler(async (req, res) => {
  const interview = await Interview.findOne({ _id: req.params.id, user: req.user._id });
  if (!interview) throw new ApiError(404, 'Interview not found');

  const questions = await InterviewQuestion.find({ interview: interview._id }).sort({ order: 1 });
  const answers = await InterviewAnswer.find({ interview: interview._id });

  const qaPairs = questions.map((q) => {
    const a = answers.find((an) => String(an.question) === String(q._id));
    return {
      questionText: q.questionText,
      category: q.category,
      answerText: a?.answerText || '',
      evaluation: a?.evaluation || null,
    };
  });

  const summary = await aiService.summarizeInterview({
    interviewType: interview.interviewType,
    jobRole: interview.jobRole,
    qaPairs,
  });

  interview.status = 'completed';
  interview.completedAt = new Date();
  interview.durationSeconds = interview.startedAt
    ? Math.round((interview.completedAt - interview.startedAt) / 1000)
    : undefined;
  interview.overallScore = summary.overallScore;
  interview.confidenceScore = summary.confidenceScore;
  interview.communicationScore = summary.communicationScore;
  interview.technicalAccuracyScore = summary.technicalAccuracyScore;
  interview.strengths = summary.strengths;
  interview.weaknesses = summary.weaknesses;
  interview.recommendedLearningAreas = summary.recommendedLearningAreas;
  await interview.save();

  res.json({ success: true, message: 'Interview completed', data: { interview, qaPairs } });
});

// @route POST /api/interview/:id/abandon
const abandonInterview = asyncHandler(async (req, res) => {
  const interview = await Interview.findOne({ _id: req.params.id, user: req.user._id });
  if (!interview) throw new ApiError(404, 'Interview not found');
  interview.status = 'abandoned';
  await interview.save();
  res.json({ success: true, message: 'Interview marked as abandoned' });
});

module.exports = {
  createInterview,
  listInterviews,
  getInterview,
  submitAnswer,
  completeInterview,
  abandonInterview,
};
