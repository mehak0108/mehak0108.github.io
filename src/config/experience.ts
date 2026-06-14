// Work experience — edit this file to update your experience section

import type { Job, LeadershipRole } from '@/lib/types';

export const jobs: Job[] = [
  {
    company: 'Microsoft',
    role: 'Consultant',
    startDate: 'Jan 2026',
    endDate: 'Mar 2026',
    current: false,
    location: 'Seattle, USA',
    award: '', // TODO: update with correct award name if different
    description: [
      // TODO: replace with your exact resume bullets
      'Sized a $28B+ TAM across Financial Services, Manufacturing, and Telecom under ambiguity of a 2-team engagement, benchmarking data AI platform against competitors to define GTM entry points for Microsoft\'s National Resilience team',
    ],
  },
  {
    company: 'Mishipay',
    role: 'Product Manager',
    startDate: 'Jan 2023',
    endDate: 'Jul 2025',
    current: false,
    location: 'Bangalore, India',
    award: 'Value Guru Award (awarded to top 1% of performers)', // TODO: update with correct award name if different
    description: [
      // TODO: replace with your exact resume bullets
      'Defined product roadmaps, built cross-functional teams, and led end-to-end delivery for a global retail technology platform, navigating competing client priorities, resolving complex integration challenges, and consistently turning ambiguous situations into measurable outcomes for enterprise retailers across US, Canada, Middle East, and UK.',
    ],
  },
  {
    company: 'JP Morgan Chase',
    role: 'Software Engineer -> Associate',
    startDate: 'Aug 2020',
    endDate: 'Jan 2023',
    current: false,
    location: 'Bangalore, India',
    award: 'Peer to Peer award', // TODO: update with correct award name if different
    description: [
      // TODO: replace with your exact resume bullets
      'Owned end-to-end delivery of JP Morgan\'s internal service marketplace, unifying service provisioning for 50,000+ engineers, automating quality certification, and establishing the platform\'s first high-availability SLA across multi-cluster Kubernetes infrastructure.',
    ],
  },
  // TODO: add additional roles / internships from resume
];

export const leadership: LeadershipRole[] = [
  // TODO: add leadership roles from resume
];

export const volunteering: LeadershipRole[] = [
  // TODO: add volunteering roles from resume
];
