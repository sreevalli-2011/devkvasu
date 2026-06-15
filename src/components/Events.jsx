import React, { useState, useRef, useEffect } from "react";
import "./events.css"; // మీ అప్‌డేట్ చేసిన events.css కి ఇది సింక్ అవుతుంది

/* =========================
   IMAGE IMPORTS
========================= */
import im1 from "../assets/images/evnt-im/im_1.jpg";
import im2 from "../assets/images/evnt-im/im_2.jpeg";
import im32 from "../assets/images/evnt-im/im_32.jpg";
import im26 from "../assets/images/evnt-im/im_26.jpeg";
import im4 from "../assets/images/evnt-im/im_4.jpeg";
import im5 from "../assets/images/evnt-im/im_5.jpeg";
import im6 from "../assets/images/evnt-im/im_6.jpeg";
import im7 from "../assets/images/evnt-im/im_7.jpeg";
import im8 from "../assets/images/evnt-im/im_8.jpeg";
import im9 from "../assets/images/evnt-im/im_9.jpeg";
import im10 from "../assets/images/evnt-im/im_10.jpeg";
import im11 from "../assets/images/evnt-im/im_11.jpeg";
import im12 from "../assets/images/evnt-im/im_12.jpeg";
import im13 from "../assets/images/evnt-im/im_13.jpeg";
import im14 from "../assets/images/evnt-im/im_14.jpeg";
import im15 from "../assets/images/evnt-im/im_15.jpeg";
import im16 from "../assets/images/evnt-im/im_16.jpeg";
import im17 from "../assets/images/evnt-im/im_17.jpeg";
import im18 from "../assets/images/evnt-im/im_18.jpeg";
import im20 from "../assets/images/evnt-im/im_20.jpeg";
import im21 from "../assets/images/evnt-im/im_21.jpeg";
import im22 from "../assets/images/evnt-im/im_22.jpeg";

/* =========================
   GALLERY DATA
========================= */
const galleryItems = [
  { src: im1, title: "Couple Portrait", description: "Outdoor Couple Shoot." },
  { src: im2, title: "THALABRALU", description: "Elegant cinematic reception." },

  { src: im32, title: "BLESSINGS BEGIN HERE", description: "Emotional portrait frame." },
  { src: im4, title: "CANDID MOMENTS", description: "Emotional portrait frame." },
  { src: im5, title: "RECEPTION ELEGANCE", description: "Emotional portrait frame." },
  { src: im6, title: "VARMALA CEREMONY", description: "Emotional portrait frame." },
  { src: im7, title: "MEHANIDI CEREMONY", description: "Emotional portrait frame." },
  { src: im8, title: "CHARMING LOOK", description: "Emotional portrait frame." },
  { src: im9, title: "TWO HANDS ONE HEART", description: "Emotional portrait frame." },
  { src: im10, title: "THALABRALU", description: "Emotional portrait frame." },
  { src: im11, title: "MUHURTHAM MAGIC", description: "Emotional portrait frame." },
  { src: im12, title: "BRIDIAL PORTRAIT", description: "Emotional portrait frame." },
  { src: im13, title: "CULTURAL CELEBRATION", description: "Emotional portrait frame." },
  { src: im14, title: "SINDOOR CEREMONY", description: "Emotional portrait frame." },
  { src: im15, title: "SAREE FUNCTION", description: "Emotional portrait frame." },
  { src: im16, title: "ARUNDHATI CEREMONY", description: "Emotional portrait frame." },
  { src: im17, title: "AKSHITHALU CEREMONY", description: "Emotional portrait frame." },
  { src: im18, title: "MEHINDI SMILES", description: "Emotional portrait frame." },
  { src: im20, title: "VARMALA CEREMONY", description: "Emotional portrait frame." },
  { src: im21, title: "VARMALA CEREMONY", description: "Emotional portrait frame." },
  { src: im22, title: "Reception Elegance", description: "Emotional portrait frame." },
];

const Events = ({ overlayOpen }) => {
  const [selectedIndex, setSelectedIndex] = useState(null);
  const trackRef = useRef(null);

  /* =========================
     🎯 OPEN POPUP (సరిచేయబడిన క్లిక్ లాజిక్)
  ========================= */
  const openGallery = (index) => {
    setSelectedIndex(index);

    setTimeout(() => {
      if (trackRef.current) {
        const slides = trackRef.current.children;

        if (slides[index]) {
          // ఇక్కడ block అండ్ inline రెండింటినీ center చేసాం, దీనివల్ల ఇమేజ్ ఖచ్చితంగా స్క్రీన్ మధ్యలోకి వస్తుంది
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
    <div className="events-page-wrapper">
      <div className={`events-content ${overlayOpen ? "hide-content" : ""}`}>
        
        {/* GALLERY SECTION */}
        <section className="events-gallery">
          <div className="container">
            
            <div className="gallery-heading">
              <section className="about-hero">
                <h1 className="about-hero">Events & Weddings</h1>
                <div className="hero-line"></div>
                <p className="about-hero">
                  Industrial photography with modern cinematic storytelling,
                  creative compositions, and immersive visual experience.
                </p>
              </section>
            </div>

           
            <div className="gallery-grid mt-5">
              {galleryItems.map((item, index) => (
                <div
                  className="event-card"
                  key={index}
                  onClick={() => openGallery(index)}
                >
                  {/* 1. ఇమేజ్ ఒరిజినల్ యాస్పెక్ట్ రేషియోతో ఉంటుంది */}
                  <img src={item.src} alt={item.title} />

                  {/* 2. లగ్జరీ రాయల్ గోల్డ్ ఓవర్లే టెక్స్ట్ బాక్స్ */}
                  <div className="industrial-info">
                    <h3 className="industrial-info-title">{item.title}</h3>
                    <p className="industrial-info-text">{item.description}</p>
                  </div>
                </div>
              ))}
            </div>

          </div>
        </section>
      </div>

      {/* ==========================================================================
         📸 FULLSCREEN POPUP 
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
            {galleryItems.map((item, index) => (
              <div className="cinema-slide" key={index}>
                <img src={item.src} alt={item.title} />
                
                <div className="cinema-info">
                  <h2>{item.title}</h2>
                  <p>{item.description}</p>
                </div>
              </div>
            ))}
          </div>

        </div>
      )}
    </div>
  );
};

export default Events;
