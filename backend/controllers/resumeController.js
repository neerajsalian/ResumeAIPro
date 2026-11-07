const path = require('path');
const fs = require('fs');
const Resume = require('../models/Resume');
const asyncHandler = require('../utils/asyncHandler');
const ApiError = require('../utils/apiError');
const { extractTextFromPDF } = require('../services/pdfParserService');

// @route POST /api/resume/upload
const uploadResume = asyncHandler(async (req, res) => {
  if (!req.file) throw new ApiError(400, 'No file uploaded. Field name must be "resume" and file must be a PDF');

  // Mark previous active resume as superseded (version history)
  const previous = await Resume.findOne({ user: req.user._id, isActive: true }).sort({ version: -1 });
  const nextVersion = previous ? previous.version + 1 : 1;
  if (previous) {
    previous.isActive = false;
    await previous.save();
  }

  const resume = await Resume.create({
    user: req.user._id,
    originalFileName: req.file.originalname,
    storedFileName: req.file.filename,
    filePath: req.file.path,
    fileSizeBytes: req.file.size,
    mimeType: req.file.mimetype,
    version: nextVersion,
    previousVersion: previous ? previous._id : null,
    status: 'parsing',
  });

  try {
    const text = await extractTextFromPDF(req.file.path);
    resume.extractedText = text;
    resume.status = 'parsed';
    await resume.save();
  } catch (err) {
    resume.status = 'failed';
    await resume.save();
    throw new ApiError(422, `Could not parse PDF text: ${err.message}`);
  }

  res.status(201).json({ success: true, message: 'Resume uploaded and parsed', data: { resume } });
});

// @route GET /api/resume
const listResumes = asyncHandler(async (req, res) => {
  const resumes = await Resume.find({ user: req.user._id }).sort({ createdAt: -1 });
  res.json({ success: true, data: { resumes } });
});

// @route GET /api/resume/:id
const getResume = asyncHandler(async (req, res) => {
  const resume = await Resume.findOne({ _id: req.params.id, user: req.user._id });
  if (!resume) throw new ApiError(404, 'Resume not found');
  res.json({ success: true, data: { resume } });
});

// @route GET /api/resume/:id/versions
const getResumeVersionHistory = asyncHandler(async (req, res) => {
  const resume = await Resume.findOne({ _id: req.params.id, user: req.user._id });
  if (!resume) throw new ApiError(404, 'Resume not found');

  // Walk the previousVersion chain
  const history = [resume];
  let cursor = resume;
  while (cursor.previousVersion) {
    cursor = await Resume.findById(cursor.previousVersion);
    if (!cursor) break;
    history.push(cursor);
  }
  res.json({ success: true, data: { history } });
});

// @route DELETE /api/resume/:id
const deleteResume = asyncHandler(async (req, res) => {
  const resume = await Resume.findOne({ _id: req.params.id, user: req.user._id });
  if (!resume) throw new ApiError(404, 'Resume not found');

  if (fs.existsSync(resume.filePath)) fs.unlinkSync(resume.filePath);
  await resume.deleteOne();

  res.json({ success: true, message: 'Resume deleted' });
});

// @route GET /api/resume/:id/download
const downloadResume = asyncHandler(async (req, res) => {
  const resume = await Resume.findOne({ _id: req.params.id, user: req.user._id });
  if (!resume) throw new ApiError(404, 'Resume not found');
  res.download(resume.filePath, resume.originalFileName);
});

module.exports = {
  uploadResume,
  listResumes,
  getResume,
  getResumeVersionHistory,
  deleteResume,
  downloadResume,
};
