'use client';

import { siteConfig } from '@/config';

function LinkedInIcon() {
  return (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
      <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/>
      <rect x="2" y="9" width="4" height="12"/>
      <circle cx="4" cy="4" r="2"/>
    </svg>
  );
}

function SubstackIcon() {
  return (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
      <path d="M22 5.5H2V7.5H22V5.5Z"/>
      <path d="M22 10.5H2V12.5H22V10.5Z"/>
      <path d="M2 15.5H22V24L12 18.5L2 24V15.5Z"/>
    </svg>
  );
}

function scrollToSection(id: string) {
  const el = document.getElementById(id);
  if (el) {
    const offset = el.getBoundingClientRect().top + window.scrollY - 70;
    window.scrollTo({ top: offset, behavior: 'smooth' });
  }
}

export function About() {
  return (
    <section id="about" style={{ padding: '48px 120px 64px' }}>
      <div style={{ maxWidth: '1200px', margin: '0 auto', display: 'grid', gridTemplateColumns: '1fr 320px', gap: '64px', alignItems: 'start' }}>

        {/* ── Left column ── */}
        <div>
          {/* Name */}
          <h1 style={{ fontFamily: 'var(--font-inter), Inter, sans-serif', fontWeight: 800, fontSize: 'clamp(36px, 5vw, 58px)', letterSpacing: '-0.03em', color: 'var(--color-heading)', lineHeight: 1.05, marginBottom: '10px' }}>
            {siteConfig.name}
          </h1>

          {/* Tagline — italic accent */}
          <p style={{ fontFamily: 'var(--font-playfair), "Playfair Display", serif', fontStyle: 'italic', fontWeight: 900, fontSize: 'clamp(20px, 2.5vw, 28px)', color: 'var(--color-accent)', marginBottom: '28px', lineHeight: 1.2 }}>
            {siteConfig.tagline}
          </p>

          {/* Bio */}
          <div style={{ marginBottom: '28px' }}>
            {siteConfig.bio.map((para, i) => (
              <p key={i} style={{ fontSize: '16px', color: 'var(--color-body)', lineHeight: 1.8, marginBottom: '14px' }}
                dangerouslySetInnerHTML={{ __html: para }}
              />
            ))}
          </div>

          {/* Stat grid */}
          {siteConfig.stats.length > 0 && (
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '12px', marginBottom: '36px' }}>
              {siteConfig.stats.map((stat, i) => (
                <div key={i} style={{ background: '#fff', border: '1px solid var(--color-border)', borderRadius: '14px', padding: '20px 22px', textAlign: 'center' }}>
                  <div style={{ display: 'flex', alignItems: 'baseline', justifyContent: 'center', gap: '6px', marginBottom: '6px' }}>
                    <p style={{ fontFamily: 'var(--font-inter), Inter, sans-serif', fontWeight: 800, fontSize: '22px', color: 'var(--color-accent)', lineHeight: 1.1 }}>{stat.value}</p>
                    {stat.sublabel && <p style={{ fontSize: '12px', fontWeight: 600, color: 'var(--color-muted)' }}>{stat.sublabel}</p>}
                  </div>
                  <p style={{ fontSize: '13px', color: 'var(--color-muted)', lineHeight: 1.4 }}>{stat.label}</p>
                </div>
              ))}
            </div>
          )}

          {/* CTAs */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '12px', flexWrap: 'wrap' }}>
            <button
              onClick={() => scrollToSection('ai-agents')}
              style={{ fontSize: '15px', fontWeight: 600, color: '#fff', background: 'var(--color-accent)', borderRadius: '50px', padding: '12px 28px', border: 'none', cursor: 'pointer', transition: 'background 300ms' }}
              onMouseEnter={e => e.currentTarget.style.background = 'var(--color-accent-hover)'}
              onMouseLeave={e => e.currentTarget.style.background = 'var(--color-accent)'}
            >
              See my work
            </button>

            {siteConfig.socials.linkedin && (
              <a
                href={siteConfig.socials.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', fontSize: '15px', fontWeight: 500, color: 'var(--color-body)', background: 'transparent', borderRadius: '50px', padding: '11px 24px', border: '1.5px solid var(--color-border)', textDecoration: 'none', transition: 'border-color 300ms, color 300ms' }}
                onMouseEnter={e => { e.currentTarget.style.borderColor = 'var(--color-accent)'; e.currentTarget.style.color = 'var(--color-accent)'; }}
                onMouseLeave={e => { e.currentTarget.style.borderColor = 'var(--color-border)'; e.currentTarget.style.color = 'var(--color-body)'; }}
              >
                <LinkedInIcon /> LinkedIn
              </a>
            )}

            {siteConfig.socials.substack && (
              <a
                href={siteConfig.socials.substack}
                target="_blank"
                rel="noopener noreferrer"
                style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', fontSize: '15px', fontWeight: 500, color: 'var(--color-body)', background: 'transparent', borderRadius: '50px', padding: '11px 24px', border: '1.5px solid var(--color-border)', textDecoration: 'none', transition: 'border-color 300ms, color 300ms' }}
                onMouseEnter={e => { e.currentTarget.style.borderColor = 'var(--color-accent)'; e.currentTarget.style.color = 'var(--color-accent)'; }}
                onMouseLeave={e => { e.currentTarget.style.borderColor = 'var(--color-border)'; e.currentTarget.style.color = 'var(--color-body)'; }}
              >
                <SubstackIcon /> Substack
              </a>
            )}
          </div>
        </div>

        {/* ── Right column ── */}
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '24px', marginTop: '40px' }}>
          {/* Circular photo */}
          <div style={{ width: '320px', height: '320px', borderRadius: '50%', overflow: 'hidden', background: 'linear-gradient(160deg, #B8D4EC, #7AAED4)', border: '4px solid #fff', boxShadow: '0 0 0 1px var(--color-border)', flexShrink: 0 }}>
            <img
              src="/images/mehak.jpg"
              alt={siteConfig.name}
              style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }}
              onError={e => { e.currentTarget.style.display = 'none'; }}
            />
          </div>

          {/* Badge pill */}
          <div style={{ display: 'inline-flex', alignItems: 'center', gap: '6px', background: 'var(--color-heading)', color: '#fff', fontSize: '11px', fontWeight: 500, letterSpacing: '0.08em', textTransform: 'uppercase', borderRadius: '50px', padding: '6px 16px' }}>
            <span style={{ fontSize: '10px', opacity: 0.7 }}>✦</span>
            {siteConfig.title} · {siteConfig.currentStatus}
          </div>
        </div>

      </div>
    </section>
  );
}
