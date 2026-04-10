// Template — edit config/ files to update content, not this file

'use client';

import { skills } from '@/config/skills';
import { Tag } from '@/components/ui/Tag';

export function Skills() {
  return (
    <section id="skills" className="py-24 border-t border-gray-100 dark:border-gray-800">
      <div className="max-w-5xl mx-auto px-6">
        <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-12">Skills</h2>
        <div className="grid sm:grid-cols-2 gap-10">
          {skills.map((group, i) => (
            <div key={i}>
              <h3 className="text-sm font-semibold text-gray-500 dark:text-gray-400 uppercase tracking-wide mb-4">
                {group.category}
              </h3>
              <div className="flex flex-wrap gap-2">
                {group.items.map((skill) => (
                  <Tag key={skill} label={skill} />
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
