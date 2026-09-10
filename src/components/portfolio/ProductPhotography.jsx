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
import im16 from "../../assets/images/product/im-16.jpg"; // Fixed to lowercase .jpg
import im17 from "../../assets/images/product/im-17.JPG";
import im18 from "../../assets/images/product/im-18.JPG";
import im19 from "../../assets/images/product/im-19.jpg";
import im20 from "../../assets/images/product/im-20.jpg";
import im21 from "../../assets/images/product/im-21.jpg";
import im22 from "../../assets/images/product/im-22.jpg";
import im23 from "../../assets/images/product/im-23.jpg";
import im24 from "../../assets/images/product/im-24.jpg";
import im25 from "../../assets/images/product/im-25.jpg";
import im26 from "../../assets/images/product/im-26.jpg"; // Fixed to lowercase .jpg
import im27 from "../../assets/images/product/im-27.jpg"; // Fixed to lowercase .jpg
import im28 from "../../assets/images/product/im-28.jpg"; // Fixed to lowercase .jpg
import im29 from "../../assets/images/product/im-29.jpg"; // Fixed to lowercase .jpg
import im30 from "../../assets/images/product/im-30.jpg"; // Fixed to lowercase .jpg
import im31 from "../../assets/images/product/im-31.jpg";
import im32 from "../../assets/images/product/im-32.jpg"; // Fixed to lowercase .jpg
import im33 from "../../assets/images/product/im-33.jpg"; // Fixed to lowercase .jpg
import im34 from "../../assets/images/product/im-34.jpg"; // Fixed to lowercase .jpg
import im35 from "../../assets/images/product/im-35.jpg"; // Fixed to lowercase .jpg
import im36 from "../../assets/images/product/im-36.jpg"; // Fixed to lowercase .jpg
import im37 from "../../assets/images/product/im-37.jpg"; // Fixed to lowercase .jpg
import im38 from "../../assets/images/product/im-38.jpg"; // Fixed to lowercase .jpg
import im39 from "../../assets/images/product/im-39.jpg"; // Fixed to lowercase .jpg
import im40 from "../../assets/images/product/im-40.jpg"; // Fixed to lowercase .jpg
import im41 from "../../assets/images/product/im-41.jpg"; // Fixed to lowercase .jpg
import im42 from "../../assets/images/product/im-42.jpg"; // Fixed to lowercase .jpg
import im43 from "../../assets/images/product/im-43.jpg"; // Fixed to lowercase .jpg
import im44 from "../../assets/images/product/im-44.jpg"; // Fixed to lowercase .jpg

import im46 from "../../assets/images/product/im-46.jpg"; // Fixed to lowercase .jpg
import im47 from "../../assets/images/product/im-47.jpg"; // Fixed to lowercase .jpg
import im48 from "../../assets/images/product/im-48.jpg"; // Fixed to lowercase .jpg
import im49 from "../../assets/images/product/im-49.jpg"; 


/* =========================
   GALLERY DATA
========================= */

const galleryItems = [

  {
    src: im1,
    title: "YO gift shop",
    description: "Premium glassware photographed with elegant studio lighting and refined composition."
  },

  {
    src: im2,
    title: "YO gift shop",
    description: "Stylish leather accessories captured with clean product styling and sharp detail."
  },

  {
    src: im3,
    title: "YO gift shop",
    description: "Modern footwear photographed to highlight craftsmanship and premium quality."
  },

  {
    src: im4,
    title: "YO gift shop",
    description: "Creative product packaging presented with sophisticated commercial styling."
  },

  {
    src: im5,
    title: "YO gift shop",
    description: "Minimalist product photography emphasizing design, texture, and functionality."
  },

  {
    src: im6,
    title: "YO gift shop",
    description: "Professional stationery arranged with elegant styling for commercial branding."
  },

  {
    src: im7,
    title: "YO gift shop",
    description: "Premium accessories photographed with dramatic lighting and crisp details."
  },

  {
    src: im8,
    title: "YO gift shop",
    description: "Creative product composition designed for advertising and digital campaigns."
  },

  {
    src: im9,
    title: "YO gift shop",
    description: "Commercial product photography with rich reflections and luxury presentation."
  },

  {
    src: im17,
    title: "YO gift shop",
    description: "Elegant glass collection photographed with precision lighting and modern styling."
  },

  {
    src: im12,
    title: "YO gift shop",
    description: "Beautiful decorative product showcased with premium commercial photography."
  },

  {
    src: im13,
    title: "YO gift shop",
    description: "Clean product presentation highlighting premium packaging and branding."
  },

  {
    src: im14,
    title: "YO gift shop",
    description: "Professional studio shot emphasizing clarity, texture, and elegant design."
  },

  {
    src: im18,
    title: "YO gift shop",
    description: "Luxury jewelry photographed with fine detail, rich textures, and premium lighting."
  },

  {
    src: im10,
    title: "YO gift shop",
    description: "Professional product photography with clean composition and detailed presentation."
  },

  {
    src: im11,
    title: "YO gift shop",
    description: "Professional product photography with clean composition and detailed presentation."
  },

  {
    src: im15,
    title: "YO gift shop",
    description: "Professional product photography with clean composition and detailed presentation."
  },

  {
    src: im16,
    title: "YO gift shop",
    description: "Professional product photography with clean composition and detailed presentation."
  },

  {
    src: im19,
    title: "YO gift shop",
    description: "Professional product photography with clean composition and detailed presentation."
  },

  {
    src: im20,
    title: "YO gift shop",
    description: "Professional product photography with clean composition and detailed presentation."
  },

  {
    src: im21,
    title: "YO gift shop",
    description: "Professional product photography with clean composition and detailed presentation."
  },

  {
    src: im22,
    title: "YO gift shop",
    description: "Professional product photography with clean composition and detailed presentation."
  },

  {
    src: im23,
    title: "YO gift shop",
    description: "Professional product photography with clean composition and detailed presentation."
  },

  {
    src: im24,
    title: "YO gift shop",
    description: "Professional product photography with clean composition and detailed presentation."
  },

  {
    src: im25,
    title: "YO gift shop",
    description: "Professional product photography with clean composition and detailed presentation."
  },

  {
    src: im26,
    title: "YO gift shop",
    description: "Professional product photography with clean composition and detailed presentation."
  },

  {
    src: im27,
    title: "YO gift shop",
    description: "Professional product photography with clean composition and detailed presentation."
  },

  {
    src: im28,
    title: "YO gift shop",
    description: "Professional product photography with clean composition and detailed presentation."
  },

  {
    src: im29,
    title: "YO gift shop",
    description: "Professional product photography with clean composition and detailed presentation."
  },

  {
    src: im30,
    title: "YO gift shop",
    description: "Professional product photography with clean composition and detailed presentation."
  },

  {
    src: im31,
    title: "YO gift shop",
    description: "Professional product photography with clean composition and detailed presentation."
  },

  {
    src: im32,
    title: "YO gift shop",
    description: "Professional product photography with clean composition and detailed presentation."
  },

  {
    src: im33,
    title: "YO gift shop",
    description: "Professional product photography with clean composition and detailed presentation."
  },

  {
    src: im34,
    title: "YO gift shop",
    description: "Professional product photography with clean composition and detailed presentation."
  },

  {
    src: im35,
    title: "YO gift shop",
    description: "Professional product photography with clean composition and detailed presentation."
  },

  {
    src: im36,
    title: "YO gift shop",
    description: "Professional product photography with clean composition and detailed presentation."
  },

  {
    src: im37,
    title: "YO gift shop",
    description: "Professional product photography with clean composition and detailed presentation."
  },

  {
    src: im38,
    title: "YO gift shop",
    description: "Professional product photography with clean composition and detailed presentation."
  },

  {
    src: im39,
    title: "YO gift shop",
    description: "Professional product photography with clean composition and detailed presentation."
  },

  {
    src: im40,
    title: "YO gift shop",
    description: "Professional product photography with clean composition and detailed presentation."
  },

  {
    src: im41,
    title: "YO gift shop",
    description: "Professional product photography with clean composition and detailed presentation."
  },

  {
    src: im42,
    title: "YO gift shop",
    description: "Professional product photography with clean composition and detailed presentation."
  },

  {
    src: im43,
    title: "YO gift shop",
    description: "Professional product photography with clean composition and detailed presentation."
  },

  {
    src: im44,
    title: "YO gift shop",
    description: "Professional product photography with clean composition and detailed presentation."
  },

 

  {
    src: im46,
    title: "YO gift shop",
    description: "Professional product photography with clean composition and detailed presentation."
  },

  {
    src: im47,
    title: "YO gift shop",
    description: "Professional product photography with clean composition and detailed presentation."
  },

  {
    src: im48,
    title: "YO gift shop",
    description: "Professional product photography with clean composition and detailed presentation."
  },

  {
    src: im49,
    title: "YO gift shop",
    description: "Professional product photography with clean composition and detailed presentation."
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