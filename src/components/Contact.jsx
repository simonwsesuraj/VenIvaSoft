import React, { useState } from 'react';
import { 
  Mail, 
  Phone, 
  MapPin, 
  Clock, 
  Send, 
  CheckCircle, 
  ChevronDown, 
  ChevronUp, 
  Building2, 
  ShieldCheck,
  Sparkles
} from 'lucide-react';

const faqs = [
  {
    q: 'How quickly can a Veniva dedicated engineering team begin?',
    a: 'For dedicated engineering pods and staff augmentation, we can deploy pre-vetted engineers aligned with your tech stack within 72 hours. For full custom software builds, our architectural discovery kickoff commences within 5 business days.'
  },
  {
    q: 'Who owns the software source code and intellectual property?',
    a: 'You retain 100% full legal ownership of all source code, design systems, algorithms, and documentation upon creation. All IP transfer rights are contractually assigned to your entity on Day 1.'
  },
  {
    q: 'How do you handle Non-Disclosure Agreements (NDA) and data security?',
    a: 'We sign comprehensive bilateral NDAs prior to any technical discussions. Our development environments adhere to strict SOC-2, ISO 27001, and GDPR data isolation protocols.'
  },
  {
    q: 'What engagement models does Veniva Software Solutions provide?',
    a: 'We offer three flexible models: 1) Dedicated Engineering Pods (monthly agile billing), 2) Fixed-Scope Milestone Deliveries (for well-defined roadmaps), and 3) On-Demand Specialized Architect Advisory.'
  },
  {
    q: 'Can Veniva engineers work in our local timezone?',
    a: 'Yes. Our global delivery model supports guaranteed minimum 4-to-6 hour daily overlapping working windows with clients across US, UK, Europe, Australia, and APAC.'
  }
];

function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    service: 'Custom Software Development',
    budget: '$10,000 - $25,000',
    message: ''
  });

  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [openFaq, setOpenFaq] = useState(0);

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);
    // Simulate API call
    setTimeout(() => {
      setLoading(false);
      setSubmitted(true);
    }, 900);
  };

  const toggleFaq = (index) => {
    setOpenFaq(openFaq === index ? -1 : index);
  };

  return (
    <section className="contact-section" id="contact">
      <div className="container">
        
        {/* Header */}
        <div className="row justify-content-center text-center mb-5">
          <div className="col-lg-8">
            <span className="section-badge">
              Connect With Our Engineers
            </span>
            <h2 className="section-title">
              Let's Build Something <br />
              <span className="gradient-text">Extraordinary Together</span>
            </h2>
            <p className="section-subtitle">
              Have an upcoming product roadmap, enterprise migration, or need a high-caliber development team? Reach out to <strong>Veniva Software Solutions Pvt Ltd</strong>.
            </p>
          </div>
        </div>

        {/* Contact Main Grid */}
        <div className="row g-4 align-items-stretch mb-5">
          
          {/* Left Column: Corporate Office Information */}
          <div className="col-lg-5">
            <div className="contact-info-card">
              
              <div>
                <span className="badge bg-white text-primary fw-bold px-3 py-1 mb-3">
                  CORPORATE HEADQUARTERS
                </span>
                <h3 className="fw-bold text-white mb-2" style={{ fontSize: '1.75rem' }}>
                  Veniva Software Solutions Pvt Ltd
                </h3>
                <p className="text-light opacity-85 mb-4" style={{ fontSize: '0.95rem' }}>
                  Empowering global enterprises with intelligent software, cloud engineering, and digital growth.
                </p>

                <div className="d-flex flex-column gap-4 mb-4">
                  
                  {/* Address */}
                  <div className="d-flex align-items-start gap-3">
                    <div className="contact-info-icon-box">
                      <MapPin size={22} />
                    </div>
                    <div>
                      <h6 className="fw-bold text-white mb-1">Corporate HQ & R&D Hub</h6>
                      <p className="mb-0 text-light opacity-85" style={{ fontSize: '0.88rem', lineHeight: '1.5' }}>
                        Veniva Tech Tower, 4th Floor, Electronic City Phase 1,<br />
                        Bengaluru, Karnataka 560100, India
                      </p>
                    </div>
                  </div>

                  {/* Phone */}
                  <div className="d-flex align-items-start gap-3">
                    <div className="contact-info-icon-box">
                      <Phone size={22} />
                    </div>
                    <div>
                      <h6 className="fw-bold text-white mb-1">Direct Phone Support</h6>
                      <p className="mb-0 text-light opacity-85" style={{ fontSize: '0.88rem' }}>
                        <a href="tel:+918049201800" className="text-white text-decoration-none">+91 (080) 4920 1800</a> <br />
                        <a href="tel:+919845012345" className="text-white text-decoration-none">+91 98450 12345</a>
                      </p>
                    </div>
                  </div>

                  {/* Email */}
                  <div className="d-flex align-items-start gap-3">
                    <div className="contact-info-icon-box">
                      <Mail size={22} />
                    </div>
                    <div>
                      <h6 className="fw-bold text-white mb-1">Electronic Inquiries</h6>
                      <p className="mb-0 text-light opacity-85" style={{ fontSize: '0.88rem' }}>
                        <a href="mailto:contact@venivasoft.com" className="text-white text-decoration-none">contact@venivasoft.com</a> <br />
                        <a href="mailto:rfp@venivasoft.com" className="text-white text-decoration-none">rfp@venivasoft.com</a>
                      </p>
                    </div>
                  </div>

                  {/* Operating Hours */}
                  <div className="d-flex align-items-start gap-3">
                    <div className="contact-info-icon-box">
                      <Clock size={22} />
                    </div>
                    <div>
                      <h6 className="fw-bold text-white mb-1">Office Hours</h6>
                      <p className="mb-0 text-light opacity-85" style={{ fontSize: '0.88rem' }}>
                        Monday - Friday: 9:00 AM - 7:00 PM IST <br />
                        <span className="badge bg-success-subtle text-success fw-bold px-2 py-0">24/7 Global On-Call SLA</span>
                      </p>
                    </div>
                  </div>

                </div>
              </div>

              {/* Security & Confidentiality Tag */}
              <div className="pt-3 border-top border-white border-opacity-20 mt-auto">
                <div className="d-flex align-items-center gap-2">
                  <ShieldCheck size={18} className="text-warning" />
                  <small className="text-light opacity-90">
                    Bilateral NDA signed prior to project technical discovery.
                  </small>
                </div>
              </div>

            </div>
          </div>

          {/* Right Column: Interactive Consultation Request Form */}
          <div className="col-lg-7">
            <div className="veniva-card p-4 p-md-5 h-100" style={{ border: '1px solid #bae6fd' }}>
              
              {submitted ? (
                <div className="text-center py-5">
                  <div 
                    className="p-3 rounded-circle bg-success-subtle text-success d-inline-flex mb-3"
                    style={{ width: 72, height: 72, alignItems: 'center', justifyContent: 'center' }}
                  >
                    <CheckCircle size={40} />
                  </div>
                  <h3 className="fw-bold text-dark mb-2">Inquiry Successfully Received!</h3>
                  <p className="text-secondary mb-4" style={{ maxWidth: '440px', margin: '0 auto' }}>
                    Thank you, <strong>{formData.name}</strong>. A Senior Solution Architect from <strong>Veniva Software Solutions Pvt Ltd</strong> will review your specifications and contact you at <strong>{formData.email}</strong> within 12 hours.
                  </p>
                  <button 
                    onClick={() => {
                      setSubmitted(false);
                      setFormData({
                        name: '',
                        email: '',
                        phone: '',
                        company: '',
                        service: 'Custom Software Development',
                        budget: '$10,000 - $25,000',
                        message: ''
                      });
                    }}
                    className="btn btn-veniva-secondary"
                  >
                    Submit Another Inquiry
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit}>
                  <div className="d-flex align-items-center justify-content-between mb-4">
                    <h4 className="fw-bold mb-0" style={{ color: '#0a2540' }}>
                      Request Technical Consultation
                    </h4>
                    <span className="badge bg-info-subtle text-info fw-bold">
                      Direct Architect Response
                    </span>
                  </div>

                  <div className="row g-3">
                    
                    {/* Full Name */}
                    <div className="col-md-6">
                      <label className="form-label fw-bold text-dark" style={{ fontSize: '0.85rem' }}>
                        Full Name *
                      </label>
                      <input 
                        type="text" 
                        required 
                        className="form-control form-control-veniva" 
                        placeholder="e.g. Alexander Reed"
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      />
                    </div>

                    {/* Business Email */}
                    <div className="col-md-6">
                      <label className="form-label fw-bold text-dark" style={{ fontSize: '0.85rem' }}>
                        Corporate Email *
                      </label>
                      <input 
                        type="email" 
                        required 
                        className="form-control form-control-veniva" 
                        placeholder="alexander@company.com"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      />
                    </div>

                    {/* Phone Number */}
                    <div className="col-md-6">
                      <label className="form-label fw-bold text-dark" style={{ fontSize: '0.85rem' }}>
                        Phone Number
                      </label>
                      <input 
                        type="tel" 
                        className="form-control form-control-veniva" 
                        placeholder="+1 (555) 000-0000"
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      />
                    </div>

                    {/* Company Name */}
                    <div className="col-md-6">
                      <label className="form-label fw-bold text-dark" style={{ fontSize: '0.85rem' }}>
                        Company / Organization
                      </label>
                      <input 
                        type="text" 
                        className="form-control form-control-veniva" 
                        placeholder="Company Name"
                        value={formData.company}
                        onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                      />
                    </div>

                    {/* Service Required */}
                    <div className="col-md-6">
                      <label className="form-label fw-bold text-dark" style={{ fontSize: '0.85rem' }}>
                        Service Domain
                      </label>
                      <select 
                        className="form-select form-control-veniva"
                        value={formData.service}
                        onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                      >
                        <option value="Custom Software Development">Custom Enterprise Software</option>
                        <option value="Cloud & DevOps Engineering">Cloud & DevOps Architecture</option>
                        <option value="Mobile App Development">iOS & Android App Development</option>
                        <option value="AI & Machine Learning">AI & Intelligent Automation</option>
                        <option value="Dedicated Engineering Pod">Dedicated Engineering Pod</option>
                        <option value="UI/UX Product Design">UI/UX Strategy & Design</option>
                      </select>
                    </div>

                    {/* Estimated Budget */}
                    <div className="col-md-6">
                      <label className="form-label fw-bold text-dark" style={{ fontSize: '0.85rem' }}>
                        Estimated Budget
                      </label>
                      <select 
                        className="form-select form-control-veniva"
                        value={formData.budget}
                        onChange={(e) => setFormData({ ...formData, budget: e.target.value })}
                      >
                        <option value="Under $10,000">&lt; $10,000 (Proof of Concept)</option>
                        <option value="$10,000 - $25,000">$10,000 - $25,000 (MVP / Growth)</option>
                        <option value="$25,000 - $50,000">$25,000 - $50,000 (Enterprise Scaling)</option>
                        <option value="$50,000+">$50,000+ (Full Transformational Build)</option>
                      </select>
                    </div>

                    {/* Project Scope */}
                    <div className="col-12">
                      <label className="form-label fw-bold text-dark" style={{ fontSize: '0.85rem' }}>
                        Project Scope & Goals *
                      </label>
                      <textarea 
                        required 
                        rows="4" 
                        className="form-control form-control-veniva" 
                        placeholder="Briefly describe your requirements, key bottlenecks, desired timeline, or architectural preferences..."
                        value={formData.message}
                        onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      ></textarea>
                    </div>

                    {/* Submit Button */}
                    <div className="col-12 mt-4">
                      <button 
                        type="submit" 
                        disabled={loading}
                        className="btn-veniva-primary w-100 justify-content-center"
                        style={{ fontSize: '1.05rem', padding: '14px' }}
                      >
                        {loading ? (
                          <span>Dispatching Inquiry...</span>
                        ) : (
                          <>
                            <Send size={18} />
                            <span>Schedule Strategy Call & Receive Proposal</span>
                          </>
                        )}
                      </button>
                    </div>

                  </div>
                </form>
              )}

            </div>
          </div>

        </div>

        {/* Corporate FAQ Accordion */}
        <div className="row justify-content-center mt-5 pt-3">
          <div className="col-lg-10">
            <div className="text-center mb-4">
              <span className="badge rounded-pill bg-info-subtle text-info fw-bold px-3 py-1 mb-2">
                FREQUENTLY ASKED QUESTIONS
              </span>
              <h3 className="fw-bold" style={{ color: '#0a2540' }}>
                Everything You Need to Know About Engaging with Veniva
              </h3>
            </div>

            <div className="faq-container">
              {faqs.map((faq, idx) => (
                <div key={idx} className="faq-item">
                  <button 
                    className="faq-question-btn"
                    onClick={() => toggleFaq(idx)}
                    type="button"
                  >
                    <span>{faq.q}</span>
                    {openFaq === idx ? (
                      <ChevronUp size={20} className="text-info flex-shrink-0" />
                    ) : (
                      <ChevronDown size={20} className="text-secondary flex-shrink-0" />
                    )}
                  </button>
                  {openFaq === idx && (
                    <div className="faq-answer-body">
                      {faq.a}
                    </div>
                  )}
                </div>
              ))}
            </div>

          </div>
        </div>

      </div>
    </section>
  );
}

export default Contact;