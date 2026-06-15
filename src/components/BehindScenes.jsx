import "./behindscenes.css";

const BehindScenes = () => {
  return (
    <section className="behind-scenes">
      <div className="behind-container">
        <h1>Behind the Scenes</h1>
        <p>
          A glimpse into the preparation, creativity, and moments
          behind every photograph.
        </p>

        <div className="bts-grid">
          <div className="bts-card">
            <h3>Wedding Preparation</h3>
            <p>Lighting setup and candid moments before the ceremony.</p>
          </div>

          <div className="bts-card">
            <h3>Film Unit Stills</h3>
            <p>Capturing moments between takes on set.</p>
          </div>

          <div className="bts-card">
            <h3>Editing Workflow</h3>
            <p>Color grading and final image enhancement process.</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BehindScenes;

