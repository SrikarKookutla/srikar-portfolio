
import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Experience from './components/Experience';
import Projects from './components/Projects';
import Contact from './components/Contact';

function App() {
  return (
    <div className="app">
      <div className="grid-bg"></div>
      <div className="glow-orb" style={{ top: '10%', left: '10%' }}></div>
      <div className="glow-orb" style={{ bottom: '10%', right: '10%', background: 'radial-gradient(circle, var(--secondary-glow) 0%, transparent 70%)' }}></div>

      <Navbar />
      <main>
        <Hero />
        <About />
        <Skills />
        <Experience />
        <Projects />
        <Contact />
      </main>
    </div>
  );
}

export default App;
