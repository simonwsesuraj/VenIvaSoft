import React from 'react';
import { Star, Quote, CheckCircle, Building } from 'lucide-react';

const testimonialsData = [
  {
    quote: "Veniva Software Solutions engineered our multi-tenant SaaS platform from scratch. Their deep understanding of microservices architecture and zero-downtime AWS deployments allowed us to scale from 5,000 to 200,000+ active users without a glitch.",
    author: "Marcus Vance",
    role: "Chief Technology Officer",
    company: "FinPulse Global Ltd, UK",
    rating: 5,
    tag: "FinTech Scale-Up"
  },
  {
    quote: "What sets Veniva apart is their relentless focus on clean code and sprint transparency. Their engineers integrated directly with our product team via Slack and Jira, delivering production-ready demos every two weeks like clockwork.",
    author: "Elena Rostova",
    role: "VP of Digital Engineering",
    company: "HealthSync Technologies, USA",
    rating: 5,
    tag: "Healthcare Portal"
  },
  {
    quote: "We needed our high-throughput e-commerce platform modernized before peak shopping season. Veniva’s team rebuilt the core checkout and cache layer in React and Node.js, slashing page load times to under 400ms and increasing our conversion rate by 2.8x.",
    author: "Rajeshwar Iyer",
    role: "Managing Director",
    company: "OmniRetail Direct, India",
    rating: 5,
    tag: "Enterprise E-Commerce"
  }
];

function Testimonials() {
  return (
    <section className="section-padding bg-light" id="testimonials" style={{ background: '#f8fafc' }}>
      <div className="container">
        
        {/* Section Header */}
        <div className="row justify-content-center text-center mb-5">
          <div className="col-lg-8">
            <span className="section-badge">
              Client Trust & Reviews
            </span>
            <h2 className="section-title">
              What Global Engineering Leaders <br />
              <span className="gradient-text">Say About Partnering with Veniva</span>
            </h2>
            <p className="section-subtitle">
              We measure our success by the enduring partnerships we build and the business growth we unlock for our clients.
            </p>
          </div>
        </div>

        {/* Testimonials Cards Grid */}
        <div className="row g-4">
          {testimonialsData.map((item, idx) => (
            <div key={idx} className="col-lg-4 col-md-6">
              <div className="veniva-card p-4 h-100 d-flex flex-column" style={{ border: '1px solid #e0f2fe' }}>
                
                {/* Top Quote Icon & Rating */}
                <div className="d-flex align-items-center justify-content-between mb-3">
                  <div className="d-flex gap-1 text-warning">
                    {[...Array(item.rating)].map((_, rIdx) => (
                      <Star key={rIdx} size={17} fill="#f59e0b" color="#f59e0b" />
                    ))}
                  </div>
                  <span className="badge bg-info-subtle text-info fw-bold" style={{ fontSize: '0.72rem' }}>
                    {item.tag}
                  </span>
                </div>

                <Quote size={28} className="text-info opacity-25 mb-2" />

                {/* Quote Text */}
                <p className="text-secondary flex-grow-1" style={{ fontSize: '0.92rem', lineHeight: '1.7', fontStyle: 'italic' }}>
                  "{item.quote}"
                </p>

                {/* Author Info */}
                <div className="pt-3 border-top border-light-subtle d-flex align-items-center gap-3">
                  <div 
                    className="rounded-circle d-flex align-items-center justify-content-center fw-bold text-white shadow-sm"
                    style={{
                      width: 44,
                      height: 44,
                      background: 'linear-gradient(135deg, #0284c7 0%, #0369a1 100%)',
                      fontSize: '1rem'
                    }}
                  >
                    {item.author.charAt(0)}
                  </div>
                  <div>
                    <h6 className="fw-bold mb-0" style={{ color: '#0a2540', fontSize: '0.95rem' }}>
                      {item.author}
                    </h6>
                    <small className="text-secondary d-block" style={{ fontSize: '0.78rem' }}>
                      {item.role}
                    </small>
                    <small className="fw-semibold" style={{ fontSize: '0.75rem', color: '#0284c7' }}>
                      {item.company}
                    </small>
                  </div>
                </div>

              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}

export default Testimonials;
