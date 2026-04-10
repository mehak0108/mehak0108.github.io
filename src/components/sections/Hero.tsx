// Template — edit config/ files to update content, not this file

'use client';

import { siteConfig } from '@/config';
import { Button } from '@/components/ui/Button';

export function Hero() {
  return (
    <section id="hero" className="min-h-screen flex items-center pt-16">
      <div className="max-w-5xl mx-auto px-6 py-24">
        <p className="text-sm font-medium text-gray-500 dark:text-gray-400 mb-4 tracking-wide uppercase">
          Hello, I&apos;m
        </p>
        <h1 className="text-5xl sm:text-7xl font-bold text-gray-900 dark:text-white mb-4 leading-tight">
          {siteConfig.name}
        </h1>
        <h2 className="text-2xl sm:text-3xl font-medium text-gray-500 dark:text-gray-400 mb-6">
          {siteConfig.title}
        </h2>
        <p className="text-lg text-gray-600 dark:text-gray-300 max-w-xl mb-10 leading-relaxed">
          {siteConfig.tagline}
        </p>
        <div className="flex flex-wrap gap-3">
          <Button href={siteConfig.resume} target="_blank" rel="noopener noreferrer">
            View Resume
          </Button>
          <Button href="#contact" variant="outline">
            Get in Touch
          </Button>
          {siteConfig.socials.linkedin && (
            <Button href={siteConfig.socials.linkedin} target="_blank" rel="noopener noreferrer" variant="outline">
              LinkedIn
            </Button>
          )}
          {siteConfig.socials.github && (
            <Button href={siteConfig.socials.github} target="_blank" rel="noopener noreferrer" variant="outline">
              GitHub
            </Button>
          )}
        </div>
      </div>
    </section>
  );
}
