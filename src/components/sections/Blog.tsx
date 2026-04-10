// Template — edit config/ files to update content, not this file

'use client';

import { posts } from '@/config/blog';

export function Blog() {
  return (
    <section id="blog" className="py-24 border-t border-gray-100 dark:border-gray-800">
      <div className="max-w-5xl mx-auto px-6">
        <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-12">Writing</h2>
        <div className="space-y-6">
          {posts.map((post, i) => (
            <a
              key={i}
              href={post.link}
              target="_blank"
              rel="noopener noreferrer"
              className="flex flex-col sm:flex-row sm:items-start gap-2 sm:gap-8 group"
            >
              <time className="text-sm text-gray-400 dark:text-gray-500 shrink-0 pt-0.5">
                {new Date(post.date).toLocaleDateString('en-US', { year: 'numeric', month: 'short' })}
              </time>
              <div>
                <h3 className="font-medium text-gray-900 dark:text-white group-hover:underline">
                  {post.title} ↗
                </h3>
                <p className="text-sm text-gray-500 dark:text-gray-400 mt-1">{post.excerpt}</p>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
