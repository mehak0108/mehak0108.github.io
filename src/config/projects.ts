// Projects — edit this file to update your projects section
// featured: true → appears in the AI Agents featured cards (large layout)
// category drives the filter tabs: 'product' | 'ops' | 'ml' | 'finance' | 'ai'
//
// type: 'internal' → links to /projects/[slug] (needs a matching MDX file in src/content/projects/)
// type: 'external' → opens link in a new tab (use for Notion docs, decks, GitHub repos, etc.)

import type { Project } from '@/lib/types';

export const projects: Project[] = [
  // ── Featured projects (large cards, shown first) ───────────────────────
  {
    title: 'AI Compliance Automation Engine',
    company: 'JP Morgan Chase',
    description: 'Built an ML-powered engine that auto-flags high-risk transactions and routes edge cases to analysts, replacing a fully manual 4-day batch review process.',
    tags: ['AI/ML', 'Product Strategy', 'Compliance'],
    category: 'ai',
    link: '/projects/ai-compliance-engine',
    type: 'internal',
    featured: true,
    metrics: [
      { value: '40%', label: 'Faster reviews' },
      { value: '28%', label: 'Fewer false positives' },
      { value: '3', label: 'Business lines' },
    ],
  },
  {
    title: 'Payments Operations Dashboard',
    company: 'JP Morgan Chase',
    description: 'Designed and shipped a real-time ops dashboard that gave the payments team full visibility into transaction health, SLA breaches, and exception queues.',
    tags: ['Operations', 'Data', 'Tooling'],
    category: 'ops',
    link: '/projects/payments-ops-dashboard',
    type: 'internal',
    featured: true,
    metrics: [
      { value: '2×', label: 'Faster resolution' },
      { value: '60%', label: 'Fewer escalations' },
    ],
  },

  // ── More work (small cards, filterable) ────────────────────────────────
  // TODO: add your remaining projects here
  {
    title: 'Financial Modeling Tool',
    company: 'JP Morgan Chase',
    description: 'Built an internal Retool app for the finance team to run scenario models without engineering dependency.',
    tags: ['Finance', 'Retool', 'No-code'],
    category: 'finance',
    link: '/projects/financial-modeling-tool',
    type: 'internal',
    featured: false,
    metrics: [
      { value: '80%', label: 'Less eng time' },
    ],
  },
  {
    title: 'LLM Document Summarizer',
    company: 'JP Morgan Chase',
    description: 'Prototyped an LLM pipeline to auto-summarize lengthy compliance documents for analyst review.',
    tags: ['LLMs', 'Python', 'AI Agents'],
    category: 'ai',
    link: '/projects/llm-doc-summarizer',
    type: 'internal',
    featured: false,
    metrics: [
      { value: '5×', label: 'Faster doc review' },
    ],
  },
  // TODO: add more projects — data science, PM work, ISB projects, etc.
];
