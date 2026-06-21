import { useState, useEffect } from "react";
import logo from "../assets/images/logo.png";
import { Link } from "react-router-dom";

import "./navbar.css";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navItems = [
    { name: "About", to: "/about" },
    { name: "Unitstills", to: "/unitstills" },
    { name: "Events", to: "/events" },
    { name: "Industrial", to: "/industrial" },
    { name: "BehindScenes", to: "/behindscenes" },
    { name: "Contact", to: "/contact" },
  ];

  return (
    <>
     <nav className={`navbar ${scrolled ? "scrolled" : ""}`}>
        <div className="nav-container">

          {/* LEFT SIDE */}
          <div className="nav-left">
<Link to="/" className="logo">
  <img src={logo} alt="logo" />
  <span className="brand-name">DEVKVASU PHOTOGRAPHY</span>
</Link>
<ul className="menu">
  {navItems.map((item) => (
    <li key={item.name}>
  
<NavLink
  to={item.to}
  className={({ isActive }) =>
    isActive ? "active-link" : ""
  }
  onClick={() => setMobileMenuOpen(false)}
>
        {item.name}


        
      </NavLink>
    </li>

    
  ))}
</ul>
{/* NEW SECTION */}


          </div>

         
          {/* MOBILE HAMBURGER (unchanged) */}
          <div
            className={`hamburger ${mobileMenuOpen ? "active" : ""}`}
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            <span></span>
            <span></span>
            <span></span>
          </div>

        </div>
      </nav>

      {/* MOBILE MENU (unchanged) */}
      <div className={`mobile-menu ${mobileMenuOpen ? "active" : ""}`}>
        <div className="mobile-menu-header">
          <button
            className="mobile-close-btn"
            onClick={() => setMobileMenuOpen(false)}
          >
            ✕
          </button>
        </div>

        <ul>
          {navItems.map((item) => (
            <li key={item.name}>
              <NavLink to={item.to} onClick={() => setMobileMenuOpen(false)}>
                {item.name}
              </NavLink>
            </li>
          ))}
        </ul>
      </div>
      
    </>
  );
};

export default Navbar;