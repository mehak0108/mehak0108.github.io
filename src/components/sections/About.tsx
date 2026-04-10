// Template — edit config/ files to update content, not this file

'use client';

import { siteConfig } from '@/config';

export function About() {
  return (
    <section id="about" className="py-24 border-t border-gray-100 dark:border-gray-800">
      <div className="max-w-5xl mx-auto px-6">
        <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-12">About</h2>
        <div className="max-w-2xl">
          <p className="text-lg text-gray-600 dark:text-gray-300 leading-relaxed">
            {siteConfig.bio}
          </p>
        </div>
      </div>
    </section>
  );
}
