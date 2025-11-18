import { Link, useLocation } from "react-router-dom";
import {
  FaMusic,
  FaHome,
  FaUser,
  FaCompactDisc,
  FaEnvelope,
} from "react-icons/fa";
import { Wrapper } from "../Styles/Navbar";

const Navbar = () => {
  const location = useLocation();

  const navLinks = [
    { to: "/", label: "Home", icon: <FaHome /> },
    { to: "/about", label: "About", icon: <FaUser /> },
    { to: "/music", label: "Music", icon: <FaCompactDisc /> },
    { to: "/contact", label: "Contact", icon: <FaEnvelope /> },
  ];

  return (
    <Wrapper>
      <nav
        className="navbar navbar-expand-lg fixed-top bg-white py-3 shadow-sm"
        style={{ zIndex: 1000 }}
      >
        <div className="container">
          {/* Brand */}
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

          {/* Mobile Toggle */}
          <button
            className="navbar-toggler border-0 shadow-none"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          {/* Nav Links */}
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav ms-auto align-items-center">
              {navLinks.map((link) => (
                <li className="nav-item mx-2" key={link.to}>
                  <Link
                    to={link.to}
                    className={`nav-link d-flex align-items-center px-3 py-2 rounded-3 fw-medium
                    ${
                      location.pathname === link.to
                        ? "active-link"
                        : "nav-normal"
                    }
                  `}
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
    </Wrapper>
  );
};

export default Navbar;
