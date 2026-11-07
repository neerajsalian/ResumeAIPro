const PDFDocument = require('pdfkit');
const fs = require('fs');
const path = require('path');

/**
 * Generates a resume-analysis PDF report and writes it to disk.
 * Returns the absolute file path.
 */
function generateResumeAnalysisPDF({ user, resume, analysis, outputDir }) {
  const fileName = `resume-analysis-${resume._id}-${Date.now()}.pdf`;
  const filePath = path.join(outputDir, fileName);
  const doc = new PDFDocument({ margin: 50 });
  doc.pipe(fs.createWriteStream(filePath));

  doc.fontSize(20).fillColor('#4f46e5').text('ResumeAI Pro - Resume Analysis Report', { align: 'center' });
  doc.moveDown();
  doc.fontSize(10).fillColor('black').text(`Candidate: ${user.name} (${user.email})`);
  doc.text(`Resume File: ${resume.originalFileName}`);
  doc.text(`Generated: ${new Date().toLocaleString()}`);
  doc.moveDown();

  doc.fontSize(14).fillColor('#4f46e5').text('Scores');
  doc.fontSize(11).fillColor('black');
  doc.text(`ATS Score: ${analysis.atsScore}/100`);
  doc.text(`Resume Strength Score: ${analysis.resumeStrengthScore}/100`);
  doc.moveDown();

  const section = (title, items) => {
    if (!items || !items.length) return;
    doc.fontSize(14).fillColor('#4f46e5').text(title);
    doc.fontSize(10).fillColor('black');
    items.forEach((it) => doc.text(`• ${it}`));
    doc.moveDown();
  };

  section('Summary', analysis.summary ? [analysis.summary] : []);
  section('Technical Skills', analysis.skills?.technicalSkills);
  section('Programming Languages', analysis.skills?.programmingLanguages);
  section('Frameworks', analysis.skills?.frameworks);
  section('Databases', analysis.skills?.databases);
  section('Cloud Skills', analysis.skills?.cloudSkills);
  section('Soft Skills', analysis.skills?.softSkills);
  section('Missing Skills', analysis.missingSkills);
  section('Missing Keywords', analysis.missingKeywords);
  section('Grammar Suggestions', analysis.grammarSuggestions);
  section('Formatting Suggestions', analysis.formattingSuggestions);
  section('Improvement Recommendations', analysis.improvementRecommendations);
  section('Strengths', analysis.strengths);
  section('Weaknesses', analysis.weaknesses);

  doc.end();
  return filePath;
}

/**
 * Generates a mock-interview report PDF (questions, answers, evaluations, final scores).
 */
function generateInterviewReportPDF({ user, interview, qaPairs, outputDir }) {
  const fileName = `interview-report-${interview._id}-${Date.now()}.pdf`;
  const filePath = path.join(outputDir, fileName);
  const doc = new PDFDocument({ margin: 50 });
  doc.pipe(fs.createWriteStream(filePath));

  doc.fontSize(20).fillColor('#4f46e5').text('ResumeAI Pro - Mock Interview Report', { align: 'center' });
  doc.moveDown();
  doc.fontSize(10).fillColor('black').text(`Candidate: ${user.name} (${user.email})`);
  doc.text(`Interview Type: ${interview.interviewType} | Job Role: ${interview.jobRole || 'N/A'}`);
  doc.text(`Date: ${new Date(interview.completedAt || interview.createdAt).toLocaleString()}`);
  doc.moveDown();

  doc.fontSize(14).fillColor('#4f46e5').text('Overall Scores');
  doc.fontSize(11).fillColor('black');
  doc.text(`Overall Score: ${interview.overallScore ?? 'N/A'}/100`);
  doc.text(`Confidence Score: ${interview.confidenceScore ?? 'N/A'}/100`);
  doc.text(`Communication Score: ${interview.communicationScore ?? 'N/A'}/100`);
  doc.text(`Technical Accuracy Score: ${interview.technicalAccuracyScore ?? 'N/A'}/100`);
  doc.moveDown();

  const listSection = (title, items) => {
    if (!items || !items.length) return;
    doc.fontSize(13).fillColor('#4f46e5').text(title);
    doc.fontSize(10).fillColor('black');
    items.forEach((it) => doc.text(`• ${it}`));
    doc.moveDown();
  };
  listSection('Strengths', interview.strengths);
  listSection('Weaknesses', interview.weaknesses);
  listSection('Recommended Learning Areas', interview.recommendedLearningAreas);

  doc.addPage();
  doc.fontSize(14).fillColor('#4f46e5').text('Questions & Answers');
  doc.moveDown(0.5);

  qaPairs.forEach((qa, idx) => {
    doc.fontSize(11).fillColor('#111827').text(`Q${idx + 1}. ${qa.questionText}`, { continued: false });
    doc.fontSize(10).fillColor('#374151').text(`Answer: ${qa.answerText || '(no answer)'}`);
    if (qa.evaluation) {
      doc.fontSize(9).fillColor('#6b7280').text(
        `Score: ${qa.evaluation.score ?? 'N/A'} | Confidence: ${qa.evaluation.confidenceScore ?? 'N/A'} | Communication: ${qa.evaluation.communicationScore ?? 'N/A'} | Technical: ${qa.evaluation.technicalAccuracyScore ?? 'N/A'}`
      );
      doc.fontSize(9).fillColor('#111827').text(`Feedback: ${qa.evaluation.feedback || ''}`);
    }
    doc.moveDown();
  });

  doc.end();
  return filePath;
}

module.exports = { generateResumeAnalysisPDF, generateInterviewReportPDF };
