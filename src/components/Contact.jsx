import React from "react";
import "./contact.css";

const Contact = ({ overlayOpen }) => {

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Message sent successfully!");
  };

  return (
    <div className="contact-page">

      <div className={`contact-content ${overlayOpen ? "hide-content" : ""}`}>

        {/* HERO SECTION */}
        <section className="contact-hero">
          <h1>Contact</h1>
          <div className="hero-line"></div>
          <p>
            Want to check my availability? Just drop me a message!
          </p>
        </section>

        {/* MAIN SECTION */}
        <section className="contact-main">

          {/* LEFT SIDE */}
          <div className="contact-left">

            <h3>Get in Touch</h3>

            <a href="mailto:devkvasu@gmail.com">
              📧 devkvasu@gmail.com
            </a>

            <a href="tel:+919849361585">
              📞 +91 9849361585
            </a>

            <a
              href="https://instagram.com/devkvasu"
              target="_blank"
              rel="noreferrer"
            >
              📸 Instagram
            </a>

            <a
              href="https://facebook.com/devkvasu"
              target="_blank"
              rel="noreferrer"
            >
              👍 Facebook
            </a>

            <a
              href="https://youtube.com/devkvasu"
              target="_blank"
              rel="noreferrer"
            >
              ▶ YouTube
            </a>

            {/* WhatsApp Button */}
            <a
              href="https://wa.me/919849361585"
              target="_blank"
              className="whatsapp-btn"
              rel="noreferrer"
            >
              💬 Book Shoot on WhatsApp
            </a>

          </div>

          {/* RIGHT SIDE */}
          <div className="contact-right">

            <p className="required-text">
              * INDICATES REQUIRED FIELD.
            </p>

            <form onSubmit={handleSubmit}>

              <label>NAME:*</label>
              <input type="text" required />

              <label>EMAIL:*</label>
              <input type="email" required />

              <label>CONTACT TELEPHONE:</label>
              <input type="text" />

              <label>MESSAGE:*</label>
              <textarea rows="8" required></textarea>

              <button type="submit">
                SEND MESSAGE
              </button>

            </form>

          </div>

        </section>

        {/* BOTTOM SECTION */}
        <section className="contact-bottom">

          <h2>Devkvasu Photography</h2>
          <p>Unit Stills Photographer & Event Photography</p>

          <div className="bottom-links">
            <a href="/unitstills">Unit Stills</a>
            <a href="/events">Events</a>
            <a href="/industrial">Industrial</a>
            <a href="/contact">Contact</a>
          </div>

          <div className="contact-address">
            <p>Bangalore, Karnataka</p>
            <p>📧 devkvasu@gmail.com | 📞 +91 9849361585</p>
          </div>

        </section>

        {/* FOOTER */}
        <footer className="contact-footer">
          <p>
            COPYRIGHT © 2026 · TERMS AND CONDITIONS · COOKIE POLICY
          </p>
        </footer>

      </div>
    </div>
  );
};

export default Contact;