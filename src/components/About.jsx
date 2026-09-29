import React from 'react';
import VenivaLogo from './VenivaLogo';
import { 
  Lightbulb, 
  Target, 
  TrendingUp, 
  CheckCircle, 
  Users, 
  ShieldCheck, 
  Clock, 
  Award,
  ArrowRight
} from 'lucide-react';

function About() {
  return (
    <section className="about-section" id="about">
      <div className="container">
        
        {/* Section Header */}
        <div className="row justify-content-center text-center mb-5">
          <div className="col-lg-8">
            <span className="section-badge">
              About Veniva Software Solutions
            </span>
            <h2 className="section-title">
              Pioneering Enterprise Software with <br />
              <span className="gradient-text">Engineering Excellence</span>
            </h2>
            <p className="section-subtitle">
              Headquartered in India with a global engineering footprint, <strong>Veniva Software Solutions Pvt Ltd</strong> is committed to building robust digital architectures that empower businesses to lead in an evolving digital landscape.
            </p>
          </div>
        </div>

        {/* 3 Pillars from Logo Tagline */}
        <div className="row g-4 mb-5">
          {/* Pillar 1: Innovation */}
          <div className="col-md-4">
            <div className="about-feature-box">
              <div className="about-icon-wrap">
                <Lightbulb size={28} />
              </div>
              <div className="d-flex align-items-center justify-content-between mb-2">
                <h4 style={{ fontSize: '1.3rem', margin: 0 }}>Innovation</h4>
                <span className="badge rounded-pill pillar-badge-innovation px-3 py-1">Pillar 01</span>
              </div>
              <p style={{ color: '#64748b', fontSize: '0.95rem', flexGrow: 1 }}>
                We harness next-generation frameworks, cloud-native architectures, and applied AI automation to create competitive moats for your business.
              </p>
              <div className="pt-2 border-top border-light-subtle">
                <span style={{ fontSize: '0.82rem', fontWeight: 700, color: '#0284c7' }}>
                  Cloud Native • AI Integration • Future Proof
                </span>
              </div>
            </div>
          </div>

          {/* Pillar 2: Solutions */}
          <div className="col-md-4">
            <div className="about-feature-box">
              <div className="about-icon-wrap" style={{ color: '#0369a1' }}>
                <Target size={28} />
              </div>
              <div className="d-flex align-items-center justify-content-between mb-2">
                <h4 style={{ fontSize: '1.3rem', margin: 0 }}>Solutions</h4>
                <span className="badge rounded-pill pillar-badge-solutions px-3 py-1">Pillar 02</span>
              </div>
              <p style={{ color: '#64748b', fontSize: '0.95rem', flexGrow: 1 }}>
                We do not just write code; we solve foundational business challenges through custom enterprise software, intuitive UI/UX, and robust system integrations.
              </p>
              <div className="pt-2 border-top border-light-subtle">
                <span style={{ fontSize: '0.82rem', fontWeight: 700, color: '#0369a1' }}>
                  Custom ERP • High Throughput • Zero Friction
                </span>
              </div>
            </div>
          </div>

          {/* Pillar 3: Growth */}
          <div className="col-md-4">
            <div className="about-feature-box">
              <div className="about-icon-wrap" style={{ color: '#059669' }}>
                <TrendingUp size={28} />
              </div>
              <div className="d-flex align-items-center justify-content-between mb-2">
                <h4 style={{ fontSize: '1.3rem', margin: 0 }}>Growth</h4>
                <span className="badge rounded-pill pillar-badge-growth px-3 py-1">Pillar 03</span>
              </div>
              <p style={{ color: '#64748b', fontSize: '0.95rem', flexGrow: 1 }}>
                Our systems are engineered for high scalability and rock-solid reliability, helping our corporate clients accelerate time-to-market and maximize ROI.
              </p>
              <div className="pt-2 border-top border-light-subtle">
                <span style={{ fontSize: '0.82rem', fontWeight: 700, color: '#059669' }}>
                  Enterprise Scalability • High ROI • Global Reach
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Detailed Story & Company Values */}
        <div className="row align-items-center g-5 pt-3">
          
          <div className="col-lg-6">
            <div className="about-image-card">
              <div className="p-3 text-center">
                <VenivaLogo size="xl" showTagline={true} className="mb-4" />
                <h5 className="fw-bold text-dark mt-2 mb-3">Enterprise Grade Engineering Partner</h5>
                <p style={{ color: '#475569', fontSize: '0.95rem', lineHeight: '1.7' }}>
                  Veniva Software Solutions Pvt Ltd operates with a clear objective: Delivering uncompromising technical quality, clean code standards, and agile sprint predictability.
                </p>
                <div className="d-flex justify-content-center gap-3 mt-3">
                  <div className="p-3 rounded-3 bg-white border border-info-subtle shadow-sm text-start" style={{ flex: 1 }}>
                    <div className="fw-bold text-primary" style={{ fontSize: '1.25rem' }}>100%</div>
                    <small className="text-secondary fw-semibold">Agile Methodology</small>
                  </div>
                  <div className="p-3 rounded-3 bg-white border border-info-subtle shadow-sm text-start" style={{ flex: 1 }}>
                    <div className="fw-bold text-primary" style={{ fontSize: '1.25rem' }}>0%</div>
                    <small className="text-secondary fw-semibold">Vendor Lock-in</small>
                  </div>
                </div>
              </div>

              {/* Floating Experience Badge */}
              <div className="experience-badge d-none d-sm-block">
                <div className="d-flex align-items-center gap-2">
                  <Award size={26} className="text-warning" />
                  <div>
                    <div className="fw-bold" style={{ fontSize: '1.1rem', lineHeight: 1 }}>Certified</div>
                    <small style={{ fontSize: '0.75rem', opacity: 0.9 }}>Global Quality Standards</small>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="col-lg-6">
            <span className="badge rounded-pill bg-light text-primary border border-primary-subtle px-3 py-1 mb-2 fw-bold">
              WHY VENIVA STANDS APART
            </span>
            <h3 className="fw-bold mb-3" style={{ fontSize: '2rem' }}>
              Your Trusted Software & Digital Innovation Partner
            </h3>
            <p style={{ color: '#475569', lineHeight: 1.7, marginBottom: '24px' }}>
              Whether you are modernizing legacy infrastructure, launching an intelligent SaaS product, or scaling an enterprise platform to millions of active users, our battle-tested engineers integrate seamlessly with your vision.
            </p>

            <div className="d-flex flex-column gap-3 mb-4">
              <div className="d-flex align-items-start gap-3">
                <div className="p-1 rounded-circle bg-info-subtle text-info mt-1">
                  <CheckCircle size={18} style={{ color: '#0284c7' }} />
                </div>
                <div>
                  <h6 className="fw-bold mb-1" style={{ color: '#0f172a' }}>Dedicated Cross-Functional Engineering Pods</h6>
                  <p className="mb-0 text-secondary" style={{ fontSize: '0.9rem' }}>
                    Full squads featuring Tech Leads, Frontend Specialists, Backend Architects, QA Automation engineers, and DevOps.
                  </p>
                </div>
              </div>

              <div className="d-flex align-items-start gap-3">
                <div className="p-1 rounded-circle bg-info-subtle text-info mt-1">
                  <CheckCircle size={18} style={{ color: '#0284c7' }} />
                </div>
                <div>
                  <h6 className="fw-bold mb-1" style={{ color: '#0f172a' }}>Transparent Sprint Tracking & Code Reviews</h6>
                  <p className="mb-0 text-secondary" style={{ fontSize: '0.9rem' }}>
                    Direct Git repository access, real-time Jira / Slack collaboration, and bi-weekly production-ready demos.
                  </p>
                </div>
              </div>

              <div className="d-flex align-items-start gap-3">
                <div className="p-1 rounded-circle bg-info-subtle text-info mt-1">
                  <CheckCircle size={18} style={{ color: '#0284c7' }} />
                </div>
                <div>
                  <h6 className="fw-bold mb-1" style={{ color: '#0f172a' }}>Enterprise Security, Compliance & Strict NDA</h6>
                  <p className="mb-0 text-secondary" style={{ fontSize: '0.9rem' }}>
                    Your source code and intellectual property are protected with complete legal compliance and IP assignment.
                  </p>
                </div>
              </div>
            </div>

            <a href="#contact" className="btn-veniva-primary">
              <span>Partner with Veniva</span>
              <ArrowRight size={17} />
            </a>

          </div>

        </div>

      </div>
    </section>
  );
}

export default About;