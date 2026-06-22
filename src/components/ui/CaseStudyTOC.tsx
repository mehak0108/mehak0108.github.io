'use client';

import { useEffect, useState } from 'react';

const TOP_OFFSET = 80; // px — accounts for the sticky top bar

export function CaseStudyTOC({ sections }: { sections: { id: string; title: string }[] }) {
  const [activeId, setActiveId] = useState(sections[0]?.id);

  useEffect(() => {
    const handleScroll = () => {
      let current = sections[0]?.id;
      for (const section of sections) {
        const el = document.getElementById(section.id);
        if (el && el.getBoundingClientRect().top <= TOP_OFFSET + 1) {
          current = section.id;
        }
      }
      setActiveId(current);
    };
    handleScroll();
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [sections]);

  const handleClick = (id: string) => {
    const el = document.getElementById(id);
    if (!el) return;
    const top = el.getBoundingClientRect().top + window.scrollY - TOP_OFFSET + 8;
    window.scrollTo({ top, behavior: 'smooth' });
  };

  if (sections.length === 0) return null;

  return (
    <nav className="case-study-toc" style={{ position: 'sticky', top: '88px', display: 'flex', flexDirection: 'column', gap: '20px' }}>
      {sections.map(section => {
        const isActive = section.id === activeId;
        return (
          <button
            key={section.id}
            onClick={() => handleClick(section.id)}
            style={{
              textAlign: 'left',
              fontSize: '14px',
              fontWeight: isActive ? 600 : 400,
              color: isActive ? 'var(--color-accent)' : 'var(--color-muted)',
              background: 'none',
              border: 'none',
              padding: 0,
              cursor: 'pointer',
              transition: 'color 200ms',
              fontFamily: 'var(--font-inter), Inter, sans-serif',
            }}
          >
            {section.title}
          </button>
        );
      })}
    </nav>
  );
}
