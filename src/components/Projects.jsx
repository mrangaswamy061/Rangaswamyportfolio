import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { TrendingUp, ExternalLink, Globe, Zap } from 'lucide-react';

const PROJECTS = [
  {
    cat: 'Personal Portfolio',
    emoji: '🌐',
    title: 'Rangaswamy M – Portfolio Website',
    desc: 'A premium personal brand website built with React, Tailwind CSS v4, and Framer Motion. Features dark/light mode, animated loading screen, scroll-spy navbar, typing hero, resume timeline, skill infographics, and a validated contact form.',
    metrics: [
      { icon: <Globe size={14} />, val: 'Live', label: 'Status' },
      { icon: <TrendingUp size={14} />, val: 'React', label: 'Stack' },
      { icon: <Zap size={14} />, val: 'Vite', label: 'Build' },
    ],
    tags: ['React', 'Framer Motion', 'Tailwind CSS', 'Vite'],
    color: '#e8a87c',
    img: 'https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    link: 'https://mrangaswamy061.github.io/Rangaswamyportfolio/',
  },
];

const ProjectCard = ({ project, isDark }) => {
  const [hovered, setHovered] = useState(false);

  const surface = isDark ? 'rgba(255,255,255,0.04)' : 'rgba(255,255,255,0.9)';
  const border  = isDark ? 'rgba(255,255,255,0.08)' : 'rgba(26,26,46,0.08)';

  return (
    <motion.div
      onHoverStart={() => setHovered(true)}
      onHoverEnd={() => setHovered(false)}
      style={{ borderRadius: '1.5rem', overflow: 'hidden', background: surface, border: `1px solid ${border}`, cursor: 'pointer', position: 'relative', display: 'flex', flexDirection: 'column' }}
      animate={{ y: hovered ? -6 : 0, boxShadow: hovered ? `0 24px 50px rgba(0,0,0,${isDark ? '0.4' : '0.12'})` : 'none' }}
      transition={{ duration: 0.3 }}
    >
      {/* Image */}
      <div style={{ height: 200, overflow: 'hidden', position: 'relative', flexShrink: 0 }}>
        <motion.img
          src={project.img}
          alt={project.title}
          style={{ width: '100%', height: '100%', objectFit: 'cover' }}
          animate={{ scale: hovered ? 1.05 : 1 }}
          transition={{ duration: 0.5 }}
        />
        <div style={{ position: 'absolute', inset: 0, background: `linear-gradient(to bottom, transparent 40%, ${isDark ? 'rgba(13,13,26,0.7)' : 'rgba(240,237,232,0.5)'})` }} />
        <div style={{ position: 'absolute', top: 16, left: 16 }}>
          <span style={{
            display: 'inline-flex', alignItems: 'center', gap: '0.35rem',
            padding: '0.35rem 0.9rem', borderRadius: '2rem',
            background: `${project.color}CC`, color: '#fff',
            fontSize: '0.75rem', fontWeight: 700,
            backdropFilter: 'blur(8px)',
          }}>
            {project.emoji} {project.cat}
          </span>
        </div>
      </div>

      {/* Body */}
      <div style={{ padding: '1.75rem', display: 'flex', flexDirection: 'column', flex: 1 }}>
        <h3 style={{ fontWeight: 700, fontSize: '1.05rem', color: isDark ? '#f0ede8' : '#1a1a2e', marginBottom: '0.75rem', lineHeight: 1.4 }}>{project.title}</h3>
        <p style={{ fontSize: '0.88rem', color: isDark ? 'rgba(240,237,232,0.6)' : 'rgba(26,26,46,0.6)', lineHeight: 1.7, marginBottom: '1.25rem', flex: 1 }}>{project.desc}</p>

        {/* Metrics */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '0.75rem', marginBottom: '1.25rem', padding: '1rem', borderRadius: '0.75rem', background: isDark ? 'rgba(255,255,255,0.03)' : 'rgba(26,26,46,0.04)' }}>
          {project.metrics.map((m, i) => (
            <div key={i} style={{ textAlign: 'center' }}>
              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '0.3rem', color: project.color, marginBottom: '0.2rem' }}>{m.icon}</div>
              <div style={{ fontWeight: 800, fontSize: '1rem', color: isDark ? '#f0ede8' : '#1a1a2e' }}>{m.val}</div>
              <div style={{ fontSize: '0.7rem', color: isDark ? 'rgba(240,237,232,0.4)' : 'rgba(26,26,46,0.45)', textTransform: 'uppercase', letterSpacing: '0.05em' }}>{m.label}</div>
            </div>
          ))}
        </div>

        {/* Tags + Link Row */}
        <div style={{ display: 'flex', flexWrap: 'wrap', alignItems: 'center', gap: '0.5rem', justifyContent: 'space-between' }}>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem' }}>
            {project.tags.map(t => (
              <span key={t} style={{
                padding: '0.25rem 0.75rem', borderRadius: '2rem',
                fontSize: '0.75rem', fontWeight: 600,
                background: `${project.color}15`,
                color: project.color,
                border: `1px solid ${project.color}30`,
              }}>#{t}</span>
            ))}
          </div>
          {project.link && (
            <a
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              style={{
                display: 'inline-flex', alignItems: 'center', gap: '0.4rem',
                padding: '0.45rem 1rem', borderRadius: '2rem',
                background: `${project.color}`, color: '#fff',
                fontSize: '0.78rem', fontWeight: 700,
                textDecoration: 'none',
                transition: 'opacity 0.2s, transform 0.2s',
                flexShrink: 0,
              }}
              onMouseEnter={e => { e.currentTarget.style.opacity = '0.85'; e.currentTarget.style.transform = 'scale(1.05)'; }}
              onMouseLeave={e => { e.currentTarget.style.opacity = '1'; e.currentTarget.style.transform = 'scale(1)'; }}
            >
              <ExternalLink size={13} /> View Live
            </a>
          )}
        </div>
      </div>
    </motion.div>
  );
};

const Projects = ({ theme }) => {
  const isDark = theme === 'dark';

  return (
    <section id="projects" className="section-pad" style={{ background: isDark ? '#080812' : '#f0ede8', position: 'relative', overflow: 'hidden' }}>
      <div className="orb" style={{ top: '-10%', left: '50%', width: 600, height: 600, background: isDark ? 'rgba(232,168,124,0.04)' : 'rgba(232,168,124,0.08)' }} />

      <div style={{ maxWidth: 1200, margin: '0 auto', padding: '0 2rem' }}>
        <motion.div
          initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
          style={{ textAlign: 'center', marginBottom: '4rem' }}
        >
          <div className="section-label" style={{ justifyContent: 'center' }}>Portfolio</div>
          <h2 className="font-display" style={{ fontSize: 'clamp(2rem, 4vw, 3rem)', fontWeight: 700, color: isDark ? '#f0ede8' : '#1a1a2e' }}>
            My <span className="text-gradient-gold">Projects</span>
          </h2>
          <p style={{ color: isDark ? 'rgba(240,237,232,0.6)' : 'rgba(26,26,46,0.6)', marginTop: '1rem', maxWidth: 500, margin: '1rem auto 0' }}>
            A showcase of campaigns, strategies, and builds I've crafted to drive meaningful brand growth.
          </p>
        </motion.div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '2rem' }}>
          {PROJECTS.map((p, i) => (
            <motion.div
              key={p.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
            >
              <ProjectCard project={p} isDark={isDark} />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
