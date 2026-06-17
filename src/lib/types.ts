// All TypeScript interfaces for portfolio data shapes

export interface SocialLinks {
  github?: string;
  linkedin?: string;
  twitter?: string;
  instagram?: string;
  website?: string;
  [key: string]: string | undefined;
}

export interface Achievement {
  title: string;
  description: string;
  year: string;
  icon?: string;
}

export interface SiteConfig {
  name: string;
  title: string;
  tagline: string;
  bio: string[];           // array of paragraphs
  email: string;
  formspreeId: string;
  location: string;
  currentStatus: string;  // e.g. "MBA · ISB Hyderabad"
  openTo: string;         // e.g. "PM roles · Summer 2026"
  socials: SocialLinks;
  resume: string;
  achievements: Achievement[];
  funFacts: string[];
  whatIDo: { emoji: string; text: string }[];
  stats: { value: string; label: string; sublabel?: string }[];
}

// ─── Academics ─────────────────────────────────────────────────────────────

export interface AcademicEntry {
  institution: string;
  degree: string;
  field?: string;
  location: string;
  startDate: string;
  endDate: string;
  current: boolean;
  bullets: string[];
}

// ─── Experience ────────────────────────────────────────────────────────────

export interface Job {
  company: string;
  role: string;
  startDate: string;
  endDate: string;
  current?: boolean;
  location?: string;
  description: string[];
  award?: string;          // e.g. "Innovation Award Finalist"
}

// ─── Projects ──────────────────────────────────────────────────────────────

export type ProjectType = 'internal' | 'external';
export type ProjectCategory = 'product' | 'ops' | 'ml' | 'finance' | 'ai' | 'strategy';

export interface ProjectMetric {
  value: string;
  label: string;
}

export interface Project {
  title: string;
  company: string;
  description: string;
  tags: string[];
  category: ProjectCategory | ProjectCategory[];
  link: string;
  /** 'internal' → Next.js Link to /projects/[slug]; anything else → <a target="_blank"> */
  type: ProjectType;
  featured?: boolean;
  metrics?: ProjectMetric[];
  image?: string;
  /** Additional links shown on project cards/detail (e.g. case study deck, prototype) */
  externalLinks?: { label: string; url: string }[];
}

// ─── Competitions ──────────────────────────────────────────────────────────

export type CompetitionResult = 'winner' | 'finalist' | 'participant';
export type CompetitionType = 'hackathon' | 'startup' | 'case' | 'award';

export interface Competition {
  title: string;
  organization: string;
  type: CompetitionType;
  result: CompetitionResult;
  resultLabel: string;     // e.g. "1st Place", "Finalist", "Fellow"
  year: string;
  description?: string;    // optional short blurb shown below organization
  image?: string;          // optional — card layout adapts if present
  gradientPreset?: 'gold' | 'mauve' | 'slate' | 'teal' | 'rose' | 'navy' | 'amber' | 'green';
}

// ─── Leadership & Volunteering ─────────────────────────────────────────────

export interface LeadershipRole {
  role: string;
  organization: string;
  startDate: string;
  endDate: string;
  description: string;
}

// ─── Skills ────────────────────────────────────────────────────────────────

export interface SkillCategory {
  category: string;
  items: string[];
}

// ─── Life ──────────────────────────────────────────────────────────────────

export type PhotoSize = 'tall' | 'medium' | 'short';

export interface LifePhoto {
  caption: string;
  sub?: string;
  size: PhotoSize;
  gradientPreset: 'g1' | 'g2' | 'g3' | 'g4' | 'g5' | 'g6';
  image?: string;          // real photo path; gradient placeholder shown if absent
  objectPosition?: string; // e.g. 'top', 'center', '50% 20%' — controls crop focus
}

export interface LifeFact {
  emoji: string;
  text: string;
}

export interface LifeHobbies {
  title: string;
  items: string[];
}

export interface LifeVideo {
  caption: string;
  sub?: string;
  youtubeId: string;       // just the video ID, e.g. 'F-FJD5aVx54'
  size: PhotoSize;
}

// ─── Blog ──────────────────────────────────────────────────────────────────

export interface BlogPost {
  title: string;
  date: string;
  slug: string;
  excerpt: string;
  link: string;
}

// ─── Case Studies (MDX frontmatter) ────────────────────────────────────────

export interface CaseStudyFrontmatter {
  title: string;
  company: string;
  role: string;
  startDate: string;
  endDate: string;
  teamSize?: string;
  summary: string;
  tags: string[];
  metrics: ProjectMetric[];
  coverImage?: string;
  externalLinks?: { label: string; url: string }[];
}
