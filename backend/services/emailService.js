const nodemailer = require('nodemailer');

/**
 * Lazily creates a Nodemailer transporter from SMTP_* env vars.
 * If SMTP is not configured, sendReportEmail() logs and no-ops instead of throwing,
 * so the rest of the app keeps working without email configured.
 */
let transporter = null;
function getTransporter() {
  if (transporter) return transporter;
  if (!process.env.SMTP_HOST || !process.env.SMTP_USER) return null;
  transporter = nodemailer.createTransport({
    host: process.env.SMTP_HOST,
    port: Number(process.env.SMTP_PORT) || 587,
    secure: false,
    auth: { user: process.env.SMTP_USER, pass: process.env.SMTP_PASS },
  });
  return transporter;
}

async function sendReportEmail({ to, subject, text, attachmentPath, attachmentName }) {
  const t = getTransporter();
  if (!t) {
    console.warn('[emailService] SMTP not configured — skipping email send. Set SMTP_* env vars to enable.');
    return { sent: false, reason: 'SMTP not configured' };
  }
  await t.sendMail({
    from: process.env.EMAIL_FROM || process.env.SMTP_USER,
    to,
    subject,
    text,
    attachments: attachmentPath ? [{ filename: attachmentName, path: attachmentPath }] : [],
  });
  return { sent: true };
}

module.exports = { sendReportEmail };
