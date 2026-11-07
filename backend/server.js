require('dotenv').config();
const express = require('express');
const cors = require('cors');
const helmet = require('helmet');
const morgan = require('morgan');
const compression = require('compression');
const path = require('path');
const rateLimit = require('express-rate-limit');

const connectDB = require('./config/db');
const { errorHandler, notFound } = require('./middleware/errorHandler');

const authRoutes = require('./routes/authRoutes');
const resumeRoutes = require('./routes/resumeRoutes');
const analysisRoutes = require('./routes/analysisRoutes');
const atsRoutes = require('./routes/atsRoutes');
const interviewRoutes = require('./routes/interviewRoutes');
const voiceInterviewRoutes = require('./routes/voiceInterviewRoutes');
const jobMatchRoutes = require('./routes/jobMatchRoutes');
const reportRoutes = require('./routes/reportRoutes');
const adminRoutes = require('./routes/adminRoutes');
const careerRoutes = require('./routes/careerRoutes');

const app = express();

// --- Core middleware ---------------------------------------------------
app.use(helmet({ crossOriginResourcePolicy: false }));
app.use(cors({ origin: process.env.CLIENT_URL || 'http://localhost:4200', credentials: true }));
app.use(compression());
app.use(express.json({ limit: '2mb' }));
app.use(express.urlencoded({ extended: true }));
app.use(morgan(process.env.NODE_ENV === 'production' ? 'combined' : 'dev'));

// Global API rate limit (in addition to the stricter one on /auth)
app.use(
  '/api',
  rateLimit({ windowMs: 15 * 60 * 1000, max: 300, standardHeaders: true, legacyHeaders: false })
);

// Static access to generated report PDFs / uploaded files if ever needed directly
app.use('/uploads', express.static(path.join(__dirname, 'uploads')));

// --- Health check --------------------------------------------------------
app.get('/api/health', (req, res) => {
  res.json({ success: true, message: 'ResumeAI Pro API is running', timestamp: new Date().toISOString() });
});

// --- API routes ------------------------------------------------------------
app.use('/api/auth', authRoutes);
app.use('/api/resume', resumeRoutes);
app.use('/api/analysis', analysisRoutes);
app.use('/api/ats', atsRoutes);
app.use('/api/interview', interviewRoutes);
app.use('/api/voice-interview', voiceInterviewRoutes);
app.use('/api/job-match', jobMatchRoutes);
app.use('/api/reports', reportRoutes);
app.use('/api/admin', adminRoutes);
app.use('/api/career', careerRoutes);

// --- Error handling (must be last) -----------------------------------------
app.use(notFound);
app.use(errorHandler);

const PORT = process.env.PORT || 5000;

const start = async () => {
  await connectDB();
  app.listen(PORT, () => {
    console.log(`[Server] ResumeAI Pro API listening on port ${PORT} (${process.env.NODE_ENV || 'development'})`);
  });
};

start();

module.exports = app;
