'use client';

import { lifePhotos, lifeFacts, lifeVideos } from '@/config/life';

const PHOTO_HEIGHTS: Record<string, string> = { tall: '220px', medium: '160px', short: '120px' };

const GRADIENTS: Record<string, string> = {
  g1: 'linear-gradient(160deg,#E8D5E4,#C4809E)',
  g2: 'linear-gradient(160deg,#81E6D9,#2C7A7B)',
  g3: 'linear-gradient(160deg,#4A5568,#1A202C)',
  g4: 'linear-gradient(160deg,#F6E05E,#B7791F)',
  g5: 'linear-gradient(160deg,#FC8181,#C53030)',
  g6: 'linear-gradient(160deg,#68D391,#276749)',
};

export function Life() {
  const col1Photos = lifePhotos.filter((_, i) => i % 2 === 0);
  const col2Photos = lifePhotos.filter((_, i) => i % 2 === 1);

  return (
    <section id="life" style={{ padding: '64px 120px', borderTop: '0.5px solid var(--color-border)' }}>
      <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
        <p style={{ fontSize: '10px', textTransform: 'uppercase', color: 'var(--color-accent)', letterSpacing: '0.1em', marginBottom: '12px' }}>
          Life
        </p>
        <h2 style={{ fontFamily: 'var(--font-playfair), "Playfair Display", serif', fontStyle: 'italic', fontWeight: 900, fontSize: '36px', color: 'var(--color-heading)', marginBottom: '32px' }}>
          A little bit about me.
        </h2>

        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', gap: '10px', alignItems: 'start' }}>

          {/* Column 1: photos (even indices) */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
            {col1Photos.map((photo, i) => (
              <div key={i} style={{ borderRadius: '10px', overflow: 'hidden', position: 'relative', height: PHOTO_HEIGHTS[photo.size], background: GRADIENTS[photo.gradientPreset] || GRADIENTS.g1 }}>
                {photo.image && (
                  <img src={photo.image} alt={photo.caption} style={{ width: '100%', height: '100%', objectFit: 'cover', objectPosition: photo.objectPosition ?? 'center', display: 'block' }} />
                )}
                <div style={{ position: 'absolute', bottom: 0, left: 0, right: 0, padding: '10px 12px', background: 'linear-gradient(transparent, rgba(0,0,0,0.55))' }}>
                  <p style={{ fontSize: '13px', fontWeight: 500, color: '#fff', margin: 0 }}>{photo.caption}</p>
                  {photo.sub && <p style={{ fontSize: '11px', color: '#fff', opacity: 0.65, margin: '2px 0 0' }}>{photo.sub}</p>}
                </div>
              </div>
            ))}
          </div>

          {/* Column 2: video first, then photos (odd indices) */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
            {lifeVideos.map((video, i) => (
              <div key={i} style={{ borderRadius: '10px', overflow: 'hidden', position: 'relative', height: PHOTO_HEIGHTS[video.size] }}>
                <iframe
                  src={`https://www.youtube.com/embed/${video.youtubeId}`}
                  title={video.caption || 'Video'}
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                  style={{ width: '100%', height: '100%', border: 'none', display: 'block' }}
                />
              </div>
            ))}
            {col2Photos.map((photo, i) => (
              <div key={i} style={{ borderRadius: '10px', overflow: 'hidden', position: 'relative', height: PHOTO_HEIGHTS[photo.size], background: GRADIENTS[photo.gradientPreset] || GRADIENTS.g1 }}>
                {photo.image && (
                  <img src={photo.image} alt={photo.caption} style={{ width: '100%', height: '100%', objectFit: 'cover', objectPosition: photo.objectPosition ?? 'center', display: 'block' }} />
                )}
                <div style={{ position: 'absolute', bottom: 0, left: 0, right: 0, padding: '10px 12px', background: 'linear-gradient(transparent, rgba(0,0,0,0.55))' }}>
                  <p style={{ fontSize: '13px', fontWeight: 500, color: '#fff', margin: 0 }}>{photo.caption}</p>
                  {photo.sub && <p style={{ fontSize: '11px', color: '#fff', opacity: 0.65, margin: '2px 0 0' }}>{photo.sub}</p>}
                </div>
              </div>
            ))}
          </div>

          {/* Column 3: all fun facts */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
            {lifeFacts.map((fact, i) => (
              <div key={i} style={{ background: 'var(--color-surface)', border: '0.5px solid var(--color-border)', borderRadius: '10px', padding: '14px', display: 'flex', alignItems: 'flex-start', gap: '10px' }}>
                <span style={{ fontSize: '22px', lineHeight: 1 }}>{fact.emoji}</span>
                <p style={{ fontSize: '14px', fontWeight: 500, color: 'var(--color-heading)', lineHeight: 1.5 }}>{fact.text}</p>
              </div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
}
