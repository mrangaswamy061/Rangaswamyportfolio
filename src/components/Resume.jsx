import React from 'react';
import { motion } from 'framer-motion';
import { GraduationCap, Briefcase, Download, Calendar } from 'lucide-react';

const Resume = ({ theme }) => {
  const isDark = theme === 'dark';
  const txtMain = isDark ? '#f0ede8' : '#1a1a2e';
  const txtSub  = isDark ? 'rgba(240,237,232,0.6)' : 'rgba(26,26,46,0.6)';
  const surface = isDark ? 'rgba(255,255,255,0.04)' : 'rgba(255,255,255,0.9)';
  const border  = isDark ? 'rgba(255,255,255,0.08)' : 'rgba(26,26,46,0.08)';

  const items = [
    {
      type: 'education',
      title: 'Bachelor of Computer Applications (BCA)',
      org: 'HMS College, Tumkur',
      date: '2022 – Present (Final Year)',
      desc: 'Building a strong academic foundation in computer science and information systems, while channeling my passion into digital marketing and social media strategy.',
      tags: ['BCA', 'Technology', 'Digital Media'],
    },
    {
      type: 'work',
      title: 'Freelance Social Media Manager',
      org: 'Self-Employed',
      date: '2023 – Present',
      desc: 'Managing social media profiles for multiple small businesses. Responsibilities include content ideation, scheduling, community engagement, and performance analytics.',
      tags: ['Content', 'Instagram', 'Analytics'],
    },
    {
      type: 'work',
      title: 'Digital Marketing Intern',
      org: 'Various Local Businesses',
      date: '2022 – 2023',
      desc: 'Assisted in the planning and execution of digital campaigns. Learned practical skills in SEO, paid ads, copywriting, and campaign reporting.',
      tags: ['SEO', 'Campaigns', 'Copywriting'],
    },
    {
      type: 'education',
      title: 'Pre-University (12th Grade)',
      org: 'Karnataka State Board',
      date: '2020 – 2022',
      desc: 'Completed pre-university education, developing a strong academic foundation while pursuing interests in communication and creative writing.',
      tags: ['Academics', 'Communication'],
    },
  ];

  return (
    <section id="resume" className="section-pad" style={{ background: isDark ? '#080812' : '#f0ede8', position: 'relative', overflow: 'hidden' }}>
      <div className="orb" style={{ bottom: 0, left: '-10%', width: 500, height: 500, background: isDark ? 'rgba(79,172,254,0.04)' : 'rgba(79,172,254,0.06)' }} />

      <div style={{ maxWidth: 900, margin: '0 auto', padding: '0 2rem' }}>
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

        {/* Timeline */}
        <div style={{ position: 'relative', paddingLeft: '2rem' }}>
          {/* Vertical line */}
          <div style={{
            position: 'absolute', left: 10, top: 0, bottom: 0,
            width: 2, background: isDark ? 'linear-gradient(to bottom, #e8a87c, rgba(232,168,124,0.1))' : 'linear-gradient(to bottom, #e8a87c, rgba(232,168,124,0.15))',
            borderRadius: 1,
          }} />

          <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
            {items.map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                style={{ position: 'relative' }}
              >
                {/* Dot */}
                <div style={{
                  position: 'absolute', left: -34, top: 24,
                  width: 16, height: 16, borderRadius: '50%',
                  background: item.type === 'education' ? '#e8a87c' : '#4facfe',
                  border: `3px solid ${isDark ? '#080812' : '#f0ede8'}`,
                  boxShadow: `0 0 12px ${item.type === 'education' ? 'rgba(232,168,124,0.5)' : 'rgba(79,172,254,0.5)'}`,
                  zIndex: 1,
                }} />

                <div className="card-glow" style={{
                  background: surface, border: `1px solid ${border}`,
                  borderRadius: '1.25rem', padding: '1.75rem',
                  borderLeft: `3px solid ${item.type === 'education' ? '#e8a87c' : '#4facfe'}`,
                }}>
                  {/* Header */}
                  <div style={{ display: 'flex', alignItems: 'flex-start', justifyContent: 'space-between', flexWrap: 'wrap', gap: '0.5rem', marginBottom: '0.75rem' }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                      <span style={{ color: item.type === 'education' ? '#e8a87c' : '#4facfe', width: 16, height: 16 }}>
                        {item.type === 'education' ? <GraduationCap size={16} /> : <Briefcase size={16} />}
                      </span>
                      <span style={{ fontSize: '0.75rem', fontWeight: 700, letterSpacing: '0.1em', textTransform: 'uppercase', color: item.type === 'education' ? '#e8a87c' : '#4facfe' }}>
                        {item.type === 'education' ? 'Education' : 'Experience'}
                      </span>
                    </div>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '0.4rem', fontSize: '0.8rem', color: txtSub }}>
                      <Calendar size={13} /> {item.date}
                    </div>
                  </div>

                  <h3 style={{ fontWeight: 700, fontSize: '1.05rem', color: txtMain, marginBottom: '0.25rem' }}>{item.title}</h3>
                  <p style={{ color: '#e8a87c', fontWeight: 600, fontSize: '0.9rem', marginBottom: '0.75rem' }}>{item.org}</p>
                  <p style={{ color: txtSub, lineHeight: 1.7, fontSize: '0.9rem', marginBottom: '1rem' }}>{item.desc}</p>

                  {/* Tags */}
                  <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem' }}>
                    {item.tags.map(t => (
                      <span key={t} style={{
                        padding: '0.25rem 0.75rem', borderRadius: '2rem',
                        fontSize: '0.75rem', fontWeight: 600,
                        background: 'rgba(232,168,124,0.1)', color: '#e8a87c',
                        border: '1px solid rgba(232,168,124,0.2)',
                      }}>
                        {t}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Download Button */}
        <motion.div
          initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
          transition={{ delay: 0.4 }}
          style={{ textAlign: 'center', marginTop: '3.5rem' }}
        >
          <a href="/RANGASWAMY%20%20Resume.pdf" download className="btn-gold" style={{ fontSize: '1rem', padding: '1rem 2.5rem' }}>
            <Download size={18} /> Download Full Resume
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default Resume;
