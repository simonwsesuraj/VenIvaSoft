import React from 'react';

/**
 * VenivaLogo Component
 * Renders the official Veniva Software Solutions branding:
 * - High-res logo image (from model.jpeg) or precision SVG vector emblem
 * - Stylized corporate typography: "Veniva Software Solutions Pvt Ltd"
 * - Tagline: "INNOVATION • SOLUTIONS • GROWTH"
 */
export function VenivaLogo({ 
  size = "md", 
  variant = "full", // "full", "horizontal", "mark-only", "compact"
  theme = "light",  // "light", "dark"
  className = "",
  showTagline = false 
}) {
  // Dimensions based on size
  const sizes = {
    sm: { img: 36, title: '1.05rem', sub: '0.65rem' },
    md: { img: 46, title: '1.25rem', sub: '0.72rem' },
    lg: { img: 58, title: '1.55rem', sub: '0.8rem' },
    xl: { img: 80, title: '2.1rem', sub: '0.9rem' }
  };

  const currentSize = sizes[size] || sizes.md;

  // Mark-only rendering
  if (variant === "mark-only") {
    return (
      <div className={`veniva-logo-mark-wrap ${className}`} style={{ display: 'inline-flex', alignItems: 'center' }}>
        <img 
          src="/logo.png" 
          alt="Veniva Software Solutions Logo" 
          className="veniva-logo-img rounded-circle"
          style={{ 
            width: currentSize.img, 
            height: currentSize.img, 
            objectFit: 'contain',
            filter: 'drop-shadow(0 4px 10px rgba(14, 165, 233, 0.25))'
          }} 
        />
      </div>
    );
  }

  return (
    <div 
      className={`veniva-logo-container d-inline-flex align-items-center gap-2 text-decoration-none ${className}`}
      style={{ userSelect: 'none' }}
    >
      {/* Emblem Badge */}
      <div className="veniva-logo-badge position-relative d-flex align-items-center justify-content-center">
        <div 
          className="logo-glow-ring position-absolute rounded-circle"
          style={{
            inset: -2,
            background: 'linear-gradient(135deg, rgba(56, 189, 248, 0.4), rgba(2, 132, 199, 0.15))',
            filter: 'blur(3px)',
            zIndex: 0
          }}
        />
        <img 
          src="/logo.png" 
          alt="Veniva Logo Mark" 
          className="rounded-circle position-relative"
          style={{ 
            width: currentSize.img, 
            height: currentSize.img, 
            objectFit: 'cover',
            border: '2px solid rgba(56, 189, 248, 0.3)',
            boxShadow: '0 4px 12px rgba(14, 165, 233, 0.2)',
            zIndex: 1
          }} 
        />
      </div>

      {/* Brand Typography */}
      <div className="veniva-logo-text d-flex flex-column justify-content-center">
        <div 
          className="d-flex align-items-baseline gap-1"
          style={{ 
            fontSize: currentSize.title, 
            fontWeight: 800, 
            lineHeight: 1.1,
            letterSpacing: '-0.02em',
            fontFamily: "'Outfit', 'Plus Jakarta Sans', sans-serif"
          }}
        >
          <span 
            style={{ 
              color: theme === 'dark' ? '#38bdf8' : '#0369a1',
              fontWeight: 900
            }}
          >
            Veniva
          </span>
          <span 
            style={{ 
              color: theme === 'dark' ? '#f8fafc' : '#0f172a',
              fontWeight: 700,
              fontSize: '0.9em'
            }}
          >
            Software
          </span>
          <span 
            style={{ 
              color: '#0ea5e9',
              fontWeight: 600,
              fontSize: '0.85em'
            }}
          >
            Solutions
          </span>
        </div>

        {/* Corporate Legal & Tagline */}
        <div className="d-flex align-items-center gap-2 mt-0">
          <span 
            className="badge rounded-pill"
            style={{
              fontSize: '0.62rem',
              fontWeight: 600,
              padding: '1px 6px',
              backgroundColor: theme === 'dark' ? 'rgba(56, 189, 248, 0.15)' : 'rgba(14, 165, 233, 0.1)',
              color: theme === 'dark' ? '#38bdf8' : '#0284c7',
              letterSpacing: '0.5px'
            }}
          >
            PVT LTD
          </span>

          {showTagline && (
            <span 
              style={{
                fontSize: currentSize.sub,
                color: theme === 'dark' ? '#94a3b8' : '#64748b',
                letterSpacing: '0.08em',
                fontWeight: 600,
                textTransform: 'uppercase'
              }}
            >
              Innovation • Solutions • Growth
            </span>
          )}
        </div>
      </div>
    </div>
  );
}

export default VenivaLogo;
