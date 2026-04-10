// Template — edit config/ files to update content, not this file

'use client';

import { siteConfig } from '@/config';
import { ThemeToggle } from './ThemeToggle';

const NAV_LINKS = ['About', 'Experience', 'Projects', 'Skills', 'Blog', 'Contact'];

export function Navbar() {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white/80 dark:bg-gray-950/80 backdrop-blur-sm border-b border-gray-200 dark:border-gray-800">
      <div className="max-w-5xl mx-auto px-6 h-16 flex items-center justify-between">
        <span className="font-bold text-gray-900 dark:text-white">{siteConfig.name}</span>
        <div className="flex items-center gap-1">
          <div className="hidden sm:flex items-center gap-1 mr-2">
            {NAV_LINKS.map((section) => (
              <a
                key={section}
                href={`#${section.toLowerCase()}`}
                className="px-3 py-1.5 text-sm text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white rounded-md hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
              >
                {section}
              </a>
            ))}
          </div>
          <ThemeToggle />
        </div>
      </div>
    </nav>
  );
}
