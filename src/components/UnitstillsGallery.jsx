import React, { useState, useRef, useEffect } from "react";
import "./unitgallery.css";
import AboutFooter from "./aboutpage/AboutFooter";


/* =========================
   IMAGE IMPORTS
========================= */

import im18 from "../assets/images/unit-im/im-18.jpg";
import im19 from "../assets/images/unit-im/im-19.jpg";
import im20 from "../assets/images/unit-im/im-20.jpg";
import im4 from "../assets/images/unit-im/im-4.JPG";
import im5 from "../assets/images/unit-im/im-5.jpg";
import im6 from "../assets/images/unit-im/im-6.jpg";
import im7 from "../assets/images/unit-im/im-7.jpg";
import im8 from "../assets/images/unit-im/im-8.jpg";
import im9 from "../assets/images/unit-im/im-9.jpg";
import im21 from "../assets/images/unit-im/im-21.jpg";
import im17 from "../assets/images/unit-im/im-17.jpg";
import im12 from "../assets/images/unit-im/im-12.jpg";
import im13 from "../assets/images/unit-im/im13.jpg";

/* =========================
   GALLERY DATA
========================= */

const galleryItems = [

  {
    src: im18,
    title: "Cinematic Drama",
    description: "A moody cinematic still."
  },

  {
    src: im19,
    title: "Production Motion",
    description: "Dynamic motion production frame."
  },

  {
    src: im20,
    title: "Portrait Dialogue",
    description: "Editorial portrait storytelling."
  },

  {
    src: im4,
    title: "Location Narrative",
    description: "Filmic environmental storytelling."
  },

  {
    src: im5,
    title: "Editorial Close-up",
    description: "Professional editorial beauty frame."
  },

  {
    src: im6,
    title: "Studio Precision",
    description: "Controlled cinematic studio lighting."
  },

  {
    src: im7,
    title: "On-Set Story",
    description: "Narrative still from production."
  },

  {
    src: im8,
    title: "Motion Capture",
    description: "Rich cinematic movement frame."
  },

  {
    src: im9,
    title: "Character Portrait",
    description: "Expressive portrait composition."
  },

  {
    src: im21,
    title: "Location Detail",
    description: "Architectural cinematic frame."
  },

  {
    src: im17,
    title: "Commercial Precision",
    description: "Clean commercial production image."
  },

  {
    src: im12,
    title: "Studio Portrait",
    description: "Soft cinematic portrait mood."
  },

  {
    src: im13,
    title: "Visual Story",
    description: "Luxury photography presentation."
  }

];

const UnitStillsGallery = ({ overlayOpen }) => {

  const [selectedIndex, setSelectedIndex] = useState(null);

  const trackRef = useRef(null);

  /* =========================
     OPEN POPUP
  ========================= */

  const openGallery = (index) => {

    setSelectedIndex(index);

    setTimeout(() => {

      if (trackRef.current) {

        const slides = trackRef.current.children;

        if (slides[index]) {

          slides[index].scrollIntoView({
            behavior: "smooth",
            inline: "center",
          });

        }

      }

    }, 100);

  };

  /* =========================
     CLOSE POPUP
  ========================= */

  const closePopup = () => {

    setSelectedIndex(null);

  };

  /* =========================
     HORIZONTAL SCROLL
  ========================= */

  useEffect(() => {

    const track = trackRef.current;

    if (!track) return;

    const handleWheel = (e) => {

      e.preventDefault();

      track.scrollBy({
        left: e.deltaY * 2,
        behavior: "smooth",
      });

    };

    track.addEventListener(
      "wheel",
      handleWheel,
      { passive: false }
    );

    return () => {

      track.removeEventListener(
        "wheel",
        handleWheel
      );

    };

  }, [selectedIndex]);

  return (

    <div
      className={`unitstills-gallery ${
        overlayOpen ? "hide-content" : ""
      }`}
    >


      {/* GALLERY */}

      <section className="industrial-gallery-section">

        <div className="container">

          <div className="gallery-grid">

   {galleryItems.map((item, index) => (
  <div
    className="event-card"
    key={index}
    onClick={() => openGallery(index)}
  >
    {/* 1. ఇమేజ్ కింద ఉంటుంది */}
    <img
      src={item.src}
      alt={item.title}
    />

  
    <div className="industrial-info">
      <h3 className="industrial-info-title">
        {item.title}
      </h3>
      <p className="industrial-info-text">
        {item.description}
      </p>
    </div>
  </div>
))}


          </div>

        </div>

      </section>

      {/* FULLSCREEN POPUP */}

      {selectedIndex !== null && (

        <div
          className="cinema-popup"
          onClick={closePopup}
        >

          {/* BACK BUTTON */}

          <button
            className="close-gallery"
            onClick={closePopup}
          >
            ← Back
          </button>

          {/* HORIZONTAL TRACK */}

          <div
            className="cinema-track"
            ref={trackRef}
            onClick={(e) => e.stopPropagation()}
          >

            {galleryItems.map((item, index) => (

              <div
                className="cinema-slide"
                key={index}
              >

                <img
                  src={item.src}
                  alt={item.title}
                />

                <div className="cinema-info">

                  <h2>{item.title}</h2>

                  <p>{item.description}</p>

                </div>

              </div>

            ))}

          </div>

        </div>

      )}
          <AboutFooter />

    </div>

  );

};

export default UnitStillsGallery;
