'use client';

import { competitions } from '@/config/competitions';

const GRADIENTS: Record<string, string> = {
  gold: 'linear-gradient(135deg,#C9A227,#F0D060)',
  mauve: 'linear-gradient(135deg,#2B6CB0,#90CDF4)',
  slate: 'linear-gradient(135deg,#4A5568,#718096)',
  teal: 'linear-gradient(135deg,#2C7A7B,#81E6D9)',
  rose: 'linear-gradient(135deg,#C53030,#FC8181)',
  navy: 'linear-gradient(135deg,#1A365D,#4299E1)',
  amber: 'linear-gradient(135deg,#B7791F,#F6E05E)',
  green: 'linear-gradient(135deg,#276749,#68D391)',
};

const TYPE_ICONS: Record<string, string> = {
  hackathon: '⚡',
  startup: '🚀',
  case: '📊',
  award: '🏆',
};

export function Competitions() {
  return (
    <section id="competitions" style={{ padding: '64px 120px', borderTop: '0.5px solid var(--color-border)' }}>
      <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
        <p style={{ fontSize: '10px', textTransform: 'uppercase', color: 'var(--color-accent)', letterSpacing: '0.1em', marginBottom: '12px' }}>
          Competitions & Awards
        </p>
        <h2 style={{ fontFamily: 'var(--font-playfair), "Playfair Display", serif', fontStyle: 'italic', fontWeight: 900, fontSize: '36px', color: 'var(--color-heading)', marginBottom: '32px' }}>
          Competing, winning, learning.
        </h2>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(260px, 1fr))', gap: '12px' }}>
          {competitions.map((comp, i) => (
            <div
              key={i}
              style={{
                background: 'rgba(255,255,255,0.7)',
                border: comp.result === 'winner' ? '1.5px solid var(--color-accent)' : '0.5px solid var(--color-border)',
                borderRadius: '12px',
                overflow: 'hidden',
                transition: 'transform 300ms, box-shadow 300ms',
              }}
              onMouseEnter={e => { e.currentTarget.style.transform = 'translateY(-3px)'; e.currentTarget.style.boxShadow = '0 8px 24px rgba(43,108,176,0.12)'; }}
              onMouseLeave={e => { e.currentTarget.style.transform = 'translateY(0)'; e.currentTarget.style.boxShadow = 'none'; }}
            >
              <CompCard comp={comp} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function CompCard({ comp }: { comp: typeof competitions[0] }) {
  return (
    <div style={{ padding: '18px 20px', display: 'flex', flexDirection: 'column', gap: '0' }}>
      {/* Merged icon + badge */}
      <div style={{ marginBottom: '16px' }}>
        <span style={{
          display: 'inline-flex',
          alignItems: 'center',
          gap: '6px',
          fontSize: '13px',
          fontWeight: 600,
          borderRadius: '50px',
          padding: '6px 14px',
          background: comp.result === 'winner' ? 'var(--color-accent)' : 'var(--color-surface)',
          color: comp.result === 'winner' ? '#fff' : 'var(--color-body)',
          border: comp.result === 'winner' ? 'none' : '0.5px solid var(--color-border)',
        }}>
          <span style={{ fontSize: '14px', lineHeight: 1 }}>{TYPE_ICONS[comp.type] || '🏆'}</span>
          {comp.resultLabel}
        </span>
      </div>

      {/* Title — prominent */}
      <p style={{ fontSize: '18px', fontWeight: 700, color: 'var(--color-heading)', lineHeight: 1.3, marginBottom: 'auto' }}>{comp.title}</p>

      {/* Org + year bottom row */}
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginTop: '16px' }}>
        <p style={{ fontSize: '14px', color: '#5A6A7E', fontWeight: 500 }}>{comp.organization}</p>
        <p style={{ fontSize: '13px', color: 'var(--color-muted)' }}>{comp.year}</p>
      </div>

      {comp.description && (
        <p style={{ fontSize: '13px', color: 'var(--color-body)', lineHeight: 1.6, marginTop: '10px' }}>{comp.description}</p>
      )}
    </div>
  );
}
