




import React, { useState, useRef, useEffect } from "react";

import "../../components/portfolio/nature.css";
import AboutFooter from "../aboutpage/AboutFooter";

/* =========================
   IMAGE IMPORTS
========================= */


import im1 from "../../assets/images/campgin/im-1.jpg";
import im2 from "../../assets/images/campgin/im-2.jpg";
import im3 from "../../assets/images/campgin/im-3.JPG";
import im4 from "../../assets/images/campgin/im-4.jpg";
import im5 from "../../assets/images/campgin/im-5.JPG";
import im6 from "../../assets/images/campgin/im-6.jpg";
import im7 from "../../assets/images/campgin/im-7.jpg";
import im8 from "../../assets/images/campgin/im-8.JPG";
import im9 from "../../assets/images/campgin/im-9.jpg";
import im10 from "../../assets/images/campgin/im-10.jpg";
import im11 from "../../assets/images/campgin/im-11.jpg";
import im12 from "../../assets/images/campgin/im-12.jpg";
import im13 from "../../assets/images/campgin/im-13.jpg";
import im17 from "../../assets/images/campgin/im-17.jpg";




/* =========================
   GALLERY DATA
========================= */

const galleryItems = [

  {
    src: im1,
    title: "Campaign Launch",
    description: "A striking visual created to introduce a brand's latest campaign."
  },

  {
    src: im2,
    title: "Product Branding",
    description: "A professionally styled product photograph designed for brand promotion."
  },

  {
    src: im3,
    title: "Lifestyle Portrait",
    description: "A lifestyle image crafted to connect audiences with the brand story."
  },

  {
    src: im4,
    title: "Creative Campaign",
    description: "A commercial campaign image with bold composition and visual impact."
  },

  {
    src: im5,
    title: "Product Showcase",
    description: "A clean product presentation designed for advertising and marketing."
  },

  {
    src: im6,
    title: "Brand Identity",
    description: "A campaign photograph highlighting the brand's unique identity."
  },

  {
    src: im7,
    title: "Commercial Portrait",
    description: "A portrait captured for advertising, promotional, and marketing campaigns."
  },

  {
    src: im8,
    title: "Creative Advertising",
    description: "An eye-catching image developed for digital and print advertising."
  },

  {
    src: im9,
    title: "Lifestyle Branding",
    description: "A lifestyle campaign that creates an authentic brand connection."
  },

  {
    src: im17,
    title: "Signature Campaign",
    description: "A premium campaign image designed for impactful brand storytelling."
  },

  {
    src: im12,
    title: "Visual Story",
    description: "A compelling campaign photograph that communicates the brand message."
  },

  {
    src: im13,
    title: "Brand Promotion",
    description: "A high-quality promotional image created for commercial marketing."
  }

];


const CampginPhotography = ({ overlayOpen }) => {

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
      className={`unitstills-gallery ${overlayOpen ? "hide-content" : ""
        }`}
    >
      {/* PAGE HEADER */}

      <section className="nature-header">

        <div className="container">

          <h1>Campaign Photography</h1>

          <p>
            Discover the art of campaign photography through rich colors, styling,
            texture, and composition that make every product look appealing.
          </p>

        </div>

      </section>

      {/* GALLERY */}

      <section className="industrial-gallery-section">

        <div className="container">

          <div className="nature-grid">

            {galleryItems.map((item, index) => (
              <div
                className="nature-card"
                key={index}
                onClick={() => openGallery(index)}
              >

                <img
                  src={item.src}
                  alt={item.title}
                />


                <div className="nature-overlay">
                  <h3 className="nature-title">
                    {item.title}
                  </h3>
                  <p className="nature-text">
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

export default CampginPhotography;
