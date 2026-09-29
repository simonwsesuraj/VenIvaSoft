import React, { useState, useEffect } from 'react';
import VenivaLogo from './VenivaLogo';
import { 
  ArrowUp, 
  Mail, 
  Phone, 
  MapPin, 
  Send, 
  Check, 
  ShieldCheck, 
  Award 
} from 'lucide-react';

function Footer() {
  const [newsletterEmail, setNewsletterEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);
  const [showScrollTop, setShowScrollTop] = useState(false);

  useEffect(() => {
    const checkScroll = () => {
      if (window.scrollY > 400) {
        setShowScrollTop(true);
      } else {
        setShowScrollTop(false);
      }
    };

    window.addEventListener('scroll', checkScroll);
    return () => window.removeEventListener('scroll', checkScroll);
  }, []);

  const handleSubscribe = (e) => {
    e.preventDefault();
    if (newsletterEmail) {
      setSubscribed(true);
      setNewsletterEmail('');
    }
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <>
      <footer className="veniva-footer">
        <div className="container">
          <div className="row g-5">
            
            {/* Column 1: Company Brand & Mission */}
            <div className="col-lg-4 col-md-6">
              <div className="mb-3">
                <VenivaLogo size="lg" theme="dark" showTagline={true} />
              </div>
              <p className="text-secondary mt-3 mb-4" style={{ fontSize: '0.9rem', lineHeight: '1.7' }}>
                <strong>Veniva Software Solutions Pvt Ltd</strong> is a global IT engineering and digital transformation consultancy. We architect resilient cloud systems, high-throughput enterprise software, and scalable digital solutions that drive sustained business growth.
              </p>

              <div className="d-flex align-items-center gap-2 mb-4">
                <Award size={18} className="text-warning" />
                <span style={{ fontSize: '0.82rem', color: '#bae6fd', fontWeight: 600 }}>
                  ISO 9001:2015 Certified IT Enterprise
                </span>
              </div>

              {/* Social Channels */}
              <div className="d-flex align-items-center gap-2">
                <a href="https://linkedin.com" target="_blank" rel="noreferrer" className="footer-social-btn" aria-label="LinkedIn">
                  <svg width="16" height="16" fill="currentColor" viewBox="0 0 24 24"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/></svg>
                </a>
                <a href="https://twitter.com" target="_blank" rel="noreferrer" className="footer-social-btn" aria-label="Twitter">
                  <svg width="15" height="15" fill="currentColor" viewBox="0 0 24 24"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/></svg>
                </a>
                <a href="https://github.com" target="_blank" rel="noreferrer" className="footer-social-btn" aria-label="GitHub">
                  <svg width="16" height="16" fill="currentColor" viewBox="0 0 24 24"><path fillRule="evenodd" clipRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.53 1.032 1.53 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"/></svg>
                </a>
              </div>
            </div>

            {/* Column 2: Quick Links */}
            <div className="col-lg-2 col-md-6 col-6">
              <h5 className="footer-heading">Company</h5>
              <ul className="list-unstyled d-flex flex-column gap-2" style={{ fontSize: '0.9rem' }}>
                <li><a href="#home">Home</a></li>
                <li><a href="#about">About Veniva</a></li>
                <li><a href="#services">Our Capabilities</a></li>
                <li><a href="#industries">Industries</a></li>
                <li><a href="#techstack">Tech Radar</a></li>
                <li><a href="#projects">Case Studies</a></li>
                <li><a href="#process">Why Veniva</a></li>
                <li><a href="#contact">Contact Us</a></li>
              </ul>
            </div>

            {/* Column 3: Core Services */}
            <div className="col-lg-3 col-md-6 col-6">
              <h5 className="footer-heading">Solutions</h5>
              <ul className="list-unstyled d-flex flex-column gap-2" style={{ fontSize: '0.9rem' }}>
                <li><a href="#services">Enterprise Custom Software</a></li>
                <li><a href="#services">Cloud Architecture & DevOps</a></li>
                <li><a href="#services">Mobile App Development</a></li>
                <li><a href="#services">AI & Machine Learning</a></li>
                <li><a href="#services">UI/UX & Design Systems</a></li>
                <li><a href="#services">Cybersecurity & Testing</a></li>
                <li><a href="#estimator">Cost & Scope Estimator</a></li>
              </ul>
            </div>

            {/* Column 4: Newsletter & Contact Hub */}
            <div className="col-lg-3 col-md-6">
              <h5 className="footer-heading">Tech Insights</h5>
              <p className="text-secondary" style={{ fontSize: '0.85rem' }}>
                Subscribe to our bi-monthly engineering bulletin on cloud architecture, AI breakthroughs, and software scaling.
              </p>

              {subscribed ? (
                <div className="p-3 rounded-3 bg-success bg-opacity-10 border border-success border-opacity-25 d-flex align-items-center gap-2 text-success">
                  <Check size={18} />
                  <span style={{ fontSize: '0.85rem', fontWeight: 600 }}>Thank you for subscribing!</span>
                </div>
              ) : (
                <form onSubmit={handleSubscribe} className="mb-4">
                  <div className="input-group">
                    <input 
                      type="email" 
                      required 
                      className="form-control" 
                      placeholder="business@company.com" 
                      style={{
                        backgroundColor: 'rgba(255, 255, 255, 0.08)',
                        border: '1px solid rgba(255, 255, 255, 0.15)',
                        color: '#ffffff',
                        fontSize: '0.85rem'
                      }}
                      value={newsletterEmail}
                      onChange={(e) => setNewsletterEmail(e.target.value)}
                    />
                    <button 
                      type="submit" 
                      className="btn btn-info text-white" 
                      style={{ backgroundColor: '#0284c7', borderColor: '#0284c7' }}
                      aria-label="Subscribe"
                    >
                      <Send size={15} />
                    </button>
                  </div>
                </form>
              )}

              <div className="d-flex flex-column gap-2" style={{ fontSize: '0.85rem', color: '#94a3b8' }}>
                <div className="d-flex align-items-center gap-2">
                  <Phone size={14} className="text-info" />
                  <span>+91 (080) 4920 1800</span>
                </div>
                <div className="d-flex align-items-center gap-2">
                  <Mail size={14} className="text-info" />
                  <span>contact@venivasoft.com</span>
                </div>
                <div className="d-flex align-items-center gap-2">
                  <MapPin size={14} className="text-info" />
                  <span>Bengaluru, Karnataka, India</span>
                </div>
              </div>

            </div>

          </div>

          {/* Bottom Bar: Copyright and Legal */}
          <div className="footer-bottom-bar d-flex flex-column flex-md-row align-items-center justify-content-between gap-3">
            <div className="text-secondary">
              © {new Date().getFullYear()} <strong>Veniva Software Solutions Pvt Ltd</strong>. All Rights Reserved.
            </div>

            <div className="d-flex align-items-center gap-4 text-secondary">
              <a href="#contact">Privacy Policy</a>
              <span>•</span>
              <a href="#contact">Terms of Service</a>
              <span>•</span>
              <a href="#contact">Security & Compliance</a>
            </div>
          </div>

        </div>
      </footer>

      {/* Floating Scroll to Top Button */}
      {showScrollTop && (
        <button 
          onClick={scrollToTop} 
          className="scroll-top-btn" 
          aria-label="Scroll back to top"
          title="Scroll to Top"
        >
          <ArrowUp size={22} />
        </button>
      )}
    </>
  );
}

export default Footer;
