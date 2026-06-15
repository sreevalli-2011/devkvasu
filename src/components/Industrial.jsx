import React, { useState, useRef, useEffect } from "react";
import "./industrail.css";
import "./aboutpage/abouthero.css";

/* =========================
   IMPORT YOUR IMAGES HERE (DO NOT CHANGE)
========================= */
import im1 from "../assets/images/ind-im/im-1.jpg";
import im2 from "../assets/images/ind-im/im-2.jpg";
import im3 from "../assets/images/ind-im/im-3.jpg";
import im4 from "../assets/images/ind-im/im-4.jpg";
import im5 from "../assets/images/ind-im/im-5.jpg";
import im6 from "../assets/images/ind-im/im-6.jpg";
import im7 from "../assets/images/ind-im/im-7.jpg";
import im8 from "../assets/images/ind-im/im-8.jpg";
import im9 from "../assets/images/ind-im/im-9.jpg";
import im10 from "../assets/images/ind-im/im-10.jpg";

const images = [
  { src: im1, title: "Industrial Precision", description: "Modern industrial workflow and cinematic visual storytelling." },
  { src: im2, title: "Commercial Vision", description: "Creative commercial photography with dramatic composition." },
  { src: im3, title: "Production Energy", description: "Capturing motion, detail, and authentic industrial atmosphere." },
  { src: im4, title: "Factory Narrative", description: "Documenting large-scale environments with cinematic depth." },
  { src: im5, title: "Architectural Frames", description: "Strong geometry and visual structure in industrial spaces." },
  { src: im6, title: "Creative Lighting", description: "Industrial visuals enhanced with controlled lighting mood." },
  { src: im7, title: "Visual Engineering", description: "Blending technical environments with artistic storytelling." },
  { src: im8, title: "Commercial Detail", description: "Focused compositions for premium industrial presentation." },
  { src: im9, title: "Industrial Motion", description: "Capturing movement and cinematic realism in production spaces." },
  { src: im10, title: "Modern Industry", description: "Immersive photography experience with commercial aesthetics." }
];

const Industrial = ({ overlayOpen }) => {
  const [selectedIndex, setSelectedIndex] = useState(null);
  const trackRef = useRef(null);

  /* =========================
     🎯 OPEN POPUP (సరిచేయబడిన లేఅవుట్ సెంటరింగ్)
  ========================= */
  const openGallery = (index) => {
    setSelectedIndex(index);

    setTimeout(() => {
      if (trackRef.current) {
        const slides = trackRef.current.children;

        if (slides[index]) {
          // block మరియు inline రెండింటినీ center చేయడం వల్ల ఇమేజ్ పక్కాగా మధ్యలోకి వస్తుంది
          slides[index].scrollIntoView({
            behavior: "auto",
            block: "center",
            inline: "center",
          });
        }
      }
    }, 50);
  };

  /* =========================
     CLOSE POPUP
  ========================= */
  const closePopup = () => {
    setSelectedIndex(null);
  };

  /* =========================
     HORIZONTAL SCROLL (మౌస్ వీల్ ఇంటరాక్షన్)
  ========================= */
  useEffect(() => {
    const track = trackRef.current;
    if (!track) return;

    const handleWheel = (e) => {
      e.preventDefault();
      track.scrollBy({
        left: e.deltaY * 1.5,
        behavior: "auto",
      });
    };

    track.addEventListener("wheel", handleWheel, { passive: false });
    return () => track.removeEventListener("wheel", handleWheel);
  }, [selectedIndex]);

  return (
    <div className={`industrial-content ${overlayOpen ? "hide-content" : ""}`}>
      
      {/* HERO SECTION */}
      <section className="industrial-gallery-section">
        <div className="container">
          
          <section className="about-hero">
            <h1 className="about-hero">Industrial & Commercial</h1>
            <div className="hero-line"></div>
            <p className="about-hero">
              Industrial photography with modern cinematic storytelling,
              creative compositions, and immersive visual experience.
            </p>
          </section>

          {/* 🧱 ఇరుక్కుపోకుండా ఖాళీలు లేని పర్ఫెక్ట్ మాసన్రీ గ్రిడ్ లేఅవుట్ */}
          <div className="gallery-grid mt-5">
            {images.map((item, index) => (
              <div
                className="event-card"
                key={index}
                onClick={() => openGallery(index)}
              >
                {/* ఇమేజ్ దాని అసలైన నిలువు/అడ్డం రేషియోలోనే ఉంటుంది */}
                <img src={item.src} alt={item.title} />

                {/* ప్రీమియం సినిమాటిక్ మ్యాట్ బ్లాక్ ఓవర్లే షాడో */}
                <div className="industrial-info">
                  <h3 className="industrial-info-title">{item.title}</h3>
                  <p className="industrial-info-text">{item.description}</p>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* ==========================================================================
         📸 FULLSCREEN POPUP (మధ్యలోకి లాక్ చేయబడిన హారిజాంటల్ ట్రాక్)
         ========================================================================== */}
      {selectedIndex !== null && (
        <div className="cinema-popup" onClick={closePopup}>
          
          {/* BACK BUTTON */}
          <button className="close-gallery" onClick={closePopup}>
            ← Back
          </button>

          {/* HORIZONTAL TRACK */}
          <div
            className="cinema-track"
            ref={trackRef}
            onClick={(e) => e.stopPropagation()}
          >
            {images.map((img, index) => (
              <div className="cinema-slide" key={index}>
                <img src={img.src} alt={img.title} />
                
                <div className="cinema-info">
                  <h2>{img.title}</h2>
                  <p>{img.description}</p>
                </div>
              </div>
            ))}
          </div>

        </div>
      )}
    </div>
  );
};

export default Industrial;
