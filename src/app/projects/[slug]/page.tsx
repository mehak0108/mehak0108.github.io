import fs from 'fs';
import path from 'path';
import Link from 'next/link';
import matter from 'gray-matter';
import type { CaseStudyFrontmatter } from '@/lib/types';
import { projects } from '@/config/projects';

const CONTENT_DIR = path.join(process.cwd(), 'src/content/projects');

export async function generateStaticParams() {
  if (!fs.existsSync(CONTENT_DIR)) return [];
  const files = fs.readdirSync(CONTENT_DIR).filter((f) => f.endsWith('.mdx'));
  return files.map((file) => ({ slug: file.replace(/\.mdx$/, '') }));
}

function ArrowLeftIcon() {
  return (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <line x1="19" y1="12" x2="5" y2="12"/>
      <polyline points="12 19 5 12 12 5"/>
    </svg>
  );
}

function ArrowRightIcon() {
  return (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <line x1="5" y1="12" x2="19" y2="12"/>
      <polyline points="12 5 19 12 12 19"/>
    </svg>
  );
}

function CalendarIcon() {
  return (
    <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <rect x="3" y="4" width="18" height="18" rx="2" ry="2"/>
      <line x1="16" y1="2" x2="16" y2="6"/>
      <line x1="8" y1="2" x2="8" y2="6"/>
      <line x1="3" y1="10" x2="21" y2="10"/>
    </svg>
  );
}

function UsersIcon() {
  return (
    <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/>
      <circle cx="9" cy="7" r="4"/>
      <path d="M23 21v-2a4 4 0 0 0-3-3.87"/>
      <path d="M16 3.13a4 4 0 0 1 0 7.75"/>
    </svg>
  );
}

function BriefcaseIcon() {
  return (
    <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <rect x="2" y="7" width="20" height="14" rx="2" ry="2"/>
      <path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"/>
    </svg>
  );
}

function ExternalLinkIcon() {
  return (
    <svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"/>
      <polyline points="15 3 21 3 21 9"/>
      <line x1="10" y1="14" x2="21" y2="3"/>
    </svg>
  );
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

  const { default: MDXContent } = await import(
    `@/content/projects/${params.slug}.mdx`
  );

  const internalProjects = projects.filter(p => p.type === 'internal');
  const currentIndex = internalProjects.findIndex(p => p.link.endsWith(params.slug));
  const nextProject = internalProjects[(currentIndex + 1) % internalProjects.length];

  return (
    <div style={{ background: 'var(--color-bg)', minHeight: '100vh', fontFamily: 'var(--font-inter), Inter, sans-serif' }}>

      {/* Top bar — matches main navbar style */}
      <div style={{
        position: 'sticky', top: 0, zIndex: 50,
        background: 'rgba(250,247,242,0.96)',
        backdropFilter: 'blur(10px)',
        WebkitBackdropFilter: 'blur(10px)',
        borderBottom: '0.5px solid var(--color-border)',
        height: '56px',
        display: 'flex', alignItems: 'center',
      }}>
        <div style={{ maxWidth: '1200px', width: '100%', margin: '0 auto', padding: '0 120px', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
          <Link
            href="/#projects"
            style={{ display: 'flex', alignItems: 'center', gap: '7px', fontSize: '13px', fontWeight: 500, color: 'var(--color-body)', textDecoration: 'none' }}
          >
            <ArrowLeftIcon /> Back
          </Link>
          <p style={{ fontSize: '12px', color: 'var(--color-muted)' }}>
            Portfolio <span style={{ color: 'var(--color-border)', margin: '0 6px' }}>·</span>
            <span style={{ color: 'var(--color-accent)', fontWeight: 500 }}>{fm.title}</span>
          </p>
        </div>
      </div>

      {/* Hero */}
      <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '56px 120px 0' }}>

        {/* Company + type pill row */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '20px' }}>
          <span style={{ display: 'inline-flex', alignItems: 'center', gap: '5px', background: 'rgba(255,255,255,0.8)', border: '0.5px solid var(--color-border-strong)', borderRadius: '50px', padding: '4px 14px', fontSize: '12px', fontWeight: 500, color: 'var(--color-accent)' }}>
            {fm.company}
          </span>
          {fm.tags && fm.tags[0] && (
            <span style={{ display: 'inline-flex', alignItems: 'center', background: 'var(--color-surface)', border: '0.5px solid var(--color-border)', borderRadius: '50px', padding: '4px 14px', fontSize: '12px', color: 'var(--color-muted)' }}>
              {fm.tags[0]}
            </span>
          )}
        </div>

        {/* Title */}
        <h1 style={{
          fontFamily: 'var(--font-playfair), "Playfair Display", serif',
          fontStyle: 'italic',
          fontWeight: 900,
          fontSize: 'clamp(32px, 5vw, 56px)',
          color: 'var(--color-heading)',
          lineHeight: 1.1,
          marginBottom: '20px',
          maxWidth: '800px',
        }}>
          {fm.title}
        </h1>

        {/* Meta row */}
        <div style={{ display: 'flex', gap: '24px', flexWrap: 'wrap', marginBottom: '36px' }}>
          {fm.role && (
            <span style={{ display: 'flex', alignItems: 'center', gap: '6px', fontSize: '13px', color: 'var(--color-body)' }}>
              <span style={{ color: 'var(--color-accent)' }}><BriefcaseIcon /></span> {fm.role}
            </span>
          )}
          {fm.startDate && (
            <span style={{ display: 'flex', alignItems: 'center', gap: '6px', fontSize: '13px', color: 'var(--color-body)' }}>
              <span style={{ color: 'var(--color-accent)' }}><CalendarIcon /></span> {fm.startDate} — {fm.endDate}
            </span>
          )}
          {fm.teamSize && (
            <span style={{ display: 'flex', alignItems: 'center', gap: '6px', fontSize: '13px', color: 'var(--color-body)' }}>
              <span style={{ color: 'var(--color-accent)' }}><UsersIcon /></span> {fm.teamSize} person team
            </span>
          )}
        </div>

        {/* Metrics bar */}
        {fm.metrics && fm.metrics.length > 0 && (
          <div style={{ display: 'flex', border: '1px solid var(--color-border)', borderRadius: '12px', background: '#fff', overflow: 'hidden', marginBottom: '36px', boxShadow: '0 2px 12px rgba(43,108,176,0.07)' }}>
            {fm.metrics.map((m, i) => (
              <div key={i} style={{ flex: 1, padding: '20px 24px', borderRight: i < fm.metrics.length - 1 ? '1px solid var(--color-border)' : 'none', textAlign: 'center' }}>
                <p style={{ fontSize: '32px', fontWeight: 900, color: 'var(--color-accent)', lineHeight: 1, fontFamily: 'var(--font-inter), Inter, sans-serif' }}>{m.value}</p>
                <p style={{ fontSize: '11px', textTransform: 'uppercase', color: 'var(--color-muted)', letterSpacing: '0.08em', marginTop: '6px' }}>{m.label}</p>
              </div>
            ))}
          </div>
        )}

        {/* Cover image / placeholder */}
        <div style={{ width: '100%', height: '320px', borderRadius: '14px', overflow: 'hidden', background: 'linear-gradient(135deg, var(--color-heading) 0%, #1E3A5F 100%)', marginBottom: '0' }}>
          {fm.coverImage && (
            <img src={fm.coverImage} alt={fm.title} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
          )}
        </div>
      </div>

      {/* Content */}
      <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '48px 120px 64px', display: 'grid', gridTemplateColumns: '1fr 280px', gap: '64px', alignItems: 'start' }}>

        {/* Main prose */}
        <div>
          {fm.summary && (
            <p style={{ fontSize: '16px', color: 'var(--color-body)', lineHeight: 1.75, marginBottom: '36px', paddingBottom: '36px', borderBottom: '0.5px solid var(--color-border)', fontWeight: 400 }}>
              {fm.summary}
            </p>
          )}

          <article style={{ fontSize: '15px', color: 'var(--color-body)', lineHeight: 1.8 }} className="mdx-prose">
            <MDXContent />
          </article>
        </div>

        {/* Sidebar */}
        <div style={{ position: 'sticky', top: '72px' }}>
          {/* Tags */}
          {fm.tags && fm.tags.length > 0 && (
            <div style={{ marginBottom: '28px' }}>
              <p style={{ fontSize: '10px', textTransform: 'uppercase', letterSpacing: '0.1em', color: 'var(--color-muted)', marginBottom: '10px' }}>Tags</p>
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '6px' }}>
                {fm.tags.map(tag => (
                  <span key={tag} style={{ fontSize: '12px', color: 'var(--color-body)', border: '0.5px solid var(--color-border)', background: '#fff', borderRadius: '50px', padding: '4px 12px' }}>
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          )}

          {/* External links */}
          {fm.externalLinks && fm.externalLinks.length > 0 && (
            <div style={{ marginBottom: '28px' }}>
              <p style={{ fontSize: '10px', textTransform: 'uppercase', letterSpacing: '0.1em', color: 'var(--color-muted)', marginBottom: '10px' }}>Links</p>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
                {fm.externalLinks.map(link => (
                  <a
                    key={link.url}
                    href={link.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{ display: 'inline-flex', alignItems: 'center', gap: '6px', fontSize: '13px', fontWeight: 500, color: 'var(--color-accent)', textDecoration: 'none' }}
                  >
                    <ExternalLinkIcon /> {link.label}
                  </a>
                ))}
              </div>
            </div>
          )}

          {/* Next project */}
          {nextProject && nextProject.link !== `/${params.slug}` && (
            <div style={{ borderTop: '0.5px solid var(--color-border)', paddingTop: '20px' }}>
              <p style={{ fontSize: '10px', textTransform: 'uppercase', letterSpacing: '0.1em', color: 'var(--color-muted)', marginBottom: '10px' }}>Next project</p>
              <Link
                href={nextProject.link}
                style={{ display: 'flex', alignItems: 'center', gap: '6px', fontSize: '13px', fontWeight: 600, color: 'var(--color-accent)', textDecoration: 'none' }}
              >
                {nextProject.title} <ArrowRightIcon />
              </Link>
            </div>
          )}
        </div>
      </div>

      {/* Bottom bar */}
      <div style={{ borderTop: '0.5px solid var(--color-border)', background: '#fff' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '20px 120px', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
          <Link
            href="/#projects"
            style={{ display: 'flex', alignItems: 'center', gap: '7px', fontSize: '13px', fontWeight: 500, color: 'var(--color-body)', textDecoration: 'none' }}
          >
            <ArrowLeftIcon /> Back to portfolio
          </Link>
          <span style={{ fontSize: '12px', color: 'var(--color-muted)' }}>© 2026 Mehak Mittal</span>
        </div>
      </div>
    </div>
  );
}
