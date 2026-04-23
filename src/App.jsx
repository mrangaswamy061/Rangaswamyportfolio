import React, { useState, useEffect } from 'react';
import LoadingScreen from './components/LoadingScreen';
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

  const toggleTheme = () => setTheme(t => t === 'dark' ? 'light' : 'dark');

  return (
    <>
      <LoadingScreen visible={loading} />
      <div style={{ opacity: loading ? 0 : 1, transition: 'opacity 0.6s ease 0.2s' }}>
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
