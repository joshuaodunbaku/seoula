import { FaFacebook, FaInstagram, FaSpotify, FaYoutube } from "react-icons/fa";
import { Wrapper } from "../Styles/Footer";

const Footer = () => {
  return (
    <Wrapper>
      <footer className="footer">
        <div className="container">
          <div className="row">
            <div className="col-md-4 mb-4">
              <h5 className="bricolage-grotesque mb-3">SE'OULA</h5>
              <p className="mulish">
                Vibrant rhythms of jazz, reimagined for the soul.
              </p>
            </div>
            <div className="col-md-4 mb-4">
              <h6 className="mb-3">Links</h6>
              <ul className="list-unstyled">
                <li>
                  <a href="/">Home</a>
                </li>
                <li>
                  <a href="/about">About</a>
                </li>
                <li>
                  <a href="/music">Music</a>
                </li>
                <li>
                  <a href="/contact">Contact</a>
                </li>
              </ul>
            </div>
            <div className="col-md-4 mb-4">
              <h6 className="mb-3">Follow</h6>
              <div className="d-flex gap-3">
                {[FaFacebook, FaInstagram, FaSpotify, FaYoutube].map(
                  (Icon, i) => (
                    <a key={i} href="#" className="fs-4">
                      <Icon />
                    </a>
                  )
                )}
              </div>
            </div>
          </div>
          <hr />
          <div className="text-center">
            <p>&copy; 2025 SE'OULA.</p>
          </div>
        </div>
      </footer>
    </Wrapper>
  );
};

export default Footer;
