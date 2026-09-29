import React, { useState } from 'react';
import { 
  ExternalLink, 
  ArrowUpRight, 
  Layers, 
  BarChart3, 
  CheckCircle, 
  ShieldCheck,
  TrendingUp,
  X
} from 'lucide-react';

const projectsData = [
  {
    id: 1,
    title: 'FinPulse: Enterprise Core Banking & Payment Settlement',
    category: 'FinTech',
    desc: 'An ultra-secure, PCI-DSS compliant financial settlement engine handling hundreds of thousands of daily micro-transactions with automated ledger reconciliations.',
    tags: ['React', 'Java Spring Boot', 'AWS ECS', 'PostgreSQL', 'Kafka'],
    impact: '350,000+ Daily TX',
    secondaryImpact: '99.999% Uptime',
    clientLocation: 'London, UK & Singapore',
    caseOverview: 'The client needed to migrate a legacy monolithic banking mainframe to an event-driven microservices architecture without a single second of transactional downtime.',
    solutionDelivered: 'Veniva implemented a dual-ledger streaming pipeline using Apache Kafka, containerized Spring Boot services, and a reactive financial dashboard in React.'
  },
  {
    id: 2,
    title: 'CloudMatrix: Multi-Tenant Cloud Orchestrator',
    category: 'Cloud & SaaS',
    desc: 'A unified cloud governance portal allowing enterprise IT teams to automate Kubernetes clusters, monitor AWS/Azure spend, and enforce security policies.',
    tags: ['Next.js', 'Go (Golang)', 'Kubernetes', 'Terraform', 'Prometheus'],
    impact: '62% Cost Reduction',
    secondaryImpact: '3.5x Faster Deploys',
    clientLocation: 'San Francisco, USA',
    caseOverview: 'Engineering teams spent 40+ hours per week manually provisioning cloud environments and diagnosing multi-region deployment failures.',
    solutionDelivered: 'Veniva engineered an automated self-service developer portal using Next.js and Go microservices, reducing cluster provisioning from 4 hours to 90 seconds.'
  },
  {
    id: 3,
    title: 'HealthSync: HIPAA-Compliant Telehealth Ecosystem',
    category: 'Healthcare',
    desc: 'A full-suite virtual care platform featuring WebRTC encrypted video consultations, electronic health record (EHR) sync, and digital prescription workflows.',
    tags: ['React', 'Node.js', 'WebRTC', 'MongoDB', 'HIPAA Shield'],
    impact: '1.2M+ Consultations',
    secondaryImpact: '4.9/5 Patient Rating',
    clientLocation: 'Boston, USA',
    caseOverview: 'Healthcare providers faced fragmented patient records and unreliable video streaming during remote patient consultations.',
    solutionDelivered: 'Veniva delivered an end-to-end encrypted telehealth portal with HL7 interoperability and integrated real-time video streaming with low latency.'
  },
  {
    id: 4,
    title: 'LogiTrack AI: Predictive Fleet & Supply Chain Dispatcher',
    category: 'AI & Logistics',
    desc: 'An intelligent logistics platform using telemetry and machine learning to optimize multi-stop delivery routes, predict fuel costs, and dispatch commercial fleets.',
    tags: ['Python', 'FastAPI', 'PyTorch', 'React Native', 'PostGIS'],
    impact: '28% Fuel Efficiency',
    secondaryImpact: 'Sub-Second GPS Sync',
    clientLocation: 'Dubai, UAE',
    caseOverview: 'Global freight operator struggled with dynamic traffic delays, route inefficiency, and high fuel expenditure across a 3,000-vehicle fleet.',
    solutionDelivered: 'Veniva created custom machine learning routing algorithms that recalculate optimal pathways in real-time, integrated into a cross-platform mobile driver app.'
  },
  {
    id: 5,
    title: 'RetailPro: High-Concurrence Omnichannel Storefront',
    category: 'E-Commerce',
    desc: 'A headless digital commerce platform capable of handling Flash Sale traffic surges exceeding 50,000 concurrent checkout sessions without database degradation.',
    tags: ['React', 'Next.js', 'Node.js', 'Redis', 'Stripe'],
    impact: '2.8x Conversion Rate',
    secondaryImpact: '400ms Avg Load Time',
    clientLocation: 'Mumbai & Sydney',
    caseOverview: 'Frequent Black Friday crashes caused substantial lost revenue and cart abandonment on an aging monolithic e-commerce store.',
    solutionDelivered: 'Veniva architected an edge-cached Next.js headless storefront backed by Redis caching and serverless checkout workers, sustaining 50k concurrent buyers effortlessly.'
  },
  {
    id: 6,
    title: 'EduSphere: Adaptive AI Learning & Exam Platform',
    category: 'EdTech',
    desc: 'An interactive e-learning platform with automated proctoring, personalized AI quiz generation, and enterprise progress tracking for certification institutes.',
    tags: ['React', 'Python', 'FastAPI', 'OpenAI API', 'PostgreSQL'],
    impact: '480,000+ Students',
    secondaryImpact: '94% Course Completion',
    clientLocation: 'Bengaluru, India',
    caseOverview: 'Educational institute required scalable remote examination tools with anti-cheating AI and adaptive syllabus progression.',
    solutionDelivered: 'Veniva built an AI-driven learning engine with automated browser monitoring, instant feedback quizzes, and interactive analytics.'
  }
];

function Projects() {
  const [filter, setFilter] = useState('All');
  const [selectedProject, setSelectedProject] = useState(null);

  const categories = ['All', 'FinTech', 'Cloud & SaaS', 'Healthcare', 'AI & Logistics', 'E-Commerce', 'EdTech'];

  const filteredProjects = filter === 'All' 
    ? projectsData 
    : projectsData.filter(p => p.category === filter);

  return (
    <section className="section-padding bg-white" id="projects">
      <div className="container">
        
        {/* Section Header */}
        <div className="row justify-content-center text-center mb-5">
          <div className="col-lg-8">
            <span className="section-badge">
              Proven Track Record
            </span>
            <h2 className="section-title">
              Featured Case Studies & <br />
              <span className="gradient-text">Engineering Impact</span>
            </h2>
            <p className="section-subtitle">
              Explore how <strong>Veniva Software Solutions Pvt Ltd</strong> delivers measurable business outcomes, enterprise resilience, and rapid ROI for global clients.
            </p>
          </div>
        </div>

        {/* Filter Pills */}
        <div className="d-flex flex-wrap justify-content-center gap-2 mb-5">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setFilter(cat)}
              className={`btn btn-sm rounded-pill px-3 py-2 fw-semibold transition-all ${
                filter === cat 
                  ? 'btn-info text-white' 
                  : 'btn-outline-light text-secondary border'
              }`}
              style={{
                backgroundColor: filter === cat ? '#0284c7' : '#ffffff',
                borderColor: filter === cat ? '#0284c7' : '#e2e8f0',
                color: filter === cat ? '#ffffff' : '#64748b'
              }}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Projects Cards Grid */}
        <div className="row g-4">
          {filteredProjects.map((project) => (
            <div key={project.id} className="col-lg-4 col-md-6">
              <div className="veniva-card h-100 p-4 d-flex flex-column" style={{ border: '1px solid #e0f2fe' }}>
                
                {/* Header Badge */}
                <div className="d-flex align-items-center justify-content-between mb-3">
                  <span className="badge bg-info-subtle text-info fw-bold" style={{ fontSize: '0.75rem' }}>
                    {project.category}
                  </span>
                  <span className="text-secondary" style={{ fontSize: '0.75rem' }}>
                    {project.clientLocation}
                  </span>
                </div>

                {/* Project Title */}
                <h4 className="fw-bold mb-2" style={{ fontSize: '1.2rem', color: '#0a2540' }}>
                  {project.title}
                </h4>

                <p style={{ color: '#64748b', fontSize: '0.9rem', lineHeight: '1.6', flexGrow: 1 }}>
                  {project.desc}
                </p>

                {/* Impact Metrics Banner */}
                <div 
                  className="p-3 rounded-3 mb-3"
                  style={{
                    background: 'linear-gradient(135deg, #f0f9ff 0%, #e0f2fe 100%)',
                    border: '1px solid #bae6fd'
                  }}
                >
                  <div className="d-flex align-items-center justify-content-between">
                    <div>
                      <div className="text-primary fw-bold" style={{ fontSize: '1.15rem' }}>
                        {project.impact}
                      </div>
                      <small className="text-secondary fw-semibold">Key Metric Achieved</small>
                    </div>
                    <div className="text-end">
                      <div className="fw-bold text-dark" style={{ fontSize: '0.95rem' }}>
                        {project.secondaryImpact}
                      </div>
                      <small className="text-secondary">Reliability</small>
                    </div>
                  </div>
                </div>

                {/* Tech Tags */}
                <div className="d-flex flex-wrap gap-1 mb-4">
                  {project.tags.map((tag, idx) => (
                    <span 
                      key={idx} 
                      className="badge bg-light text-secondary border border-light-subtle rounded-pill px-2 py-1"
                      style={{ fontSize: '0.7rem' }}
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Case Study Details Modal Trigger */}
                <button
                  onClick={() => setSelectedProject(project)}
                  className="btn btn-outline-info rounded-pill w-100 fw-bold d-flex align-items-center justify-content-center gap-2 mt-auto"
                  style={{ fontSize: '0.85rem' }}
                >
                  <span>View Architecture & Case Study</span>
                  <ArrowUpRight size={15} />
                </button>

              </div>
            </div>
          ))}
        </div>

      </div>

      {/* Case Study Modal */}
      {selectedProject && (
        <div 
          className="modal fade show d-block" 
          tabIndex="-1" 
          style={{ backgroundColor: 'rgba(10, 37, 64, 0.65)', backdropFilter: 'blur(5px)', zIndex: 1060 }}
        >
          <div className="modal-dialog modal-dialog-centered modal-lg">
            <div className="modal-content rounded-4 border-0 shadow-lg">
              
              <div className="modal-header border-bottom border-light p-4">
                <div>
                  <span className="badge bg-info-subtle text-info fw-bold mb-1">
                    {selectedProject.category} • {selectedProject.clientLocation}
                  </span>
                  <h4 className="modal-title fw-bold" style={{ color: '#0a2540' }}>
                    {selectedProject.title}
                  </h4>
                </div>
                <button 
                  type="button" 
                  className="btn-close" 
                  onClick={() => setSelectedProject(null)}
                  aria-label="Close"
                ></button>
              </div>

              <div className="modal-body p-4">
                <div className="row g-4 mb-4">
                  <div className="col-md-6">
                    <div className="p-3 rounded-3 bg-danger-subtle border border-danger-subtle">
                      <h6 className="fw-bold text-danger mb-1">The Challenge:</h6>
                      <p className="mb-0 text-secondary" style={{ fontSize: '0.9rem', lineHeight: '1.6' }}>
                        {selectedProject.caseOverview}
                      </p>
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="p-3 rounded-3 bg-success-subtle border border-success-subtle">
                      <h6 className="fw-bold text-success mb-1">Veniva's Solution:</h6>
                      <p className="mb-0 text-secondary" style={{ fontSize: '0.9rem', lineHeight: '1.6' }}>
                        {selectedProject.solutionDelivered}
                      </p>
                    </div>
                  </div>
                </div>

                <div className="p-3 rounded-3 bg-info-subtle border border-info-subtle d-flex align-items-center justify-content-between mb-4">
                  <div className="d-flex align-items-center gap-2">
                    <TrendingUp size={22} className="text-info" />
                    <div>
                      <div className="fw-bold text-dark">Proven Production Outcomes</div>
                      <small className="text-secondary">{selectedProject.impact} and {selectedProject.secondaryImpact}</small>
                    </div>
                  </div>
                  <span className="badge bg-white text-info fw-bold px-3 py-2 rounded-pill shadow-sm">
                    Verified Deliverable
                  </span>
                </div>

                <h6 className="fw-bold text-dark mb-2">Technologies Used:</h6>
                <div className="d-flex flex-wrap gap-2">
                  {selectedProject.tags.map((t, idx) => (
                    <span key={idx} className="badge bg-light text-dark border px-3 py-2 rounded-pill fw-semibold">
                      {t}
                    </span>
                  ))}
                </div>
              </div>

              <div className="modal-footer border-top border-light p-3">
                <button 
                  type="button" 
                  className="btn btn-light rounded-pill px-4" 
                  onClick={() => setSelectedProject(null)}
                >
                  Close
                </button>
                <a 
                  href="#contact" 
                  className="btn-veniva-primary text-decoration-none"
                  onClick={() => setSelectedProject(null)}
                >
                  <span>Build Similar Solution</span>
                  <ExternalLink size={16} />
                </a>
              </div>

            </div>
          </div>
        </div>
      )}

    </section>
  );
}

export default Projects;
