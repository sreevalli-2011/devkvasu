import React, { useState, useRef, useEffect } from "react";

import "../../components/portfolio/nature.css";
import AboutFooter from "../aboutpage/AboutFooter";

/* =========================
   IMAGE IMPORTS
========================= */

/* =========================
   IMAGE IMPORTS
========================= */

import im1 from "../../assets/images/food/im-1.jpg";
import im2 from "../../assets/images/food/im-2.JPG";
import im3 from "../../assets/images/food/im-3.JPG";
import im4 from "../../assets/images/food/im-4.JPG";
import im5 from "../../assets/images/food/im-5.JPG";
import im6 from "../../assets/images/food/im-6.JPG";
import im7 from "../../assets/images/food/im-7.JPG";
import im8 from "../../assets/images/food/im-8.JPG";
import im9 from "../../assets/images/food/im-9.JPG";
import im10 from "../../assets/images/food/im-10.JPG";
import im11 from "../../assets/images/food/im-11.JPG";
import im12 from "../../assets/images/food/im-12.JPG";
import im13 from "../../assets/images/food/im-13.JPG";
import im14 from "../../assets/images/food/im-14.JPG";
import im15 from "../../assets/images/food/im-15.JPG";
import im16 from "../../assets/images/food/im-16.JPG";
import im17 from "../../assets/images/food/im-17.JPG";
import im18 from "../../assets/images/food/im-18.JPG";
import im19 from "../../assets/images/food/im-19.JPG";
import im20 from "../../assets/images/food/im-20.jpg";
import im21 from "../../assets/images/food/im-21.jpg";
import im23 from "../../assets/images/food/im-23.jpg";
import im26 from "../../assets/images/food/im-26.jpg";

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
    title: "Chef's Special",
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
    src: im10,
    title: "Signature Dish",
    description: "A professionally styled food presentation."
  },
  {
    src: im11,
    title: "Fine Dining",
    description: "An elegant fine dining setup for commercial food photography."
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
    src: im15,
    title: "Coffee Time",
    description: "A warm beverage captured with lifestyle styling."
  },
  {
    src: im16,
    title: "Fresh Flavors",
    description: "A fresh food arrangement with natural lighting."
  },
  {
    src: im17,
    title: "Elegant Plating",
    description: "A polished culinary plate designed for commercial food branding."
  },
  {
    src: im18,
    title: "Beverage Beauty",
    description: "A refreshing drink shot captured with luminous styling."
  },
  {
    src: im19,
    title: "Creative Cuisine",
    description: "A modern food composition for advertising."
  },
  {
    src: im20,
    title: "Restaurant Special",
    description: "A restaurant signature dish with premium styling."
  },
  {
    src: im21,
    title: "Healthy Choice",
    description: "Fresh and healthy food photography with vibrant colors."
  },
  {
    src: im23,
    title: "Chef's Creation",
    description: "A beautifully plated chef's special dish."
  },
  {
    src: im26,
    title: "Milkshake Delight",
    description: "A refreshing milkshake captured with commercial styling."
  }
];

const FoodPhotography = ({ overlayOpen }) => {

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

          <h1>Food Photography</h1>

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

export default FoodPhotography;
