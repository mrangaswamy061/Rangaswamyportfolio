import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-scroll';
import { Menu, X, Sun, Moon } from 'lucide-react';

const links = [
  { label: 'Home', to: 'home' },
  { label: 'About', to: 'about' },
  { label: 'Resume', to: 'resume' },
  { label: 'Skills', to: 'skills' },
  { label: 'Projects', to: 'projects' },
  { label: 'Contact', to: 'contact' },
];

const Navbar = ({ theme, toggleTheme }) => {
  const [scrolled, setScrolled] = useState(false);
  const [active, setActive]     = useState('home');
  const [open, setOpen]         = useState(false);
  const isDark = theme === 'dark';

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const bg = scrolled
    ? (isDark ? 'glass-dark' : 'glass-light')
    : 'bg-transparent';

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-400 ${bg}`}
      style={{ padding: scrolled ? '1rem 0' : '1.5rem 0' }}
    >
      <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 2rem', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
        {/* Logo */}
        <motion.div initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }}>
          <Link to="home" smooth offset={-80} className="font-display text-xl font-bold cursor-pointer" style={{ color: '#e8a87c' }}>
            RM.
          </Link>
        </motion.div>

        {/* Desktop Nav */}
        <nav style={{ display: 'flex', alignItems: 'center', gap: '2rem' }} className="hidden md:flex">
          {links.map((l, i) => (
            <motion.div key={l.to} initial={{ opacity: 0, y: -10 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: i * 0.07 }}>
              <Link
                to={l.to}
                spy
                smooth
                offset={-80}
                onSetActive={() => setActive(l.to)}
                className={`nav-link cursor-pointer text-sm font-medium transition-colors ${active === l.to ? 'active' : ''}`}
                style={{ color: active === l.to ? '#e8a87c' : (isDark ? 'rgba(240,237,232,0.7)' : 'rgba(26,26,46,0.65)') }}
              >
                {l.label}
              </Link>
            </motion.div>
          ))}

          {/* Theme Toggle */}
          <button className="theme-toggle" onClick={toggleTheme} aria-label="Toggle theme">
            <div className="theme-toggle-thumb">
              {isDark ? <Moon size={12} /> : <Sun size={12} />}
            </div>
          </button>

          <Link to="contact" smooth offset={-80}>
            <motion.button
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.5 }}
              className="btn-gold"
              style={{ padding: '0.6rem 1.5rem', fontSize: '0.85rem' }}
            >
              Hire Me
            </motion.button>
          </Link>
        </nav>

        {/* Mobile */}
        <div className="md:hidden flex items-center gap-3">
          <button className="theme-toggle" onClick={toggleTheme} aria-label="Toggle theme">
            <div className="theme-toggle-thumb">
              {isDark ? <Moon size={12} /> : <Sun size={12} />}
            </div>
          </button>
          <button onClick={() => setOpen(o => !o)} style={{ color: isDark ? '#f0ede8' : '#1a1a2e' }}>
            {open ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className={isDark ? 'glass-dark' : 'glass-light'}
            style={{ padding: '1.5rem 2rem', display: 'flex', flexDirection: 'column', gap: '1.25rem' }}
          >
            {links.map(l => (
              <Link
                key={l.to}
                to={l.to}
                spy smooth offset={-80}
                onClick={() => setOpen(false)}
                style={{ fontSize: '1.1rem', fontWeight: 600, color: isDark ? '#f0ede8' : '#1a1a2e' }}
              >
                {l.label}
              </Link>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Navbar;
