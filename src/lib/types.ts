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
  bio: string;
  email: string;
  socials: SocialLinks;
  resume: string;
  achievements: Achievement[];
  funFacts: string[];
}

// ─── Projects ──────────────────────────────────────────────────────────────

export type ProjectType = 'internal' | 'external';

export interface Project {
  title: string;
  description: string;
  tags: string[];
  /** For internal type, use the case study slug (e.g. '/projects/my-case-study'). For external, use the full URL. */
  link: string;
  image?: string;
  /** 'internal' → Next.js Link; anything else → <a target="_blank"> */
  type: ProjectType;
}

// ─── Experience ────────────────────────────────────────────────────────────

export interface Job {
  company: string;
  role: string;
  startDate: string;
  endDate: string;
  location?: string;
  description: string[];
}

export interface LeadershipRole {
  organization: string;
  role: string;
  startDate: string;
  endDate: string;
  description: string;
}

export interface VolunteerRole {
  organization: string;
  role: string;
  startDate: string;
  endDate: string;
  description: string;
}

// ─── Skills ────────────────────────────────────────────────────────────────

export interface SkillCategory {
  category: string;
  items: string[];
}

// ─── Blog ──────────────────────────────────────────────────────────────────

export interface BlogPost {
  title: string;
  date: string;
  slug: string;
  excerpt: string;
  link: string;
}

// ─── Case Studies (MDX) ────────────────────────────────────────────────────

export interface CaseStudyFrontmatter {
  title: string;
  summary: string;
  tags: string[];
  metrics: string[];
  date: string;
}
