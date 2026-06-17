// Academic history — edit this file to update the Academics section

import type { AcademicEntry } from '@/lib/types';

export const academics: AcademicEntry[] = [
  {
    institution: 'UNIVERSITY OF WASHINGTON - Foster School of Business',
    degree: 'MBA',
    field: 'Master of Business Administration',
    location: 'Seattle, USA',
    startDate: '2025',
    endDate: '2027',
    current: true,
    bullets: [
      // TODO: add clubs, honours, leadership roles at ISB
      "Fritzky Leadership Fellow, Forte Fellow",
      'Co-President: Diversity in Business, VP Entrepreneurship & Venture Capital, VP Technology Club, Auction VP: Challenge for charity',
      'MBA Ambassador, Member: AI Data Analytics Club, Consulting Club'
    ],
  },
  {
    institution: 'Indian Institute of Technology (IIT Roorkee)',
    degree: 'Bachelor of Technology',
    field: 'Major in Chemical Engineering, Minor in Computer Science',
    location: 'Roorkee, India',
    startDate: '2016',
    endDate: '2020',
    current: false,
    bullets: [
      // TODO: add clubs, awards, GPA (optional), president roles
      'MCM Scholar',
      'Student Mentorship Program, Unnat Bharat Abhiyan, National service scheme',
      'Hackathon Winner: Fidelity Investments Codeathon19 - 1st place, LinkedIn - Finalist'
    ],
  },
];
