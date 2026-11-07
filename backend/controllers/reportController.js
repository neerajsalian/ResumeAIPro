const path = require('path');
const fs = require('fs');
const Resume = require('../models/Resume');
const ResumeAnalysis = require('../models/ResumeAnalysis');
const Interview = require('../models/Interview');
const InterviewQuestion = require('../models/InterviewQuestion');
const InterviewAnswer = require('../models/InterviewAnswer');
const Report = require('../models/Report');
const asyncHandler = require('../utils/asyncHandler');
const ApiError = require('../utils/apiError');
const { generateResumeAnalysisPDF, generateInterviewReportPDF } = require('../services/pdfReportService');
const { sendReportEmail } = require('../services/emailService');

const reportsDir = path.join(__dirname, '..', 'uploads', 'reports');
if (!fs.existsSync(reportsDir)) fs.mkdirSync(reportsDir, { recursive: true });

// @route POST /api/reports/resume-analysis/:analysisId
const generateResumeReport = asyncHandler(async (req, res) => {
  const analysis = await ResumeAnalysis.findOne({ _id: req.params.analysisId, user: req.user._id });
  if (!analysis) throw new ApiError(404, 'Analysis not found');
  const resume = await Resume.findById(analysis.resume);

  const filePath = generateResumeAnalysisPDF({ user: req.user, resume, analysis, outputDir: reportsDir });

  const report = await Report.create({
    user: req.user._id,
    type: 'resume-analysis',
    resumeAnalysis: analysis._id,
    filePath,
    fileName: path.basename(filePath),
  });

  res.status(201).json({ success: true, message: 'Report generated', data: { report } });
});

// @route POST /api/reports/interview/:interviewId
const generateInterviewReport = asyncHandler(async (req, res) => {
  const interview = await Interview.findOne({ _id: req.params.interviewId, user: req.user._id });
  if (!interview) throw new ApiError(404, 'Interview not found');

  const questions = await InterviewQuestion.find({ interview: interview._id }).sort({ order: 1 });
  const answers = await InterviewAnswer.find({ interview: interview._id });
  const qaPairs = questions.map((q) => {
    const a = answers.find((an) => String(an.question) === String(q._id));
    return { questionText: q.questionText, answerText: a?.answerText, evaluation: a?.evaluation };
  });

  const filePath = generateInterviewReportPDF({ user: req.user, interview, qaPairs, outputDir: reportsDir });

  const report = await Report.create({
    user: req.user._id,
    type: 'interview',
    interview: interview._id,
    filePath,
    fileName: path.basename(filePath),
  });

  res.status(201).json({ success: true, message: 'Report generated', data: { report } });
});

// @route GET /api/reports
const listReports = asyncHandler(async (req, res) => {
  const reports = await Report.find({ user: req.user._id }).sort({ createdAt: -1 });
  res.json({ success: true, data: { reports } });
});

// @route GET /api/reports/:id/download
const downloadReport = asyncHandler(async (req, res) => {
  const report = await Report.findOne({ _id: req.params.id, user: req.user._id });
  if (!report) throw new ApiError(404, 'Report not found');
  if (!fs.existsSync(report.filePath)) throw new ApiError(410, 'Report file no longer exists on disk');
  res.download(report.filePath, report.fileName);
});

// @route POST /api/reports/:id/email
const emailReport = asyncHandler(async (req, res) => {
  const report = await Report.findOne({ _id: req.params.id, user: req.user._id });
  if (!report) throw new ApiError(404, 'Report not found');

  const to = req.body.email || req.user.email;
  const result = await sendReportEmail({
    to,
    subject: 'Your ResumeAI Pro Report',
    text: 'Please find your requested report attached.',
    attachmentPath: report.filePath,
    attachmentName: report.fileName,
  });

  if (result.sent) {
    report.emailedTo = to;
    report.emailedAt = new Date();
    await report.save();
  }

  res.json({ success: true, message: result.sent ? 'Report emailed successfully' : 'Email not sent — SMTP not configured on server', data: result });
});

module.exports = {
  generateResumeReport,
  generateInterviewReport,
  listReports,
  downloadReport,
  emailReport,
};
