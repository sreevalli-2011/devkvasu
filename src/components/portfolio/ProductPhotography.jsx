import React, { useState, useRef, useEffect } from "react";

import "../../components/portfolio/nature.css";
import AboutFooter from "../aboutpage/AboutFooter";

/* =========================
   IMAGE IMPORTS
========================= */

import im1 from "../../assets/images/product/im-1.jpg";
import im3 from "../../assets/images/product/im-3.jpg";
import im17 from "../../assets/images/product/im-4.jpg";
import im2 from "../../assets/images/product/im-2.jpg";
import im4 from "../../assets/images/product/im-4.JPG";
import im5 from "../../assets/images/product/im-5.jpg";
import im6 from "../../assets/images/product/im-6.jpg";
import im7 from "../../assets/images/product/im-7.jpg";
import im8 from "../../assets/images/product/im-8.jpg";
import im9 from "../../assets/images/product/im-9.jpg";
import im10 from "../../assets/images/product/im-10.jpg";
import im11 from "../../assets/images/product/im-11.jpg";
import im12 from "../../assets/images/product/im-12.jpg";
import im13 from "../../assets/images/product/im-13.jpg";


import im14 from "../../assets/images/product/im-14.jpg";

import im15 from "../../assets/images/product/im-15.jpg";
import im16 from "../../assets/images/product/im-16.jpg";
import im18 from "../../assets/images/product/im-18.jpg";



/* =========================
   GALLERY DATA
========================= */

const galleryItems = [

  {
    src: im1,
    title: "Product 1",
    description: "glasses with unique design and vibrant colors."
  },

  {
    src: im2,
    title: "Product 2",
    description: "A close-up of a product with sleek packaging and modern aesthetics."
  },

  {
    src: im3,
    title: "Product 3",
    description: "A beautifully designed product with rich textures and vibrant colors."
  },

  {
    src: im4,
    title: "Product 4",
    description: "A product shot with a focus on detail and craftsmanship."
  },

  {
    src: im5,
    title: "Product 5",
    description: "A bright brunch arrangement showcasing fresh produce and indulgent dishes."
  },

  {
    src: im6,
    title: "Product 6",
    description: "A sleek product shot with a modern aesthetic and clean presentation."
  },

  {
    src: im7,
    title: "Product 7",
    description: "A stylish product shot with a modern aesthetic and clean presentation."
  },

  {
    src: im8,
    title: "Product 8",
    description: "A product shot with a focus on detail and craftsmanship."
  },

  {
    src: im9,
    title: "Product 9",
    description: "A beautifully designed product with rich textures and vibrant colors."
  },

  {
    src: im17,
    title: "Product 10",
    description: "A sleek product shot with a modern aesthetic and clean presentation."
  },

  {
    src: im12,
    title: "Product 11",
    description: "A sleek product shot with a modern aesthetic and clean presentation."
  },

  {
    src: im13,
    title: "Product 12",
    description: "A beautifully designed product with rich textures and vibrant colors."
  },
   {
    src: im14,
    title: "Product 13",
    description: "A sleek product shot with a modern aesthetic and clean presentation."
  },


 
    {
    src: im18,
    title: "Beverage Beauty",
    description: "A refreshing drink shot captured with luminous styling and clean presentation."
  },




];


const ProductPhotography = ({ overlayOpen }) => {

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

          <h1>Product Photography</h1>

          <p>
            Discover the art of food photography through rich colors, styling,
            texture, and composition that make every dish look delicious.
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

export default ProductPhotography;
