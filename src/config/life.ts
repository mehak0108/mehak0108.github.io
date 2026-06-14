// Life section — edit this file to update photos, fun facts, and hobbies
// Photos render as a CSS columns masonry grid (3 cols)
// gradientPreset: placeholder color until you add a real image
//   g1=mauve  g2=teal  g3=navy  g4=amber  g5=coral  g6=green

import type { LifePhoto, LifeFact, LifeHobbies, LifeVideo } from '@/lib/types';

export const lifePhotos: LifePhoto[] = [
  {                                                                                                                                         
    caption: 'Paragliding',                                                                                                       
    sub: '',                                                                                                         
    size: 'tall',                                                                                                                           
    gradientPreset: 'g2',
    image: '/images/life/paragliding.jpg',                                                                       
  },
  {
    caption: 'Grace Hopper Conference',
    sub: '',
    size: 'tall',
    gradientPreset: 'g2',
    image: '/images/life/ghci.jpg', 
  },
  {
    caption: 'Badminton',
    sub: '',
    size: 'tall',
    gradientPreset: 'g1',
    image: '/images/life/badminton.jpg',
    objectPosition: 'top',
  },
  {
    caption: 'MC at Diwali',
    sub: '',
    size: 'tall',
    gradientPreset: 'g3',
    image: '/images/life/diwali.jpg',
    objectPosition: 'bottom'
  },
  {
    caption: 'Microsoft visit',
    sub: '',
    size: 'tall',
    gradientPreset: 'g4',
    image: '/images/life/microsoft.jpg',
    objectPosition: 'center',
  },
  {
    caption: 'Charity Club',
    sub: 'Raised $1M that night',
    size: 'tall',
    gradientPreset: 'g5',
    image: '/images/life/c4c.jpg',
    objectPosition: 'center',
  },
  {
    caption: 'First Halloween',
    sub: '',
    size: 'tall',
    gradientPreset: 'g6',
    image: '/images/life/halloween.jpg',
    // objectPosition: 'center',
  },
];

export const lifeFacts: LifeFact[] = [
  { emoji: '🎭', text: 'Played lead in a mime act about dowry — got a standing ovation' },
  { emoji: '🏸', text: 'Went from fearing ridicule to 2,000 badminton games in 3 years' },
  { emoji: '🪂', text: 'Scuba diving, paragliding, bungee jumping — fueled by adrenaline' },
  { emoji: '💃', text: 'Dancing since age 4 — one video hit 26k Instagram views' },
  { emoji: '👯', text: 'Twin sister: same competitions, same college, same everything' },
  { emoji: '📚', text: 'Currently reading All the Light We Cannot See — previously The Alchemist, To Kill a Mockingbird' },
  { emoji: '🎹', text: 'Hated the band uniform, played piano and flute anyway' },
  { emoji: '😂', text: 'Too scared to watch Korean horror alone, I\'ve dragged three reluctant friends into becoming fans' },
];

export const lifeHobbies: LifeHobbies = {
  title: 'What I do outside work',
  items: ['Travel', 'Photography', 'Urban Design', 'Reading', 'TODO: add more'],
};

export const lifeVideos: LifeVideo[] = [
  {
    caption: '',
    sub: '',
    youtubeId: 'F-FJD5aVx54',
    size: 'tall',
  },
];
