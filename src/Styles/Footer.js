import styled from "styled-components";

export const Wrapper = styled.div`
  /* Footer */
  .footer {
    background: var(--footer-bg);
    color: var(--white-color);
    padding: 40px 0 20px;
  }

  .footer a {
    color: var(--white-color);
    text-decoration: none;
    transition: color 0.3s ease;
  }

  .footer a:hover {
    color: var(--secondary-color);
  }
`;
