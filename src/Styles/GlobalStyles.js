import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  /* Google Fonts */
  @import url('https://fonts.googleapis.com/css2?family=Bricolage+Grotesque:opsz,wght@12..96,200..800&family=Mulish:ital,wght@0,200..1000;1,200..1000&family=Rubik+Doodle+Shadow&family=Rubik+Mono+One&family=Rubik:ital,wght@0,300..900;1,300..900&family=Space+Grotesk:wght@300..700&family=Space+Mono:ital,wght@0,400;0,700;1,400;1,700&family=Work+Sans:ital,wght@0,100..900;1,100..900&display=swap');

  :root {
    --primary-color: #6366f1; 
    --secondary-color: #f59e0b; 
    --tertiary-color: #10b981; 
    --background-light: #fef3c7; 
    --background-dark: #0f172a; 
    --text-color: #1e293b; 
    --navbar-color: #ffffff;
    --cta-color: #ef4444; 
    --footer-bg: #334155; 
    --hover-color: #059669; 
    --bg-gradient: linear-gradient(180deg, #6366f1, #f59e0b);
    --white-color: #ffffff;
    --dark-color: #0f172a;
    --font-weight-bold: 700;
    --p-font-size: 1rem;
    --h5-font-size: 1.25rem;
    --border-radius-large: 50px;
    --jazz-shadow: 0 10px 25px rgba(99, 102, 241, 0.2);
  }

  *, *::before, *::after {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body {
    background-color: var(--background-light) !important;
    font-family: 'Mulish', serif;
    color: var(--text-color);
  }

  /* Typography */
  .word-span { color: var(--primary-color); font-weight: bold; }

  
  h1, h2, h3, h4, h5, h6 {
    font-family: "Bricolage Grotesque", sans-serif !important;
    font-optical-sizing: auto;
    font-style: normal;
  }

  p {
    font-family: "Mulish", serif !important;
    font-size: var(--p-font-size);
    line-height: 1.7;
  }



  /* Buttons - Custom for CTAs */
  .custom-btn {
    background: linear-gradient(45deg, var(--secondary-color), var(--cta-color));
    border-radius: var(--border-radius-large);
    color: var(--white-color);
    font-weight: var(--font-weight-bold);
    padding: 12px 32px;
    border: none;
    font-size: 1rem;
    transition: all 0.3s ease;
    text-transform: uppercase;
    letter-spacing: 1px;
  }

  .custom-btn:hover {
    background: linear-gradient(45deg, var(--primary-color), var(--secondary-color));
    transform: translateY(-2px);
    box-shadow: var(--jazz-shadow);
    color: var(--white-color);
  }

  /* Cards - Jazz Theme */
  .card-jazz {
    background: rgba(255, 255, 255, 0.9);
    border: 1px solid rgba(99, 102, 241, 0.2);
    border-radius: var(--border-radius-large);
    overflow: hidden;
    transition: all 0.3s ease;
    backdrop-filter: blur(10px);
  }

  .card-jazz:hover {
    transform: translateY(-10px);
    box-shadow: var(--jazz-shadow);
    border-color: var(--primary-color);
  }

  /* Hero Section */
  .hero-section {
    min-height: 100vh;
    background: var(--bg-gradient), url() center/cover ;
    position: relative;
    color: var(--white-color);
  }

  .hero-section::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: rgba(0, 0, 0, 0.4);
  }

  .hero-content {
    position: relative;
    z-index: 2;
  }


  /* Core Values / Track Cards */
  .card {
    border-radius: var(--border-radius-large);
    transition: transform 0.3s ease;
    background: rgba(255, 255, 255, 0.95);
  }

  .card:hover {
    transform: translateY(-4px);
    box-shadow: var(--jazz-shadow);
  }

  /* Audio Player */
  .audio-player {
    background: rgba(99, 102, 241, 0.1);
    border-radius: 20px;
    padding: 10px;
    margin-top: 10px;
  }

  .audio-player audio {
    width: 100%;
    outline: none;
  }

  /* Font Classes */
  .space-grotesk { font-family: "Space Grotesk", sans-serif !important; }
  .space-mono-regular { font-family: "Space Mono", monospace !important; }
  .space-mono-bold { font-family: "Space Mono", monospace !important; font-weight: 700; }
  .bricolage-grotesque { font-family: "Bricolage Grotesque", sans-serif !important; }
  .rubik-mono-one-regular { font-family: "Rubik Mono One", monospace !important; }
  .rubik { font-family: "Rubik", sans-serif !important; }
  .rubik-doodle-shadow-regular { font-family: "Rubik Doodle Shadow", system-ui !important; }
  .mulish { font-family: "Mulish", serif !important; }

  /* Responsive Tweaks */
  @media (max-width: 768px) {
    .hero-section {
      min-height: 80vh;
      padding: 20px 0;
    }

    .about-text-info {
      position: static;
      margin: 20px;
    }

    .navbar-brand {
      font-size: 1.5rem !important;
    }
  }
  @keyframes float {
  0%, 100% { transform: translateY(0) rotate(0deg); }
  50% { transform: translateY(-30px) rotate(5deg); }
}

.hover-scale {
  transition: transform 0.3s ease;
}
.hover-scale:hover {
  transform: scale(1.2) !important;
}

.animate__animated {
  animation-duration: 1s;
  animation-fill-mode: both;
}
.animation-delay-300 { animation-delay: 0.3s; }
.animation-delay-600 { animation-delay: 0.6s; }
.animation-delay-900 { animation-delay: 0.9s; }
.animation-delay-1200 { animation-delay: 1.2s; }
`;

export default GlobalStyle;
