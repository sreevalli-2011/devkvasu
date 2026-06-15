import React from 'react';
import './aboutpage.css';

// Import components
import AboutHero from './AboutHero';
import AboutIntro from './AboutIntro';
import LogoGrid from './LogoGrid';
import AboutFooter from './AboutFooter';
import ScrollTop from './ScrollTop';

const AboutPage = ({ overlayOpen }) => {

  return (

    <div className="about-page-wrapper  text-white">

      {/* ABOUT PAGE CONTENT */}

      <div className={`about-content ${overlayOpen ? "hide-content" : ""}`}>

        {/* 1. Top Section */}
        <AboutHero />

        {/* 2. Middle Section */}
        <AboutIntro />

        {/* 3. Logos & Bio */}
        <LogoGrid />

        {/* 4. Footer */}
        <AboutFooter />

      

      </div>

    </div>

  );
};

export default AboutPage;