import React, { useState } from 'react';
import { 
  Building2, 
  HeartPulse, 
  ShoppingCart, 
  Truck, 
  GraduationCap, 
  Home, 
  ArrowRight,
  ShieldAlert,
  Zap,
  CheckCircle2
} from 'lucide-react';

const industriesData = [
  {
    id: 'fintech',
    title: 'FinTech, Banking & Payments',
    icon: Building2,
    badge: 'PCI-DSS & SOC-2',
    desc: 'Architecting ultra-secure payment gateways, core banking APIs, algorithmic trading interfaces, and KYC/AML fraud prevention pipelines.',
    features: ['Real-time settlement architectures', 'Encrypted tokenized transactions', 'Regulatory compliance & auditing']
  },
  {
    id: 'healthcare',
    title: 'Healthcare & Life Sciences',
    icon: HeartPulse,
    badge: 'HIPAA & HL7/FHIR',
    desc: 'Developing compliant telehealth platforms, Electronic Health Record (EHR) portals, remote patient monitoring, and clinical workflows.',
    features: ['End-to-end encrypted consultations', 'HL7/FHIR data interoperability', 'Automated appointment & Rx workflows']
  },
  {
    id: 'ecommerce',
    title: 'E-Commerce & Digital Retail',
    icon: ShoppingCart,
    badge: 'High Concurrency',
    desc: 'Engineering headless commerce engines, multi-vendor marketplaces, AI recommendation systems, and lightning-fast checkout experiences.',
    features: ['Sub-second catalog search', 'Omnichannel inventory sync', 'Dynamic personalized pricing engines']
  },
  {
    id: 'logistics',
    title: 'Logistics & Supply Chain',
    icon: Truck,
    badge: 'IoT & Telematics',
    desc: 'Optimizing global supply chains with real-time fleet telematics, automated warehouse management (WMS), and predictive route optimization.',
    features: ['Real-time GPS dispatch & routing', 'Automated freight rate calculation', 'Predictive maintenance alerts']
  },
  {
    id: 'edtech',
    title: 'EdTech & Smart Learning',
    icon: GraduationCap,
    badge: 'Scalable LMS',
    desc: 'Creating next-generation interactive learning management systems, live video classrooms, proctoring systems, and student progress dashboards.',
    features: ['Adaptive learning pathways', 'Interactive assessment engines', 'Live multi-participant video SDKs']
  },
  {
    id: 'proptech',
    title: 'Real Estate & PropTech',
    icon: Home,
    badge: 'Smart Property Systems',
    desc: 'Digitalizing real estate transactions, tenant portals, facility maintenance ticketing, and virtual 3D tour property showcases.',
    features: ['Automated lease & rent invoicing', 'Smart IoT facility integration', 'Interactive floorplan rendering']
  }
];

function Industries() {
  const [activeTab, setActiveTab] = useState(0);

  return (
    <section className="section-padding bg-white" id="industries">
      <div className="container">
        
        {/* Section Header */}
        <div className="row justify-content-center text-center mb-5">
          <div className="col-lg-8">
            <span className="section-badge">
              Industry Verticals
            </span>
            <h2 className="section-title">
              Tailored Solutions for <br />
              <span className="gradient-text">High-Impact Industries</span>
            </h2>
            <p className="section-subtitle">
              We understand that generic code doesn't solve specialized industry challenges. Veniva combines deep domain compliance with modern software engineering.
            </p>
          </div>
        </div>

        {/* Industry Cards Grid */}
        <div className="row g-4">
          {industriesData.map((ind, index) => {
            const Icon = ind.icon;
            return (
              <div key={ind.id} className="col-lg-4 col-md-6">
                <div 
                  className="veniva-card p-4 h-100 d-flex flex-column"
                  style={{
                    backgroundColor: '#ffffff',
                    border: '1px solid #e0f2fe'
                  }}
                >
                  <div className="d-flex align-items-center justify-content-between mb-3">
                    <div 
                      className="p-3 rounded-3"
                      style={{
                        background: 'linear-gradient(135deg, #f0f9ff 0%, #e0f2fe 100%)',
                        color: '#0284c7'
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
                        fontSize: '0.72rem',
                        fontWeight: 600
                      }}
                    >
                      {ind.badge}
                    </span>
                  </div>

                  <h4 className="fw-bold mb-2" style={{ fontSize: '1.2rem', color: '#0a2540' }}>
                    {ind.title}
                  </h4>
                  <p style={{ color: '#64748b', fontSize: '0.9rem', lineHeight: '1.6', flexGrow: 1 }}>
                    {ind.desc}
                  </p>

                  <div className="mt-3 pt-3 border-top border-light-subtle">
                    <div className="d-flex flex-column gap-2">
                      {ind.features.map((feat, fIdx) => (
                        <div key={fIdx} className="d-flex align-items-center gap-2" style={{ fontSize: '0.82rem', color: '#334155' }}>
                          <CheckCircle2 size={14} className="text-info flex-shrink-0" />
                          <span>{feat}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="mt-4">
                    <a 
                      href="#contact" 
                      className="btn btn-sm btn-outline-info rounded-pill px-3 py-1 fw-bold text-decoration-none d-inline-flex align-items-center gap-1"
                      style={{ fontSize: '0.8rem' }}
                    >
                      <span>Consult Domain Specialist</span>
                      <ArrowRight size={13} />
                    </a>
                  </div>

                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}

export default Industries;
