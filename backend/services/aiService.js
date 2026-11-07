/**
 * aiService.js
 * -------------
 * Thin abstraction over the LLM provider (OpenAI by default; Gemini optional).
 * All prompts request STRICT JSON so downstream code can parse deterministically.
 * Switch providers via AI_PROVIDER=openai|gemini in .env without touching callers.
 */
const OpenAI = require('openai');

const PROVIDER = process.env.AI_PROVIDER || 'openai';

const openai = new OpenAI({ apiKey: process.env.OPENAI_API_KEY });

// ---- low level "call the model, get JSON back" helper -------------------
async function callModelJSON(systemPrompt, userPrompt) {
  if (PROVIDER === 'gemini') {
    return callGeminiJSON(systemPrompt, userPrompt);
  }
  return callOpenAIJSON(systemPrompt, userPrompt);
}

async function callOpenAIJSON(systemPrompt, userPrompt) {
  const completion = await openai.chat.completions.create({
    model: process.env.OPENAI_MODEL || 'gpt-4o-mini',
    messages: [
      { role: 'system', content: systemPrompt },
      { role: 'user', content: userPrompt },
    ],
    response_format: { type: 'json_object' },
    temperature: 0.4,
  });
  const text = completion.choices[0].message.content;
  return safeParseJSON(text);
}

// Optional Gemini path (uses REST directly to avoid an extra hard dependency).
async function callGeminiJSON(systemPrompt, userPrompt) {
  const model = process.env.GEMINI_MODEL || 'gemini-1.5-flash';
  const url = `https://generativelanguage.googleapis.com/v1beta/models/${model}:generateContent?key=${process.env.GEMINI_API_KEY}`;
  const body = {
    contents: [{ parts: [{ text: `${systemPrompt}\n\n${userPrompt}\n\nRespond with valid JSON only.` }] }],
    generationConfig: { temperature: 0.4, responseMimeType: 'application/json' },
  };
  const res = await fetch(url, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(body),
  });
  const data = await res.json();
  if (!res.ok) {
    throw new Error(data?.error?.message || `Gemini request failed with status ${res.status}`);
  }
  const text = data?.candidates?.[0]?.content?.parts?.[0]?.text;
  if (!text) {
    throw new Error('Gemini returned no analysis content');
  }
  return safeParseJSON(text);
}

function safeParseJSON(text) {
  try {
    return JSON.parse(text);
  } catch (e) {
    // Strip markdown code fences if the model added them despite instructions
    const cleaned = text.replace(/```json|```/g, '').trim();
    try {
      return JSON.parse(cleaned);
    } catch (e2) {
      throw new Error('AI provider returned invalid JSON: ' + e2.message);
    }
  }
}

// ---- domain-specific prompt builders -------------------------------------

/**
 * Analyze a resume's raw text: ATS score, strength score, skill categorization,
 * missing skills/keywords, grammar & formatting suggestions, recommendations.
 */
async function analyzeResume(resumeText, targetJobRole = '') {
  const system = `You are an expert ATS (Applicant Tracking System) analyst and professional resume reviewer.
Always respond with STRICT JSON only, matching the exact schema requested. No prose, no markdown.`;

  const user = `Analyze the following resume text${targetJobRole ? ` for the target job role "${targetJobRole}"` : ''}.

RESUME TEXT:
"""
${resumeText.slice(0, 12000)}
"""

Return JSON with this exact shape:
{
  "atsScore": number (0-100, how well this resume would pass an ATS parser),
  "resumeStrengthScore": number (0-100, overall quality/impact of the resume),
  "skills": {
    "technicalSkills": string[],
    "programmingLanguages": string[],
    "frameworks": string[],
    "databases": string[],
    "cloudSkills": string[],
    "softSkills": string[]
  },
  "missingSkills": string[] (skills commonly expected for the target role but absent),
  "missingKeywords": string[] (ATS keywords that should be added),
  "grammarSuggestions": string[],
  "formattingSuggestions": string[],
  "improvementRecommendations": string[],
  "strengths": string[],
  "weaknesses": string[],
  "summary": string (2-3 sentence overall assessment)
}`;

  try {
    const result = await callModelJSON(system, user);
    if (result && typeof result.atsScore === 'number' && result.skills) {
      return normalizeResumeAnalysis(result);
    }
    throw new Error('AI provider returned an incomplete resume analysis');
  } catch (error) {
    console.warn(`[AI] Resume analysis provider unavailable: ${error.message}. Using local ATS analysis.`);
    return buildLocalResumeAnalysis(resumeText, targetJobRole);
  }
}

function normalizeResumeAnalysis(result) {
  const skills = result.skills || {};
  return {
    atsScore: Math.max(0, Math.min(100, Number(result.atsScore) || 0)),
    resumeStrengthScore: Math.max(0, Math.min(100, Number(result.resumeStrengthScore) || 0)),
    skills: {
      technicalSkills: toStringArray(skills.technicalSkills),
      programmingLanguages: toStringArray(skills.programmingLanguages),
      frameworks: toStringArray(skills.frameworks),
      databases: toStringArray(skills.databases),
      cloudSkills: toStringArray(skills.cloudSkills),
      softSkills: toStringArray(skills.softSkills),
    },
    missingSkills: toStringArray(result.missingSkills),
    missingKeywords: toStringArray(result.missingKeywords),
    grammarSuggestions: toStringArray(result.grammarSuggestions),
    formattingSuggestions: toStringArray(result.formattingSuggestions),
    improvementRecommendations: toStringArray(result.improvementRecommendations),
    strengths: toStringArray(result.strengths),
    weaknesses: toStringArray(result.weaknesses),
    summary: typeof result.summary === 'string' ? result.summary : '',
  };
}

function buildLocalResumeAnalysis(resumeText, targetJobRole = '') {
  const text = resumeText.toLowerCase();
  const hasSkill = (skill) => {
    const escaped = skill.trim().replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
    return new RegExp(`(?:^|[^a-z0-9+#])${escaped}(?:$|[^a-z0-9+#])`, 'i').test(text);
  };
  const skillGroups = {
    programmingLanguages: ['javascript', 'typescript', 'python', 'java', 'c++', 'c#', 'go', 'ruby', 'php', 'sql'],
    frameworks: ['react', 'angular', 'vue', 'node.js', 'express', 'nestjs', 'spring', 'django', '.net'],
    databases: ['mongodb', 'mysql', 'postgresql', 'postgres', 'redis', 'oracle', 'dynamodb'],
    cloudSkills: ['aws', 'azure', 'gcp', 'docker', 'kubernetes', 'terraform', 'jenkins'],
    softSkills: ['leadership', 'communication', ' teamwork', 'problem-solving', 'collaboration', 'agile'],
    technicalSkills: ['rest api', 'graphql', 'git', 'github', 'microservices', 'html', 'css', 'testing', 'linux'],
  };
  const skills = {};
  for (const [group, candidates] of Object.entries(skillGroups)) {
    skills[group] = candidates.filter(hasSkill).map((skill) => skill.trim());
  }

  const expectedSkills = [...new Set([
    ...skillGroups.programmingLanguages,
    ...skillGroups.frameworks,
    ...skillGroups.databases,
    ...skillGroups.cloudSkills,
    ...skillGroups.technicalSkills,
  ])];
  const missingKeywords = expectedSkills.filter((skill) => !hasSkill(skill)).slice(0, 12);
  const sectionCount = ['experience', 'education', 'skills', 'projects', 'summary'].filter((section) => text.includes(section)).length;
  const bulletCount = (resumeText.match(/(^|\n)\s*[-*•]/g) || []).length;
  const totalSkills = Object.values(skills).flat().length;
  const atsScore = Math.min(100, Math.round(35 + sectionCount * 8 + Math.min(totalSkills * 3, 30) + Math.min(bulletCount * 2, 15)));
  const resumeStrengthScore = Math.min(100, Math.round(30 + Math.min(totalSkills * 4, 35) + Math.min(bulletCount * 3, 20) + (text.length > 800 ? 15 : 5)));

  return {
    atsScore,
    resumeStrengthScore,
    skills,
    missingSkills: missingKeywords.slice(0, 8),
    missingKeywords,
    grammarSuggestions: ['Use concise action verbs and keep tense consistent across experience bullets.'],
    formattingSuggestions: [
      'Use clear section headings and consistent date formatting.',
      'Keep the resume to a simple single-column layout for reliable ATS parsing.',
    ],
    improvementRecommendations: [
      ...(targetJobRole ? [`Tailor the summary and experience bullets toward the ${targetJobRole} role.`] : ['Add a targeted professional summary for the role you want.']),
      ...(missingKeywords.length ? [`Add relevant evidence for: ${missingKeywords.slice(0, 6).join(', ')}.`] : ['Quantify achievements with measurable outcomes.']),
    ],
    strengths: [
      ...(totalSkills ? [`Detected ${totalSkills} relevant technical and professional skills.`] : []),
      ...(sectionCount >= 3 ? ['Resume contains several standard ATS-readable sections.'] : []),
    ],
    weaknesses: [
      ...(missingKeywords.length ? [`Important keywords are not visible: ${missingKeywords.slice(0, 5).join(', ')}.`] : []),
      ...(bulletCount < 3 ? ['Add more achievement-focused bullet points to demonstrate impact.'] : []),
    ],
    summary: `Local ATS analysis found ${totalSkills} relevant skills and ${sectionCount} standard resume sections. The resume currently scores ${atsScore}/100 for machine readability; tailor its keywords and achievements to the target role for a stronger match.`,
  };
}

/**
 * Compare resume text against a job description.
 */
async function matchJobDescription(resumeText, jdText) {
  const system = `You are an ATS matching engine and career coach. Respond with STRICT JSON only.`;
  const user = `Compare the RESUME against the JOB DESCRIPTION.

RESUME:
"""
${resumeText.slice(0, 8000)}
"""

JOB DESCRIPTION:
"""
${jdText.slice(0, 6000)}
"""

Return JSON:
{
  "matchPercentage": number (0-100),
  "matchedKeywords": string[],
  "missingKeywords": string[],
  "suggestions": string[] (specific resume edits to improve match),
  "atsOptimizationTips": string[]
}`;
  try {
    const result = await callModelJSON(system, user);
    if (result && typeof result.matchPercentage === 'number') {
      return normalizeJobMatch(result);
    }
    throw new Error('AI provider returned an incomplete job match');
  } catch (error) {
    console.warn(`[AI] Job match provider unavailable: ${error.message}. Using local keyword matching.`);
    return buildLocalJobMatch(resumeText, jdText);
  }
}

function normalizeJobMatch(result) {
  return {
    matchPercentage: Math.max(0, Math.min(100, Number(result.matchPercentage) || 0)),
    matchedKeywords: toStringArray(result.matchedKeywords),
    missingKeywords: toStringArray(result.missingKeywords),
    suggestions: toStringArray(result.suggestions),
    atsOptimizationTips: toStringArray(result.atsOptimizationTips),
  };
}

function toStringArray(value) {
  return Array.isArray(value) ? value.filter((item) => typeof item === 'string' && item.trim()) : [];
}

function buildLocalJobMatch(resumeText, jdText) {
  const stopWords = new Set(
    'about after again against also been being between could does doing during each from have into more most other our over should some than that their there these they this through using very were what when where which while with would your and are for need skilled software'.split(' ')
  );
  const getKeywords = (text) => [...new Set(
    text.toLowerCase()
      .replace(/[^a-z0-9+#./-]+/g, ' ')
      .split(/\s+/)
      .map((word) => word.replace(/[.,:;!?]+$/, ''))
      .filter((word) => word.length >= 3 && !stopWords.has(word))
  )];

  const resumeKeywords = new Set(getKeywords(resumeText));
  const jobKeywords = getKeywords(jdText);
  const matchedKeywords = jobKeywords.filter((keyword) => resumeKeywords.has(keyword));
  const missingKeywords = jobKeywords.filter((keyword) => !resumeKeywords.has(keyword)).slice(0, 25);
  const matchPercentage = jobKeywords.length
    ? Math.round((matchedKeywords.length / jobKeywords.length) * 100)
    : 0;

  return {
    matchPercentage,
    matchedKeywords: matchedKeywords.slice(0, 25),
    missingKeywords,
    suggestions: missingKeywords.length
      ? [`Add evidence for these job requirements: ${missingKeywords.slice(0, 8).join(', ')}.`, 'Mirror the job description wording where it accurately describes your experience.']
      : ['Quantify the impact of your most relevant projects and achievements.'],
    atsOptimizationTips: [
      'Use standard section headings such as Summary, Skills, Experience, and Education.',
      'Keep important keywords in both the Skills section and the relevant experience bullets.',
      'Use a simple, single-column layout without tables, text boxes, or graphics.',
    ],
  };
}

/**
 * Generate mock interview questions tailored to the resume + interview type + job role.
 */
async function generateInterviewQuestions({ resumeText, interviewType, jobRole, count = 8 }) {
  const system = `You are a senior technical/HR interviewer. Respond with STRICT JSON only.`;
  const user = `Generate ${count} mock interview questions of type "${interviewType}" for a candidate targeting the role "${jobRole || 'the role implied by their resume'}".
Base questions on the candidate's actual skills, projects, experience, and certifications found in the resume below. Vary difficulty.

RESUME:
"""
${resumeText.slice(0, 10000)}
"""

Return JSON:
{
  "questions": [
    {
      "questionText": string,
      "category": "skill"|"project"|"experience"|"certification"|"hr"|"behavioral"|"general",
      "basedOn": string (short note on what resume detail this question targets),
      "difficulty": "easy"|"medium"|"hard"
    }
  ]
}`;
  return callModelJSON(system, user);
}

/**
 * Evaluate a single interview answer.
 */
async function evaluateAnswer({ questionText, answerText, category, interviewType }) {
  const system = `You are an expert interview evaluator. Respond with STRICT JSON only.`;
  const user = `Evaluate this candidate's answer for a ${interviewType} interview question (category: ${category}).

QUESTION: ${questionText}
CANDIDATE ANSWER: """${answerText || '(no answer provided)'}"""

Return JSON:
{
  "score": number (0-100 overall quality of this answer),
  "confidenceScore": number (0-100, inferred from tone/certainty of language),
  "communicationScore": number (0-100, clarity & structure),
  "technicalAccuracyScore": number (0-100; for non-technical questions, rate relevance/soundness instead),
  "feedback": string (constructive, specific, 2-4 sentences),
  "idealAnswerPointers": string[] (3-5 bullet points of what a strong answer would include)
}`;
  return callModelJSON(system, user);
}

/**
 * Aggregate + summarize a completed interview into final scores + strengths/weaknesses.
 */
async function summarizeInterview({ interviewType, jobRole, qaPairs }) {
  const system = `You are an interview panel lead producing a final candidate report. Respond with STRICT JSON only.`;
  const user = `Summarize this completed ${interviewType} interview for role "${jobRole || 'N/A'}" based on the question/answer/evaluation pairs below.

DATA:
${JSON.stringify(qaPairs).slice(0, 12000)}

Return JSON:
{
  "overallScore": number (0-100),
  "confidenceScore": number (0-100),
  "communicationScore": number (0-100),
  "technicalAccuracyScore": number (0-100),
  "strengths": string[],
  "weaknesses": string[],
  "recommendedLearningAreas": string[]
}`;
  return callModelJSON(system, user);
}

/**
 * Career guidance: paths, certifications, courses, missing skills for a target job.
 */
async function careerGuidance({ resumeText, targetJobRole }) {
  const system = `You are a career advisor. Respond with STRICT JSON only.`;
  const user = `Given this resume and target job role "${targetJobRole || '(infer best-fit roles)'}", provide career guidance.

RESUME:
"""
${resumeText.slice(0, 8000)}
"""

Return JSON:
{
  "recommendedCareerPaths": string[],
  "suggestedCertifications": string[],
  "recommendedCourses": string[],
  "missingSkillsForTargetJob": string[]
}`;
  return callModelJSON(system, user);
}

module.exports = {
  analyzeResume,
  matchJobDescription,
  generateInterviewQuestions,
  evaluateAnswer,
  summarizeInterview,
  careerGuidance,
};
