import React, { useState, useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { FaInstagram, FaHashtag, FaChartLine, FaBullhorn, FaUsers, FaLightbulb } from 'react-icons/fa';

const SKILLS = [
  { name: 'Social Media Management', icon: <FaInstagram />, level: 92, color: '#e8a87c', desc: 'Instagram, Facebook, LinkedIn, Twitter – building presence & community.' },
  { name: 'Content Planning & Scheduling', icon: <FaHashtag />, level: 88, color: '#4facfe', desc: 'Editorial calendars, content pillars, timing strategy for max reach.' },
  { name: 'Digital Marketing', icon: <FaChartLine />, level: 82, color: '#a78bfa', desc: 'SEO basics, paid ads assistance, analytics interpretation.' },
  { name: 'Campaign Execution', icon: <FaBullhorn />, level: 85, color: '#34d399', desc: 'End-to-end campaign planning, launch coordination, and reporting.' },
  { name: 'Community Building', icon: <FaUsers />, level: 90, color: '#f472b6', desc: 'Engagement, DM management, brand voice consistency.' },
  { name: 'Creative Ideation', icon: <FaLightbulb />, level: 94, color: '#fb923c', desc: 'Concept development, viral content ideas, trend adaptation.' },
];

const SkillBar = ({ skill, isDark, animate }) => (
  <div className="card-glow" style={{
    background: isDark ? 'rgba(255,255,255,0.04)' : 'rgba(255,255,255,0.85)',
    border: `1px solid ${isDark ? 'rgba(255,255,255,0.07)' : 'rgba(26,26,46,0.08)'}`,
    borderRadius: '1.25rem',
    padding: '1.75rem',
    borderTop: `3px solid ${skill.color}`,
  }}>
    <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '0.75rem' }}>
      <div style={{ width: 42, height: 42, borderRadius: '0.75rem', background: `${skill.color}20`, display: 'flex', alignItems: 'center', justifyContent: 'center', color: skill.color, fontSize: '1.1rem' }}>
        {skill.icon}
      </div>
      <div>
        <h3 style={{ fontWeight: 700, fontSize: '0.95rem', color: isDark ? '#f0ede8' : '#1a1a2e', marginBottom: 0 }}>{skill.name}</h3>
        <p style={{ fontSize: '0.78rem', color: isDark ? 'rgba(240,237,232,0.5)' : 'rgba(26,26,46,0.5)', marginTop: '0.1rem' }}>{skill.desc}</p>
      </div>
    </div>

    {/* Progress */}
    <div style={{ marginTop: '1rem' }}>
      <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '0.5rem' }}>
        <span style={{ fontSize: '0.75rem', fontWeight: 600, color: isDark ? 'rgba(240,237,232,0.5)' : 'rgba(26,26,46,0.5)', textTransform: 'uppercase', letterSpacing: '0.05em' }}>Proficiency</span>
        <span style={{ fontWeight: 700, fontSize: '0.85rem', color: skill.color }}>{skill.level}%</span>
      </div>
      <div className="skill-bar-track">
        <div
          className="skill-bar-fill"
          style={{
            width: animate ? `${skill.level}%` : '0%',
            background: `linear-gradient(90deg, ${skill.color}aa, ${skill.color})`,
            transition: 'width 1.4s cubic-bezier(0.4, 0, 0.2, 1)',
          }}
        />
      </div>
    </div>
  </div>
);

const Skills = ({ theme }) => {
  const isDark = theme === 'dark';
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section id="skills" className="section-pad" ref={ref} style={{ background: isDark ? '#0d0d1a' : '#faf8f5', position: 'relative', overflow: 'hidden' }}>
      <div className="orb" style={{ top: '20%', right: '-10%', width: 500, height: 500, background: isDark ? 'rgba(167,139,250,0.05)' : 'rgba(167,139,250,0.07)' }} />

      <div style={{ maxWidth: 1200, margin: '0 auto', padding: '0 2rem' }}>
        <motion.div
          initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
          style={{ textAlign: 'center', marginBottom: '4rem' }}
        >
          <div className="section-label" style={{ justifyContent: 'center' }}>What I Do</div>
          <h2 className="font-display" style={{ fontSize: 'clamp(2rem, 4vw, 3rem)', fontWeight: 700, color: isDark ? '#f0ede8' : '#1a1a2e' }}>
            Core <span className="text-gradient-gold">Expertise</span>
          </h2>
          <p style={{ color: isDark ? 'rgba(240,237,232,0.6)' : 'rgba(26,26,46,0.6)', marginTop: '1rem', maxWidth: 500, margin: '1rem auto 0' }}>
            A visual breakdown of my capabilities across the digital marketing spectrum.
          </p>
        </motion.div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '1.5rem' }}>
          {SKILLS.map((skill, i) => (
            <motion.div
              key={skill.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
            >
              <SkillBar skill={skill} isDark={isDark} animate={inView} />
            </motion.div>
          ))}
        </div>

        {/* Soft skill badges */}
        <motion.div
          initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
          transition={{ delay: 0.4 }}
          style={{ marginTop: '3rem', textAlign: 'center' }}
        >
          <p style={{ fontSize: '0.8rem', textTransform: 'uppercase', letterSpacing: '0.15em', fontWeight: 700, color: '#e8a87c', marginBottom: '1.25rem' }}>Soft Skills</p>
          <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', gap: '0.75rem' }}>
            {['Active Listening', 'Team Collaboration', 'Adaptability', 'Time Management', 'Problem Solving', 'Creativity'].map(s => (
              <span key={s} style={{
                padding: '0.5rem 1.25rem', borderRadius: '2rem',
                background: isDark ? 'rgba(255,255,255,0.05)' : 'rgba(26,26,46,0.06)',
                border: `1px solid ${isDark ? 'rgba(255,255,255,0.1)' : 'rgba(26,26,46,0.1)'}`,
                fontSize: '0.85rem', fontWeight: 600,
                color: isDark ? 'rgba(240,237,232,0.8)' : 'rgba(26,26,46,0.75)',
              }}>
                {s}
              </span>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;
