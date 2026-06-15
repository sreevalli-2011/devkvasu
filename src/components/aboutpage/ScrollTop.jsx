import React, { useEffect, useState } from "react";
import "./scrolltop.css";

const ScrollTop = () => {

  const [showButton, setShowButton] = useState(false);

  useEffect(() => {

    const handleScroll = () => {

      if (window.scrollY > 300) {
        setShowButton(true);
      } else {
        setShowButton(false);
      }

    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };

  }, []);

  const scrollToTop = () => {

    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });

  };

  return (

    <>
      {showButton && (
        <button className="scroll-top" onClick={scrollToTop}>
          <i className='bx bx-up-arrow-alt'></i>
        </button>
      )}
    </>

  );
};

export default ScrollTop;