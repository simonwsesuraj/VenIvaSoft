import React from 'react';
import { 
  ArrowRight, 
  Sparkles, 
  ShieldCheck, 
  Cloud, 
  Cpu, 
  Layers, 
  Code2, 
  Database, 
  CheckCircle2, 
  Calculator,
  Compass,
  Laptop
} from 'lucide-react';

function Home() {
  return (
    <>
      <section className="hero-section position-relative">
        <div className="hero-grid-bg"></div>
        <div className="hero-glow-sphere-1"></div>
        <div className="hero-glow-sphere-2"></div>

        <div className="container position-relative" style={{ zIndex: 10 }}>
          <div className="row align-items-center min-vh-75 py-4">
            
            {/* Left Column: Value Proposition & CTAs */}
            <div className="col-lg-6 text-start mb-5 mb-lg-0">
              
              {/* Tagline Badge */}
              <div className="hero-tagline-badge">
                <span className="badge-dot"></span>
                <span style={{ fontSize: '0.82rem', fontWeight: 700, color: '#0369a1', letterSpacing: '0.04em' }}>
                  INNOVATION • SOLUTIONS • GROWTH
                </span>
                <span className="badge rounded-pill bg-info text-dark fw-bold ms-1" style={{ fontSize: '0.68rem', backgroundColor: '#bae6fd !important' }}>
                  PVT LTD
                </span>
              </div>

              {/* Main Headline */}
              <h1 className="hero-title">
                Architecting Next-Gen <br />
                <span className="gradient-text">Software & Cloud</span> <br />
                Solutions for Enterprise
              </h1>

              {/* Subtitle */}
              <p className="hero-description">
                <strong>Veniva Software Solutions Pvt Ltd</strong> empowers startups, scale-ups, and global enterprises with bespoke software architecture, scalable cloud engineering, AI automation, and high-velocity digital transformation.
              </p>

              {/* Action Buttons */}
              <div className="d-flex flex-wrap align-items-center gap-3">
                <a href="#services" className="btn-veniva-primary">
                  <span>Explore Enterprise Services</span>
                  <ArrowRight size={18} />
                </a>

                <a href="#estimator" className="btn-veniva-secondary">
                  <Calculator size={17} />
                  <span>Cost & Timeline Calculator</span>
                </a>
              </div>

              {/* Trust Micro-Pills */}
              <div className="d-flex flex-wrap align-items-center gap-4 mt-4 pt-2">
                <div className="d-flex align-items-center gap-2">
                  <CheckCircle2 size={18} className="text-success" />
                  <span style={{ fontSize: '0.88rem', fontWeight: 600, color: '#334155' }}>
                    100% IP Ownership
                  </span>
                </div>
                <div className="d-flex align-items-center gap-2">
                  <ShieldCheck size={18} style={{ color: '#0284c7' }} />
                  <span style={{ fontSize: '0.88rem', fontWeight: 600, color: '#334155' }}>
                    Strict NDA & Security
                  </span>
                </div>
                <div className="d-flex align-items-center gap-2">
                  <Sparkles size={18} style={{ color: '#0ea5e9' }} />
                  <span style={{ fontSize: '0.88rem', fontWeight: 600, color: '#334155' }}>
                    Agile Sprint Execution
                  </span>
                </div>
              </div>

              {/* Stat Counters */}
              <div className="hero-stats-row">
                <div className="hero-stat-card">
                  <div className="hero-stat-number">150+</div>
                  <div className="hero-stat-label">Projects Delivered</div>
                </div>
                <div className="hero-stat-card">
                  <div className="hero-stat-number">99.4%</div>
                  <div className="hero-stat-label">On-Time SLA</div>
                </div>
                <div className="hero-stat-card">
                  <div className="hero-stat-number">45+</div>
                  <div className="hero-stat-label">Global Clients</div>
                </div>
                <div className="hero-stat-card">
                  <div className="hero-stat-number">24/7</div>
                  <div className="hero-stat-label">Tech Support</div>
                </div>
              </div>

            </div>

            {/* Right Column: Interactive Logo Emblem Orbit & Floating Tech Nodes */}
            <div className="col-lg-6">
              <div className="hero-visual-stage">
                
                {/* Outer Dashed Orbit Ring */}
                <div className="orbit-outer-ring"></div>

                {/* Central Emblem Showcase */}
                <div className="orbit-center-emblem">
                  <img 
                    src="/logo.png" 
                    alt="Veniva Software Solutions Emblem" 
                  />
                </div>

                {/* Floating Node 1: Cloud & DevOps */}
                <div className="hero-floating-card hero-card-1">
                  <div 
                    className="p-2 rounded-3 d-flex align-items-center justify-content-center"
                    style={{ background: 'linear-gradient(135deg, #e0f2fe, #bae6fd)', color: '#0284c7' }}
                  >
                    <Cloud size={20} />
                  </div>
                  <div>
                    <div style={{ fontSize: '0.82rem', fontWeight: 700, color: '#0a2540' }}>Cloud Architecture</div>
                    <div style={{ fontSize: '0.72rem', color: '#64748b' }}>AWS • Azure • Kubernetes</div>
                  </div>
                </div>

                {/* Floating Node 2: AI & Machine Learning */}
                <div className="hero-floating-card hero-card-2">
                  <div 
                    className="p-2 rounded-3 d-flex align-items-center justify-content-center"
                    style={{ background: 'linear-gradient(135deg, #e0f2fe, #bae6fd)', color: '#0369a1' }}
                  >
                    <Cpu size={20} />
                  </div>
                  <div>
                    <div style={{ fontSize: '0.82rem', fontWeight: 700, color: '#0a2540' }}>AI & Automation</div>
                    <div style={{ fontSize: '0.72rem', color: '#64748b' }}>Predictive Models • LLMs</div>
                  </div>
                </div>

                {/* Floating Node 3: Custom Web & Mobile Apps */}
                <div className="hero-floating-card hero-card-3">
                  <div 
                    className="p-2 rounded-3 d-flex align-items-center justify-content-center"
                    style={{ background: 'linear-gradient(135deg, #e0f2fe, #bae6fd)', color: '#0ea5e9' }}
                  >
                    <Laptop size={20} />
                  </div>
                  <div>
                    <div style={{ fontSize: '0.82rem', fontWeight: 700, color: '#0a2540' }}>Enterprise Apps</div>
                    <div style={{ fontSize: '0.72rem', color: '#64748b' }}>React • Node • Native Mobile</div>
                  </div>
                </div>

                {/* Floating Node 4: Quality & Security */}
                <div className="hero-floating-card hero-card-4">
                  <div 
                    className="p-2 rounded-3 d-flex align-items-center justify-content-center"
                    style={{ background: 'linear-gradient(135deg, #e0f2fe, #bae6fd)', color: '#0284c7' }}
                  >
                    <ShieldCheck size={20} />
                  </div>
                  <div>
                    <div style={{ fontSize: '0.82rem', fontWeight: 700, color: '#0a2540' }}>Zero Trust Security</div>
                    <div style={{ fontSize: '0.72rem', color: '#64748b' }}>ISO 9001 • SOC-2 Ready</div>
                  </div>
                </div>

              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Tech Ticker Ribbon */}
      <div className="tech-ticker-section">
        <div className="container">
          <div className="row align-items-center g-3">
            <div className="col-lg-3 text-lg-start text-center">
              <span className="tech-ticker-title">Core Technology Ecosystem:</span>
            </div>
            <div className="col-lg-9">
              <div className="d-flex flex-wrap justify-content-center justify-content-lg-start align-items-center gap-2">
                <div className="tech-logo-pill">
                  <Code2 size={16} className="text-info" />
                  <span>React & Next.js</span>
                </div>
                <div className="tech-logo-pill">
                  <Layers size={16} className="text-primary" />
                  <span>Node.js & Express</span>
                </div>
                <div className="tech-logo-pill">
                  <Cloud size={16} style={{ color: '#0284c7' }} />
                  <span>Amazon Web Services (AWS)</span>
                </div>
                <div className="tech-logo-pill">
                  <Cloud size={16} style={{ color: '#0369a1' }} />
                  <span>Microsoft Azure</span>
                </div>
                <div className="tech-logo-pill">
                  <Database size={16} className="text-info" />
                  <span>PostgreSQL & MongoDB</span>
                </div>
                <div className="tech-logo-pill">
                  <Cpu size={16} className="text-primary" />
                  <span>Python & AI Pipelines</span>
                </div>
                <div className="tech-logo-pill">
                  <Compass size={16} style={{ color: '#0ea5e9' }} />
                  <span>Docker & Kubernetes</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Home;