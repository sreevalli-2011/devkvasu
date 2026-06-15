import { useState } from "react";
import { HashRouter as Router, Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import AboutPage from "./components/aboutpage/AboutPage";
import UnitStills from "./components/UnitStills";
import Events from "./components/Events";
import Industrial from "./components/Industrial";
import Contact from "./components/Contact";
import ChatBot from "./components/ChatBot";
import BehindScenes from "./components/BehindScenes";

import "./App.css";

function App() {
  const [overlayOpen, setOverlayOpen] = useState(false);

  return (
    <>
      <Router>
        <Navbar
          overlayOpen={overlayOpen}
          setOverlayOpen={setOverlayOpen}
        />

        <Routes>
          <Route path="/" element={<Hero menuOpen={overlayOpen} />} />

          <Route path="/about" element={<AboutPage overlayOpen={overlayOpen} />} />

          <Route path="/unitstills" element={<UnitStills overlayOpen={overlayOpen} />} />

          <Route path="/events" element={<Events overlayOpen={overlayOpen} />} />

          <Route path="/industrial" element={<Industrial overlayOpen={overlayOpen} />} />

          <Route path="/contact" element={<Contact overlayOpen={overlayOpen} />} />

          <Route path="/behindscenes" element={<BehindScenes overlayOpen={overlayOpen} />} />
        </Routes>
      </Router>

      <ChatBot />
    </>
  );
}

export default App;