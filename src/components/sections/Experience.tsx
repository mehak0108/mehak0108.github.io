// Template — edit config/ files to update content, not this file

'use client';

import { jobs } from '@/config/experience';

export function Experience() {
  return (
    <section id="experience" className="py-24 border-t border-gray-100 dark:border-gray-800">
      <div className="max-w-5xl mx-auto px-6">
        <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-12">Experience</h2>
        <div className="space-y-10">
          {jobs.map((job, i) => (
            <div key={i} className="grid sm:grid-cols-[200px_1fr] gap-2 sm:gap-8">
              <div className="text-sm text-gray-500 dark:text-gray-400 pt-1">
                <p>{job.startDate} — {job.endDate}</p>
                {job.location && <p className="mt-1">{job.location}</p>}
              </div>
              <div>
                <h3 className="font-semibold text-gray-900 dark:text-white">{job.role}</h3>
                <p className="text-gray-500 dark:text-gray-400 mb-3">{job.company}</p>
                <ul className="space-y-1.5">
                  {job.description.map((point, j) => (
                    <li key={j} className="text-sm text-gray-600 dark:text-gray-300 flex gap-2">
                      <span className="mt-1.5 w-1 h-1 rounded-full bg-gray-400 dark:bg-gray-500 shrink-0" />
                      {point}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
