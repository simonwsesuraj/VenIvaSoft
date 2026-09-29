import React, { useState } from 'react';
import { 
  Code, 
  Server, 
  Cloud, 
  Database, 
  Cpu, 
  CheckCircle,
  Terminal,
  Layers
} from 'lucide-react';

const techCategories = [
  {
    id: 'frontend',
    name: 'Frontend & Web',
    icon: Code,
    description: 'Ultra-responsive, accessible, and high-performance client applications.',
    items: [
      { name: 'React 19', level: 'Advanced Core', role: 'Component UI Architecture' },
      { name: 'Next.js 15', level: 'Production Ready', role: 'SSR, SSG & Edge Routing' },
      { name: 'TypeScript', level: 'Strict Typing', role: 'Enterprise Code Reliability' },
      { name: 'Vue.js', level: 'Proficient', role: 'Reactive Applications' },
      { name: 'HTML5 & CSS3', level: 'Standard', role: 'Semantic & Responsive Design' },
      { name: 'Bootstrap & Tailwind', level: 'Mastery', role: 'Design Systems & Utility CSS' }
    ]
  },
  {
    id: 'backend',
    name: 'Backend & APIs',
    icon: Server,
    description: 'Resilient, high-throughput microservices and secure business logic engines.',
    items: [
      { name: 'Node.js & Express', level: 'Advanced Core', role: 'Event-Driven Microservices' },
      { name: 'Python & FastAPI', level: 'Advanced Core', role: 'High-Speed Async Services & AI' },
      { name: 'Java & Spring Boot', level: 'Enterprise', role: 'Enterprise Banking & ERP Systems' },
      { name: 'Go (Golang)', level: 'High Concurrency', role: 'Low-Latency Microservices' },
      { name: 'GraphQL & REST', level: 'Production Ready', role: 'API Contracts & Federation' },
      { name: 'gRPC & WebSockets', level: 'Real-time', role: 'Bi-directional Streaming' }
    ]
  },
  {
    id: 'cloud',
    name: 'Cloud & DevOps',
    icon: Cloud,
    description: 'Zero-downtime CI/CD workflows and automated cloud infrastructure.',
    items: [
      { name: 'Amazon Web Services (AWS)', level: 'Certified Partner', role: 'EC2, S3, Lambda, ECS, RDS' },
      { name: 'Microsoft Azure', level: 'Certified Partner', role: 'AKS, App Services, DevOps' },
      { name: 'Google Cloud (GCP)', level: 'Certified Partner', role: 'Compute Engine, BigQuery' },
      { name: 'Docker & Containers', level: 'Standard', role: 'Reproducible Deployments' },
      { name: 'Kubernetes (K8s)', level: 'Production Scale', role: 'Container Orchestration' },
      { name: 'Terraform & CI/CD', level: 'Automated', role: 'Infrastructure as Code (IaC)' }
    ]
  },
  {
    id: 'database',
    name: 'Databases & Cache',
    icon: Database,
    description: 'Scalable data persistence, relational integrity, and distributed caching.',
    items: [
      { name: 'PostgreSQL', level: 'Advanced Core', role: 'ACID Relational Architecture' },
      { name: 'MongoDB', level: 'Advanced Core', role: 'NoSQL Document Store' },
      { name: 'Redis', level: 'In-Memory', role: 'Sub-Millisecond Caching & PubSub' },
      { name: 'MySQL', level: 'Production Ready', role: 'Transactional Storage' },
      { name: 'Apache Kafka', level: 'Streaming', role: 'Distributed Event Logging' },
      { name: 'Elasticsearch', level: 'Fast Search', role: 'Full-Text Log Analytics' }
    ]
  },
  {
    id: 'ai-data',
    name: 'AI & Data Intelligence',
    icon: Cpu,
    description: 'Modern Machine Learning, generative AI pipelines, and analytical data warehouses.',
    items: [
      { name: 'PyTorch & TensorFlow', level: 'Model Dev', role: 'Deep Learning & Neural Networks' },
      { name: 'LangChain & LlamaIndex', level: 'Generative AI', role: 'Enterprise RAG Orchestration' },
      { name: 'OpenAI & Claude APIs', level: 'LLM Agents', role: 'Intelligent Knowledge Extraction' },
      { name: 'Pandas & NumPy', level: 'Data Science', role: 'Statistical Analytics' },
      { name: 'Hugging Face', level: 'Open Models', role: 'Transformers & Fine-Tuning' },
      { name: 'Apache Spark', level: 'Big Data', role: 'Distributed Batch Processing' }
    ]
  }
];

function TechStack() {
  const [activeTab, setActiveTab] = useState('frontend');

  const currentCategory = techCategories.find(c => c.id === activeTab) || techCategories[0];

  return (
    <section className="section-padding bg-light" id="techstack" style={{ background: '#f8fafc' }}>
      <div className="container">
        
        {/* Header */}
        <div className="row justify-content-center text-center mb-5">
          <div className="col-lg-8">
            <span className="section-badge">
              Modern Technology Stack
            </span>
            <h2 className="section-title">
              Powered by Industry-Leading <br />
              <span className="gradient-text">Frameworks & Cloud Tools</span>
            </h2>
            <p className="section-subtitle">
              At Veniva Software Solutions, we build on proven, forward-compatible technologies that provide unmatched reliability, security, and developer velocity.
            </p>
          </div>
        </div>

        {/* Category Tabs */}
        <div className="d-flex flex-wrap justify-content-center gap-2 mb-5">
          {techCategories.map((cat) => {
            const Icon = cat.icon;
            const isActive = activeTab === cat.id;
            return (
              <button
                key={cat.id}
                onClick={() => setActiveTab(cat.id)}
                className={`btn rounded-pill px-4 py-2 d-flex align-items-center gap-2 fw-semibold transition-all ${
                  isActive 
                    ? 'btn-info text-white shadow-sm' 
                    : 'btn-outline-secondary bg-white text-secondary'
                }`}
                style={{
                  backgroundColor: isActive ? '#0284c7' : '#ffffff',
                  borderColor: isActive ? '#0284c7' : '#e2e8f0',
                  color: isActive ? '#ffffff' : '#475569'
                }}
              >
                <Icon size={17} />
                <span>{cat.name}</span>
              </button>
            );
          })}
        </div>

        {/* Category Intro */}
        <div className="text-center mb-4">
          <p className="lead fw-semibold text-secondary" style={{ fontSize: '1.05rem' }}>
            {currentCategory.description}
          </p>
        </div>

        {/* Tech Grid */}
        <div className="row g-4">
          {currentCategory.items.map((item, idx) => (
            <div key={idx} className="col-lg-4 col-md-6">
              <div 
                className="p-4 rounded-4 bg-white border border-light-subtle shadow-sm h-100 d-flex flex-column"
                style={{
                  transition: 'all 0.3s ease',
                  borderLeft: '4px solid #0ea5e9'
                }}
              >
                <div className="d-flex align-items-center justify-content-between mb-2">
                  <h5 className="fw-bold mb-0 text-dark" style={{ fontSize: '1.15rem' }}>
                    {item.name}
                  </h5>
                  <span 
                    className="badge rounded-pill"
                    style={{
                      background: 'rgba(14, 165, 233, 0.1)',
                      color: '#0284c7',
                      fontSize: '0.72rem',
                      fontWeight: 600
                    }}
                  >
                    {item.level}
                  </span>
                </div>
                <p className="text-secondary mb-0 mt-1" style={{ fontSize: '0.88rem' }}>
                  {item.role}
                </p>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}

export default TechStack;
