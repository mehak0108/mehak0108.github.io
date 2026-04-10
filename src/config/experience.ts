// Edit this file to update your portfolio content

import type { Job, LeadershipRole, VolunteerRole } from '@/lib/types';

export const jobs: Job[] = [
  {
    company: 'Company Name',
    role: 'Product Manager',
    startDate: 'Jan 2023',
    endDate: 'Present',
    location: 'City, State',
    description: [
      'Led cross-functional team of X to ship [feature], resulting in [outcome].',
      'Increased [metric] by [%] through [initiative].',
      'Defined and prioritized roadmap for [product area].',
    ],
  },
  {
    company: 'Previous Company',
    role: 'Associate Product Manager',
    startDate: 'Jun 2021',
    endDate: 'Dec 2022',
    location: 'City, State',
    description: [
      'Launched [feature] used by [N] users.',
      'Partnered with engineering to reduce [metric] by [%].',
    ],
  },
];

export const leadership: LeadershipRole[] = [
  {
    organization: 'Organization Name',
    role: 'President',
    startDate: 'Sep 2022',
    endDate: 'May 2023',
    description: 'Led a team of N members, organized [events/initiatives], grew membership by X%.',
  },
];

export const volunteering: VolunteerRole[] = [
  {
    organization: 'Nonprofit Name',
    role: 'Volunteer',
    startDate: 'Jun 2021',
    endDate: 'Aug 2021',
    description: 'Contributed to [cause/project], [what you did].',
  },
];
