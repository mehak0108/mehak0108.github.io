// Template — edit config/ files to update content, not this file

'use client';

import { siteConfig } from '@/config';

export function Achievements() {
  return (
    <section id="achievements" className="py-24 border-t border-gray-100 dark:border-gray-800">
      <div className="max-w-5xl mx-auto px-6">
        <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-12">Achievements</h2>
        <div className="grid sm:grid-cols-2 gap-6">
          {siteConfig.achievements.map((item, i) => (
            <div key={i} className="flex gap-4">
              {item.icon && (
                <span className="text-2xl shrink-0">{item.icon}</span>
              )}
              <div>
                <div className="flex items-center gap-3 mb-1">
                  <h3 className="font-semibold text-gray-900 dark:text-white">{item.title}</h3>
                  <span className="text-xs text-gray-400 dark:text-gray-500">{item.year}</span>
                </div>
                <p className="text-sm text-gray-600 dark:text-gray-300">{item.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
