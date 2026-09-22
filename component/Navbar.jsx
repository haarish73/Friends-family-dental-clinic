import React, { useState, useEffect, useRef } from "react";
import "../css/Navbar.css";
import { Link } from "react-router-dom";
import logo from "../src/assets/Friends family dental clinic.png";
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
        <button onClick={() => window.location.href="tel:+919455600938"} className="book-btn">📅 Book Appointment</button>

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
          <li>
            <Link to="/" onClick={() => setMenuOpen(false)}>
              Home
            </Link>
          </li>
          {/* <li>
            <Link to="/about" onClick={() => setMenuOpen(false)}>
              About Us
            </Link>
          </li> */}
          <li>
            <Link to="/services" onClick={() => setMenuOpen(false)}>
              Services
            </Link>
          </li>
          <li>
            <Link to="/patients" onClick={() => setMenuOpen(false)}>
              Patient Info
            </Link>
          </li>
          <li>
            <Link to="/contact" onClick={() => setMenuOpen(false)}>
              Contact
            </Link>
          </li>

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
