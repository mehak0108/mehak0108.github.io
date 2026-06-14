// Competitions & awards — edit this file to update the Competitions section
// result: 'winner' → mauve border + filled badge; 'finalist' / 'participant' → subtle badge
// image: optional — if provided, card shows a cover area; if absent, compact icon+badge layout
// gradientPreset: color of the cover area if no image — 'gold' | 'mauve' | 'slate' | 'teal' | 'rose' | 'navy' | 'amber' | 'green'

import type { Competition } from '@/lib/types';

export const competitions: Competition[] = [
  {
    title: 'TODO: Hackathon Name',
    organization: 'LinkedIn',
    type: 'hackathon',
    result: 'winner',
    resultLabel: '1st Place',
    year: '2024',
    description: 'TODO: Brief description of what you built and why you won.',
    image: undefined,
    gradientPreset: 'gold',
  },
  {
    title: 'Value Guru Award',
    organization: 'TODO: Organization name',
    type: 'award',
    result: 'winner',
    resultLabel: 'Awardee',
    year: '2024',
    description: 'TODO: Brief description of what this award recognised.',
    image: undefined,
    gradientPreset: 'amber',
  },
  // TODO: add more competitions, case competitions, fellowships, awards
];
