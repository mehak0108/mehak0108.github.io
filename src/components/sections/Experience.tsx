'use client';

import { jobs } from '@/config/experience';
import { clients } from '@/config/clients';

function MapPinIcon() {
  return (
    <svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{ display: 'inline', verticalAlign: 'middle', marginRight: '3px' }}>
      <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/>
      <circle cx="12" cy="10" r="3"/>
    </svg>
  );
}

function TrophyIcon() {
  return (
    <svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{ display: 'inline', verticalAlign: 'middle', marginRight: '4px' }}>
      <polyline points="6 9 6 2 18 2 18 9"/>
      <path d="M6 18H4a2 2 0 0 1-2-2v-1a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v1a2 2 0 0 1-2 2h-2"/>
      <rect x="6" y="18" width="12" height="4"/>
    </svg>
  );
}

export function Experience() {
  return (
    <section id="experience" style={{ padding: '64px 120px', borderTop: '0.5px solid var(--color-border)' }}>
      <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
        <p style={{ fontSize: '11px', textTransform: 'uppercase', color: 'var(--color-accent)', letterSpacing: '0.1em', marginBottom: '14px' }}>
          Experience
        </p>
        <h2 style={{ fontFamily: 'var(--font-playfair), "Playfair Display", serif', fontStyle: 'italic', fontWeight: 900, fontSize: '36px', color: 'var(--color-heading)', marginBottom: '64px' }}>
          Where I've been, what I've built.
        </h2>

        {/* Timeline */}
        <div style={{ position: 'relative' }}>
          {/* Vertical line */}
          <div style={{ position: 'absolute', left: '50%', transform: 'translateX(-50%)', top: 0, bottom: 0, width: '1.5px', background: 'linear-gradient(to bottom, var(--color-accent), var(--color-border))' }} />

          <div style={{ display: 'flex', flexDirection: 'column', gap: '56px' }}>
            {jobs.map((job, i) => (
              <div key={i} style={{ display: 'grid', gridTemplateColumns: '1fr 56px 1fr', alignItems: 'start' }}>

                {/* Left: role + dates */}
                <div style={{ textAlign: 'right', paddingRight: '36px', paddingTop: '2px' }}>
                  <p style={{ fontSize: '17px', fontWeight: 700, color: 'var(--color-heading)', marginBottom: '5px' }}>{job.role}</p>
                  <p style={{ fontSize: '13px', color: 'var(--color-accent)' }}>{job.startDate} — {job.endDate}</p>
                  {job.location && (
                    <p style={{ fontSize: '12px', color: 'var(--color-muted)', marginTop: '4px' }}>
                      <MapPinIcon />{job.location}
                    </p>
                  )}
                </div>

                {/* Center: circle */}
                <div style={{ display: 'flex', justifyContent: 'center', paddingTop: '2px', position: 'relative', zIndex: 1 }}>
                  {job.current ? (
                    <div style={{ width: '48px', height: '48px', borderRadius: '50%', background: 'var(--color-accent)', border: '4px solid var(--color-bg)', boxShadow: '0 0 0 2px var(--color-accent)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                      <div style={{ width: '12px', height: '12px', borderRadius: '50%', background: '#fff' }} />
                    </div>
                  ) : (
                    <div style={{ width: '38px', height: '38px', borderRadius: '50%', border: '2px solid #CBD5E0', background: 'var(--color-bg)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                      <div style={{ width: '11px', height: '11px', borderRadius: '50%', background: '#A0AEC0' }} />
                    </div>
                  )}
                </div>

                {/* Right: company + description */}
                <div style={{ paddingLeft: '36px' }}>
                  <p style={{ fontSize: '19px', fontWeight: 700, color: 'var(--color-heading)', marginBottom: '10px' }}>{job.company}</p>

                  {job.award && (
                    <div style={{ display: 'inline-flex', alignItems: 'center', fontSize: '12px', fontWeight: 500, color: 'var(--color-accent)', background: 'var(--color-surface)', border: '1px solid var(--color-border)', borderRadius: '50px', padding: '4px 12px', marginBottom: '10px' }}>
                      <TrophyIcon />{job.award}
                    </div>
                  )}

                  <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '6px' }}>
                    {job.description.map((point, j) => (
                      <li key={j} style={{ fontSize: '13px', color: 'var(--color-body)', lineHeight: 1.7 }}>
                        {point}
                      </li>
                    ))}
                  </ul>
                </div>

              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Client logo strip */}
      {clients.length > 0 && (
        <div style={{ marginTop: '64px', margin: '64px -120px -64px', background: 'var(--color-surface)', borderTop: '0.5px solid var(--color-border)', padding: '36px 120px' }}>
          <p style={{ fontSize: '11px', textTransform: 'uppercase', letterSpacing: '0.12em', color: 'var(--color-muted)', textAlign: 'center', marginBottom: '28px' }}>
            Clients &amp; stakeholders I've worked with
          </p>
          <div style={{ display: 'flex', flexWrap: 'wrap', alignItems: 'center', justifyContent: 'center', gap: '40px' }}>
            {clients.map(client => (
              <img
                key={client.name}
                src={client.src}
                alt={client.name}
                title={client.name}
                style={{
                  width: `${client.width ?? 80}px`,
                  height: 'auto',
                  objectFit: 'contain',
                }}
              />
            ))}
          </div>
        </div>
      )}
    </section>
  );
}
