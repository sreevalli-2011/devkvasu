import React from 'react';
import { Link } from 'react-router-dom';
import './footer.css';

const AboutFooter = () => {
  return (

    <footer className="about-footer">

      <div className="footer-content">

        <h2>dev Photography</h2>

        <p className="footer-tagline">
          Capturing Moments. Creating Timeless Stories.
        </p>

        {/* FOOTER MENU */}
        <div className="footer-links">

      <Link to="/">Home</Link>
          <Link to="/about">About</Link>
          <Link to="/events">Events</Link>
          <Link to="/gallery">Gallery</Link>
          <Link to="/contact">Contact</Link>

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