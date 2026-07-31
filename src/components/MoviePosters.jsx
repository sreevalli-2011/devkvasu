import React, { useState, useRef, useEffect } from "react";
import "./unitgallery.css";
import AboutFooter from "./aboutpage/AboutFooter";



/* =========================
   IMAGE IMPORTS
========================= */

import im1 from "../assets/images/movie-pst/lenin.jpg";
import im10 from "../assets/images/movie-pst/thandel.jpg";
import im15 from "../assets/images/movie-pst/bhima.jpeg";
import im3 from "../assets/images/movie-pst/arjunss.jpg";
import im4 from "../assets/images/movie-pst/pakka.jpeg";
import im5 from "../assets/images/movie-pst/paagal.jpg";
import im6 from "../assets/images/movie-pst/radha.jpg";
import im7 from "../assets/images/movie-pst/baby.jpg";
import im8 from "../assets/images/movie-pst/konthajanta.jpg";
import im9 from "../assets/images/movie-pst/arjun.jpg";

import im17 from "../assets/images/movie-pst/manchii.jpg";
import im12 from "../assets/images/movie-pst/raju.jpg";
import im13 from "../assets/images/movie-pst/jakkanna.jpg";
import im14 from "../assets/images/movie-pst/ramabanam.jpeg";
import im2 from "../assets/images/movie-pst/pagal.jpg";
import im16 from "../assets/images/movie-pst/krishana.jpg";
import im11 from "../assets/images/movie-pst/arvind.jpg";



/* =========================
   GALLERY DATA
========================= */

const galleryItems = [

  {
    src: im1,
    title: "Cinematic Drama",
    description: "A moody cinematic still."
  },

  {
    src: im2,
    title: "Production Motion",
    description: "Dynamic motion production frame."
  },

  {
    src: im3,
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
    src: im10,
    title: "Location Detail",
    description: "Architectural cinematic frame."
  },
   {
    src: im11,
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
  },
   {
    src: im14,
    title: "Visual Story",
    description: "Luxury photography presentation."
  },
   {
    src: im15,
    title: "Visual Story",
    description: "Luxury photography presentation."
  },
   {
    src: im16,
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
