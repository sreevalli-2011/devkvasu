import React from 'react';
import './movie.css';
import "./aboutpage/abouthero.css";

import MoviePoster from './MoviePosters';

const Movie = ({ overlayOpen }) => {
  return (
    <>
      <div className="container">
        <section className="about-hero">
          <h1 className='about-hero'>Movie Posters</h1>
          <div className="hero-line"></div>
          <p className='about-hero'>
            A curated gallery of cinematic movie poster stills and production art.
          </p>
        </section>
      </div>

      <MoviePoster overlayOpen={overlayOpen} />
    </>
  );
};

export default Movie;