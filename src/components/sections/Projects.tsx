// Template — edit config/ files to update content, not this file
// linkType: 'internal' → Next.js Link to /projects/[slug]; anything else → <a target="_blank">

'use client';

import Link from 'next/link';
import { projects } from '@/config/projects';
import { Card } from '@/components/ui/Card';
import { Tag } from '@/components/ui/Tag';

export function Projects() {
  return (
    <section id="projects" className="py-24 border-t border-gray-100 dark:border-gray-800">
      <div className="max-w-5xl mx-auto px-6">
        <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-12">Projects</h2>
        <div className="grid sm:grid-cols-2 gap-6">
          {projects.map((project, i) => {
            const cardContent = (
              <Card className="h-full flex flex-col hover:border-gray-400 dark:hover:border-gray-600 transition-colors cursor-pointer">
                <h3 className="font-semibold text-gray-900 dark:text-white mb-2">{project.title}</h3>
                <p className="text-sm text-gray-600 dark:text-gray-300 mb-4 flex-1 leading-relaxed">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <Tag key={tag} label={tag} />
                  ))}
                </div>
                <p className="mt-4 text-xs text-gray-400 dark:text-gray-500">
                  {project.type === 'internal' ? 'Case Study →' : 'External Link ↗'}
                </p>
              </Card>
            );

            return project.type === 'internal' ? (
              <Link key={i} href={project.link} className="block">
                {cardContent}
              </Link>
            ) : (
              <a key={i} href={project.link} target="_blank" rel="noopener noreferrer" className="block">
                {cardContent}
              </a>
            );
          })}
        </div>
      </div>
    </section>
  );
}
