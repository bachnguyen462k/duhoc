export type ActivePage = 'home' | 'destinations' | 'scholarships' | 'roadmap' | 'calculator' | 'news';

export interface Destination {
  id: string;
  name: string;
  region: string;
  flag: string;
  tag: string;
  highlightBadge: string;
  badgeType?: 'gold' | 'cyan' | 'blue';
  title: string;
  description: string;
  maxScholarship: string;
  postStudyWork: string;
  avgCost: string;
  imageUrl: string;
  visaRate: string;
  topUniversities: string[];
  popularMajors: string[];
  keyBenefits: string[];
}

export interface StudentStory {
  id: string;
  name: string;
  previousSchool: string;
  targetUniversity: string;
  country: string;
  term: string;
  scholarshipAmount: string;
  scholarshipDetail: string;
  badgeType: 'gold' | 'cyan' | 'blue';
  quote: string;
  avatar: string;
  satScore?: string;
  gpa?: string;
  ielts?: string;
  major?: string;
}

export interface ScholarshipItem {
  id: string;
  title: string;
  university: string;
  country: string;
  level: string;
  coverage: string;
  value: string;
  deadline: string;
  eligibility: string[];
  description: string;
  isPopular?: boolean;
}

export interface RoadmapStep {
  step: string;
  title: string;
  subtitle: string;
  description: string;
  tag: string;
  iconName: string;
  deliverables: string[];
  timeline: string;
  details?: string[];
  checklist?: string[];
}

export interface RoadmapPhase {
  phaseNumber: string;
  title: string;
  duration: string;
  badge: string;
  summary: string;
  tasks: string[];
  documentsNeeded: string[];
  eduglobalSupport: string[];
  milestone: string;
}

export interface CountryRoadmapData {
  id: string;
  countryName: string;
  flag: string;
  heroBadge: string;
  tagline: string;
  bannerImage: string;
  avgTimeline: string;
  avgIncomeOrScholarship: string;
  visaSuccessRate: string;
  primaryPrograms: {
    name: string;
    type: string;
    highlight: string;
    requirement: string;
  }[];
  costBreakdown: {
    item: string;
    amount: string;
    note: string;
  }[];
  phases: RoadmapPhase[];
  jobOrMajors: string[];
  faq: {
    question: string;
    answer: string;
  }[];
}

export interface Mentor {
  id: string;
  name: string;
  role: string;
  university: string;
  country: string;
  scholarshipGranted: string;
  avatar: string;
  expertise: string[];
  bio: string;
}

export interface ArticleSection {
  heading: string;
  paragraphs: string[];
  bulletPoints?: string[];
  calloutBox?: string;
}

export interface NewsArticle {
  id: string;
  title: string;
  category: string;
  date: string;
  readTime: string;
  summary: string;
  imageUrl: string;
  author?: {
    name: string;
    role: string;
    avatar: string;
  };
  tags?: string[];
  sections?: ArticleSection[];
  relatedProgramId?: string;
  relatedProgramTitle?: string;
  keyStats?: { label: string; value: string }[];
}

export interface CalculatorInput {
  gpa: string;
  ielts: string;
  sat: string;
  destination: string;
  degree: string;
  budget: string;
  extracurricular: string;
  name: string;
  phone: string;
  email?: string;
}

export interface AssessmentResult {
  score: number;
  badgeTitle: string;
  badgeLevel: 'Xuất Sắc' | 'Hạng Ưu' | 'Triển Vọng' | 'Tiềm Năng';
  percentage: string;
  message: string;
  reachUniversities: string[];
  matchUniversities: string[];
  safetyUniversities: string[];
  analysisPoints: {
    title: string;
    description: string;
    positive: boolean;
  }[];
  actionPlan: string[];
}
