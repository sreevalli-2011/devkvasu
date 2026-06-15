import React from 'react';
import aboutImg from '../../assets/images/about.jpg';
import './aboutintro.css';

const AboutIntro = () => {
  return (

    <section className="about-intro">

      <div className="about-wrapper">

        {/* LEFT IMAGE */}
        <div className="about-left">

          <img
            src={aboutImg}
            alt="About"
            className="about-image"
          />

        </div>

        {/* RIGHT CONTENT */}
        <div className="about-right">

          {/* SERVICES */}
          <div className="highlights-section">

            <h3>Services:</h3>

         <p>Unit stills photography for film, television, and streaming productions. Marketing photography, key art, and cinematic movie poster campaigns.
           Commercial advertising photography with full studio production support.  Talent image approvals management through a secure web-based review platform.  Talent image approvals management through a secure web-based review platform.</p>


          </div>

          {/* HIGHLIGHTS */}
          <div className="highlights-section">

            <h3>Highlights:</h3>

            <ul>

              <li>
                Over 20 years of experience delivering high-end photography for the entertainment industry.
              </li>

              <li>
                Trusted by global studios and networks including HBO, Netflix, Starz, and Lionsgate.
              </li>

              <li>
                Experienced in working alongside internationally recognised actors, directors, and production teams.
              </li>

              <li>
                Known for capturing authentic cinematic moments while working discreetly on active sets.
              </li>

            </ul>

          </div>

        </div>

      </div>

    </section>
  );
};

export default AboutIntro;