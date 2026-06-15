import React from 'react';
import './unitstills.css';
import "./aboutpage/abouthero.css";

import UnitStillsGallery from './UnitstillsGallery';

const UnitStills = () => {
  return (
    <>
    <div className="container"> 
      <section className="about-hero">

      <h1 className='about-hero'>Unitstills Photographer</h1>

      <div className="hero-line"></div>

      <p className='about-hero'>
        "Through every project, dev brings patience, creativity,
  and a sharp eye for detail behind the camera. 

      </p>

      

    </section>
    </div>

    <UnitStillsGallery />
  </>
  );
};

export default UnitStills;