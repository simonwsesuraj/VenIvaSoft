import React, { useState } from 'react';
import { 
  Code2, 
  Cloud, 
  Smartphone, 
  Cpu, 
  Layout, 
  ShieldCheck, 
  ArrowRight, 
  Check, 
  ExternalLink,
  Layers,
  X
} from 'lucide-react';

const servicesData = [
  {
    id: 'custom-software',
    title: 'Custom Enterprise Software Development',
    category: 'Core Engineering',
    icon: Code2,
    color: '#0284c7',
    summary: 'Tailor-made web applications, ERPs, CRM systems, and scalable SaaS platforms architected for high concurrency and complex business logic.',
    deliverables: [
      'Multi-tenant Cloud SaaS Architectures',
      'Enterprise ERP & CRM Customization',
      'High-throughput REST & GraphQL Microservices',
      'Legacy System Modernization & Code Refactoring'
    ],
    tech: ['React / Next.js', 'Node.js', 'Java / Spring', 'PostgreSQL', 'Docker'],
    stat: '100% Scalable'
  },
  {
    id: 'cloud-devops',
    title: 'Cloud Engineering & DevOps Automation',
    category: 'Infrastructure',
    icon: Cloud,
    color: '#0ea5e9',
    summary: 'Accelerate release velocity and achieve 99.99% system availability with automated CI/CD pipelines, Kubernetes orchestration, and multi-cloud solutions.',
    deliverables: [
      'AWS, Azure & Google Cloud Architectures',
      'Kubernetes (K8s) & Container Orchestration',
      'Terraform Infrastructure as Code (IaC)',
      'Automated CI/CD Pipelines & Zero-Downtime Deployment'
    ],
    tech: ['AWS', 'Microsoft Azure', 'Kubernetes', 'Terraform', 'GitHub Actions'],
    stat: '99.99% Uptime SLA'
  },
  {
    id: 'mobile-apps',
    title: 'Cross-Platform & Native Mobile Apps',
    category: 'Mobile Solutions',
    icon: Smartphone,
    color: '#0369a1',
    summary: 'Intuitive, lightning-fast iOS and Android applications developed with React Native, Flutter, and native frameworks to engage users everywhere.',
    deliverables: [
      'iOS & Android Cross-Platform Development',
      'Offline-First Synchronized Database Storage',
      'Seamless Payment & Push Notification Integrations',
      'App Store & Google Play Launch Management'
    ],
    tech: ['React Native', 'Flutter', 'Swift', 'Kotlin', 'Firebase'],
    stat: '60fps Performance'
  },
  {
    id: 'ai-ml',
    title: 'AI, Machine Learning & Automation',
    category: 'Intelligent Systems',
    icon: Cpu,
    color: '#075985',
    summary: 'Harness the power of predictive analytics, custom LLM integrations, conversational AI agents, and intelligent process automation.',
    deliverables: [
      'Custom LLM Fine-Tuning & RAG Pipelines',
      'Computer Vision & NLP Processing Systems',
      'Predictive Business Intelligence Dashboards',
      'Automated Robotic Process Automation (RPA)'
    ],
    tech: ['Python', 'PyTorch', 'LangChain', 'OpenAI API', 'Pandas'],
    stat: '3x Efficiency Boost'
  },
  {
    id: 'ui-ux',
    title: 'UI/UX Design & Product Strategy',
    category: 'Design Engineering',
    icon: Layout,
    color: '#0284c7',
    summary: 'Human-centered UI/UX design that transforms complicated enterprise workflows into elegant, intuitive digital journeys that drive conversion.',
    deliverables: [
      'Design Thinking & User Journey Mapping',
      'Interactive High-Fidelity Wireframes & Prototypes',
      'Scalable Enterprise Design Systems & Component Kits',
      'Accessibility (WCAG 2.1) & Usability Testing'
    ],
    tech: ['Figma', 'Design Tokens', 'Tailwind / CSS3', 'WCAG Compliant'],
    stat: '4.9/5 User Rating'
  },
  {
    id: 'qa-security',
    title: 'Cybersecurity & Quality Assurance',
    category: 'Security & Reliability',
    icon: ShieldCheck,
    color: '#0f766e',
    summary: 'Ensure bulletproof security, data integrity, and bug-free releases with rigorous end-to-end automated test suites and vulnerability assessments.',
    deliverables: [
      'Automated Regression & Load Testing (Playwright / Cypress)',
      'Vulnerability & Penetration Testing (OWASP Top 10)',
      'SOC-2, HIPAA & GDPR Compliance Advisory',
      '24/7 Managed Application Monitoring & SLA'
    ],
    tech: ['Playwright', 'Cypress', 'OWASP ZAP', 'Datadog', 'SonarQube'],
    stat: 'Zero Critical Bugs'
  }
];

function Services() {
  const [activeModalService, setActiveModalService] = useState(null);

  return (
    <section className="section-padding bg-light" id="services" style={{ background: 'linear-gradient(180deg, #f8fafc 0%, #f0f9ff 100%)' }}>
      <div className="container">
        
        {/* Section Title */}
        <div className="row justify-content-center text-center mb-5">
          <div className="col-lg-8">
            <span className="section-badge">
              Comprehensive Capabilities
            </span>
            <h2 className="section-title">
              End-to-End Enterprise <br />
              <span className="gradient-text">Software & Cloud Services</span>
            </h2>
            <p className="section-subtitle">
              From ideation to high-scale production deployment, <strong>Veniva Software Solutions Pvt Ltd</strong> delivers technical excellence across the complete software lifecycle.
            </p>
          </div>
        </div>

        {/* Services Grid */}
        <div className="row g-4">
          {servicesData.map((svc) => {
            const Icon = svc.icon;
            return (
              <div key={svc.id} className="col-lg-4 col-md-6">
                <div className="veniva-card h-100 p-4 d-flex flex-column" style={{ border: '1px solid #e0f2fe' }}>
                  
                  {/* Top Bar with Icon & Stat */}
                  <div className="d-flex align-items-center justify-content-between mb-3">
                    <div 
                      className="p-3 rounded-3 d-flex align-items-center justify-content-center"
                      style={{ 
                        background: 'linear-gradient(135deg, #f0f9ff 0%, #e0f2fe 100%)', 
                        color: svc.color,
                        boxShadow: '0 4px 12px rgba(14, 165, 233, 0.12)'
                      }}
                    >
                      <Icon size={26} />
                    </div>
                    <span 
                      className="badge rounded-pill"
                      style={{
                        background: '#f0f9ff',
                        color: '#0369a1',
                        border: '1px solid #bae6fd',
                        fontSize: '0.75rem',
                        fontWeight: 700
                      }}
                    >
                      {svc.stat}
                    </span>
                  </div>

                  {/* Title & Summary */}
                  <span style={{ fontSize: '0.75rem', fontWeight: 700, color: '#0ea5e9', textTransform: 'uppercase', letterSpacing: '0.05em' }}>
                    {svc.category}
                  </span>
                  <h3 className="fw-bold mt-1 mb-2" style={{ fontSize: '1.25rem', color: '#0a2540' }}>
                    {svc.title}
                  </h3>
                  <p style={{ color: '#64748b', fontSize: '0.92rem', lineHeight: '1.6', marginBottom: '20px' }}>
                    {svc.summary}
                  </p>

                  {/* Key Deliverables Bullet Points */}
                  <div className="mb-4 flex-grow-1">
                    <div style={{ fontSize: '0.8rem', fontWeight: 700, color: '#1e293b', marginBottom: '8px' }}>
                      Key Capabilities:
                    </div>
                    <ul className="list-unstyled mb-0 d-flex flex-column gap-2">
                      {svc.deliverables.slice(0, 3).map((item, idx) => (
                        <li key={idx} className="d-flex align-items-start gap-2" style={{ fontSize: '0.85rem', color: '#475569' }}>
                          <Check size={15} className="text-info mt-1 flex-shrink-0" />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Tech Stack Pills */}
                  <div className="d-flex flex-wrap gap-1 mb-4">
                    {svc.tech.map((t, idx) => (
                      <span 
                        key={idx} 
                        className="badge bg-white text-secondary border border-light-subtle rounded-pill px-2 py-1"
                        style={{ fontSize: '0.72rem', fontWeight: 500 }}
                      >
                        {t}
                      </span>
                    ))}
                  </div>

                  {/* CTA Button */}
                  <div className="pt-2 border-top border-light-subtle mt-auto">
                    <button 
                      onClick={() => setActiveModalService(svc)}
                      className="btn btn-link p-0 text-decoration-none d-flex align-items-center gap-2 fw-bold"
                      style={{ color: '#0284c7', fontSize: '0.88rem' }}
                    >
                      <span>Explore Scope & Architecture</span>
                      <ArrowRight size={15} />
                    </button>
                  </div>

                </div>
              </div>
            );
          })}
        </div>

        {/* Bottom Banner */}
        <div className="mt-5 p-4 rounded-4 bg-white border border-info-subtle shadow-sm">
          <div className="row align-items-center g-3">
            <div className="col-lg-8">
              <h4 className="fw-bold mb-1" style={{ color: '#0a2540' }}>
                Need a Custom Architectural Solution or Team Augmentation?
              </h4>
              <p className="mb-0 text-secondary" style={{ fontSize: '0.95rem' }}>
                Veniva provides dedicated software engineering pods within 72 hours, aligned with your timezone and tech stack.
              </p>
            </div>
            <div className="col-lg-4 text-lg-end">
              <a href="#contact" className="btn-veniva-primary">
                <span>Request Custom Scope</span>
                <ArrowRight size={16} />
              </a>
            </div>
          </div>
        </div>

      </div>

      {/* Service Detail Modal */}
      {activeModalService && (
        <div 
          className="modal fade show d-block" 
          tabIndex="-1" 
          style={{ backgroundColor: 'rgba(10, 37, 64, 0.65)', backdropFilter: 'blur(5px)', zIndex: 1060 }}
        >
          <div className="modal-dialog modal-dialog-centered modal-lg">
            <div className="modal-content rounded-4 border-0 shadow-lg">
              
              <div className="modal-header border-bottom border-light p-4">
                <div className="d-flex align-items-center gap-3">
                  <div 
                    className="p-3 rounded-3"
                    style={{ background: '#f0f9ff', color: activeModalService.color }}
                  >
                    {React.createElement(activeModalService.icon, { size: 28 })}
                  </div>
                  <div>
                    <span className="badge bg-info-subtle text-info fw-bold mb-1">
                      {activeModalService.category}
                    </span>
                    <h4 className="modal-title fw-bold" style={{ color: '#0a2540' }}>
                      {activeModalService.title}
                    </h4>
                  </div>
                </div>
                <button 
                  type="button" 
                  className="btn-close" 
                  onClick={() => setActiveModalService(null)}
                  aria-label="Close"
                ></button>
              </div>

              <div className="modal-body p-4">
                <p className="text-secondary" style={{ fontSize: '1rem', lineHeight: 1.7 }}>
                  {activeModalService.summary}
                </p>

                <h6 className="fw-bold text-dark mt-4 mb-3">Enterprise Scope & Architecture Deliverables:</h6>
                <div className="row g-3">
                  {activeModalService.deliverables.map((item, idx) => (
                    <div key={idx} className="col-md-6">
                      <div className="p-3 rounded-3 bg-light border border-light-subtle d-flex align-items-start gap-2 h-100">
                        <Check size={18} className="text-success mt-1 flex-shrink-0" />
                        <span style={{ fontSize: '0.9rem', color: '#334155', fontWeight: 500 }}>
                          {item}
                        </span>
                      </div>
                    </div>
                  ))}
                </div>

                <h6 className="fw-bold text-dark mt-4 mb-2">Technologies & Toolchains Deployed:</h6>
                <div className="d-flex flex-wrap gap-2">
                  {activeModalService.tech.map((t, idx) => (
                    <span key={idx} className="badge bg-primary-subtle text-primary px-3 py-2 rounded-pill fw-semibold">
                      {t}
                    </span>
                  ))}
                </div>
              </div>

              <div className="modal-footer border-top border-light p-3">
                <button 
                  type="button" 
                  className="btn btn-light rounded-pill px-4" 
                  onClick={() => setActiveModalService(null)}
                >
                  Close
                </button>
                <a 
                  href="#contact" 
                  className="btn-veniva-primary text-decoration-none"
                  onClick={() => setActiveModalService(null)}
                >
                  <span>Inquire for This Service</span>
                  <ArrowRight size={16} />
                </a>
              </div>

            </div>
          </div>
        </div>
      )}
    </section>
  );
}

export default Services;
