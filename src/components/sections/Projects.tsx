'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { projects } from '@/config/projects';
import type { ProjectCategory } from '@/lib/types';

type FilterValue = 'all' | ProjectCategory;

const FILTERS: { label: string; value: FilterValue }[] = [
  { label: 'All', value: 'all' },
  { label: 'Product / PM', value: 'product' },
  { label: 'Strategy', value: 'strategy' },
  { label: 'Process & Ops', value: 'ops' },
  { label: 'ML / Data', value: 'ml' },
  { label: 'Finance', value: 'finance' },
];


function SmallCard({ project }: { project: typeof projects[0] }) {
  const router = useRouter();

  const navigate = () => {
    if (project.type === 'internal') {
      router.push(project.link);
    } else {
      window.open(project.link, '_blank', 'noopener,noreferrer');
    }
  };

  return (
    <div onClick={navigate} style={{ textDecoration: 'none', display: 'block', cursor: 'pointer' }}>
      <div
        style={{ background: '#fff', border: '1px solid var(--color-border)', borderRadius: '12px', padding: '24px', display: 'flex', flexDirection: 'column', height: '100%', transition: 'transform 300ms, box-shadow 300ms', boxShadow: '0 2px 8px rgba(43,108,176,0.07)' }}
        onMouseEnter={e => { e.currentTarget.style.transform = 'translateY(-3px)'; e.currentTarget.style.boxShadow = '0 8px 24px rgba(43,108,176,0.13)'; }}
        onMouseLeave={e => { e.currentTarget.style.transform = 'translateY(0)'; e.currentTarget.style.boxShadow = '0 2px 8px rgba(43,108,176,0.07)'; }}
      >
        {/* Company pill */}
        <div style={{ display: 'inline-block', background: 'var(--color-surface)', borderRadius: '4px', padding: '3px 8px', fontSize: '10px', textTransform: 'uppercase', color: 'var(--color-accent)', letterSpacing: '0.05em', marginBottom: '12px', alignSelf: 'flex-start' }}>
          {project.company}
        </div>

        <h3 style={{ fontSize: '17px', fontWeight: 700, color: 'var(--color-heading)', marginBottom: '10px' }}>
          {project.title}
        </h3>
        <p style={{ fontSize: '13px', color: 'var(--color-body)', lineHeight: 1.6, marginBottom: '18px', flex: 1 }}>
          {project.description}
        </p>

        {/* Metric */}
        {project.metrics && project.metrics[0] && (
          <div style={{ marginBottom: '16px' }}>
            <span style={{ fontSize: '20px', fontWeight: 900, color: '#C0622D' }}>{project.metrics[0].value}</span>
            <span style={{ fontSize: '12px', textTransform: 'uppercase', color: 'var(--color-muted)', marginLeft: '7px', letterSpacing: '0.04em' }}>{project.metrics[0].label}</span>
          </div>
        )}

        <div style={{ display: 'flex', alignItems: 'flex-end', justifyContent: 'space-between' }}>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '6px', alignItems: 'center' }}>
            {project.tags.slice(0, 2).map(tag => (
              <span key={tag} style={{ fontSize: '11px', color: 'var(--color-muted)', background: 'var(--color-bg)', borderRadius: '6px', padding: '4px 10px' }}>
                {tag}
              </span>
            ))}
          </div>
          <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-end', gap: '8px' }}>
            {project.externalLinks?.map(link => (
              <a
                key={link.url}
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                onClick={e => e.stopPropagation()}
                style={{ fontSize: '12px', fontWeight: 600, color: 'var(--color-accent)', textDecoration: 'none', border: '1px solid var(--color-accent)', borderRadius: '6px', padding: '4px 10px', whiteSpace: 'nowrap' }}
              >
                {link.label} ↗
              </a>
            ))}
            <span style={{ fontSize: '14px', fontWeight: 600, color: 'var(--color-accent)', whiteSpace: 'nowrap' }}>
              {project.type === 'external' ? 'View ↗' : 'View →'}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}

const PAGE_SIZE = 6;

export function Projects() {
  const [activeFilter, setActiveFilter] = useState<FilterValue>('all');
  const [showAll, setShowAll] = useState(false);

  const hasCategory = (p: typeof projects[0], cat: ProjectCategory) =>
    Array.isArray(p.category) ? p.category.includes(cat) : p.category === cat;

  const nonAI = projects.filter(p => !hasCategory(p, 'ai'));
  const filtered = activeFilter === 'all' ? nonAI : nonAI.filter(p => hasCategory(p, activeFilter as ProjectCategory));
  const visible = showAll ? filtered : filtered.slice(0, PAGE_SIZE);
  const hasMore = filtered.length > PAGE_SIZE && !showAll;

  // Reset "show more" when filter changes
  const handleFilter = (val: FilterValue) => {
    setActiveFilter(val);
    setShowAll(false);
  };

  return (
    <section id="projects" style={{ padding: '64px 120px', borderTop: '0.5px solid var(--color-border)' }}>
      <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
        <p style={{ fontSize: '10px', textTransform: 'uppercase', color: 'var(--color-accent)', letterSpacing: '0.1em', marginBottom: '12px' }}>
          Projects
        </p>
        <h2 style={{ fontFamily: 'var(--font-playfair), "Playfair Display", serif', fontStyle: 'italic', fontWeight: 900, fontSize: '36px', color: 'var(--color-heading)', marginBottom: '24px' }}>
          The work behind the outcomes.
        </h2>

        {/* Filter row */}
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px', marginBottom: '24px' }}>
          {FILTERS.map(f => {
            const isActive = activeFilter === f.value;
            return (
              <button
                key={f.value}
                onClick={() => handleFilter(f.value)}
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  fontSize: '14px',
                  fontWeight: 500,
                  padding: '8px 20px',
                  borderRadius: '50px',
                  border: isActive ? 'none' : '1.5px solid var(--color-heading)',
                  background: isActive ? 'var(--color-accent)' : 'transparent',
                  color: isActive ? '#fff' : 'var(--color-heading)',
                  cursor: 'pointer',
                  transition: 'all 300ms',
                }}
                onMouseEnter={e => { if (!isActive) { e.currentTarget.style.background = 'var(--color-surface)'; e.currentTarget.style.borderColor = 'var(--color-accent)'; e.currentTarget.style.color = 'var(--color-accent)'; }}}
                onMouseLeave={e => { if (!isActive) { e.currentTarget.style.background = 'transparent'; e.currentTarget.style.borderColor = 'var(--color-heading)'; e.currentTarget.style.color = 'var(--color-heading)'; }}}
              >
                {f.label}
              </button>
            );
          })}
        </div>

        {/* Cards grid */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))', gap: '12px' }}>
          {visible.map((p, i) => <SmallCard key={i} project={p} />)}
        </div>

        {filtered.length === 0 && (
          <p style={{ fontSize: '13px', color: 'var(--color-muted)', textAlign: 'center', padding: '32px 0' }}>No projects in this category yet.</p>
        )}

        {/* Show more */}
        {hasMore && (
          <div style={{ textAlign: 'center', marginTop: '28px' }}>
            <button
              onClick={() => setShowAll(true)}
              style={{ fontSize: '13px', fontWeight: 500, color: 'var(--color-accent)', background: '#fff', border: '1px solid var(--color-border)', borderRadius: '50px', padding: '10px 28px', cursor: 'pointer', transition: 'border-color 300ms, box-shadow 300ms', boxShadow: '0 2px 8px rgba(43,108,176,0.07)' }}
              onMouseEnter={e => { e.currentTarget.style.borderColor = 'var(--color-accent)'; e.currentTarget.style.boxShadow = '0 4px 16px rgba(43,108,176,0.12)'; }}
              onMouseLeave={e => { e.currentTarget.style.borderColor = 'var(--color-border)'; e.currentTarget.style.boxShadow = '0 2px 8px rgba(43,108,176,0.07)'; }}
            >
              Show {filtered.length - PAGE_SIZE} more projects
            </button>
          </div>
        )}
      </div>
    </section>
  );
}
