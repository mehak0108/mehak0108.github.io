import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import type { CaseStudyFrontmatter } from '@/lib/types';

const CONTENT_DIR = path.join(process.cwd(), 'src/content/projects');

export async function generateStaticParams() {
  const files = fs.readdirSync(CONTENT_DIR).filter((f) => f.endsWith('.mdx'));
  return files.map((file) => ({ slug: file.replace(/\.mdx$/, '') }));
}

export default async function CaseStudyPage({
  params,
}: {
  params: { slug: string };
}) {
  const filePath = path.join(CONTENT_DIR, `${params.slug}.mdx`);
  const rawFile = fs.readFileSync(filePath, 'utf-8');
  const { data } = matter(rawFile);
  const fm = data as CaseStudyFrontmatter;

  // Dynamic import: webpack bundles all MDX files in the content directory at build time
  const { default: MDXContent } = await import(
    `@/content/projects/${params.slug}.mdx`
  );

  return (
    <main className="mx-auto max-w-3xl px-6 py-20">
      <header className="mb-12">
        <h1 className="text-4xl font-bold mb-4">{fm.title}</h1>
        {fm.summary && (
          <p className="text-lg mb-6">{fm.summary}</p>
        )}
        <div className="flex flex-wrap gap-2 mb-4">
          {fm.tags?.map((tag) => (
            <span
              key={tag}
              className="text-sm bg-gray-100 dark:bg-gray-800 px-3 py-1 rounded-full"
            >
              {tag}
            </span>
          ))}
        </div>
        {fm.metrics && (
          <div className="flex flex-wrap gap-4 mb-4">
            {fm.metrics.map((metric) => (
              <span
                key={metric}
                className="text-sm font-semibold text-green-600 dark:text-green-400"
              >
                {metric}
              </span>
            ))}
          </div>
        )}
        {fm.date && (
          <time className="text-sm text-gray-500">{fm.date}</time>
        )}
      </header>

      <article className="prose dark:prose-invert max-w-none">
        <MDXContent />
      </article>
    </main>
  );
}
