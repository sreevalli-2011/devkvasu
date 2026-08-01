import React, { useState, useRef, useEffect } from "react";

import "../../components/portfolio/nature.css";
import AboutFooter from "../aboutpage/AboutFooter";

/* =========================
   IMAGE IMPORTS
========================= */

import im1 from "../../assets/images/school/im-1.jpg";
import im2 from "../../assets/images/school/im-2.jpg";
import im3 from "../../assets/images/school/im-3.jpg";
import im4 from "../../assets/images/school/im-4.jpg";
import im5 from "../../assets/images/school/im-5.jpg";
import im6 from "../../assets/images/school/im-6.jpg";
import im7 from "../../assets/images/school/im-7.jpg";
import im8 from "../../assets/images/school/im-8.jpg";
import im9 from "../../assets/images/school/im-9.jpg";
import im10 from "../../assets/images/school/im-10.jpg";
import im11 from "../../assets/images/school/im-11.jpg";
import im12 from "../../assets/images/school/im-12.jpg";
import im13 from "../../assets/images/school/im-13.jpg";
import im14 from "../../assets/images/school/im-14.jpg";
import im15 from "../../assets/images/school/im-15.jpg";
import im16 from "../../assets/images/school/im-16.jpg";
import im17 from "../../assets/images/school/im-17.jpg";
import im18 from "../../assets/images/school/im-18.jpg";
import im19 from "../../assets/images/school/im-19.jpg";
import im20 from "../../assets/images/school/im-20.jpg";
import im21 from "../../assets/images/school/im-21.jpg";
import im22 from "../../assets/images/school/im-22.JPG";
import im23 from "../../assets/images/school/im-23.JPG";
import im24 from "../../assets/images/school/im-24.JPG";
import im25 from "../../assets/images/school/im-25.JPG";
import im26 from "../../assets/images/school/im-26.JPG";

/* =========================
   GALLERY DATA
========================= */

const galleryItems = [
  {
    src: im1,
    title: "School Campus",
    description: "A welcoming view of the school campus and its surroundings."
  },
  {
    src: im2,
    title: "Academic Building",
    description: "Modern educational facilities captured with clean architectural composition."
  },
  {
    src: im3,
    title: "Learning Environment",
    description: "Students engaged in a productive classroom learning experience."
  },
  {
    src: im4,
    title: "Classroom Activity",
    description: "Interactive classroom moments that highlight active learning."
  },
  {
    src: im5,
    title: "Library Session",
    description: "Students exploring knowledge in a calm library environment."
  },
  {
    src: im6,
    title: "School Event",
    description: "Memorable moments from a vibrant school celebration."
  },
  {
    src: im7,
    title: "Student Excellence",
    description: "Students demonstrating confidence and academic achievement."
  },
  {
    src: im8,
    title: "Outdoor Learning",
    description: "Educational activities conducted beyond the classroom."
  },
  {
    src: im9,
    title: "Student Portrait",
    description: "Professional portraits capturing confidence and personality."
  },
  {
    src: im10,
    title: "Team Spirit",
    description: "Students working together with enthusiasm and collaboration."
  },
  {
    src: im11,
    title: "Sports Achievement",
    description: "Capturing determination and excellence in school sports."
  },
  {
    src: im12,
    title: "School Life",
    description: "Natural moments reflecting everyday student life."
  },
  {
    src: im13,
    title: "Creative Learning",
    description: "Students participating in hands-on educational activities."
  },
  {
    src: im14,
    title: "Campus Landscape",
    description: "Beautiful outdoor spaces that inspire learning."
  },
  {
    src: im15,
    title: "Athletic Performance",
    description: "Action-packed sports photography showcasing talent."
  },
  {
    src: im16,
    title: "Sports Practice",
    description: "Students building teamwork through athletic activities."
  },
  {
    src: im17,
    title: "Achievement Moment",
    description: "Celebrating dedication and success in academics and sports."
  },
  {
    src: im18,
    title: "School Marathon",
    description: "Students participating enthusiastically in a marathon event."
  },
  {
    src: im19,
    title: "Cultural Performance",
    description: "Traditional performances celebrating creativity and talent."
  },
  {
    src: im20,
    title: "Digital Learning",
    description: "Modern classroom experiences supported by technology."
  },
  {
    src: im21,
    title: "Student Interaction",
    description: "Friends learning and growing together on campus."
  },
  {
    src: im23,
    title: "School Environment",
    description: "A peaceful campus atmosphere that supports education."
  }
];


const SchoolEvents = ({ overlayOpen }) => {

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

          <h1>School Events</h1>

          <p>
            Capture the essence of school life through our curated collection of event photographs.
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

export default schoolevents;
