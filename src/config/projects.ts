// Projects — edit this file to update your projects section
// featured: true → appears in the AI Agents featured cards (large layout)
// category drives the filter tabs: 'product' | 'ops' | 'ml' | 'finance' | 'ai'
//
// type: 'internal' → links to /projects/[slug] (needs a matching MDX file in src/content/projects/)
// type: 'external' → opens link in a new tab (use for Notion docs, decks, GitHub repos, etc.)

import type { Project } from '@/lib/types';

export const projects: Project[] = [
  {
  title: 'Platform Cost Attribution Initiative',
  company: 'JP Morgan Chase',
  description: 'Designed a structured naming standard enforced at the platform gate across private cloud platforms, fixing workload cost attribution and turning a 22-day manual billing reconciliation into a 4-day automated process.',
  tags: ['Platform Product', 'FinOps', 'Infrastructure', 'Governance'],
  category: 'product',
  link: '/projects/jrn-resource-naming',
  type: 'internal',
  featured: true,
  metrics: [
    { value: '$3.8M', label: 'Charges correctly allocated' },
    { value: '97%', label: 'Attribution coverage (from 61%)' },
    { value: '82%', label: 'Faster billing cycle' },
  ],
  },
  {
  title: 'Automated Fault Detection & Alerting',
  company: 'JP Morgan Chase',
  description: 'Designed a two-layer observability system, synthetic canary testing plus conditional alert routing, that pinpoints whether a marketplace failure is a platform or service-provider fault in minutes instead of hours.',
  tags: ['Platform Product', 'Observability', 'Infrastructure', 'Incident Response'],
  category: 'product',
  link: '/projects/osb-observability',
  type: 'internal',
  featured: false,
  metrics: [
    { value: '97%', label: 'Faster fault detection' },
    { value: '75%', label: 'Faster resolution' },
    { value: '650 hrs', label: 'Triage time reclaimed/yr' },
  ],
},
  {
  title: 'Self-Serve Vendor Certification System',
  company: 'JP Morgan Chase',
  description: 'Designed and built an async certification suite that every service provider must pass before listing on the internal marketplace — testing the full OSB lifecycle, enforcing compliance, and making onboarding fully self-serve.',
  tags: ['Platform Product', 'Developer Experience', 'Compliance', 'Infrastructure'],
  category: 'product',
  link: '/projects/osb-certification',
  type: 'internal',
  featured: false,
  metrics: [
    { value: '85%', label: 'Faster time-to-list' },
    { value: '12 wks', label: 'Reclaimed per provider' },
  ],
},
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
  // {
  //   title: 'Payments Operations Dashboard',
  //   company: 'JP Morgan Chase',
  //   description: 'Designed and shipped a real-time ops dashboard that gave the payments team full visibility into transaction health, SLA breaches, and exception queues.',
  //   tags: ['Operations', 'Data', 'Tooling'],
  //   category: 'ops',
  //   link: '/projects/payments-ops-dashboard',
  //   type: 'internal',
  //   featured: true,
  //   metrics: [
  //     { value: '2×', label: 'Faster resolution' },
  //     { value: '60%', label: 'Fewer escalations' },
  //   ],
  // },

  // {
  //   title: 'Financial Modeling Tool',
  //   company: 'JP Morgan Chase',
  //   description: 'Built an internal Retool app for the finance team to run scenario models without engineering dependency.',
  //   tags: ['Finance', 'Retool', 'No-code'],
  //   category: 'finance',
  //   link: '/projects/financial-modeling-tool',
  //   type: 'internal',
  //   featured: false,
  //   metrics: [
  //     { value: '80%', label: 'Less eng time' },
  //   ],
  // },
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
];
