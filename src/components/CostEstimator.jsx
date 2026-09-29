import React, { useState } from 'react';
import { 
  Calculator, 
  Clock, 
  Users, 
  Cpu, 
  ArrowRight, 
  Check, 
  Sparkles,
  Zap
} from 'lucide-react';

const projectTypes = [
  { id: 'web', name: 'Web Application / SaaS', baseWeeks: 6, team: 3, tech: 'React, Node.js, PostgreSQL' },
  { id: 'mobile', name: 'iOS & Android Mobile App', baseWeeks: 8, team: 4, tech: 'React Native / Flutter, Cloud APIs' },
  { id: 'cloud', name: 'Cloud & DevOps Migration', baseWeeks: 5, team: 2, tech: 'AWS / Azure, Docker, Kubernetes' },
  { id: 'ai', name: 'AI & Machine Learning Solution', baseWeeks: 7, team: 3, tech: 'Python, PyTorch, LLM APIs' },
  { id: 'erp', name: 'Custom ERP / Enterprise Portal', baseWeeks: 12, team: 5, tech: 'Full-Stack Microservices, Cloud DB' }
];

const scaleOptions = [
  { id: 'mvp', name: 'MVP / Prototype', multiplier: 1, duration: '4 - 8 Weeks', desc: 'Core feature validation, rapid market launch' },
  { id: 'growth', name: 'Growth Platform', multiplier: 1.6, duration: '8 - 14 Weeks', desc: 'Scalable architecture, payment & multi-user' },
  { id: 'enterprise', name: 'Enterprise Grade', multiplier: 2.2, duration: '14 - 24 Weeks', desc: 'High concurrency, strict security & SLA' }
];

const teamTypes = [
  { id: 'pod', name: 'Full Dedicated Pod (PM, Architect, Devs, QA)', adder: 1 },
  { id: 'staff', name: 'Dedicated Engineers (Staff Augmentation)', adder: 0.8 },
  { id: 'consult', name: 'Specialized Cloud / AI Architect Advisory', adder: 0.6 }
];

function CostEstimator() {
  const [selectedType, setSelectedType] = useState(projectTypes[0]);
  const [selectedScale, setSelectedScale] = useState(scaleOptions[0]);
  const [selectedTeam, setSelectedTeam] = useState(teamTypes[0]);

  // Estimated weeks
  const estimatedWeeks = Math.round(selectedType.baseWeeks * selectedScale.multiplier);
  // Estimated team members
  const estimatedEngineers = Math.max(2, Math.round(selectedType.team * (selectedScale.id === 'enterprise' ? 1.5 : 1)));

  const handleInquire = () => {
    const contactElem = document.getElementById('contact');
    if (contactElem) {
      contactElem.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="section-padding bg-white" id="estimator">
      <div className="container">
        
        {/* Header */}
        <div className="row justify-content-center text-center mb-5">
          <div className="col-lg-8">
            <span className="section-badge">
              Interactive Estimator
            </span>
            <h2 className="section-title">
              Estimate Your Project's <br />
              <span className="gradient-text">Timeline & Team Structure</span>
            </h2>
            <p className="section-subtitle">
              Get an instant baseline of development duration, team composition, and recommended architectural stack in just a few clicks.
            </p>
          </div>
        </div>

        {/* Interactive Estimator Layout */}
        <div className="row g-4 align-items-stretch">
          
          {/* Controls Column */}
          <div className="col-lg-7">
            <div className="veniva-card p-4 p-md-5 h-100" style={{ border: '1px solid #bae6fd' }}>
              
              {/* Step 1: Project Type */}
              <div className="mb-4">
                <label className="fw-bold text-dark d-flex align-items-center gap-2 mb-3" style={{ fontSize: '1.05rem' }}>
                  <span className="badge rounded-circle bg-info text-white p-2" style={{ width: 26, height: 26, display: 'inline-flex', alignItems: 'center', justifyContent: 'center' }}>1</span>
                  Select Project Category
                </label>
                <div className="row g-2">
                  {projectTypes.map((pt) => {
                    const isSelected = selectedType.id === pt.id;
                    return (
                      <div key={pt.id} className="col-sm-6">
                        <div 
                          onClick={() => setSelectedType(pt)}
                          className={`p-3 rounded-3 cursor-pointer text-start border transition-all h-100 ${
                            isSelected ? 'bg-info-subtle border-info text-dark shadow-sm' : 'bg-light border-light-subtle text-secondary'
                          }`}
                          style={{ cursor: 'pointer' }}
                        >
                          <div className="fw-bold" style={{ fontSize: '0.92rem', color: isSelected ? '#0284c7' : '#1e293b' }}>
                            {pt.name}
                          </div>
                          <small className="text-secondary d-block mt-1">Tech: {pt.tech}</small>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>

              {/* Step 2: Scale & Maturity */}
              <div className="mb-4">
                <label className="fw-bold text-dark d-flex align-items-center gap-2 mb-3" style={{ fontSize: '1.05rem' }}>
                  <span className="badge rounded-circle bg-info text-white p-2" style={{ width: 26, height: 26, display: 'inline-flex', alignItems: 'center', justifyContent: 'center' }}>2</span>
                  Select Project Scale & Complexity
                </label>
                <div className="row g-2">
                  {scaleOptions.map((sc) => {
                    const isSelected = selectedScale.id === sc.id;
                    return (
                      <div key={sc.id} className="col-md-4">
                        <div 
                          onClick={() => setSelectedScale(sc)}
                          className={`p-3 rounded-3 cursor-pointer border transition-all h-100 ${
                            isSelected ? 'bg-info-subtle border-info text-dark shadow-sm' : 'bg-light border-light-subtle text-secondary'
                          }`}
                          style={{ cursor: 'pointer' }}
                        >
                          <div className="fw-bold" style={{ fontSize: '0.9rem', color: isSelected ? '#0284c7' : '#1e293b' }}>
                            {sc.name}
                          </div>
                          <small className="text-secondary d-block mt-1" style={{ fontSize: '0.78rem' }}>
                            {sc.desc}
                          </small>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>

              {/* Step 3: Team Engagement Model */}
              <div>
                <label className="fw-bold text-dark d-flex align-items-center gap-2 mb-3" style={{ fontSize: '1.05rem' }}>
                  <span className="badge rounded-circle bg-info text-white p-2" style={{ width: 26, height: 26, display: 'inline-flex', alignItems: 'center', justifyContent: 'center' }}>3</span>
                  Preferred Engagement Model
                </label>
                <div className="d-flex flex-column gap-2">
                  {teamTypes.map((tt) => {
                    const isSelected = selectedTeam.id === tt.id;
                    return (
                      <div 
                        key={tt.id}
                        onClick={() => setSelectedTeam(tt)}
                        className={`p-3 rounded-3 cursor-pointer border d-flex align-items-center justify-content-between transition-all ${
                          isSelected ? 'bg-info-subtle border-info text-dark shadow-sm' : 'bg-light border-light-subtle text-secondary'
                        }`}
                        style={{ cursor: 'pointer' }}
                      >
                        <span className="fw-semibold" style={{ fontSize: '0.9rem', color: isSelected ? '#0284c7' : '#334155' }}>
                          {tt.name}
                        </span>
                        <div className={`rounded-circle p-1 d-flex align-items-center justify-content-center ${isSelected ? 'bg-info text-white' : 'border'}`} style={{ width: 22, height: 22 }}>
                          {isSelected && <Check size={14} />}
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>

            </div>
          </div>

          {/* Live Dynamic Output Card */}
          <div className="col-lg-5">
            <div 
              className="p-4 p-md-5 rounded-4 h-100 d-flex flex-column justify-content-between text-white position-relative overflow-hidden"
              style={{
                background: 'linear-gradient(135deg, #075985 0%, #0369a1 50%, #0284c7 100%)',
                boxShadow: '0 15px 35px rgba(2, 132, 199, 0.3)'
              }}
            >
              
              <div>
                <div className="d-flex align-items-center justify-content-between mb-4 pb-3 border-bottom border-white border-opacity-20">
                  <div className="d-flex align-items-center gap-2">
                    <Sparkles size={20} className="text-warning" />
                    <span className="fw-bold tracking-wide" style={{ letterSpacing: '0.05em' }}>
                      PROJECT ESTIMATE SUMMARY
                    </span>
                  </div>
                  <span className="badge bg-white text-primary rounded-pill px-3 py-1 fw-bold">
                    Veniva Agile Sprint
                  </span>
                </div>

                {/* Estimate Result 1: Duration */}
                <div className="mb-4">
                  <small className="text-light opacity-80 text-uppercase fw-semibold" style={{ fontSize: '0.78rem' }}>
                    Estimated Time-To-Production
                  </small>
                  <div className="d-flex align-items-baseline gap-2 mt-1">
                    <span className="fw-bold text-white" style={{ fontSize: '2.4rem', fontFamily: 'var(--font-heading)', lineHeight: 1 }}>
                      {estimatedWeeks}
                    </span>
                    <span className="fw-bold text-warning" style={{ fontSize: '1.2rem' }}>
                      Weeks ({selectedScale.duration})
                    </span>
                  </div>
                </div>

                {/* Estimate Result 2: Recommended Team */}
                <div className="mb-4">
                  <small className="text-light opacity-80 text-uppercase fw-semibold" style={{ fontSize: '0.78rem' }}>
                    Recommended Pod Composition
                  </small>
                  <div className="d-flex align-items-center gap-2 mt-1">
                    <Users size={22} className="text-info" />
                    <span className="fw-bold text-white" style={{ fontSize: '1.2rem' }}>
                      {estimatedEngineers} Full-Time Dedicated Specialists
                    </span>
                  </div>
                  <small className="text-light opacity-75 mt-1 d-block">
                    Includes Tech Lead, Full-Stack Devs, QA Automation, and Scrum Master.
                  </small>
                </div>

                {/* Recommended Tech Blueprint */}
                <div className="p-3 rounded-3 bg-white bg-opacity-10 border border-white border-opacity-20 mb-4">
                  <small className="text-light opacity-80 fw-bold d-block mb-1">
                    Recommended Architectural Blueprint:
                  </small>
                  <div className="fw-semibold text-warning" style={{ fontSize: '0.92rem' }}>
                    {selectedType.tech}
                  </div>
                </div>
              </div>

              {/* Action Button */}
              <div>
                <button
                  onClick={handleInquire}
                  className="btn btn-veniva-white w-100 justify-content-center text-decoration-none"
                >
                  <span>Submit Estimate & Book Strategy Call</span>
                  <ArrowRight size={17} />
                </button>
                <div className="text-center mt-3">
                  <small className="text-light opacity-80">
                    🔒 No obligation • Strict NDA signed prior to project kickoff
                  </small>
                </div>
              </div>

            </div>
          </div>

        </div>

      </div>
    </section>
  );
}

export default CostEstimator;
