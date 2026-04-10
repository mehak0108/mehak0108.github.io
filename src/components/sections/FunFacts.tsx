// Template — edit config/ files to update content, not this file

'use client';

import { siteConfig } from '@/config';

export function FunFacts() {
  return (
    <section id="fun-facts" className="py-24 border-t border-gray-100 dark:border-gray-800">
      <div className="max-w-5xl mx-auto px-6">
        <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-12">Fun Facts</h2>
        <ul className="space-y-3">
          {siteConfig.funFacts.map((fact, i) => (
            <li key={i} className="flex items-start gap-3">
              <span className="text-gray-300 dark:text-gray-600 font-mono text-sm pt-0.5">
                {String(i + 1).padStart(2, '0')}
              </span>
              <p className="text-gray-700 dark:text-gray-300">{fact}</p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
