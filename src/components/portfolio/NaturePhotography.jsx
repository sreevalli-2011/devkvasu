import React, { useState, useRef, useEffect } from "react";

import "../../components/portfolio/nature.css";
import AboutFooter from "../aboutpage/AboutFooter";

/* =========================
   IMAGE IMPORTS
========================= */
import im1 from "../../assets/images/nature/im-1.JPG"; // Note: Kept .JPG as per your image label, change to lowercase if file errors occur
import im2 from "../../assets/images/nature/im-2.jpg";
import im3 from "../../assets/images/nature/im-3.jpg";
import im4 from "../../assets/images/nature/im-4.jpg";
import im5 from "../../assets/images/nature/im-5.jpg";
import im6 from "../../assets/images/nature/im-6.jpg";
import im7 from "../../assets/images/nature/im-7.jpg";
import im8 from "../../assets/images/nature/im-8.jpg";
import im9 from "../../assets/images/nature/im-9.jpg";
import im10 from "../../assets/images/nature/im-10.jpg";
import im11 from "../../assets/images/nature/im-11.jpg";
import im12 from "../../assets/images/nature/im-12.jpg";
import im13 from "../../assets/images/nature/im-13.jpg";
import im14 from "../../assets/images/nature/im-14.jpg";
import im15 from "../../assets/images/nature/im-15.jpg";
import im16 from "../../assets/images/nature/im-16.jpg";
import im17 from "../../assets/images/nature/im-17.jpg";
import im18 from "../../assets/images/nature/im-18.jpg";

/* =========================
   GALLERY DATA
========================= */

const galleryItems = [
  {
    src: im1,
    title: "Cinematic Still",
    description: "A cinematic still from a nature shoot."
  },
  {
    src: im2,
    title: "Dynamic Motion",
    description: "A dynamic motion frame from a nature shoot."
  },
  {
    src: im3,
    title: "Editorial Portrait",
    description: "A professional editorial portrait in a natural setting."
  },
  {
    src: im4,
    title: "Environmental Storytelling",
    description: "A nature scene that tells a story through its composition."
  },
  {
    src: im5,
    title: "Editorial Beauty",
    description: "A beauty shot captured in a natural environment."
  },
  {
    src: im6,
    title: "Studio Lighting",
    description: "A studio-lit portrait with a natural backdrop."
  },
  {
    src: im7,
    title: "Narrative Still",
    description: "A still image that conveys a narrative within a natural setting."
  },
  {
    src: im8,
    title: "Cinematic Motion",
    description: "Rich cinematic movement frame."
  },
  {
    src: im9,
    title: "Environmental Portrait",
    description: "A portrait captured within a natural environment."
  },
  {
    src: im10,
    title: "Scenic Landscape",
    description: "Vibrant landscape view under expansive skies."
  },
  {
    src: im11,
    title: "Heritage Structure",
    description: "An architectural landmark framed by historical pathways."
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
    title: "Aerial perspective",
    description: "A high-angle view capturing patterns in motion."
  },
  {
    src: im16,
    title: "Seasonal Bloom",
    description: "Close-up macro shot of fresh botanical flora."
  },
  {
    src: im17,
    title: "Commercial Precision",
    description: "Clean commercial production image."
  },
  {
    src: im18,
    title: "Mountain Majesty",
    description: "Breathtaking mountain landscape."
  }
];

<section className="nature-header">
  <div className="container">
    <h1>Nature Photography</h1>

    <p>
      Discover the beauty of nature through breathtaking landscapes,
      wildlife, forests, mountains, and scenic moments captured with
      creativity and passion.
    </p>
  </div>
</section>

const NaturePhotography = ({ overlayOpen }) => {

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
 {/* PAGE HEADER */}

    <section className="nature-header">

      <div className="container">

        <h1>Nature Photography</h1>

        <p>
          Discover the beauty of nature through breathtaking landscapes,
          wildlife, forests, mountains, and scenic moments captured with
          creativity and passion.
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
    {/* 1. ఇమేజ్ కింద ఉంటుంది */}
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

export default NaturePhotography;
