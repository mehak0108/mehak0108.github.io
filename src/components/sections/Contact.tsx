'use client';

import { useState } from 'react';
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


function SocialLink({ href, icon, label }: { href: string; icon: React.ReactNode; label: string }) {
  return (
    <a
      href={href}
      target={href.startsWith('mailto') ? undefined : '_blank'}
      rel="noopener noreferrer"
      style={{ display: 'flex', alignItems: 'center', gap: '8px', fontSize: '14px', fontWeight: 500, color: 'var(--color-heading)', border: '0.5px solid var(--color-border)', background: 'rgba(255,255,255,0.6)', borderRadius: '50px', padding: '10px 20px', textDecoration: 'none', transition: 'background 300ms, border-color 300ms' }}
      onMouseEnter={e => { e.currentTarget.style.background = 'var(--color-surface)'; e.currentTarget.style.borderColor = 'var(--color-accent)'; }}
      onMouseLeave={e => { e.currentTarget.style.background = 'rgba(255,255,255,0.6)'; e.currentTarget.style.borderColor = 'var(--color-border)'; }}
    >
      <span style={{ color: 'var(--color-accent)' }}>{icon}</span>
      {label}
    </a>
  );
}

export function Contact() {
  const [form, setForm] = useState({ name: '', email: '', message: '' });
  const [status, setStatus] = useState<'idle' | 'sending' | 'success' | 'error'>('idle');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('sending');
    try {
      const res = await fetch(`https://formspree.io/f/${siteConfig.formspreeId}`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', 'Accept': 'application/json' },
        body: JSON.stringify({ name: form.name, email: form.email, message: form.message }),
      });
      if (res.ok) {
        setStatus('success');
        setForm({ name: '', email: '', message: '' });
      } else {
        setStatus('error');
      }
    } catch {
      setStatus('error');
    }
  };

  const inputStyle: React.CSSProperties = {
    width: '100%',
    border: '1px solid var(--color-border)',
    background: 'var(--color-bg)',
    borderRadius: '7px',
    padding: '11px 14px',
    fontSize: '14px',
    color: 'var(--color-body)',
    outline: 'none',
    transition: 'border-color 300ms, background 300ms',
    fontFamily: 'var(--font-inter), Inter, sans-serif',
  };

  return (
    <section id="contact" style={{ padding: '64px 120px', borderTop: '0.5px solid var(--color-border)' }}>
      <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
        <h2 style={{ fontFamily: 'var(--font-playfair), "Playfair Display", serif', fontStyle: 'italic', fontWeight: 900, fontSize: '36px', color: 'var(--color-heading)', marginBottom: '48px' }}>
          Let's build something great together.
        </h2>

        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '48px', alignItems: 'start' }} className="contact-grid">

          {/* Left */}
          <div>
            <p style={{ fontSize: '15px', color: 'var(--color-body)', lineHeight: 1.7, marginBottom: '28px' }}>
              Whether you have a PM role, a product challenge, or just want to connect — I'm always up for a good conversation. Reach out and I'll get back within a day.
            </p>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '10px', marginBottom: '28px' }}>
              {siteConfig.socials.linkedin && (
                <SocialLink href={siteConfig.socials.linkedin} icon={<LinkedInIcon />} label="LinkedIn" />
              )}
              {siteConfig.socials.github && (
                <SocialLink href={siteConfig.socials.github} icon={<GitHubIcon />} label="GitHub" />
              )}
              <SocialLink href={`mailto:${siteConfig.email}`} icon={<MailIcon />} label={siteConfig.email} />
            </div>

          </div>

          {/* Right: form */}
          <form
            onSubmit={handleSubmit}
            style={{ background: 'rgba(255,255,255,0.65)', border: '0.5px solid var(--color-border)', borderRadius: '12px', padding: '22px', display: 'flex', flexDirection: 'column', gap: '12px' }}
          >
            <input
              type="text"
              placeholder="Your name"
              required
              value={form.name}
              onChange={e => setForm(f => ({ ...f, name: e.target.value }))}
              style={inputStyle}
              onFocus={e => { e.target.style.borderColor = 'var(--color-accent)'; e.target.style.background = '#fff'; }}
              onBlur={e => { e.target.style.borderColor = 'var(--color-border)'; e.target.style.background = 'var(--color-bg)'; }}
            />
            <input
              type="email"
              placeholder="your@email.com"
              required
              value={form.email}
              onChange={e => setForm(f => ({ ...f, email: e.target.value }))}
              style={inputStyle}
              onFocus={e => { e.target.style.borderColor = 'var(--color-accent)'; e.target.style.background = '#fff'; }}
              onBlur={e => { e.target.style.borderColor = 'var(--color-border)'; e.target.style.background = 'var(--color-bg)'; }}
            />
            <textarea
              placeholder="What's on your mind?"
              required
              value={form.message}
              onChange={e => setForm(f => ({ ...f, message: e.target.value }))}
              style={{ ...inputStyle, height: '90px', resize: 'none' }}
              onFocus={e => { e.target.style.borderColor = 'var(--color-accent)'; e.target.style.background = '#fff'; }}
              onBlur={e => { e.target.style.borderColor = 'var(--color-border)'; e.target.style.background = 'var(--color-bg)'; }}
            />
            {status === 'success' ? (
              <div style={{ textAlign: 'center', padding: '16px', background: 'rgba(43,108,176,0.06)', borderRadius: '8px', border: '1px solid var(--color-border)' }}>
                <p style={{ fontSize: '15px', fontWeight: 600, color: 'var(--color-accent)', marginBottom: '4px' }}>Message sent!</p>
                <p style={{ fontSize: '13px', color: 'var(--color-muted)' }}>I'll get back to you within 24 hours.</p>
              </div>
            ) : (
              <>
                <button
                  type="submit"
                  disabled={status === 'sending'}
                  style={{ width: '100%', fontSize: '15px', fontWeight: 600, color: '#fff', background: status === 'sending' ? 'var(--color-muted)' : 'var(--color-accent)', padding: '13px', borderRadius: '8px', border: 'none', cursor: status === 'sending' ? 'not-allowed' : 'pointer', transition: 'background 300ms' }}
                  onMouseEnter={e => { if (status !== 'sending') e.currentTarget.style.background = 'var(--color-accent-hover)'; }}
                  onMouseLeave={e => { if (status !== 'sending') e.currentTarget.style.background = 'var(--color-accent)'; }}
                >
                  {status === 'sending' ? 'Sending...' : 'Send message'}
                </button>
                {status === 'error' && (
                  <p style={{ fontSize: '12px', color: '#C53030', textAlign: 'center' }}>Something went wrong — please try again or email me directly.</p>
                )}
                {status === 'idle' && (
                  <p style={{ fontSize: '12px', color: 'var(--color-muted)', textAlign: 'center' }}>I reply within 24 hours</p>
                )}
              </>
            )}
          </form>
        </div>
      </div>
    </section>
  );
}
