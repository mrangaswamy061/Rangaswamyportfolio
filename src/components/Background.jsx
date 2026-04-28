import React, { useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

/* ─ seeded random ─ */
function sr(s, a, b) {
  const x = Math.sin(s * 9301 + 49297) * 233280;
  return a + (x - Math.floor(x)) * (b - a);
}

/* ─ Per-section config ─ */
const CONFIGS = {
  home: {
    darkBg:  'radial-gradient(ellipse at 20% 10%, #071c40 0%, #020810 55%, #0f2240 100%)',
    lightBg: 'radial-gradient(ellipse at 20% 10%, #5aaad4 0%, #a8d8f0 60%, #d4eef9 100%)',
    orbs: [
      { x:'72%', y:'8%',  w:500, h:500, dark:'rgba(79,172,254,0.08)',  light:'rgba(79,172,254,0.15)' },
      { x:'5%',  y:'55%', w:420, h:420, dark:'rgba(232,168,124,0.07)', light:'rgba(232,168,124,0.13)' },
      { x:'45%', y:'40%', w:300, h:300, dark:'rgba(20,210,160,0.05)',  light:'rgba(20,210,160,0.08)' },
    ],
    label: '🌲 Forest & Lake — Home',
  },
  about: {
    darkBg:  'radial-gradient(ellipse at 50% 30%, #1a0d35 0%, #0d0620 60%, #120a28 100%)',
    lightBg: 'radial-gradient(ellipse at 50% 30%, #ffb347 0%, #ff8c42 50%, #ffd580 100%)',
    orbs: [
      { x:'50%', y:'25%', w:600, h:300, dark:'rgba(155,79,212,0.14)',  light:'rgba(255,170,51,0.3)'  },
      { x:'10%', y:'60%', w:360, h:360, dark:'rgba(200,130,240,0.08)', light:'rgba(255,140,50,0.15)' },
      { x:'75%', y:'70%', w:280, h:280, dark:'rgba(120,60,200,0.07)',  light:'rgba(220,100,30,0.12)' },
    ],
    label: '🌅 Warm Sunset — About',
  },
  resume: {
    darkBg:  'radial-gradient(ellipse at 0% 0%, #071828 0%, #040c1c 70%, #050e20 100%)',
    lightBg: 'radial-gradient(ellipse at 0% 0%, #dce8f5 0%, #f0f4f8 60%, #e8f0fa 100%)',
    orbs: [
      { x:'80%', y:'10%', w:440, h:440, dark:'rgba(79,172,254,0.09)',  light:'rgba(30,100,200,0.1)'  },
      { x:'15%', y:'75%', w:380, h:380, dark:'rgba(100,150,255,0.07)', light:'rgba(50,130,220,0.08)' },
      { x:'50%', y:'50%', w:250, h:250, dark:'rgba(60,120,220,0.05)',  light:'rgba(20,80,180,0.07)'  },
    ],
    label: '📄 Professional — Resume',
  },
  skills: {
    darkBg:  'radial-gradient(ellipse at 100% 100%, #0f2218 0%, #050d0a 60%, #091810 100%)',
    lightBg: 'radial-gradient(ellipse at 100% 100%, #c8f0d8 0%, #e8f8ee 60%, #f0fdf4 100%)',
    orbs: [
      { x:'60%', y:'20%', w:480, h:480, dark:'rgba(34,210,150,0.09)',  light:'rgba(30,180,100,0.14)' },
      { x:'5%',  y:'40%', w:360, h:360, dark:'rgba(20,200,180,0.07)',  light:'rgba(20,160,120,0.1)'  },
      { x:'80%', y:'75%', w:300, h:300, dark:'rgba(100,240,180,0.06)', light:'rgba(50,200,130,0.09)' },
    ],
    label: '⚡ Digital — Skills',
  },
  projects: {
    darkBg:  'radial-gradient(ellipse at 80% 20%, #1a0828 0%, #120520 60%, #200a28 100%)',
    lightBg: 'radial-gradient(ellipse at 80% 20%, #f0d8ff 0%, #fae8ff 60%, #fff0fe 100%)',
    orbs: [
      { x:'70%', y:'15%', w:500, h:500, dark:'rgba(200,80,255,0.09)',  light:'rgba(160,40,220,0.13)' },
      { x:'10%', y:'55%', w:400, h:400, dark:'rgba(255,80,160,0.07)',  light:'rgba(220,40,140,0.1)'  },
      { x:'50%', y:'80%', w:320, h:320, dark:'rgba(140,60,255,0.06)',  light:'rgba(120,30,210,0.08)' },
    ],
    label: '🎨 Creative — Projects',
  },
  contact: {
    darkBg:  'radial-gradient(ellipse at 50% 80%, #2d1e08 0%, #1a0f05 60%, #120c04 100%)',
    lightBg: 'radial-gradient(ellipse at 50% 80%, #ffe8a0 0%, #fff3c8 60%, #fffdf0 100%)',
    orbs: [
      { x:'50%', y:'60%', w:600, h:300, dark:'rgba(232,168,124,0.14)', light:'rgba(232,150,50,0.2)'  },
      { x:'10%', y:'20%', w:340, h:340, dark:'rgba(255,180,80,0.08)',  light:'rgba(255,160,30,0.13)' },
      { x:'80%', y:'30%', w:280, h:280, dark:'rgba(200,120,40,0.07)',  light:'rgba(220,140,40,0.1)'  },
    ],
    label: '✉️ Warm — Contact',
  },
};

/* ─ Canvas particles (twinkling dots) ─ */
const Particles = ({ hue1, hue2 }) => {
  const ref = useRef(null);
  useEffect(() => {
    const c = ref.current; if (!c) return;
    const ctx = c.getContext('2d'); let id;
    const resize = () => { c.width = innerWidth; c.height = innerHeight; };
    resize(); addEventListener('resize', resize);
    const dots = Array.from({ length: 60 }, (_, i) => ({
      x: sr(i*3,0,1)*innerWidth, y: sr(i*7,0,1)*innerHeight,
      r: sr(i*11,0.6,2.2), dx: sr(i*13,-0.18,0.18), dy: sr(i*17,-0.15,0.15),
      phase: sr(i*19,0,Math.PI*2), spd: sr(i*23,0.009,0.02),
      hue: sr(i*29, hue1, hue2),
    }));
    const draw = () => {
      ctx.clearRect(0, 0, c.width, c.height);
      dots.forEach(d => {
        d.phase += d.spd; d.x += d.dx; d.y += d.dy;
        if (d.x<0) d.x=c.width; if (d.x>c.width) d.x=0;
        if (d.y<0) d.y=c.height; if (d.y>c.height) d.y=0;
        const a = (Math.sin(d.phase)*0.5+0.5)*0.75;
        const g = ctx.createRadialGradient(d.x,d.y,0,d.x,d.y,d.r*4);
        g.addColorStop(0,`hsla(${d.hue},90%,75%,${a})`);
        g.addColorStop(1,`hsla(${d.hue},90%,75%,0)`);
        ctx.beginPath(); ctx.arc(d.x,d.y,d.r*4,0,Math.PI*2); ctx.fillStyle=g; ctx.fill();
        ctx.beginPath(); ctx.arc(d.x,d.y,d.r,0,Math.PI*2);
        ctx.fillStyle=`hsla(${d.hue},100%,95%,${a})`; ctx.fill();
      });
      id = requestAnimationFrame(draw);
    };
    id = requestAnimationFrame(draw);
    return () => { cancelAnimationFrame(id); removeEventListener('resize', resize); };
  }, [hue1, hue2]);
  return <canvas ref={ref} style={{ position:'fixed', inset:0, width:'100%', height:'100%', zIndex:0, pointerEvents:'none' }} />;
};

/* particle hue per section */
const PARTICLE_HUES = {
  home:     [45,  90],
  about:    [20,  50],
  resume:   [200, 240],
  skills:   [130, 175],
  projects: [270, 320],
  contact:  [30,  60],
};

/* ─ Dot-grid overlay ─ */
const DotGrid = ({ isDark }) => (
  <div style={{
    position:'fixed', inset:0, zIndex:0, pointerEvents:'none',
    backgroundImage:`radial-gradient(circle, ${isDark?'rgba(255,255,255,0.04)':'rgba(26,26,46,0.05)'} 1px, transparent 1px)`,
    backgroundSize:'38px 38px',
  }} />
);

/* ─ Diagonal lines (resume / skills) ─ */
const DiagLines = ({ isDark, color }) => (
  <svg style={{ position:'fixed', inset:0, width:'100%', height:'100%', zIndex:0, pointerEvents:'none', opacity: isDark ? 0.04 : 0.06 }}>
    {[...Array(12)].map((_,i) => (
      <line key={i} x1={`${-10+i*12}%`} y1="0%" x2={`${14+i*12}%`} y2="100%"
        stroke={color} strokeWidth="1" />
    ))}
  </svg>
);

/* ─ Main Background ─ */
const Background = ({ theme, activeSection = 'home' }) => {
  const isDark = theme === 'dark';
  const cfg = CONFIGS[activeSection] || CONFIGS.home;
  const [h1, h2] = PARTICLE_HUES[activeSection] || [45, 90];

  return (
    <>
      {/* Gradient base — animates on section change */}
      <AnimatePresence mode="wait">
        <motion.div
          key={activeSection}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 1.2, ease: 'easeInOut' }}
          style={{ position:'fixed', inset:0, zIndex:0, pointerEvents:'none',
            background: isDark ? cfg.darkBg : cfg.lightBg }}
        />
      </AnimatePresence>

      {/* Dot grid */}
      <DotGrid isDark={isDark} />

      {/* Diagonal accent for resume/skills */}
      {(activeSection === 'resume' || activeSection === 'skills') && (
        <DiagLines isDark={isDark} color={activeSection === 'resume' ? '#4facfe' : '#22d9a0'} />
      )}

      {/* Ambient glow orbs */}
      <AnimatePresence mode="wait">
        <motion.div key={`orbs-${activeSection}`}
          initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
          transition={{ duration: 1.4 }}
          style={{ position:'fixed', inset:0, zIndex:0, pointerEvents:'none' }}
        >
          {cfg.orbs.map((o, i) => (
            <motion.div key={i}
              animate={{ scale:[1, 1.12, 1], opacity:[0.7, 1, 0.7] }}
              transition={{ duration: 8 + i*3, repeat:Infinity, ease:'easeInOut', delay: i*2 }}
              style={{
                position:'absolute', left:o.x, top:o.y,
                width:o.w, height:o.h, borderRadius:'50%',
                background: isDark ? o.dark : o.light,
                filter:'blur(55px)', transform:'translate(-50%,-50%)',
              }}
            />
          ))}
        </motion.div>
      </AnimatePresence>

      {/* Canvas particles */}
      <Particles hue1={h1} hue2={h2} />
    </>
  );
};

export default Background;
