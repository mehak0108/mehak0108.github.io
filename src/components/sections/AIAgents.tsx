'use client';

import { useRouter } from 'next/navigation';
import { projects } from '@/config/projects';

const aiProjects = projects.filter(p => Array.isArray(p.category) ? p.category.includes('ai') : p.category === 'ai');

function SparklesIcon() {
  return (
    <svg width="13" height="13" viewBox="0 0 24 24" fill="currentColor" style={{ display: 'inline', verticalAlign: 'middle', marginRight: '5px' }}>
      <path d="M12 2l1.5 4.5L18 8l-4.5 1.5L12 14l-1.5-4.5L6 8l4.5-1.5L12 2z"/>
      <path d="M19 14l.75 2.25L22 17l-2.25.75L19 20l-.75-2.25L16 17l2.25-.75L19 14z"/>
      <path d="M5 18l.5 1.5L7 20l-1.5.5L5 22l-.5-1.5L3 20l1.5-.5L5 18z"/>
    </svg>
  );
}

function AICard({ project }: { project: typeof projects[0] }) {
  const router = useRouter();

  const navigate = () => {
    if (project.type === 'internal') {
      router.push(project.link);
    } else {
      window.open(project.link, '_blank', 'noopener,noreferrer');
    }
  };

  return (
    <div
      onClick={navigate}
      style={{ background: 'var(--color-heading)', border: '0.5px solid rgba(255,255,255,0.08)', borderRadius: '14px', padding: '28px', display: 'flex', flexDirection: 'column', height: '100%', cursor: 'pointer', transition: 'transform 300ms, box-shadow 300ms' }}
      onMouseEnter={e => { e.currentTarget.style.transform = 'translateY(-3px)'; e.currentTarget.style.boxShadow = '0 8px 28px rgba(43,108,176,0.18)'; }}
      onMouseLeave={e => { e.currentTarget.style.transform = 'translateY(0)'; e.currentTarget.style.boxShadow = 'none'; }}
    >
      {/* Company pill */}
      <div style={{ display: 'inline-block', background: 'rgba(255,255,255,0.07)', borderRadius: '4px', padding: '3px 8px', fontSize: '10px', textTransform: 'uppercase', color: 'rgba(255,255,255,0.4)', letterSpacing: '0.05em', marginBottom: '16px', alignSelf: 'flex-start' }}>
        {project.company}
      </div>

      <h3 style={{ fontSize: '17px', fontWeight: 700, color: '#fff', marginBottom: '10px', lineHeight: 1.2 }}>
        {project.title}
      </h3>
      <p style={{ fontSize: '15px', color: 'rgba(255,255,255,0.6)', lineHeight: 1.65, marginBottom: '20px', flex: 1 }}>
        {project.description}
      </p>

      {/* Metrics */}
      {project.metrics && project.metrics.length > 0 && (
        <div style={{ display: 'flex', border: '0.5px solid rgba(255,255,255,0.1)', borderRadius: '10px', overflow: 'hidden', marginBottom: '20px' }}>
          {project.metrics.map((m, i) => (
            <div key={i} style={{ flex: 1, padding: '12px 16px', borderRight: i < project.metrics!.length - 1 ? '0.5px solid rgba(255,255,255,0.1)' : 'none', textAlign: 'center' }}>
              <p style={{ fontSize: '18px', fontWeight: 900, color: '#fff', lineHeight: 1 }}>{m.value}</p>
              <p style={{ fontSize: '11px', textTransform: 'uppercase', color: 'rgba(255,255,255,0.4)', letterSpacing: '0.05em', marginTop: '4px' }}>{m.label}</p>
            </div>
          ))}
        </div>
      )}

      <div style={{ display: 'flex', alignItems: 'flex-end', justifyContent: 'space-between' }}>
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '6px', alignItems: 'center' }}>
          {project.tags.slice(0, 2).map(tag => (
            <span key={tag} style={{ fontSize: '11px', color: 'rgba(255,255,255,0.35)', background: 'rgba(255,255,255,0.05)', borderRadius: '6px', padding: '4px 10px' }}>
              {tag}
            </span>
          ))}
        </div>
        <div style={{ display: 'flex', alignItems: 'center', gap: '14px' }}>
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
  );
}

export function AIAgents() {
  return (
    <section id="ai-agents" style={{ padding: '64px 120px', borderTop: '0.5px solid var(--color-border)' }}>
      <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
        <p style={{ fontSize: '10px', textTransform: 'uppercase', color: 'var(--color-accent)', letterSpacing: '0.1em', marginBottom: '12px', display: 'flex', alignItems: 'center' }}>
          <SparklesIcon />AI Agents
        </p>
        <h2 style={{ fontFamily: 'var(--font-playfair), "Playfair Display", serif', fontStyle: 'italic', fontWeight: 900, fontSize: '36px', color: 'var(--color-heading)', marginBottom: '32px' }}>
          AI I've built.
        </h2>

        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '16px' }}>
          {aiProjects.map((p, i) => <AICard key={i} project={p} />)}
        </div>
      </div>
    </section>
  );
}
