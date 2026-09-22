import React, { useState, useEffect, useRef } from "react";
import "../css/Navbar.css"
import logo from "../src/assets/Friends family dental clinic.png"
const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const navRef = useRef(null);

  useEffect(() => {
    // 1. Close menu when clicking outside the navbar
    const handleOutsideClick = (event) => {
      if (navRef.current && !navRef.current.contains(event.target)) {
        setMenuOpen(false);
      }
    };

    // 2. Close menu automatically when window is resized to desktop width (> 768px)
    const handleResize = () => {
      if (window.innerWidth > 768) {
        setMenuOpen(false);
      }
    };

    document.addEventListener("mousedown", handleOutsideClick);
    window.addEventListener("resize", handleResize);

    return () => {
      document.removeEventListener("mousedown", handleOutsideClick);
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <nav className="navbar" ref={navRef}>
      <div className="navbar-container">

        {/* Logo Section */}
        <div className="logo">
          <img src={logo} alt="logo" />
         
        </div>

        {/* Book Appointment Button (Middle) */}
        <button className="book-btn">
          📅 Book Appointment
        </button>

        {/* Open / Close Toggle Button (End) */}
        <button
          className="menu-btn"
          onClick={() => setMenuOpen((prev) => !prev)}
          aria-label="Toggle navigation"
        >
          {menuOpen ? "✖" : "☰"}
        </button>

        {/* Mobile Navigation Dropdown */}
        <ul className={`nav-links ${menuOpen ? "active" : ""}`}>
          <li><a href="/" onClick={() => setMenuOpen(false)}>Home</a></li>
          <li><a href="/about" onClick={() => setMenuOpen(false)}>About Us</a></li>
          <li><a href="/services" onClick={() => setMenuOpen(false)}>Services</a></li>
          <li><a href="/patients" onClick={() => setMenuOpen(false)}>Patient Info</a></li>
          <li><a href="/contact" onClick={() => setMenuOpen(false)}>Contact</a></li>
          
          {/* <li className="mobile-contact">
            <div className="contact">
              <span>📞</span>
              <div>
                <p>+91 98765 43210</p>
                <small>Call Us Today</small>
              </div>
            </div>
          </li> */}
        </ul>

      </div>
    </nav>
  );
};

export default Navbar;