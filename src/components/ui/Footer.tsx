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

function GitHubIcon() {
  return (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
      <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"/>
    </svg>
  );
}

function MailIcon() {
  return (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/>
      <polyline points="22,6 12,13 2,6"/>
    </svg>
  );
}

export function Footer() {
  return (
    <footer style={{ background: 'var(--color-heading)', height: '52px', padding: '0 28px', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
      <span style={{ fontWeight: 900, fontSize: '14px', color: '#fff', letterSpacing: '-0.02em', fontFamily: 'var(--font-inter), Inter, sans-serif' }}>
        {siteConfig.name}
      </span>

<div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
        <div style={{ display: 'flex', gap: '10px' }}>
          {siteConfig.socials.linkedin && (
            <a href={siteConfig.socials.linkedin} target="_blank" rel="noopener noreferrer" style={{ color: '#4A6080', transition: 'color 300ms' }}
              onMouseEnter={e => e.currentTarget.style.color = '#D4A8C8'}
              onMouseLeave={e => e.currentTarget.style.color = '#4A6080'}
            >
              <LinkedInIcon />
            </a>
          )}
          {siteConfig.socials.github && (
            <a href={siteConfig.socials.github} target="_blank" rel="noopener noreferrer" style={{ color: '#4A6080', transition: 'color 300ms' }}
              onMouseEnter={e => e.currentTarget.style.color = '#D4A8C8'}
              onMouseLeave={e => e.currentTarget.style.color = '#4A6080'}
            >
              <GitHubIcon />
            </a>
          )}
          <a href={`mailto:${siteConfig.email}`} style={{ color: '#4A6080', transition: 'color 300ms' }}
            onMouseEnter={e => e.currentTarget.style.color = '#D4A8C8'}
            onMouseLeave={e => e.currentTarget.style.color = '#4A6080'}
          >
            <MailIcon />
          </a>
        </div>
        <div style={{ width: '1px', height: '14px', background: 'rgba(255,255,255,0.08)' }} />
        <span style={{ fontSize: '11px', color: '#3A5070' }}>© 2026 {siteConfig.name}</span>
      </div>
    </footer>
  );
}
