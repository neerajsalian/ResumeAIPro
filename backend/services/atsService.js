/**
 * atsService.js
 * -------------
 * Deterministic, rule-based ATS checks that complement the LLM's judgment
 * (LLM scoring can be inconsistent run-to-run; these hard checks catch
 * objective formatting/parsing issues every time).
 */

const SECTION_KEYWORDS = ['experience', 'education', 'skills', 'projects', 'summary', 'objective'];
const CONTACT_PATTERNS = {
  email: /[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}/,
  phone: /(\+?\d[\d\s-]{8,}\d)/,
};

function runDeterministicChecks(resumeText) {
  const lowerText = resumeText.toLowerCase();
  const issues = [];
  const passed = [];

  // Contact info present?
  if (CONTACT_PATTERNS.email.test(resumeText)) passed.push('Email address detected');
  else issues.push('No email address detected — ATS systems require a machine-readable email');

  if (CONTACT_PATTERNS.phone.test(resumeText)) passed.push('Phone number detected');
  else issues.push('No phone number detected');

  // Standard sections present?
  const missingSections = SECTION_KEYWORDS.filter((kw) => !lowerText.includes(kw));
  if (missingSections.length) {
    issues.push(`Missing common section headers: ${missingSections.join(', ')}`);
  } else {
    passed.push('All standard section headers found');
  }

  // Length heuristic (roughly 400-1200 words is a healthy 1-2 page resume)
  const wordCount = resumeText.split(/\s+/).filter(Boolean).length;
  if (wordCount < 150) issues.push('Resume text seems too short — may be missing content or a parsing issue');
  if (wordCount > 1500) issues.push('Resume is very long — consider trimming to 1-2 pages for ATS/recruiter readability');

  // Bullet usage (rough proxy: presence of bullet-like characters or line-start dashes)
  const bulletLike = /(^|\n)\s*[•\-\*]\s+/.test(resumeText);
  if (bulletLike) passed.push('Bullet-point formatting detected');
  else issues.push('No bullet points detected — bullet points improve ATS parsing and readability');

  return { issues, passed, wordCount };
}

module.exports = { runDeterministicChecks };
