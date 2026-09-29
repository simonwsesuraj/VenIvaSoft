import React, { useState, useEffect } from 'react';
import VenivaLogo from './VenivaLogo';
import { 
  Phone, 
  Mail, 
  MapPin, 
  Award, 
  ArrowRight, 
  Menu, 
  X, 
  Calculator, 
  Clock 
} from 'lucide-react';

function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 40) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }

      // Check current section
      const sections = ['home', 'about', 'services', 'industries', 'techstack', 'projects', 'process', 'contact'];
      for (const sectionId of sections) {
        const el = document.getElementById(sectionId);
        if (el) {
          const rect = el.getBoundingClientRect();
          if (rect.top <= 140 && rect.bottom >= 140) {
            setActiveSection(sectionId);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const closeMobile = () => setMobileMenuOpen(false);

  return (
    <header className="veniva-header-wrapper fixed-top">
      {/* Top Announcement & Corporate Bar */}
      <div className="veniva-topbar d-none d-lg-block">
        <div className="container d-flex align-items-center justify-content-between">
          <div className="d-flex align-items-center gap-3">
            <span className="d-flex align-items-center gap-1">
              <Award size={14} className="text-warning" />
              <span>ISO 9001:2015 Certified IT Enterprise</span>
            </span>
            <span className="topbar-divider"></span>
            <span className="d-flex align-items-center gap-1">
              <MapPin size={13} style={{ color: '#bae6fd' }} />
              <span>Bengaluru Tech Corridor & Global Hubs</span>
            </span>
          </div>

          <div className="d-flex align-items-center gap-3">
            <a href="tel:+918049201800" className="d-flex align-items-center gap-1">
              <Phone size={13} style={{ color: '#bae6fd' }} />
              <span>+91 (080) 4920 1800</span>
            </a>
            <span className="topbar-divider"></span>
            <a href="mailto:contact@venivasoft.com" className="d-flex align-items-center gap-1">
              <Mail size={13} style={{ color: '#bae6fd' }} />
              <span>contact@venivasoft.com</span>
            </a>
            <span className="topbar-divider"></span>
            <span className="d-flex align-items-center gap-1 text-light opacity-75">
              <Clock size={13} />
              <span>Mon - Fri: 9:00 AM - 7:00 PM IST</span>
            </span>
          </div>
        </div>
      </div>

      {/* Main Corporate Navbar */}
      <nav className={`navbar navbar-expand-lg veniva-main-navbar ${isScrolled ? 'scrolled' : ''}`}>
        <div className="container">
          {/* Logo Brand */}
          <a className="navbar-brand p-0 m-0" href="#home" onClick={closeMobile}>
            <VenivaLogo size="md" showTagline={false} />
          </a>

          {/* Mobile Hamburger Toggle */}
          <button 
            className="navbar-toggler veniva-navbar-toggler d-lg-none" 
            type="button" 
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle navigation"
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>

          {/* Desktop & Collapsible Links */}
          <div className={`collapse navbar-collapse ${mobileMenuOpen ? 'show' : ''}`} id="venivaNav">
            <ul className="navbar-nav mx-auto mb-2 mb-lg-0 align-items-lg-center">
              <li className="nav-item">
                <a 
                  className={`nav-link ${activeSection === 'home' ? 'active' : ''}`} 
                  href="#home"
                  onClick={closeMobile}
                >
                  Home
                </a>
              </li>
              <li className="nav-item">
                <a 
                  className={`nav-link ${activeSection === 'about' ? 'active' : ''}`} 
                  href="#about"
                  onClick={closeMobile}
                >
                  About Us
                </a>
              </li>
              <li className="nav-item">
                <a 
                  className={`nav-link ${activeSection === 'services' ? 'active' : ''}`} 
                  href="#services"
                  onClick={closeMobile}
                >
                  Services
                </a>
              </li>
              <li className="nav-item">
                <a 
                  className={`nav-link ${activeSection === 'industries' ? 'active' : ''}`} 
                  href="#industries"
                  onClick={closeMobile}
                >
                  Industries
                </a>
              </li>
              <li className="nav-item">
                <a 
                  className={`nav-link ${activeSection === 'techstack' ? 'active' : ''}`} 
                  href="#techstack"
                  onClick={closeMobile}
                >
                  Tech Stack
                </a>
              </li>
              <li className="nav-item">
                <a 
                  className={`nav-link ${activeSection === 'projects' ? 'active' : ''}`} 
                  href="#projects"
                  onClick={closeMobile}
                >
                  Projects
                </a>
              </li>
              <li className="nav-item">
                <a 
                  className={`nav-link ${activeSection === 'process' ? 'active' : ''}`} 
                  href="#process"
                  onClick={closeMobile}
                >
                  Why Veniva
                </a>
              </li>
              <li className="nav-item">
                <a 
                  className={`nav-link ${activeSection === 'contact' ? 'active' : ''}`} 
                  href="#contact"
                  onClick={closeMobile}
                >
                  Contact
                </a>
              </li>
            </ul>

            {/* Quick Action Button */}
            <div className="d-flex align-items-center gap-2">
              <a 
                href="#estimator" 
                className="btn btn-outline-info d-none d-xl-inline-flex align-items-center gap-1 rounded-pill px-3 py-2 text-decoration-none"
                style={{ 
                  borderColor: '#bae6fd', 
                  color: '#0284c7', 
                  fontSize: '0.85rem',
                  fontWeight: 600,
                  backgroundColor: '#f0f9ff'
                }}
                onClick={closeMobile}
              >
                <Calculator size={15} />
                <span>Cost Calculator</span>
              </a>
              <a 
                href="#contact" 
                className="navbar-cta-btn text-decoration-none"
                onClick={closeMobile}
              >
                <span>Get in Touch</span>
                <ArrowRight size={15} />
              </a>
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
}

export default Navbar;