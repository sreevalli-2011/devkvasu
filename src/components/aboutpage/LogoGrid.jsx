import React from 'react';
import './logo.css';

const LogoGrid = () => {
  return (
    <section className="logo-grid">

      <h2>Photography Specialties</h2>

      <div className="grid">

        <div className="logo-card">
          <h3>Wedding Photography</h3>
          <p>Capturing timeless wedding moments with cinematic storytelling and emotional detail.</p>
        </div>

        <div className="logo-card">
          <h3>Pre-Wedding Shoots</h3>
          <p>Creative outdoor and lifestyle sessions reflecting real connection and personality.</p>
        </div>

        <div className="logo-card">
          <h3>Candid Moments</h3>
          <p>Natural photography focused on authentic emotions and real interactions.</p>
        </div>

        <div className="logo-card">
          <h3>Event Coverage</h3>
          <p>Professional coverage for weddings, receptions, engagements and events.</p>
        </div>

        <div className="logo-card">
          <h3>Cinematic Portraits</h3>
          <p>Editorial-style portraits with dramatic lighting and artistic composition.</p>
        </div>

        <div className="logo-card">
          <h3>Traditional Photography</h3>
          <p>Elegant photography preserving cultural rituals and family memories.</p>
        </div>

      </div>

    </section>
  );
};

export default LogoGrid;