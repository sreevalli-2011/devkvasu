




import React, { useState, useRef, useEffect } from "react";

import "../../components/portfolio/nature.css";
import AboutFooter from "../aboutpage/AboutFooter";

/* =========================
   IMAGE IMPORTS
========================= */

import im1 from "../../assets/images/portrait/im-1.jpg";
import im3 from "../../assets/images/portrait/im-3.jpg";

import im2 from "../../assets/images/portrait/im-2.jpg";
import im4 from "../../assets/images/portrait/im-4.jpg";
import im5 from "../../assets/images/portrait/im-5.jpg";
import im6 from "../../assets/images/portrait/im-6.jpg";
import im7 from "../../assets/images/portrait/im-7.jpg";
import im8 from "../../assets/images/portrait/im-8.jpg";
import im9 from "../../assets/images/portrait/im-9.jpg";
import im10 from "../../assets/images/portrait/im-10.jpg";
import im11 from "../../assets/images/portrait/im-11.jpg";
import im12 from "../../assets/images/portrait/im-12.jpg";
import im13 from "../../assets/images/portrait/im-13.jpg";
import im14 from "../../assets/images/portrait/im-14.jpg";

import im15 from "../../assets/images/portrait/im-15.jpg";
import im16 from "../../assets/images/portrait/im-16.jpg";





/* =========================
   GALLERY DATA
========================= */

const galleryItems = [

  {
    src: im1,
    title: "portait 1",
    description: "A beautifully captured portrait with rich colors and expressive details."
  },

  {
    src: im2,
    title: "portait 2",
    description: "A close-up portrait highlighting the subject's features and personality."
  },

  {
    src: im3,
    title: "portait 3",
    description: "An artistic portrait with dramatic lighting and composition."
  },

  {
    src: im4,
    title: "portait 4",
    description: "A candid portrait capturing natural expressions and emotions."
  },

  {
    src: im5,
    title: "portait 5",
    description: "A studio portrait with professional lighting and styling."
  },

  {
    src: im6,
    title: "portait 6",
    description: "A creative portrait with unique angles and visual storytelling."
  },

  {
    src: im7,
    title: "portait 7",
    description: "A vibrant portrait showcasing the subject's character and mood."
  },

  {
    src: im8,
    title: "portait 8",
    description: "A portrait emphasizing textures, colors, and artistic expression."
  },

  {
    src: im9,
    title: "portait 9",
    description: "A portrait with a focus on lighting, shadows, and depth."
  },

 

  {
    src: im12,
    title: "portait 12",
    description: "A portrait capturing the essence of the subject with a timeless feel."
  },

  {
    src: im13,
    title: "portait 13",
    description: "A portrait with a soft and natural aesthetic, highlighting the subject's features."
  },
   {
    src: im14,
    title: "portait 14",
    description: "A portrait with a soft and natural aesthetic, highlighting the subject's features."
  },
    {
    src: im15,
    title: "portait 15",
    description: "A portrait with a soft and natural aesthetic, highlighting the subject's features."
  },
    {
    src: im16,
    title: "portait 16",
    description: "A portrait with a soft and natural aesthetic, highlighting the subject's features."
  },

 
  
  
 

];


const PortraitPhotography = ({ overlayOpen }) => {

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

          <h1>Portrait Photography</h1>

          <p>
            Discover the art of portrait photography through rich colors, styling,
            texture, and composition that make every subject look appealing.
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

export default PortraitPhotography;
