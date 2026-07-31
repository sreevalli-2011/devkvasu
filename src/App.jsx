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
import Movie from "./components/Movie";

// Portfolio Components
import Gallery from "./components/portfolio/Gallery";
import PortraitPhotography from "./components/portfolio/PortraitPhotography";
import SchoolEvents from "./components/portfolio/SchoolEvents";
import CampginPhotography from "./components/portfolio/CampginPhotography";
import ProductPhotography from "./components/portfolio/ProductPhotography";
import NaturePhotography from "./components/portfolio/NaturePhotography";
import FoodPhotography from "./components/portfolio/FoodPhotography";


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

         

          <Route path="/movieposters" element={<Movie overlayOpen={overlayOpen} />} />
          <Route path="/gallery" element={<Gallery overlayOpen={overlayOpen} />} />
          <Route
  path="/portrait-photography"
  element={<PortraitPhotography />}
/>

<Route
  path="/school-events"
  element={<SchoolEvents />}
/>



<Route
  path="/campgin-photography"
  element={<CampginPhotography />}
/>

<Route
  path="/product-photography"
  element={<ProductPhotography />}
/>

<Route
  path="/naturephotography"
  element={<NaturePhotography />}
/>
<Route
  path="/schoolevents"
  element={<SchoolEvents />}
/>

<Route
  path="/food-photography"
  element={<FoodPhotography />}
/>
        </Routes>
      </Router>

      <ChatBot />
    </>
  );
}

export default App;