import React from "react";
import "./award.css";

import award from "../../assets/images/award.jpeg";



const Award = () => {
  return (
    <section className="award-section">
      <div className="award-container">

        <div className="award-title">
          <span className="award-badge">🏆 Awards & Recognition</span>
          <h2>Award Recognition</h2>
          <div className="award-line"></div>

          <p>
            Our passion for cinematic storytelling and visual excellence has
            been recognized through nationally acclaimed creative work.
            Every frame reflects dedication, artistry, and professionalism.
          </p>
        </div>

        <div className="award-grid">

          <div className="award-card">
            <img src={award} alt="National Award" />
          </div>

         

        </div>

      </div>
    </section>
  );
};

export default Award;