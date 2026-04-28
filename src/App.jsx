import React, { useState, useEffect } from 'react';
import LoadingScreen from './components/LoadingScreen';
import Background from './components/Background';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Resume from './components/Resume';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  const [theme, setTheme] = useState('dark');
  const [loading, setLoading] = useState(true);
  const [activeSection, setActiveSection] = useState('home');

  // Apply theme class to body
  useEffect(() => {
    document.body.classList.remove('light', 'dark');
    document.body.classList.add(theme);
  }, [theme]);

  // Loading timer
  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 2400);
    return () => clearTimeout(timer);
  }, []);

  // Detect which section is in view
  useEffect(() => {
    if (loading) return;
    const ids = ['home', 'about', 'resume', 'skills', 'projects', 'contact'];
    const obs = new IntersectionObserver(
      entries => entries.forEach(e => { if (e.isIntersecting) setActiveSection(e.target.id); }),
      { threshold: 0.35 }
    );
    ids.forEach(id => { const el = document.getElementById(id); if (el) obs.observe(el); });
    return () => obs.disconnect();
  }, [loading]);

  const toggleTheme = () => setTheme(t => t === 'dark' ? 'light' : 'dark');

  return (
    <>
      <LoadingScreen visible={loading} />
      <div style={{ opacity: loading ? 0 : 1, transition: 'opacity 0.6s ease 0.2s', position: 'relative', zIndex: 1 }}>
        <Background theme={theme} activeSection={activeSection} />
        <Navbar theme={theme} toggleTheme={toggleTheme} />
        <main>
          <Hero theme={theme} />
          <About theme={theme} />
          <Resume theme={theme} />
          <Skills theme={theme} />
          <Projects theme={theme} />
          <Contact theme={theme} />
        </main>
        <Footer theme={theme} />
      </div>
    </>
  );
}

export default App;
