import React from 'react';
import Navbar from './components/Navbar';
import Home from './components/Home';
import About from './components/About';
import Services from './components/Services';
import Industries from './components/Industries';
import TechStack from './components/TechStack';
import Projects from './components/Projects';
import Process from './components/Process';
import CostEstimator from './components/CostEstimator';
import Testimonials from './components/Testimonials';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  return (
    <div className="veniva-app-root">
      <Navbar />
      <main>
        <section id="home">
          <Home />
        </section>
        <section id="about">
          <About />
        </section>
        <section id="services">
          <Services />
        </section>
        <section id="industries">
          <Industries />
        </section>
        <section id="techstack">
          <TechStack />
        </section>
        <section id="projects">
          <Projects />
        </section>
        <section id="process">
          <Process />
        </section>
        <section id="estimator">
          <CostEstimator />
        </section>
        <section id="testimonials">
          <Testimonials />
        </section>
        <section id="contact">
          <Contact />
        </section>
      </main>
      <Footer />
    </div>
  );
}

export default App;
