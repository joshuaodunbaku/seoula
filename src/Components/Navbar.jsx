// src/components/Navbar.jsx
import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import {
  FaMusic,
  FaHome,
  FaUser,
  FaCompactDisc,
  FaEnvelope,
} from "react-icons/fa";

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { to: "/", label: "Home", icon: <FaHome /> },
    { to: "/about", label: "About", icon: <FaUser /> },
    { to: "/music", label: "Music", icon: <FaCompactDisc /> },
    { to: "/contact", label: "Contact", icon: <FaEnvelope /> },
  ];

  return (
    <nav
      className={`navbar navbar-expand-lg fixed-top py-3 transition-all duration-300 ${
        !scrolled ? "shadow-lg bg-white/95 backdrop-blur-md" : "bg-white"
      }`}
      style={{ zIndex: 1000 }}
    >
      <div className="container">
        {/* Logo */}
        <Link
          className="navbar-brand d-flex align-items-center fw-bold bricolage-grotesque"
          to="/"
          style={{ fontSize: "2rem" }}
        >
          <FaMusic
            className="me-2"
            style={{ fontSize: "2.2rem", color: "var(--secondary-color)" }}
          />
          <span style={{ color: "var(--primary-color)" }}>SE'OULA</span>
        </Link>

        {/* Mobile toggle */}
        <button
          className="navbar-toggler border-0 shadow-none"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        {/* Links */}
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ms-auto align-items-center">
            {navLinks.map((link) => (
              <li className="nav-item mx-2" key={link.to}>
                <Link
                  className={`nav-link d-flex align-items-center px-3 py-2 rounded-3 fw-medium transition-all ${
                    location.pathname === link.to
                      ? "text-white bg-primary"
                      : "text-dark hover-bg-light"
                  }`}
                  to={link.to}
                >
                  <span className="me-2">{link.icon}</span>
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
