// Template — edit config/ files to update content, not this file

'use client';

import { siteConfig } from '@/config';
import { Button } from '@/components/ui/Button';

export function Contact() {
  return (
    <section id="contact" className="py-24 border-t border-gray-100 dark:border-gray-800">
      <div className="max-w-5xl mx-auto px-6">
        <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">Get in Touch</h2>
        <p className="text-gray-500 dark:text-gray-400 mb-10 max-w-md">
          Have a role, project, or just want to say hello? My inbox is open.
        </p>
        <div className="flex flex-wrap gap-3">
          <Button href={`mailto:${siteConfig.email}`}>
            {siteConfig.email}
          </Button>
          {siteConfig.socials.linkedin && (
            <Button href={siteConfig.socials.linkedin} target="_blank" rel="noopener noreferrer" variant="outline">
              LinkedIn
            </Button>
          )}
          {siteConfig.socials.twitter && (
            <Button href={siteConfig.socials.twitter} target="_blank" rel="noopener noreferrer" variant="outline">
              Twitter
            </Button>
          )}
          {siteConfig.socials.github && (
            <Button href={siteConfig.socials.github} target="_blank" rel="noopener noreferrer" variant="outline">
              GitHub
            </Button>
          )}
        </div>
      </div>
      <div className="max-w-5xl mx-auto px-6 mt-24 pt-8 border-t border-gray-100 dark:border-gray-800">
        <p className="text-sm text-gray-400 dark:text-gray-600">
          © {new Date().getFullYear()} {siteConfig.name}
        </p>
      </div>
    </section>
  );
}
