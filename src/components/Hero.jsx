import heroImg from "../assets/images/main.jpg";
import "./hero.css";

const Hero = ({ menuOpen }) => {
  return (
    <section
      className={`hero ${menuOpen ? "hide" : ""}`}
      style={{ backgroundImage: `url(${heroImg})` }}
    >
      <div className="overlay"></div>

      <div className="hero-content">
        <h1>devkvasu</h1>
        <h2>Unit Stills Photographer</h2>

        <p className="desc">
          "Aimee has been put to the test with crowded action scenes,
          low light environments, and tight spaces..."
        </p>

        <div className="hero-buttons">
          <button>Unit Stills</button>
          <button>Actor Headshots</button>
          <button>Advertising</button>
        </div>
      </div>
    </section>
  );
};

export default Hero;