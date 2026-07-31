




import React, { useState, useRef, useEffect } from "react";

import "../../components/portfolio/nature.css";
import AboutFooter from "../aboutpage/AboutFooter";

/* =========================
   IMAGE IMPORTS
========================= */

import im1 from "../../assets/images/campgin/im-1.jpg";
import im3 from "../../assets/images/campgin/im-3.jpg";
import im17 from "../../assets/images/campgin/im-4.jpg";
import im2 from "../../assets/images/campgin/im-2.jpg";
import im4 from "../../assets/images/campgin/im-4.JPG";
import im5 from "../../assets/images/campgin/im-5.jpg";
import im6 from "../../assets/images/campgin/im-6.jpg";
import im7 from "../../assets/images/campgin/im-7.jpg";
import im8 from "../../assets/images/campgin/im-8.jpg";
import im9 from "../../assets/images/campgin/im-9.jpg";
import im10 from "../../assets/images/campgin/im-10.jpg";
import im11 from "../../assets/images/campgin/im-11.jpg";
import im12 from "../../assets/images/campgin/im-12.jpg";
import im13 from "../../assets/images/campgin/im-13.jpg";



import im14 from "../../assets/images/food/im-14.jpg";

import im15 from "../../assets/images/food/im-15.jpg";
import im16 from "../../assets/images/food/im-16.jpg";
import im18 from "../../assets/images/food/im-18.jpg";

import im19 from "../../assets/images/food/im-19.jpg";


/* =========================
   GALLERY DATA
========================= */

const galleryItems = [

  {
    src: im1,
    title: "Gourmet Platter",
    description: "A beautifully plated gourmet dish with rich textures and vibrant colors."
  },

  {
    src: im2,
    title: "Fresh Ingredients",
    description: "A close-up of fresh ingredients arranged for a modern culinary story."
  },

  {
    src: im3,
    title: "Artisan Dessert",
    description: "A delicate dessert styled with elegant details and moody lighting."
  },

  {
    src: im4,
    title: "Rustic Comfort",
    description: "A cozy, rustic food scene featuring warm tones and home-style plating."
  },

  {
    src: im5,
    title: "Brunch Spread",
    description: "A bright brunch arrangement showcasing fresh produce and indulgent dishes."
  },

  {
    src: im6,
    title: "Chef’s Special",
    description: "A chef-curated plate captured with dramatic studio lighting."
  },

  {
    src: im7,
    title: "Culinary Story",
    description: "A narrative food composition that highlights flavor, color, and texture."
  },

  {
    src: im8,
    title: "Seasonal Feast",
    description: "A seasonal selection presented with vivid styling and fresh ingredients."
  },

  {
    src: im9,
    title: "Harvest Bowl",
    description: "A wholesome harvest bowl captured with natural light and rich detail."
  },

  {
    src: im17,
    title: "Elegant Plating",
    description: "A polished culinary plate designed for commercial food branding."
  },

  {
    src: im12,
    title: "Salad Symphony",
    description: "A colorful salad composition with crisp greens and vibrant accents."
  },

  {
    src: im13,
    title: "Sweet Moment",
    description: "A dessert scene styled for luxury food photography."
  },
   {
    src: im14,
    title: "Savory Delight",
    description: "A hearty dish presented with rich textures and warm lighting."
  },

  {
    src: im19,
    title: "Beverage Beauty",
    description: "A refreshing drink shot captured with luminous styling and clean presentation."
  },

    {
    src: im18,
    title: "Beverage Beauty",
    description: "A refreshing drink shot captured with luminous styling and clean presentation."
  },
    {
    src: im19,
    title: "Beverage Beauty",
    description: "A refreshing drink shot captured with luminous styling and clean presentation."
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
