import React from 'react';
import { Link } from 'react-scroll';
import { FaInstagram, FaLinkedin, FaTwitter } from 'react-icons/fa';
import { Heart } from 'lucide-react';

const Footer = ({ theme }) => {
  const isDark = theme === 'dark';
  const txtSub = isDark ? 'rgba(240,237,232,0.45)' : 'rgba(26,26,46,0.45)';
  const border = isDark ? 'rgba(255,255,255,0.06)' : 'rgba(26,26,46,0.08)';

  const links = ['Home','About','Resume','Skills','Projects','Contact'];
  const socials = [
    { icon: <FaLinkedin />, color: '#0a66c2', href: '#' },
    { icon: <FaInstagram />, color: '#e4405f', href: '#' },
    { icon: <FaTwitter />,   color: '#1da1f2', href: '#' },
  ];

  return (
    <footer style={{
      background: isDark ? '#080812' : '#f0ede8',
      borderTop: `1px solid ${border}`,
      padding: '3rem 2rem',
    }}>
      <div style={{ maxWidth: 1200, margin: '0 auto', display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '2rem' }}>
        {/* Logo */}
        <div className="font-display" style={{ fontSize: '1.75rem', fontWeight: 700, color: '#e8a87c' }}>RM.</div>

        {/* Nav Links */}
        <nav style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', gap: '0.5rem 2rem' }}>
          {links.map(l => (
            <Link key={l} to={l.toLowerCase()} smooth offset={-80} className="nav-link cursor-pointer" style={{ fontSize: '0.9rem', fontWeight: 500, color: txtSub }}>
              {l}
            </Link>
          ))}
        </nav>

        {/* Socials */}
        <div style={{ display: 'flex', gap: '0.75rem' }}>
          {socials.map(({ icon, color, href }, i) => (
            <a key={i} href={href} style={{
              width: 40, height: 40, borderRadius: '0.625rem',
              background: `${color}15`, color, display: 'flex', alignItems: 'center', justifyContent: 'center',
              fontSize: '1.05rem', transition: 'transform 0.2s, background 0.2s',
            }}
              onMouseEnter={e => { e.currentTarget.style.background = color; e.currentTarget.style.color = '#fff'; e.currentTarget.style.transform = 'scale(1.1)'; }}
              onMouseLeave={e => { e.currentTarget.style.background = `${color}15`; e.currentTarget.style.color = color; e.currentTarget.style.transform = 'scale(1)'; }}
            >
              {icon}
            </a>
          ))}
        </div>

        {/* Copyright */}
        <p style={{ fontSize: '0.82rem', color: txtSub, textAlign: 'center', display: 'flex', alignItems: 'center', gap: '0.3rem', flexWrap: 'wrap', justifyContent: 'center' }}>
          © {new Date().getFullYear()} Rangaswamy M. Made with <Heart size={12} style={{ color: '#e8a87c' }} fill="#e8a87c" /> in Tumkur, Karnataka.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
