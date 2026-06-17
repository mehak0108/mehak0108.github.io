// Personal info — edit this file to update your portfolio content

import type { SiteConfig } from '@/lib/types';


export const siteConfig: SiteConfig = {
  name: 'Mehak Mittal',
  title: 'Product Manager',
  tagline: 'Curious builder, systems thinker.',
  bio: [
    'I build things, products, processes, whatever\'s needed, and I\'m usually the one fixing what\'s broken along the way. IIT Roorkee for engineering, JP Morgan and MishiPay for five years of shipping real products, and now Foster School of Business for an MBA in product strategy and AI.',
    "I've spent that time doing the less glamorous parts of product work, untangling integration problems, managing client priorities that don't agree with each other, getting systems to stop breaking. The common thread is that I like being handed a problem nobody's solved cleanly yet.",
  ],
  email: 'memittal@uw.edu',
  formspreeId: 'mgobrvvr', // Formspree form ID — from formspree.io/f/<id>
  location: 'Seattle, WA',
  currentStatus: 'MBA · UW Foster',
  openTo: 'PM roles · Spring / Summer 2027',
  socials: {
    linkedin: 'https://linkedin.com/in/mehakmittal1', // TODO: update with real URL
    github: 'https://github.com/mehak0108',         // TODO: update with real URL
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
    { value: '5+', label: 'Years in Tech' },
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
