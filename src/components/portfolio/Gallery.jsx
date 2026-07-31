import { Link } from "react-router-dom";
import "./gallery.css";
import AboutFooter from "../aboutpage/AboutFooter";

const Gallery = () => {
  return (
    <section className="behind-scenes">
      <div className="behind-container">
        <h1>Gallery</h1>

        <p>
          Explore our creative collections across different photography styles.
        </p>

        <div className="bts-grid">

          <Link to="/portrait-photography" className="card-link">
            <div className="bts-card">
              <h3>Portrait Photography</h3>
              <p>Creative visuals for brands, advertising and promotions.</p>
            </div>
          </Link>

          <Link to="/product-photography" className="card-link">
            <div className="bts-card">
              <h3>Product Photography</h3>
              <p>Professional product images with attention to every detail.</p>
            </div>
          </Link>

          <Link to="/food-photography" className="card-link">
            <div className="bts-card">
              <h3>Food Photography</h3>
              <p>Capturing delicious dishes with rich colors and styling.</p>
            </div>
          </Link>

          <Link to="/school-events" className="card-link">
            <div className="bts-card">
              <h3>School Events</h3>
              <p>Beautiful memories from school functions and celebrations.</p>
            </div>
          </Link>

          <Link to="/campgin-photography" className="card-link">
            <div className="bts-card">
              <h3>Campaign Photography</h3>
              <p>Exploring unique perspectives and artistic expressions.</p>
            </div>
          </Link>

          <Link to="/naturephotography" className="card-link">
            <div className="bts-card">
              <h3>Nature Photography</h3>
              <p>Showcasing landscapes, wildlife and nature's beauty.</p>
            </div>
          </Link>

        </div>
      </div>
       <AboutFooter />
    </section>
   
  );
};

export default Gallery;