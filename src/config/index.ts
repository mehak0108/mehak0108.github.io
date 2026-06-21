// Personal info — edit this file to update your portfolio content

import type { SiteConfig } from '@/lib/types';


export const siteConfig: SiteConfig = {
  name: 'Mehak Mittal',
  title: 'Product Manager',
  tagline: 'Curious builder, systems thinker.',
  bio: [
    'Customer-centric AI product manager who\’s built a career out of ambiguity: messy integrations, competing client priorities, roadmaps nobody had prioritized yet.',
    'At Microsoft, I sized TAM across Financial Services, Manufacturing, and Telecom and defined the GTM entry point for an AI data platform. At MishiPay, I shipped self-checkout solutions end-to-end for global retail clients using data-driven roadmaps and hypothesis-driven experimentation. At JP Morgan Chase, I drove cross-functional alignment across cloud infrastructure and compliance, recovering $3.8M+ annually.',
    'Most recently, I built an AI automation pipeline for a biotech startup using n8n, RAG, and vector search, turning a collection of proprietary documents into an instantly queryable internal knowledge base.'
  ],
  email: 'memittal@uw.edu',
  location: 'Seattle, WA',
  currentStatus: 'MBA · UW Foster',
  openTo: 'PM roles · Spring / Summer 2027',
  socials: {
    linkedin: 'https://linkedin.com/in/mehakmittal1', // TODO: update with real URL
    github: 'https://github.com/mehak0108',         // TODO: update with real URL
    substack: 'https://mehakmittal1.substack.com',
  },
  resume: '/resume.pdf', // TODO: add resume PDF to /public/resume.pdf
  achievements: [
    // TODO: add achievements from resume
  ],
  funFacts: [
    // TODO: add fun facts about yourself
  ],
  stats: [
    { value: 'IIT Roorkee', label: 'Top 5% of Class' },
    { value: '6+', label: 'Years in Tech' },
    { value: 'Fritzky', label: 'Leadership Fellow' },
    { value: 'Forte', label: 'Fellowship' },
  ],
  whatIDo: [
    { emoji: '🗺️', text: 'Turn ambiguous problems into clear, prioritized roadmaps' },
    { emoji: '🤝', text: 'Build alignment across engineering, design, and business teams' },
    { emoji: '📊', text: 'Make data-driven decisions without losing sight of the human behind the data' },
    { emoji: '🚀', text: 'Ship products end-to-end: from ideation to launch and beyond' },
  ],
};
