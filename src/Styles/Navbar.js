import styled from "styled-components";

export const Wrapper = styled.div`
  /* Navbar Always White */
  .navbar {
    background: #ffffff !important;
    border-bottom: 1px solid rgba(0, 0, 0, 0.07);
    transition: all 0.3s ease;
  }

  /* Brand Style */
  .navbar-brand {
    font-family: "Bricolage Grotesque", sans-serif;
    font-weight: 700;
    letter-spacing: 1px;
    background: linear-gradient(
      90deg,
      var(--primary-color),
      var(--secondary-color)
    );
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
  }

  /* Links */
  .nav-link {
    color: #111 !important;
    font-weight: 500;
    padding: 8px 16px !important;
    position: relative;
    transition: all 0.3s ease;
  }

  /* Underline hover */
  .nav-link::after {
    content: "";
    position: absolute;
    left: 50%;
    bottom: 4px;
    width: 0;
    height: 2px;
    background: var(--primary-color);
    transform: translateX(-50%);
    transition: width 0.3s ease;
  }

  .nav-link:hover::after {
    width: 60%;
  }

  .nav-link:hover {
    color: var(--primary-color) !important;
    background: rgba(99, 102, 241, 0.1);
    border-radius: 8px;
  }

  /* Active Link */
  .active-link {
    background: var(--primary-color) !important;
    color: white !important;
    border-radius: 8px;
  }

  /* Remove underline when active */
  .active-link::after {
    width: 0 !important;
  }

  /* Mobile */
  .navbar-toggler {
    border: none !important;
  }

  .navbar-toggler-icon {
    filter: brightness(0.2);
  }
`;
