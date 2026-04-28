import React from 'react';
import { motion } from 'framer-motion';
import { GraduationCap, Briefcase, Calendar } from 'lucide-react';

const EDUCATION = [
  {
    title: 'Bachelor of Computer Applications (BCA)',
    org: 'Vidya First Grade College, Tumkur',
    date: '2023 – Present',
    desc: 'Building a strong academic foundation in computer science and information systems, while channeling my passion into digital marketing and social media strategy.',
    tags: ['BCA', 'Technology', 'Digital Media'],
  },
  {
    title: 'Pre-University (12th Grade)',
    org: 'Sharadamba Science Independent College, Tumkur',
    date: '2021',
    desc: 'Completed pre-university education in the science stream, developing a strong academic foundation while pursuing interests in communication and creative writing.',
    tags: ['Academics', 'Science', 'Communication'],
  },
];

const EXPERIENCE = [
  {
    title: 'Freelance Social Media Manager',
    org: 'Self-Employed',
    date: '2023 – Present',
    desc: 'Managing social media profiles for multiple small businesses. Responsibilities include content ideation, scheduling, community engagement, and performance analytics.',
    tags: ['Content', 'Instagram', 'Analytics'],
  },
  {
    title: 'Digital Marketing Intern',
    org: 'Various Local Businesses',
    date: '2022 – 2023',
    desc: 'Assisted in the planning and execution of digital campaigns. Learned practical skills in SEO, paid ads, copywriting, and campaign reporting.',
    tags: ['SEO', 'Campaigns', 'Copywriting'],
  },
];

const TimelineCard = ({ item, color, tagColor, isDark, index, direction }) => {
  const surface = isDark ? 'rgba(255,255,255,0.04)' : 'rgba(255,255,255,0.9)';
  const border  = isDark ? 'rgba(255,255,255,0.08)' : 'rgba(26,26,46,0.08)';
  const txtMain = isDark ? '#f0ede8' : '#1a1a2e';
  const txtSub  = isDark ? 'rgba(240,237,232,0.6)' : 'rgba(26,26,46,0.6)';

  return (
    <motion.div
      initial={{ opacity: 0, x: direction === 'left' ? -30 : 30 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.12 }}
      style={{ position: 'relative', paddingLeft: '2rem' }}
    >
      {/* Dot */}
      <div style={{
        position: 'absolute', left: 2, top: 24,
        width: 16, height: 16, borderRadius: '50%',
        background: color,
        border: `3px solid ${isDark ? '#080812' : '#f0ede8'}`,
        boxShadow: `0 0 12px ${color}80`,
        zIndex: 1,
      }} />

      <div className="card-glow" style={{
        background: surface,
        border: `1px solid ${border}`,
        borderRadius: '1.25rem',
        padding: '1.5rem',
        borderLeft: `3px solid ${color}`,
      }}>
        {/* Date */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '0.4rem', fontSize: '0.78rem', color: txtSub, marginBottom: '0.6rem' }}>
          <Calendar size={12} /> {item.date}
        </div>

        <h3 style={{ fontWeight: 700, fontSize: '1rem', color: txtMain, marginBottom: '0.2rem', lineHeight: 1.4 }}>{item.title}</h3>
        <p style={{ color, fontWeight: 600, fontSize: '0.85rem', marginBottom: '0.65rem' }}>{item.org}</p>
        <p style={{ color: txtSub, lineHeight: 1.7, fontSize: '0.875rem', marginBottom: '1rem' }}>{item.desc}</p>

        {/* Tags */}
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.4rem' }}>
          {item.tags.map(t => (
            <span key={t} style={{
              padding: '0.2rem 0.65rem', borderRadius: '2rem',
              fontSize: '0.72rem', fontWeight: 600,
              background: `${tagColor}15`, color: tagColor,
              border: `1px solid ${tagColor}30`,
            }}>{t}</span>
          ))}
        </div>
      </div>
    </motion.div>
  );
};

const ColumnHeader = ({ icon, label, color, isDark }) => (
  <motion.div
    initial={{ opacity: 0, y: -16 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    style={{
      display: 'flex', alignItems: 'center', gap: '0.65rem',
      marginBottom: '2rem', paddingBottom: '1rem',
      borderBottom: `2px solid ${color}30`,
    }}
  >
    <div style={{
      width: 40, height: 40, borderRadius: '0.75rem',
      background: `${color}18`, display: 'flex', alignItems: 'center', justifyContent: 'center', color,
    }}>
      {icon}
    </div>
    <h3 style={{
      fontSize: '1.15rem', fontWeight: 700,
      color: isDark ? '#f0ede8' : '#1a1a2e',
    }}>{label}</h3>
  </motion.div>
);

const Resume = ({ theme }) => {
  const isDark = theme === 'dark';
  const txtMain = isDark ? '#f0ede8' : '#1a1a2e';
  const txtSub  = isDark ? 'rgba(240,237,232,0.6)' : 'rgba(26,26,46,0.6)';

  return (
    <section id="resume" className="section-pad" style={{ background: isDark ? '#080812' : '#f0ede8', position: 'relative', overflow: 'hidden' }}>
      <div className="orb" style={{ bottom: 0, left: '-10%', width: 500, height: 500, background: isDark ? 'rgba(79,172,254,0.04)' : 'rgba(79,172,254,0.06)' }} />

      <div style={{ maxWidth: 1100, margin: '0 auto', padding: '0 2rem' }}>

        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
          style={{ textAlign: 'center', marginBottom: '4rem' }}
        >
          <div className="section-label" style={{ justifyContent: 'center' }}>My Journey</div>
          <h2 className="font-display" style={{ fontSize: 'clamp(2rem, 4vw, 3rem)', fontWeight: 700, color: txtMain }}>
            Education & <span className="text-gradient-gold">Experience</span>
          </h2>
          <p style={{ color: txtSub, marginTop: '1rem', maxWidth: 500, margin: '1rem auto 0' }}>
            A timeline of my academic milestones and hands-on professional growth.
          </p>
        </motion.div>

        {/* Two-column layout */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '3rem', alignItems: 'start' }}>

          {/* ── Education Column ── */}
          <div>
            <ColumnHeader icon={<GraduationCap size={20} />} label="Education" color="#e8a87c" isDark={isDark} />
            <div style={{ position: 'relative', display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
              {/* Vertical line */}
              <div style={{
                position: 'absolute', left: 9, top: 0, bottom: 0, width: 2,
                background: isDark
                  ? 'linear-gradient(to bottom, #e8a87c, rgba(232,168,124,0.08))'
                  : 'linear-gradient(to bottom, #e8a87c, rgba(232,168,124,0.12))',
                borderRadius: 1,
              }} />
              {EDUCATION.map((item, i) => (
                <TimelineCard key={i} item={item} color="#e8a87c" tagColor="#e8a87c" isDark={isDark} index={i} direction="left" />
              ))}
            </div>
          </div>

          {/* ── Experience Column ── */}
          <div>
            <ColumnHeader icon={<Briefcase size={20} />} label="Experience" color="#4facfe" isDark={isDark} />
            <div style={{ position: 'relative', display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
              {/* Vertical line */}
              <div style={{
                position: 'absolute', left: 9, top: 0, bottom: 0, width: 2,
                background: isDark
                  ? 'linear-gradient(to bottom, #4facfe, rgba(79,172,254,0.08))'
                  : 'linear-gradient(to bottom, #4facfe, rgba(79,172,254,0.12))',
                borderRadius: 1,
              }} />
              {EXPERIENCE.map((item, i) => (
                <TimelineCard key={i} item={item} color="#4facfe" tagColor="#4facfe" isDark={isDark} index={i} direction="right" />
              ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Resume;
