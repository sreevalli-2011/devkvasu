import React from 'react';
import './footer.css';

const AboutFooter = () => {
  return (

    <footer className="about-footer">

      <div className="footer-content">

        <h2>dev Wedding Photography</h2>

        <p className="footer-tagline">
          Capturing timeless wedding stories with cinematic elegance.
        </p>

        {/* FOOTER MENU */}
        <div className="footer-links">

          <a href="/">Home</a>
          <a href="/">About</a>
          <a href="/">Services</a>
          <a href="/">Gallery</a>
          <a href="/">Contact</a>

        </div>

        {/* CONTACT */}
        <div className="footer-contact">

          <p>Bangalore, India</p>

          <p>devkvasu@gmail.com</p>

          <p>+91 98765 43210</p>

        </div>

      </div>

      {/* COPYRIGHT */}
      <div className="footer-bottom">

        <p>
          Copyright © 2026 | All Rights Reserved
        </p>

      </div>

    </footer>

  );
};

export default AboutFooter;