import React from 'react';
import { motion } from 'framer-motion';
import { GraduationCap, MapPin, Compass, Camera, BookOpen, Plane, Globe, Heart } from 'lucide-react';

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 30 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { delay, duration: 0.5 },
});

const About = ({ theme }) => {
  const isDark = theme === 'dark';

  const surface = isDark ? 'rgba(255,255,255,0.04)' : 'rgba(255,255,255,0.8)';
  const border  = isDark ? 'rgba(255,255,255,0.08)' : 'rgba(26,26,46,0.07)';
  const txtMain = isDark ? '#f0ede8' : '#1a1a2e';
  const txtSub  = isDark ? 'rgba(240,237,232,0.6)' : 'rgba(26,26,46,0.6)';

  const interests = [
    { icon: <Compass size={20} />, label: 'Trekking', color: '#22c55e' },
    { icon: <Camera size={20} />, label: 'Photography', color: '#e8a87c' },
    { icon: <Plane size={20} />, label: 'Travel', color: '#4facfe' },
    { icon: <BookOpen size={20} />, label: 'Reading', color: '#a78bfa' },
    { icon: <Globe size={20} />, label: 'Digital Trends', color: '#f472b6' },
    { icon: <Heart size={20} />, label: 'Creativity', color: '#fb923c' },
  ];

  return (
    <section id="about" className="section-pad" style={{ background: isDark ? '#0d0d1a' : '#faf8f5', position: 'relative', overflow: 'hidden' }}>
      <div className="orb" style={{ top: '50%', right: '-15%', width: 500, height: 500, background: isDark ? 'rgba(232,168,124,0.04)' : 'rgba(232,168,124,0.07)' }} />

      <div style={{ maxWidth: 1200, margin: '0 auto', padding: '0 2rem' }}>
        <motion.div {...fadeUp()} style={{ textAlign: 'center', marginBottom: '4rem' }}>
          <div className="section-label" style={{ justifyContent: 'center' }}>About Me</div>
          <h2 className="font-display" style={{ fontSize: 'clamp(2rem, 4vw, 3rem)', fontWeight: 700, color: txtMain }}>
            The Story Behind the <span className="text-gradient-gold">Brand</span>
          </h2>
        </motion.div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '2rem', marginBottom: '3rem' }}>
          {/* Main bio card */}
          <motion.div {...fadeUp(0.1)} style={{ gridColumn: 'span 1' }}>
            <div className="card-glow" style={{ background: surface, border: `1px solid ${border}`, borderRadius: '1.25rem', padding: '2.5rem', height: '100%' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '1.5rem' }}>
                <div style={{ width: 48, height: 48, borderRadius: '0.75rem', background: 'rgba(232,168,124,0.15)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#e8a87c' }}>
                  <GraduationCap size={22} />
                </div>
                <h3 style={{ fontWeight: 700, fontSize: '1.15rem', color: txtMain }}>My Journey</h3>
              </div>
              <p style={{ color: txtSub, lineHeight: 1.8, marginBottom: '1rem' }}>
                I'm Rangaswamy M, a final-year BCA student with an unbridled passion for digital storytelling. Growing up in Tumkur, I discovered that technology is most powerful when it connects people.
              </p>
              <p style={{ color: txtSub, lineHeight: 1.8 }}>
                While pursuing my degree, I fell in love with the art of Social Media Management—crafting narratives that resonate, building communities that thrive, and measuring what truly matters: human connection.
              </p>
            </div>
          </motion.div>

          {/* Goals card */}
          <motion.div {...fadeUp(0.2)}>
            <div className="card-glow" style={{ background: 'linear-gradient(135deg, rgba(232,168,124,0.12), rgba(212,132,90,0.06))', border: `1px solid rgba(232,168,124,0.2)`, borderRadius: '1.25rem', padding: '2.5rem', height: '100%' }}>
              <div style={{ marginBottom: '1.5rem' }}>
                <div className="section-label">Goals</div>
                <h3 style={{ fontWeight: 700, fontSize: '1.15rem', color: txtMain }}>Where I'm Headed</h3>
              </div>
              <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                {[
                  'Lead social media strategy for an innovative brand',
                  'Build communities of 100k+ engaged followers',
                  'Specialize in data-driven content marketing',
                  'Launch my own digital marketing agency',
                ].map((g, i) => (
                  <li key={i} style={{ display: 'flex', alignItems: 'flex-start', gap: '0.75rem', color: txtSub, lineHeight: 1.6 }}>
                    <span style={{ width: 20, height: 20, borderRadius: '50%', background: 'rgba(232,168,124,0.2)', color: '#e8a87c', display: 'inline-flex', alignItems: 'center', justifyContent: 'center', fontSize: '0.7rem', fontWeight: 800, flexShrink: 0, marginTop: 2 }}>
                      {i + 1}
                    </span>
                    {g}
                  </li>
                ))}
              </ul>
            </div>
          </motion.div>
        </div>

        {/* Info row */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: '1rem', marginBottom: '3rem' }}>
          {[
            { icon: <GraduationCap size={18} />, label: 'Education', value: 'BCA – Final Year' },
            { icon: <MapPin size={18} />, label: 'Location', value: 'Tumkur, Karnataka' },
            { icon: <Globe size={18} />, label: 'Languages', value: 'Kannada & English' },
          ].map(({ icon, label, value }) => (
            <motion.div key={label} {...fadeUp(0.3)}>
              <div style={{ background: surface, border: `1px solid ${border}`, borderRadius: '1rem', padding: '1.25rem 1.5rem', display: 'flex', alignItems: 'center', gap: '1rem' }}>
                <div style={{ width: 40, height: 40, borderRadius: '0.6rem', background: 'rgba(232,168,124,0.12)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#e8a87c', flexShrink: 0 }}>
                  {icon}
                </div>
                <div>
                  <div style={{ fontSize: '0.75rem', color: isDark ? 'rgba(240,237,232,0.4)' : 'rgba(26,26,46,0.4)', textTransform: 'uppercase', letterSpacing: '0.1em', fontWeight: 600 }}>{label}</div>
                  <div style={{ fontWeight: 700, color: txtMain, marginTop: '0.1rem' }}>{value}</div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Interests */}
        <motion.div {...fadeUp(0.4)}>
          <div style={{ background: surface, border: `1px solid ${border}`, borderRadius: '1.25rem', padding: '2.5rem' }}>
            <h3 style={{ fontWeight: 700, fontSize: '1.1rem', color: txtMain, marginBottom: '1.5rem' }}>Beyond the Screen</h3>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '1rem' }}>
              {interests.map(({ icon, label, color }) => (
                <div key={label} className="hover-float" style={{
                  display: 'flex', alignItems: 'center', gap: '0.5rem',
                  padding: '0.6rem 1.2rem', borderRadius: '2rem',
                  background: `${color}15`, border: `1px solid ${color}30`,
                  color, fontWeight: 600, fontSize: '0.9rem', cursor: 'default',
                }}>
                  {icon} {label}
                </div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
