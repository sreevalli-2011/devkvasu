import React, { useState, useRef, useEffect } from "react";

import "../../components/portfolio/nature.css";
import AboutFooter from "../aboutpage/AboutFooter";

/* =========================
   IMAGE IMPORTS
========================= */


/* =========================
   IMAGE IMPORTS
========================= */

import im1 from "../../assets/images/product/im-1.JPG";
import im2 from "../../assets/images/product/im-2.JPG";
import im3 from "../../assets/images/product/im-3.JPG";
import im4 from "../../assets/images/product/im-4.JPG";
import im5 from "../../assets/images/product/im-5.JPG";
import im6 from "../../assets/images/product/im-6.JPG";
import im7 from "../../assets/images/product/im-7.JPG";
import im8 from "../../assets/images/product/im-8.JPG";
import im9 from "../../assets/images/product/im-9.JPG";
import im10 from "../../assets/images/product/im-10.JPG";
import im11 from "../../assets/images/product/im-11.JPG";
import im12 from "../../assets/images/product/im-12.JPG";
import im13 from "../../assets/images/product/im-13.JPG";
import im14 from "../../assets/images/product/im-14.JPG";
import im15 from "../../assets/images/product/im-15.JPG";
import im16 from "../../assets/images/product/im-16.JPG";
import im17 from "../../assets/images/product/im-17.JPG";
import im18 from "../../assets/images/product/im-18.JPG";


/* =========================
   GALLERY DATA
========================= */

const galleryItems = [

  {
    src: im1,
    title: "Luxury Glassware",
    description: "Premium glassware photographed with elegant studio lighting and refined composition."
  },

  {
    src: im2,
    title: "Leather Accessories",
    description: "Stylish leather accessories captured with clean product styling and sharp detail."
  },

  {
    src: im3,
    title: "Designer Footwear",
    description: "Modern footwear photographed to highlight craftsmanship and premium quality."
  },

  {
    src: im4,
    title: "Gift Packaging",
    description: "Creative product packaging presented with sophisticated commercial styling."
  },

  {
    src: im5,
    title: "Premium Gadget",
    description: "Minimalist product photography emphasizing design, texture, and functionality."
  },

  {
    src: im6,
    title: "Luxury Stationery",
    description: "Professional stationery arranged with elegant styling for commercial branding."
  },

  {
    src: im7,
    title: "Fashion Accessories",
    description: "Premium accessories photographed with dramatic lighting and crisp details."
  },

  {
    src: im8,
    title: "Lifestyle Product",
    description: "Creative product composition designed for advertising and digital campaigns."
  },

  {
    src: im9,
    title: "Premium Drinkware",
    description: "Commercial product photography with rich reflections and luxury presentation."
  },

  {
    src: im17,
    title: "Glass Collection",
    description: "Elegant glass collection photographed with precision lighting and modern styling."
  },

  {
    src: im12,
    title: "Decor Collection",
    description: "Beautiful decorative product showcased with premium commercial photography."
  },

  {
    src: im13,
    title: "Luxury Packaging",
    description: "Clean product presentation highlighting premium packaging and branding."
  },

  {
    src: im14,
    title: "Crystal Glass",
    description: "Professional studio shot emphasizing clarity, texture, and elegant design."
  },

  {
    src: im18,
    title: "Jewelry Collection",
    description: "Luxury jewelry photographed with fine detail, rich textures, and premium lighting."
  }

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
