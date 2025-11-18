// styles/NavbarStyles.js
import styled from "styled-components";

export const Wrapper = styled.div`
  /* Smooth fade-in jazz vibe */
  .navbar {
    background: rgba(255, 255, 255, 0.15);
    backdrop-filter: blur(10px);
    border-bottom: 1px solid rgba(255, 255, 255, 0.2);
    transition: background 0.4s ease, padding 0.3s ease;
  }

  /* When scrolled */
  .navbar.scrolled {
    background: rgba(255, 255, 255, 0.9) !important;
    backdrop-filter: blur(14px);
    padding-top: 0.4rem;
    padding-bottom: 0.4rem;
    box-shadow: 0 4px 18px rgba(0, 0, 0, 0.08);
  }

  /* Brand Style */
  .navbar-brand {
    font-family: "Bricolage Grotesque", sans-serif;
    font-size: 2rem;
    letter-spacing: 1px;
    font-weight: 700;
    background: linear-gradient(
      90deg,
      var(--primary-color),
      var(--secondary-color)
    );
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
  }

  /* NAV LINKS */
  .nav-link {
    color: #222 !important;
    font-weight: 500;
    position: relative;
    padding: 8px 16px !important;
    transition: all 0.3s ease;
  }

  /* Underline Hover (Jazz highlight) */
  .nav-link::after {
    content: "";
    position: absolute;
    bottom: 3px;
    left: 50%;
    width: 0;
    height: 2px;
    background: var(--primary-color);
    transition: all 0.3s ease;
    transform: translateX(-50%);
  }

  .nav-link:hover::after {
    width: 60%;
  }

  /* Hover Color */
  .nav-link:hover {
    color: var(--white-color) !important;
    background: rgba(128, 128, 128, 0.68);
    border-radius: 8px;
  }

  /* Active Link */
  .nav-link.active {
    background: var(--primary-color);
    color: white !important;
    border-radius: 8px;
  }

  /* Mobile Toggle */
  .navbar-toggler {
    border: none !important;
    padding: 6px 10px;
  }

  .navbar-toggler-icon {
    filter: brightness(0.2);
  }
`;
