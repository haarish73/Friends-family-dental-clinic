import React, { useState, useEffect, useRef } from "react";
import "../css/Navbar.css";
import { Link } from "react-router-dom";
import logo from "../src/assets/Friends family dental clinic.png"; // ✅ FIXED PATH
import Form from "../Pages/Form";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [showForm, setShowForm] = useState(false);
  const navRef = useRef(null);

  useEffect(() => {
    // Close menu when clicking outside
    const handleOutsideClick = (event) => {
      if (navRef.current && !navRef.current.contains(event.target)) {
        setMenuOpen(false);
      }
    };

    // Close menu on resize
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
    <>
      <nav className="navbar" ref={navRef}>
        <div className="navbar-container">

          {/* Logo */}
          <div className="logo">
            <img src={logo} alt="logo" />
          </div>

          {/* Book Button */}
          <button
            onClick={() => {
              setShowForm(true);
              setMenuOpen(false); // ✅ close mobile menu
            }}
            className="book-btn"
          >
            📅 Book Appointment
          </button>

          {/* Toggle Button */}
          <button
            className="menu-btn"
            onClick={() => setMenuOpen((prev) => !prev)}
          >
            {menuOpen ? "✖" : "☰"}
          </button>

          {/* Nav Links */}
          <ul className={`nav-links ${menuOpen ? "active" : ""}`}>
            <li>
              <Link to="/" onClick={() => setMenuOpen(false)}>
                Home
              </Link>
            </li>

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
          </ul>

        </div>
      </nav>

      {/* ✅ POPUP OUTSIDE NAV */}
      {showForm && <Form onClose={() => setShowForm(false)} />}
    </>
  );
};

export default Navbar;