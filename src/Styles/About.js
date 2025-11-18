import styled from "styled-components";
// Dummy IMAGES import - replace with real assets
const IMAGES = {
  image1:
    "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80", // Jazz background
};

export const Wrapper = styled.div`
  /* About Section */
  /* Polished About Page Extras */
  .hover-scale {
    transition: transform 0.3s ease;
  }
  .hover-scale:hover {
    transform: scale(1.3) !important;
  }

  /* Fix typo in class if needed */
  .brage-grotesque {
    font-family: "Bricolage Grotesque", sans-serif !important;
  }

  .about-section {
    background-image: url(${IMAGES.image1});
    background-color: var(--background-dark);
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center;
    position: relative;
    z-index: 0;
    padding: 80px 0;
  }

  .about-section::before {
    content: "";
    position: absolute;
    inset: 0;
    background: rgba(15, 23, 42, 0.6); /* Vibrant overlay */
    backdrop-filter: blur(8px);
    -webkit-backdrop-filter: blur(8px);
    z-index: 1;
  }

  .about-section .container {
    position: relative;
    z-index: 2;
  }

  .about-text-wrap {
    position: relative;
  }

  .about-image {
    border-radius: var(--border-radius-large);
    display: block;
    width: 100%;
    box-shadow: var(--jazz-shadow);
  }

  .about-text-icon {
    background: var(--primary-color);
    border-radius: 50%;
    font-size: 1.25rem;
    width: 70px;
    height: 70px;
    line-height: 70px;
    text-align: center;
    color: var(--white-color);
    transition: transform 0.3s ease;
  }

  .about-text-icon:hover {
    transform: scale(1.1);
  }

  .about-text-info {
    backdrop-filter: blur(5px) saturate(180%);
    -webkit-backdrop-filter: blur(5px) saturate(180%);
    background-color: rgba(255, 255, 255, 0.9);
    border-radius: var(--border-radius-large);
    border: 1px solid rgba(99, 102, 241, 0.3);
    position: absolute;
    bottom: 20px;
    right: 20px;
    left: 20px;
    padding: 20px;
    color: var(--text-color);
    max-height: 80%;
    overflow-y: auto;
  }

  .about-text-info h5 {
    font-family: "Bricolage Grotesque", sans-serif;
    font-size: var(--h5-font-size);
    margin-bottom: 0.5rem;
    color: var(--primary-color);
  }

  .about-text-info p {
    font-family: "Mulish", serif;
    font-size: 0.875rem;
  }
`;
