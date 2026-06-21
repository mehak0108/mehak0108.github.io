'use client';

import { siteConfig } from '@/config';

function FooterLink({ href, external = true, children }: { href: string; external?: boolean; children: React.ReactNode }) {
  return (
    <a
      href={href}
      target={external ? '_blank' : undefined}
      rel={external ? 'noopener noreferrer' : undefined}
      style={{ fontFamily: 'var(--font-inter), Inter, sans-serif', fontSize: '14px', color: 'rgba(255,255,255,0.55)', textDecoration: 'none', transition: 'color 300ms' }}
      onMouseEnter={e => e.currentTarget.style.color = 'var(--color-accent)'}
      onMouseLeave={e => e.currentTarget.style.color = 'rgba(255,255,255,0.55)'}
    >
      {children}
    </a>
  );
}

export function Footer() {
  return (
    <footer id="contact" style={{ background: 'var(--color-heading)', padding: '32px 120px', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '28px', flexWrap: 'wrap' }}>
      <span style={{ fontFamily: 'var(--font-inter), Inter, sans-serif', fontWeight: 700, fontSize: '14px', color: '#fff' }}>
        {siteConfig.name}
      </span>

      {siteConfig.email && (
        <FooterLink href={`mailto:${siteConfig.email}`} external={false}>email</FooterLink>
      )}
      {siteConfig.socials.linkedin && (
        <FooterLink href={siteConfig.socials.linkedin}>linkedin</FooterLink>
      )}
      {siteConfig.socials.github && (
        <FooterLink href={siteConfig.socials.github}>github</FooterLink>
      )}
      {siteConfig.socials.substack && (
        <FooterLink href={siteConfig.socials.substack}>substack</FooterLink>
      )}
    </footer>
  );
}
