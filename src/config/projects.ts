// Edit this file to update your portfolio content

import type { Project } from '@/lib/types';

export const projects: Project[] = [
  {
    title: 'Case Study: Product Name',
    description: 'A short description of what you built, the problem you solved, and the outcome.',
    tags: ['Product Strategy', 'UX Research', 'Growth'],
    link: '/projects/sample-case-study',
    image: '/images/project-1.png',
    type: 'internal',
  },
  {
    title: 'External Project',
    description: 'A project hosted externally — links open in a new tab.',
    tags: ['Analytics', 'Data'],
    link: 'https://example.com',
    image: '/images/project-2.png',
    type: 'external',
  },
];
