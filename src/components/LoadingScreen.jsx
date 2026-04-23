import React from 'react';

const LoadingScreen = ({ visible }) => (
  <div className={`loader-screen ${!visible ? 'fade-out' : ''}`}>
    {/* Ambient orbs */}
    <div style={{
      position: 'absolute', top: '20%', left: '20%',
      width: '400px', height: '400px',
      borderRadius: '50%',
      background: 'radial-gradient(circle, rgba(232,168,124,0.12) 0%, transparent 70%)',
      filter: 'blur(40px)',
    }} />
    <div style={{
      position: 'absolute', bottom: '20%', right: '20%',
      width: '300px', height: '300px',
      borderRadius: '50%',
      background: 'radial-gradient(circle, rgba(79,172,254,0.08) 0%, transparent 70%)',
      filter: 'blur(40px)',
    }} />

    <div style={{ position: 'relative', textAlign: 'center' }}>
      <div className="loader-logo">RM.</div>
      <p style={{ color: 'rgba(240,237,232,0.5)', fontSize: '0.85rem', letterSpacing: '0.2em', textTransform: 'uppercase', marginBottom: '2rem' }}>
        Portfolio
      </p>
      <div className="loader-bar">
        <div className="loader-bar-fill" />
      </div>
    </div>
  </div>
);

export default LoadingScreen;
