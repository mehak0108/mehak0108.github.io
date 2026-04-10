// Template — edit config/ files to update content, not this file

'use client';

import { leadership, volunteering } from '@/config/experience';

export function Leadership() {
  return (
    <section id="leadership" className="py-24 border-t border-gray-100 dark:border-gray-800">
      <div className="max-w-5xl mx-auto px-6">
        <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-12">Leadership & Volunteering</h2>

        {leadership.length > 0 && (
          <div className="mb-12">
            <h3 className="text-sm font-semibold text-gray-500 dark:text-gray-400 uppercase tracking-wide mb-6">
              Leadership
            </h3>
            <div className="space-y-6">
              {leadership.map((role, i) => (
                <div key={i} className="grid sm:grid-cols-[200px_1fr] gap-2 sm:gap-8">
                  <p className="text-sm text-gray-500 dark:text-gray-400 pt-1">
                    {role.startDate} — {role.endDate}
                  </p>
                  <div>
                    <h4 className="font-semibold text-gray-900 dark:text-white">{role.role}</h4>
                    <p className="text-gray-500 dark:text-gray-400 mb-2">{role.organization}</p>
                    <p className="text-sm text-gray-600 dark:text-gray-300">{role.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {volunteering.length > 0 && (
          <div>
            <h3 className="text-sm font-semibold text-gray-500 dark:text-gray-400 uppercase tracking-wide mb-6">
              Volunteering
            </h3>
            <div className="space-y-6">
              {volunteering.map((role, i) => (
                <div key={i} className="grid sm:grid-cols-[200px_1fr] gap-2 sm:gap-8">
                  <p className="text-sm text-gray-500 dark:text-gray-400 pt-1">
                    {role.startDate} — {role.endDate}
                  </p>
                  <div>
                    <h4 className="font-semibold text-gray-900 dark:text-white">{role.role}</h4>
                    <p className="text-gray-500 dark:text-gray-400 mb-2">{role.organization}</p>
                    <p className="text-sm text-gray-600 dark:text-gray-300">{role.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
