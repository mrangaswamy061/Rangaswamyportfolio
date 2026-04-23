import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-scroll';
import { Download, ChevronDown } from 'lucide-react';

const TITLES = ['Social Media Manager', 'Digital Marketer', 'Content Strategist', 'Community Builder'];

const Hero = ({ theme }) => {
  const isDark = theme === 'dark';
  const [titleIdx, setTitleIdx] = useState(0);
  const [displayed, setDisplayed] = useState('');
  const [typing, setTyping] = useState(true);

  // Typing effect
  useEffect(() => {
    const full = TITLES[titleIdx];
    let i = typing ? 0 : full.length;
    const interval = setInterval(() => {
      if (typing) {
        i++;
        setDisplayed(full.slice(0, i));
        if (i === full.length) { clearInterval(interval); setTimeout(() => setTyping(false), 1800); }
      } else {
        i--;
        setDisplayed(full.slice(0, i));
        if (i === 0) { clearInterval(interval); setTitleIdx(n => (n + 1) % TITLES.length); setTyping(true); }
      }
    }, typing ? 65 : 40);
    return () => clearInterval(interval);
  }, [titleIdx, typing]);

  return (
    <section id="home" style={{
      minHeight: '100vh',
      display: 'flex',
      alignItems: 'center',
      position: 'relative',
      overflow: 'hidden',
      paddingTop: '6rem',
    }}>
      {/* Background Orbs */}
      <div className="orb" style={{ top: '-10%', right: '-5%', width: 600, height: 600, background: isDark ? 'rgba(232,168,124,0.06)' : 'rgba(232,168,124,0.1)' }} />
      <div className="orb" style={{ bottom: '10%', left: '-10%', width: 500, height: 500, background: isDark ? 'rgba(79,172,254,0.05)' : 'rgba(79,172,254,0.07)' }} />

      <div style={{ maxWidth: 1200, margin: '0 auto', padding: '2rem', width: '100%' }}>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '4rem', alignItems: 'center' }}>
          {/* === LEFT: TEXT CONTENT === */}
          <div style={{ order: 2 }}>
            <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }}>
              <div className="section-label">Welcome to my portfolio</div>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.35 }}
              className="font-display"
              style={{ fontSize: 'clamp(2.8rem, 6vw, 5rem)', fontWeight: 700, lineHeight: 1.1, marginBottom: '1rem', color: isDark ? '#f0ede8' : '#1a1a2e' }}
            >
              Hi, I'm<br />
              <span className="text-gradient-gold">Rangaswamy M.</span>
            </motion.h1>

            {/* Typing Title */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5 }}
              style={{ display: 'flex', alignItems: 'center', marginBottom: '1.5rem', minHeight: '2rem' }}
            >
              <span style={{ fontSize: 'clamp(1.1rem, 2.5vw, 1.4rem)', fontWeight: 600, color: isDark ? 'rgba(240,237,232,0.7)' : 'rgba(26,26,46,0.65)' }}>
                {displayed}
              </span>
              <span className="cursor-blink" style={{ height: '1.5rem' }} />
            </motion.div>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
              style={{ fontSize: '1.05rem', lineHeight: 1.75, color: isDark ? 'rgba(240,237,232,0.6)' : 'rgba(26,26,46,0.6)', maxWidth: '520px', marginBottom: '2.5rem' }}
            >
              A final-year BCA student from Tumkur, Karnataka, passionate about building engaged online communities, crafting compelling content, and driving digital growth for brands.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.75 }}
              style={{ display: 'flex', flexWrap: 'wrap', gap: '1rem' }}
            >
              <Link to="projects" smooth offset={-80}>
                <button className="btn-gold">View My Work</button>
              </Link>
              <a href="/RANGASWAMY%20%20Resume.pdf" download className="btn-ghost">
                <Download size={16} /> Resume
              </a>
            </motion.div>

            {/* Stats */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1 }}
              style={{ display: 'flex', gap: '3rem', marginTop: '3rem', paddingTop: '2rem', borderTop: `1px solid ${isDark ? 'rgba(255,255,255,0.08)' : 'rgba(26,26,46,0.1)'}` }}
            >
              {[['500+', 'Engagements'], ['10+', 'Campaigns'], ['5+', 'Platforms']].map(([v, l]) => (
                <div key={l}>
                  <div className="font-display text-gradient-gold" style={{ fontSize: '1.8rem', fontWeight: 700 }}>{v}</div>
                  <div style={{ fontSize: '0.8rem', color: isDark ? 'rgba(240,237,232,0.5)' : 'rgba(26,26,46,0.5)', textTransform: 'uppercase', letterSpacing: '0.08em' }}>{l}</div>
                </div>
              ))}
            </motion.div>
          </div>

          {/* === RIGHT: ARTISTIC PHOTO === */}
          <motion.div
            initial={{ opacity: 0, scale: 0.85 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.9, ease: 'easeOut', delay: 0.1 }}
            style={{ position: 'relative', display: 'flex', justifyContent: 'center', order: 1 }}
          >
            {/* Rotating ring */}
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 20, repeat: Infinity, ease: 'linear' }}
              style={{
                position: 'absolute',
                inset: -20,
                border: '1.5px dashed rgba(232,168,124,0.3)',
                borderRadius: '60% 40% 70% 30% / 60% 30% 70% 40%',
              }}
            />
            {/* Second ring static */}
            <div style={{
              position: 'absolute',
              inset: -8,
              border: '1px solid rgba(232,168,124,0.12)',
              borderRadius: '50%',
            }} />

            {/* Main photo frame */}
            <div style={{
              width: 340,
              height: 420,
              borderRadius: '40% 60% 60% 40% / 50% 50% 60% 50%',
              overflow: 'hidden',
              position: 'relative',
              background: isDark ? '#1a1a30' : '#e8e0d5',
              boxShadow: isDark
                ? '0 30px 80px rgba(0,0,0,0.5), 0 0 60px rgba(232,168,124,0.08)'
                : '0 30px 80px rgba(26,26,46,0.15)',
            }}>
              <img
                src="/profile.jpg"
                alt="Rangaswamy M"
                style={{ width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'top center' }}
                onError={e => { e.target.onerror = null; e.target.src = 'https://ui-avatars.com/api/?name=Rangaswamy+M&size=420&background=2a2a4a&color=e8a87c&bold=true&font-size=0.33'; }}
              />
              {/* Overlay tint */}
              <div style={{
                position: 'absolute', inset: 0,
                background: isDark ? 'linear-gradient(to bottom, transparent 60%, rgba(13,13,26,0.5))' : 'linear-gradient(to bottom, transparent 60%, rgba(250,248,245,0.3))',
              }} />
            </div>

            {/* Floating "Available" badge */}
            <motion.div
              animate={{ y: [0, -8, 0] }}
              transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
              className={isDark ? 'glass-dark' : 'glass-light'}
              style={{
                position: 'absolute', bottom: 30, right: -10,
                padding: '0.75rem 1.25rem',
                borderRadius: '0.75rem',
                display: 'flex',
                alignItems: 'center',
                gap: '0.5rem',
                boxShadow: '0 10px 30px rgba(0,0,0,0.15)',
              }}
            >
              <span style={{ width: 8, height: 8, borderRadius: '50%', background: '#22c55e', display: 'inline-block', boxShadow: '0 0 8px #22c55e' }} />
              <span style={{ fontWeight: 600, fontSize: '0.85rem', color: isDark ? '#f0ede8' : '#1a1a2e' }}>Available for work</span>
            </motion.div>

            {/* Location badge */}
            <motion.div
              animate={{ y: [0, 8, 0] }}
              transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut', delay: 1 }}
              className={isDark ? 'glass-dark' : 'glass-light'}
              style={{
                position: 'absolute', top: 30, left: -10,
                padding: '0.6rem 1rem',
                borderRadius: '0.75rem',
                fontSize: '0.8rem',
                fontWeight: 600,
                color: isDark ? '#f0ede8' : '#1a1a2e',
                boxShadow: '0 10px 30px rgba(0,0,0,0.15)',
              }}
            >
              📍 Tumkur, Karnataka
            </motion.div>
          </motion.div>
        </div>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2 }}
          style={{ display: 'flex', justifyContent: 'center', marginTop: '4rem' }}
        >
          <Link to="about" smooth offset={-80}>
            <motion.div
              animate={{ y: [0, 8, 0] }}
              transition={{ duration: 2, repeat: Infinity }}
              style={{ cursor: 'pointer', color: isDark ? 'rgba(240,237,232,0.3)' : 'rgba(26,26,46,0.3)' }}
            >
              <ChevronDown size={28} />
            </motion.div>
          </Link>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
