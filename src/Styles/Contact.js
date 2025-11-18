import styled from "styled-components";

export const Wrapper = styled.div`
  /* CONTACT HERO */
  .contact-hero {
    background: linear-gradient(rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.4)),
      url("https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?auto=format&fit=crop&w=1100&q=80")
        center/cover no-repeat;
    min-height: 45vh;
    display: flex;
    align-items: center;
    justify-content: center;
    position: relative;
  }

  .contact-hero .overlay {
    position: absolute;
    inset: 0;
    backdrop-filter: blur(3px);
    background: rgba(0, 0, 0, 0.35);
  }

  /* For Social Icons */
  .social-icon {
    color: var(--primary-color);
    transition: 0.3s ease;
  }
  .social-icon:hover {
    transform: scale(1.15);
    color: #4338ca;
  }
`;
