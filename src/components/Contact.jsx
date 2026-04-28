import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Send, CheckCircle, AlertCircle } from 'lucide-react';
import { FaInstagram, FaLinkedin, FaWhatsapp } from 'react-icons/fa';

// ─── Web3Forms config ─────────────────────────────────────────────────────────
// Get your FREE access key in 10 seconds:
// 1. Go to https://web3forms.com
// 2. Enter your email (mrangaswamy061@gmail.com) → click "Create Access Key"
// 3. Copy the key and paste it below — done! No signup needed.
const WEB3FORMS_KEY = '2fd4308e-6706-4944-b711-dc9bcc8e52b1';
// ──────────────────────────────────────────────────────────────────────────────

const validate = ({ name, email, message }) => {
  const errors = {};
  if (!name.trim() || name.trim().length < 2) errors.name = 'Name must be at least 2 characters.';
  if (!email.trim() || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) errors.email = 'Enter a valid email address.';
  if (!message.trim() || message.trim().length < 10) errors.message = 'Message must be at least 10 characters.';
  return errors;
};

const Contact = ({ theme }) => {
  const isDark = theme === 'dark';
  const [form, setForm] = useState({ name: '', email: '', message: '' });
  const [errors, setErrors] = useState({});
  const [state, setState] = useState('idle'); // idle | submitting | success | error

  const txtMain = isDark ? '#f0ede8' : '#1a1a2e';
  const txtSub = isDark ? 'rgba(240,237,232,0.6)' : 'rgba(26,26,46,0.6)';
  const surface = isDark ? 'rgba(255,255,255,0.04)' : 'rgba(255,255,255,0.9)';
  const border = isDark ? 'rgba(255,255,255,0.08)' : 'rgba(26,26,46,0.08)';

  const onChange = (e) => {
    setForm(f => ({ ...f, [e.target.name]: e.target.value }));
    if (errors[e.target.name]) setErrors(er => ({ ...er, [e.target.name]: null }));
  };

  const onSubmit = async (e) => {
    e.preventDefault();
    const errs = validate(form);
    if (Object.keys(errs).length) { setErrors(errs); return; }
    setState('submitting');
    try {
      const res = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
        body: JSON.stringify({
          access_key: WEB3FORMS_KEY,
          name: form.name,
          email: form.email,
          message: form.message,
          subject: `New Portfolio Message from ${form.name}`,
        }),
      });
      const data = await res.json();
      if (data.success) {
        setState('success');
        setForm({ name: '', email: '', message: '' });
        setTimeout(() => setState('idle'), 5000);
      } else {
        throw new Error(data.message || 'Submission failed');
      }
    } catch (err) {
      console.error('Web3Forms error:', err);
      setState('error');
      setTimeout(() => setState('idle'), 5000);
    }
  };

  const socials = [
    { icon: <FaLinkedin />, color: '#0a66c2', label: 'LinkedIn', href: 'https://www.linkedin.com/in/rangaswamy-m-b43211360?utm_source=share_via&utm_content=profile&utm_medium=member_android', target: '_blank' },
    { icon: <FaInstagram />, color: '#e4405f', label: 'Instagram', href: 'https://www.instagram.com/swam___y?igsh=MWwwZTNwODJmN3JsZQ==', target: '_blank' },
    { icon: <FaWhatsapp />, color: '#25d366', label: 'WhatsApp', href: 'https://wa.me/918310668859', target: '_blank' },
  ];

  return (
    <section id="contact" className="section-pad" style={{ background: isDark ? '#0d0d1a' : '#faf8f5', position: 'relative', overflow: 'hidden' }}>
      <div className="orb" style={{ bottom: 0, right: '0%', width: 500, height: 500, background: isDark ? 'rgba(232,168,124,0.05)' : 'rgba(232,168,124,0.09)' }} />

      <div style={{ maxWidth: 1100, margin: '0 auto', padding: '0 2rem' }}>
        <motion.div
          initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
          style={{ textAlign: 'center', marginBottom: '4rem' }}
        >
          <div className="section-label" style={{ justifyContent: 'center' }}>Get in Touch</div>
          <h2 className="font-display" style={{ fontSize: 'clamp(2rem, 4vw, 3rem)', fontWeight: 700, color: txtMain }}>
            Let's <span className="text-gradient-gold">Work Together</span>
          </h2>
          <p style={{ color: txtSub, marginTop: '1rem', maxWidth: 500, margin: '1rem auto 0' }}>
            Open for freelance opportunities, collaborations, and full-time roles in social media & digital marketing.
          </p>
        </motion.div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '2rem' }}>
          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}
            style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }}
          >
            {[
              { icon: <Mail size={20} />, label: 'Email', val: 'mrangaswamy061@gmail.com', href: 'mailto:mrangaswamy061@gmail.com', color: '#e8a87c' },
              { icon: <Phone size={20} />, label: 'Phone', val: '+91 83106 68859', href: 'tel:8310668859', color: '#4facfe' },
              { icon: <MapPin size={20} />, label: 'Location', val: 'Tumkur, Shettihalli road HMS', href: null, color: '#a78bfa' },
            ].map(({ icon, label, val, href, color }) => (
              <div key={label} className="card-glow" style={{ background: surface, border: `1px solid ${border}`, borderRadius: '1.25rem', padding: '1.5rem' }}>
                {href ? (
                  <a href={href} style={{ display: 'flex', alignItems: 'center', gap: '1rem', textDecoration: 'none' }}>
                    <div style={{ width: 48, height: 48, borderRadius: '0.875rem', background: `${color}15`, display: 'flex', alignItems: 'center', justifyContent: 'center', color, flexShrink: 0 }}>
                      {icon}
                    </div>
                    <div>
                      <div style={{ fontSize: '0.75rem', textTransform: 'uppercase', letterSpacing: '0.1em', fontWeight: 700, color: isDark ? 'rgba(240,237,232,0.4)' : 'rgba(26,26,46,0.4)', marginBottom: '0.2rem' }}>{label}</div>
                      <div style={{ fontWeight: 600, color: txtMain, fontSize: '0.9rem' }}>{val}</div>
                    </div>
                  </a>
                ) : (
                  <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
                    <div style={{ width: 48, height: 48, borderRadius: '0.875rem', background: `${color}15`, display: 'flex', alignItems: 'center', justifyContent: 'center', color, flexShrink: 0 }}>
                      {icon}
                    </div>
                    <div>
                      <div style={{ fontSize: '0.75rem', textTransform: 'uppercase', letterSpacing: '0.1em', fontWeight: 700, color: isDark ? 'rgba(240,237,232,0.4)' : 'rgba(26,26,46,0.4)', marginBottom: '0.2rem' }}>{label}</div>
                      <div style={{ fontWeight: 600, color: txtMain, fontSize: '0.9rem' }}>{val}</div>
                    </div>
                  </div>
                )}
              </div>
            ))}

            {/* Social Links */}
            <div className="card-glow" style={{ background: surface, border: `1px solid ${border}`, borderRadius: '1.25rem', padding: '1.5rem' }}>
              <p style={{ fontSize: '0.75rem', textTransform: 'uppercase', letterSpacing: '0.1em', fontWeight: 700, color: isDark ? 'rgba(240,237,232,0.4)' : 'rgba(26,26,46,0.4)', marginBottom: '1rem' }}>Find Me On</p>
              <div style={{ display: 'flex', gap: '0.75rem' }}>
                {socials.map(({ icon, label, color, href, target }) => (
                  <a key={label} href={href} title={label} target={target || '_self'} rel={target === '_blank' ? 'noopener noreferrer' : undefined} style={{
                    width: 44, height: 44, borderRadius: '0.75rem',
                    background: `${color}15`, color, display: 'flex', alignItems: 'center', justifyContent: 'center',
                    fontSize: '1.1rem', transition: 'transform 0.2s, background 0.2s',
                    textDecoration: 'none',
                  }}
                    onMouseEnter={e => { e.currentTarget.style.background = color; e.currentTarget.style.color = '#fff'; e.currentTarget.style.transform = 'scale(1.1)'; }}
                    onMouseLeave={e => { e.currentTarget.style.background = `${color}15`; e.currentTarget.style.color = color; e.currentTarget.style.transform = 'scale(1)'; }}
                  >
                    {icon}
                  </a>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}
          >
            <div className="card-glow" style={{ background: surface, border: `1px solid ${border}`, borderRadius: '1.5rem', padding: '2.5rem' }}>
              <h3 style={{ fontWeight: 700, fontSize: '1.25rem', color: txtMain, marginBottom: '2rem' }}>Send a Message</h3>

              {state === 'success' ? (
                <div style={{ textAlign: 'center', padding: '3rem 0' }}>
                  <motion.div initial={{ scale: 0 }} animate={{ scale: 1 }} transition={{ type: 'spring', stiffness: 200 }}>
                    <CheckCircle size={56} color="#22c55e" style={{ margin: '0 auto 1rem' }} />
                  </motion.div>
                  <h4 style={{ fontWeight: 700, fontSize: '1.15rem', color: txtMain, marginBottom: '0.5rem' }}>Message Sent!</h4>
                  <p style={{ color: txtSub }}>Thank you! I'll get back to you very soon.</p>
                </div>
              ) : state === 'error' ? (
                <div style={{ textAlign: 'center', padding: '3rem 0' }}>
                  <motion.div initial={{ scale: 0 }} animate={{ scale: 1 }} transition={{ type: 'spring', stiffness: 200 }}>
                    <AlertCircle size={56} color="#f87171" style={{ margin: '0 auto 1rem' }} />
                  </motion.div>
                  <h4 style={{ fontWeight: 700, fontSize: '1.15rem', color: txtMain, marginBottom: '0.5rem' }}>Oops! Something went wrong.</h4>
                  <p style={{ color: txtSub }}>Message couldn't be sent. Please try WhatsApp or email me directly.</p>
                </div>
              ) : (
                <form onSubmit={onSubmit} noValidate style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
                  <div>
                    <label style={{ display: 'block', fontWeight: 600, fontSize: '0.85rem', color: txtSub, marginBottom: '0.5rem' }}>Your Name *</label>
                    <input name="name" value={form.name} onChange={onChange} className="form-input" placeholder="John Doe" />
                    {errors.name && <p style={{ color: '#f87171', fontSize: '0.8rem', marginTop: '0.35rem' }}>{errors.name}</p>}
                  </div>

                  <div>
                    <label style={{ display: 'block', fontWeight: 600, fontSize: '0.85rem', color: txtSub, marginBottom: '0.5rem' }}>Email Address *</label>
                    <input name="email" type="email" value={form.email} onChange={onChange} className="form-input" placeholder="john@example.com" />
                    {errors.email && <p style={{ color: '#f87171', fontSize: '0.8rem', marginTop: '0.35rem' }}>{errors.email}</p>}
                  </div>

                  <div>
                    <label style={{ display: 'block', fontWeight: 600, fontSize: '0.85rem', color: txtSub, marginBottom: '0.5rem' }}>Message *</label>
                    <textarea name="message" rows={5} value={form.message} onChange={onChange} className="form-input" placeholder="How can I help you?" style={{ resize: 'vertical' }} />
                    {errors.message && <p style={{ color: '#f87171', fontSize: '0.8rem', marginTop: '0.35rem' }}>{errors.message}</p>}
                  </div>

                  <button type="submit" disabled={state === 'submitting'} className="btn-gold" style={{ width: '100%', justifyContent: 'center', opacity: state === 'submitting' ? 0.75 : 1, cursor: state === 'submitting' ? 'wait' : 'pointer', fontSize: '1rem', padding: '1rem' }}>
                    {state === 'submitting' ? 'Sending...' : (<><Send size={16} /> Send Message</>)}
                  </button>
                </form>
              )}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
