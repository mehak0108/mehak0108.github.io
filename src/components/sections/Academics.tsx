'use client';

import { academics } from '@/config/academics';

function MapPinIcon() {
  return (
    <svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{ display: 'inline', verticalAlign: 'middle' }}>
      <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/>
      <circle cx="12" cy="10" r="3"/>
    </svg>
  );
}


export function Academics() {
  return (
    <section id="academics" style={{ padding: '64px 120px', borderTop: '0.5px solid var(--color-border)' }}>
      <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
        <p style={{ fontSize: '11px', textTransform: 'uppercase', color: 'var(--color-accent)', letterSpacing: '0.1em', marginBottom: '14px' }}>
          Academics
        </p>
        <h2 style={{ fontFamily: 'var(--font-playfair), "Playfair Display", serif', fontStyle: 'italic', fontWeight: 900, fontSize: '36px', color: 'var(--color-heading)', marginBottom: '52px' }}>
          Where I learned to think.
        </h2>

        {/* Timeline */}
        <div style={{ position: 'relative', paddingLeft: '36px' }}>
          {/* Vertical line */}
          <div style={{ position: 'absolute', left: '9px', top: 0, bottom: 0, width: '1.5px', background: 'linear-gradient(to bottom, var(--color-accent), var(--color-border))' }} />

          {academics.map((entry, i) => (
            <div key={i} style={{ position: 'relative', marginBottom: i < academics.length - 1 ? '28px' : 0 }}>
              {/* Dot */}
              <div style={{
                position: 'absolute',
                left: '-36px',
                top: '26px',
                width: '14px',
                height: '14px',
                borderRadius: '50%',
                background: entry.current ? 'var(--color-accent)' : '#fff',
                border: '2px solid var(--color-accent)',
                zIndex: 1,
              }} />

              {/* Card */}
              <div
                style={{ background: 'linear-gradient(145deg, #fff 60%, #f0f6ff)', border: '1px solid var(--color-border)', borderRadius: '14px', padding: '24px 28px', boxShadow: '0 2px 16px rgba(43,108,176,0.07)', transition: 'transform 300ms ease, box-shadow 300ms ease' }}
                onMouseEnter={e => { e.currentTarget.style.transform = 'translateY(-3px)'; e.currentTarget.style.boxShadow = '0 8px 28px rgba(43,108,176,0.13)'; }}
                onMouseLeave={e => { e.currentTarget.style.transform = 'translateY(0)'; e.currentTarget.style.boxShadow = '0 2px 16px rgba(43,108,176,0.07)'; }}
              >
                {/* Header */}
                <div style={{ display: 'flex', alignItems: 'flex-start', justifyContent: 'space-between', gap: '16px', marginBottom: '16px' }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
                    <div>
                      <p style={{ fontSize: '20px', fontWeight: 700, color: 'var(--color-heading)', marginBottom: '4px' }}>{entry.institution}</p>
                      <p style={{ fontSize: '16px', color: 'var(--color-body)', marginBottom: '6px' }}>{entry.degree}{entry.field ? ` · ${entry.field}` : ''}</p>
                    </div>
                  </div>
                  <div style={{ flexShrink: 0, textAlign: 'right' }}>
                    <p style={{ fontSize: '13px', color: 'var(--color-muted)', whiteSpace: 'nowrap' }}>{entry.startDate} — {entry.endDate}</p>
                    <p style={{ fontSize: '13px', color: 'var(--color-muted)', display: 'flex', alignItems: 'center', justifyContent: 'flex-end', gap: '4px', marginTop: '4px' }}>
                      <MapPinIcon /> {entry.location}
                    </p>
                  </div>
                </div>

                {/* Bullets */}
                {entry.bullets.length > 0 && (
                  <div style={{ borderTop: '1px solid var(--color-border)', paddingTop: '16px' }}>
                    <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '8px' }}>
                      {entry.bullets.map((bullet, j) => (
                        <li key={j} style={{ fontSize: '14px', color: 'var(--color-body)', paddingLeft: '16px', position: 'relative', lineHeight: 1.6 }}>
                          <span style={{ position: 'absolute', left: 0, top: '8px', width: '6px', height: '6px', borderRadius: '50%', background: 'var(--color-accent)', opacity: 0.5, display: 'block' }} />
                          {bullet}
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
