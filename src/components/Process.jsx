import React from 'react';
import { 
  Search, 
  PenTool, 
  GitBranch, 
  CheckCircle2, 
  Rocket, 
  Headphones,
  ShieldCheck,
  FileCheck,
  Users2,
  Lock
} from 'lucide-react';

const workflowSteps = [
  {
    step: '01',
    title: 'Discovery & Strategic Roadmap',
    icon: Search,
    desc: 'Deep-dive alignment with your stakeholders to define business objectives, technical requirements, system architecture, and risk mitigation.'
  },
  {
    step: '02',
    title: 'UI/UX Prototyping & Architecture',
    icon: PenTool,
    desc: 'Translating product concepts into interactive Figma wireframes, component design systems, and database schema diagrams.'
  },
  {
    step: '03',
    title: 'Agile Sprint Engineering',
    icon: GitBranch,
    desc: 'Two-week sprint delivery cycles with transparent backlog tracking in Jira/Linear, daily standups, and bi-weekly demo deployments.'
  },
  {
    step: '04',
    title: 'Rigorous QA & Security Audits',
    icon: CheckCircle2,
    desc: 'End-to-end automated testing, load testing under peak traffic simulation, OWASP Top-10 penetration testing, and code quality gating.'
  },
  {
    step: '05',
    title: 'Zero-Downtime Cloud Release',
    icon: Rocket,
    desc: 'Automated CI/CD pipelines to AWS, Azure, or GCP using Docker and Kubernetes, ensuring seamless production rollout with zero disruption.'
  },
  {
    step: '06',
    title: '24/7 SLA, Monitoring & Scaling',
    icon: Headphones,
    desc: 'Post-launch application support, proactive Datadog/Prometheus performance monitoring, SLA response guarantees, and continuous feature expansion.'
  }
];

function Process() {
  return (
    <section className="section-padding bg-light" id="process" style={{ background: 'linear-gradient(180deg, #ffffff 0%, #f0f9ff 100%)' }}>
      <div className="container">
        
        {/* Section Header */}
        <div className="row justify-content-center text-center mb-5">
          <div className="col-lg-8">
            <span className="section-badge">
              Agile Engineering Lifecycle
            </span>
            <h2 className="section-title">
              How Veniva Delivers <br />
              <span className="gradient-text">Predictable High-Quality Outcomes</span>
            </h2>
            <p className="section-subtitle">
              We eliminate guesswork with a battle-tested 6-stage engineering framework that guarantees transparency, on-time delivery, and bulletproof software reliability.
            </p>
          </div>
        </div>

        {/* 6 Steps Grid */}
        <div className="row g-4 mb-5">
          {workflowSteps.map((item, idx) => {
            const Icon = item.icon;
            return (
              <div key={idx} className="col-lg-4 col-md-6">
                <div 
                  className="veniva-card p-4 h-100 d-flex flex-column position-relative"
                  style={{ border: '1px solid #e0f2fe' }}
                >
                  <div className="d-flex align-items-center justify-content-between mb-3">
                    <div 
                      className="p-3 rounded-3"
                      style={{
                        background: 'linear-gradient(135deg, #f0f9ff, #e0f2fe)',
                        color: '#0284c7'
                      }}
                    >
                      <Icon size={24} />
                    </div>
                    <span 
                      style={{ 
                        fontSize: '1.6rem', 
                        fontWeight: 900, 
                        color: '#bae6fd',
                        fontFamily: 'var(--font-heading)'
                      }}
                    >
                      {item.step}
                    </span>
                  </div>

                  <h5 className="fw-bold mb-2" style={{ color: '#0a2540', fontSize: '1.15rem' }}>
                    {item.title}
                  </h5>

                  <p className="text-secondary mb-0" style={{ fontSize: '0.88rem', lineHeight: '1.6' }}>
                    {item.desc}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

        {/* Enterprise Guarantees Banner */}
        <div 
          className="p-5 rounded-4 position-relative overflow-hidden"
          style={{
            background: 'linear-gradient(135deg, #075985 0%, #0369a1 50%, #0284c7 100%)',
            color: '#ffffff',
            boxShadow: '0 20px 40px rgba(2, 132, 199, 0.25)'
          }}
        >
          <div className="row align-items-center g-4 position-relative" style={{ zIndex: 2 }}>
            <div className="col-lg-4">
              <span className="badge bg-white text-primary fw-bold px-3 py-1 mb-2">
                VENIVA CORPORATE PLEDGE
              </span>
              <h3 className="fw-bold text-white mb-2" style={{ fontSize: '1.8rem' }}>
                Your Intellectual Property Is 100% Protected
              </h3>
              <p className="text-light opacity-90 mb-0" style={{ fontSize: '0.95rem' }}>
                We uphold ironclad legal agreements, strict NDAs, and full intellectual property assignment on the first day of engagement.
              </p>
            </div>

            <div className="col-lg-8">
              <div className="row g-3">
                <div className="col-sm-6">
                  <div className="p-3 rounded-3 bg-white bg-opacity-10 border border-white border-opacity-20 d-flex align-items-start gap-3">
                    <Lock size={24} className="text-warning flex-shrink-0 mt-1" />
                    <div>
                      <h6 className="fw-bold text-white mb-1">Strict Bilateral NDA</h6>
                      <small className="text-light opacity-80">Full confidentiality regarding business logic, designs, and proprietary algorithms.</small>
                    </div>
                  </div>
                </div>

                <div className="col-sm-6">
                  <div className="p-3 rounded-3 bg-white bg-opacity-10 border border-white border-opacity-20 d-flex align-items-start gap-3">
                    <FileCheck size={24} className="text-info flex-shrink-0 mt-1" />
                    <div>
                      <h6 className="fw-bold text-white mb-1">100% Source Code Transfer</h6>
                      <small className="text-light opacity-80">You retain total ownership of all Git repositories, documentation, and cloud assets.</small>
                    </div>
                  </div>
                </div>

                <div className="col-sm-6">
                  <div className="p-3 rounded-3 bg-white bg-opacity-10 border border-white border-opacity-20 d-flex align-items-start gap-3">
                    <Users2 size={24} className="text-success flex-shrink-0 mt-1" />
                    <div>
                      <h6 className="fw-bold text-white mb-1">Dedicated Engineering Pods</h6>
                      <small className="text-light opacity-80">Zero shared resources; your team is 100% committed to your roadmap.</small>
                    </div>
                  </div>
                </div>

                <div className="col-sm-6">
                  <div className="p-3 rounded-3 bg-white bg-opacity-10 border border-white border-opacity-20 d-flex align-items-start gap-3">
                    <ShieldCheck size={24} className="text-warning flex-shrink-0 mt-1" />
                    <div>
                      <h6 className="fw-bold text-white mb-1">Guaranteed SLA Support</h6>
                      <small className="text-light opacity-80">Round-the-clock priority incident resolution and performance guarantees.</small>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}

export default Process;
