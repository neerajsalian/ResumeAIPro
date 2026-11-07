export interface User {
  _id: string;
  name: string;
  email: string;
  role: 'candidate' | 'admin';
  phone?: string;
  targetJobRole?: string;
  location?: string;
  avatarUrl?: string;
  bio?: string;
  isActive: boolean;
  createdAt: string;
}

export interface AuthResponse {
  user: User;
  accessToken: string;
  refreshToken: string;
}

export interface Resume {
  _id: string;
  user: string;
  originalFileName: string;
  storedFileName: string;
  fileSizeBytes?: number;
  extractedText?: string;
  version: number;
  previousVersion?: string | null;
  isActive: boolean;
  status: 'uploaded' | 'parsing' | 'parsed' | 'analyzed' | 'failed';
  createdAt: string;
}

export interface SkillCategories {
  technicalSkills: string[];
  programmingLanguages: string[];
  frameworks: string[];
  databases: string[];
  cloudSkills: string[];
  softSkills: string[];
}

export interface ResumeAnalysis {
  _id: string;
  resume: string;
  user: string;
  atsScore: number;
  resumeStrengthScore: number;
  skills: SkillCategories;
  missingSkills: string[];
  missingKeywords: string[];
  grammarSuggestions: string[];
  formattingSuggestions: string[];
  improvementRecommendations: string[];
  strengths: string[];
  weaknesses: string[];
  summary: string;
  createdAt: string;
}

export interface AtsCheckResult {
  issues: string[];
  passed: string[];
  wordCount: number;
}

export interface JobMatch {
  _id: string;
  resume: string | Resume;
  title: string;
  company: string;
  rawText: string;
  matchPercentage: number;
  matchedKeywords: string[];
  missingKeywords: string[];
  suggestions: string[];
  atsOptimizationTips: string[];
  createdAt: string;
}

export type InterviewType = 'HR' | 'Technical' | 'Project-Based' | 'Behavioral';

export interface Interview {
  _id: string;
  user: string;
  resume: string;
  interviewType: InterviewType;
  jobRole: string;
  mode: 'text' | 'voice';
  status: 'created' | 'in-progress' | 'completed' | 'abandoned';
  totalQuestions: number;
  answeredQuestions: number;
  overallScore?: number;
  confidenceScore?: number;
  communicationScore?: number;
  technicalAccuracyScore?: number;
  strengths?: string[];
  weaknesses?: string[];
  recommendedLearningAreas?: string[];
  startedAt?: string;
  completedAt?: string;
  durationSeconds?: number;
  createdAt: string;
}

export interface InterviewQuestion {
  _id: string;
  interview: string;
  order: number;
  questionText: string;
  category: string;
  basedOn: string;
  difficulty: 'easy' | 'medium' | 'hard';
}

export interface AnswerEvaluation {
  score: number;
  confidenceScore: number;
  communicationScore: number;
  technicalAccuracyScore: number;
  feedback: string;
  idealAnswerPointers: string[];
}

export interface InterviewAnswer {
  _id: string;
  interview: string;
  question: string;
  answerText: string;
  evaluation: AnswerEvaluation;
}

export interface CareerGuidance {
  recommendedCareerPaths: string[];
  suggestedCertifications: string[];
  recommendedCourses: string[];
  missingSkillsForTargetJob: string[];
}

export interface Report {
  _id: string;
  user: string;
  type: 'resume-analysis' | 'interview';
  fileName: string;
  emailedTo?: string;
  createdAt: string;
}

export interface AdminStats {
  totalUsers: number;
  totalCandidates: number;
  totalResumes: number;
  totalInterviews: number;
  completedInterviews: number;
  totalReports: number;
  averageAtsScore: number;
  averageInterviewScore: number;
  interviewsByType: { _id: string; count: number }[];
  usersOverTime: { _id: string; count: number }[];
}

export interface ApiResponse<T> {
  success: boolean;
  message?: string;
  data: T;
}
