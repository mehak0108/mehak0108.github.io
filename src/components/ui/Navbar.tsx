'use client';

import { useState, useEffect } from 'react';
import { siteConfig } from '@/config';

const NAV_LINKS = [
  { label: 'About', id: 'about' },
  { label: 'Academics', id: 'academics' },
  { label: 'Experience', id: 'experience' },
  { label: 'AI Agents', id: 'ai-agents' },
  { label: 'Projects', id: 'projects' },
  { label: 'Competitions', id: 'competitions' },
  { label: 'Life', id: 'life' },
];

function LinkedInIcon() {
  return (
    <svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor">
      <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/>
      <rect x="2" y="9" width="4" height="12"/>
      <circle cx="4" cy="4" r="2"/>
    </svg>
  );
}

function HamburgerIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round">
      <line x1="3" y1="6" x2="21" y2="6"/>
      <line x1="3" y1="12" x2="21" y2="12"/>
      <line x1="3" y1="18" x2="21" y2="18"/>
    </svg>
  );
}

function XIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round">
      <line x1="18" y1="6" x2="6" y2="18"/>
      <line x1="6" y1="6" x2="18" y2="18"/>
    </svg>
  );
}

function scrollToSection(id: string) {
  const el = document.getElementById(id);
  if (el) {
    const offset = el.getBoundingClientRect().top + window.scrollY - 64;
    window.scrollTo({ top: offset, behavior: 'smooth' });
  }
}

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('about');
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    const observers: IntersectionObserver[] = [];
    NAV_LINKS.forEach(({ id }) => {
      const el = document.getElementById(id);
      if (!el) return;
      const obs = new IntersectionObserver(
        ([entry]) => { if (entry.isIntersecting) setActiveSection(id); },
        { rootMargin: '-35% 0px -60% 0px' }
      );
      obs.observe(el);
      observers.push(obs);
    });
    return () => observers.forEach(o => o.disconnect());
  }, []);

  const navStyle: React.CSSProperties = {
    position: 'sticky',
    top: 0,
    width: '100%',
    zIndex: 50,
    height: '56px',
    background: 'rgba(250,247,242,0.96)',
    backdropFilter: 'blur(10px)',
    WebkitBackdropFilter: 'blur(10px)',
    borderBottom: '0.5px solid var(--color-border)',
    boxShadow: scrolled ? '0 2px 12px rgba(43,108,176,0.08)' : 'none',
    transition: 'box-shadow 300ms ease-in-out',
  };

  const innerStyle: React.CSSProperties = {
    maxWidth: '1200px',
    margin: '0 auto',
    padding: '0 40px',
    height: '100%',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
  };

  return (
    <>
      {/* Desktop */}
      <nav style={navStyle} className="hidden md:block">
        <div style={innerStyle}>
          {/* Logo */}
          <button
            onClick={() => scrollToSection('about')}
            style={{ fontSize: '16px', fontWeight: 700, color: 'var(--color-heading)', letterSpacing: '-0.01em', background: 'none', border: 'none', cursor: 'pointer', fontFamily: 'var(--font-inter), Inter, sans-serif', padding: 0 }}
          >
            {siteConfig.name}
          </button>

          {/* Right side: nav links + LinkedIn + CTA */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '4px' }}>
            {NAV_LINKS.map(({ label, id }) => {
              const active = activeSection === id;
              return (
                <button
                  key={id}
                  onClick={() => scrollToSection(id)}
                  style={{
                    fontSize: '13px',
                    fontWeight: active ? 500 : 400,
                    color: active ? 'var(--color-heading)' : 'var(--color-body)',
                    padding: '6px 14px',
                    borderRadius: '6px',
                    background: 'transparent',
                    border: 'none',
                    cursor: 'pointer',
                    transition: 'color 300ms ease-in-out',
                  }}
                  onMouseEnter={e => e.currentTarget.style.color = 'var(--color-accent)'}
                  onMouseLeave={e => e.currentTarget.style.color = active ? 'var(--color-heading)' : 'var(--color-body)'}
                >
                  {label}
                </button>
              );
            })}

            {/* Resume */}
            <a
              href={siteConfig.resume}
              target="_blank"
              rel="noopener noreferrer"
              style={{ fontSize: '13px', fontWeight: 400, color: 'var(--color-body)', padding: '6px 14px', borderRadius: '6px', textDecoration: 'none', transition: 'color 300ms' }}
              onMouseEnter={e => e.currentTarget.style.color = 'var(--color-accent)'}
              onMouseLeave={e => e.currentTarget.style.color = 'var(--color-body)'}
            >
              Resume
            </a>

            {/* LinkedIn circle */}
            {siteConfig.socials.linkedin && (
              <a
                href={siteConfig.socials.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', width: '34px', height: '34px', borderRadius: '50%', border: '1px solid var(--color-border)', color: 'var(--color-body)', textDecoration: 'none', marginLeft: '8px', transition: 'border-color 300ms, color 300ms', flexShrink: 0 }}
                onMouseEnter={e => { e.currentTarget.style.borderColor = 'var(--color-accent)'; e.currentTarget.style.color = 'var(--color-accent)'; }}
                onMouseLeave={e => { e.currentTarget.style.borderColor = 'var(--color-border)'; e.currentTarget.style.color = 'var(--color-body)'; }}
              >
                <LinkedInIcon />
              </a>
            )}

            {/* Schedule a chat CTA */}
            <button
              onClick={() => scrollToSection('contact')}
              style={{ fontSize: '13px', fontWeight: 500, color: '#fff', background: 'var(--color-accent)', borderRadius: '50px', padding: '8px 20px', border: 'none', cursor: 'pointer', marginLeft: '8px', transition: 'background 300ms', whiteSpace: 'nowrap' }}
              onMouseEnter={e => e.currentTarget.style.background = 'var(--color-accent-hover)'}
              onMouseLeave={e => e.currentTarget.style.background = 'var(--color-accent)'}
            >
              Schedule a chat
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile nav bar */}
      <nav style={navStyle} className="flex md:hidden">
        <div style={{ ...innerStyle, padding: '0 20px' }}>
          <button
            onClick={() => { scrollToSection('about'); setMobileOpen(false); }}
            style={{ fontSize: '16px', fontWeight: 700, color: 'var(--color-heading)', letterSpacing: '-0.01em', background: 'none', border: 'none', cursor: 'pointer', fontFamily: 'var(--font-inter), Inter, sans-serif', padding: 0 }}
          >
            {siteConfig.name}
          </button>

          <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
            <button
              onClick={() => { scrollToSection('contact'); setMobileOpen(false); }}
              style={{ fontSize: '13px', fontWeight: 500, color: '#fff', background: 'var(--color-accent)', borderRadius: '50px', padding: '7px 16px', border: 'none', cursor: 'pointer' }}
            >
              Schedule a chat
            </button>
            <button
              onClick={() => setMobileOpen(o => !o)}
              style={{ width: '32px', height: '32px', display: 'flex', alignItems: 'center', justifyContent: 'center', background: 'var(--color-surface)', borderRadius: '6px', border: 'none', cursor: 'pointer', color: '#1A0A15', flexShrink: 0 }}
            >
              {mobileOpen ? <XIcon /> : <HamburgerIcon />}
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile drawer */}
      {mobileOpen && (
        <div
          className="block md:hidden"
          style={{ position: 'sticky', top: '56px', zIndex: 49, width: '100%', background: 'var(--color-bg)', borderBottom: '0.5px solid var(--color-border)', padding: '8px 12px 12px' }}
        >
          {NAV_LINKS.map(({ label, id }) => {
            const active = activeSection === id;
            return (
              <button
                key={id}
                onClick={() => { scrollToSection(id); setMobileOpen(false); }}
                style={{ display: 'block', width: '100%', textAlign: 'left', fontSize: '13px', fontWeight: 500, color: active ? 'var(--color-accent)' : 'var(--color-body)', background: active ? 'var(--color-surface)' : 'transparent', padding: '9px 10px', borderRadius: '7px', border: 'none', cursor: 'pointer', transition: 'background 300ms, color 300ms', marginBottom: '2px' }}
                onMouseEnter={e => { e.currentTarget.style.background = 'var(--color-surface)'; e.currentTarget.style.color = 'var(--color-accent)'; }}
                onMouseLeave={e => { e.currentTarget.style.background = active ? 'var(--color-surface)' : 'transparent'; e.currentTarget.style.color = active ? 'var(--color-accent)' : 'var(--color-body)'; }}
              >
                {label}
              </button>
            );
          })}
          <button
            onClick={() => { scrollToSection('contact'); setMobileOpen(false); }}
            style={{ display: 'block', width: '100%', marginTop: '8px', fontSize: '13px', fontWeight: 500, color: '#fff', background: 'var(--color-accent)', borderRadius: '50px', padding: '10px', border: 'none', cursor: 'pointer', transition: 'background 300ms' }}
            onMouseEnter={e => e.currentTarget.style.background = 'var(--color-accent-hover)'}
            onMouseLeave={e => e.currentTarget.style.background = 'var(--color-accent)'}
          >
            Schedule a chat
          </button>
        </div>
      )}
    </>
  );
}
