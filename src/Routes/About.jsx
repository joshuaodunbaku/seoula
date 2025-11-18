// src/pages/AboutPremiumEnhanced.jsx
import React from "react";
import { motion } from "framer-motion";
import {
  FaQuoteLeft,
  FaCalendarAlt,
  FaTrophy,
  FaMusic,
  FaFacebook,
  FaInstagram,
  FaSpotify,
  FaMicrophoneAlt,
  FaHeadphonesAlt,
} from "react-icons/fa";
import IMAGES from "../assets/images";

// Dummy data
const timeline = [
  {
    year: "2015",
    event: "Debut Album 'Midnight Echoes'",
    icon: <FaMusic />,
    color: "primary",
  },
  {
    year: "2018",
    event: "Montreal Jazz Festival Headliner",
    icon: <FaMicrophoneAlt />,
    color: "secondary",
  },
  {
    year: "2020",
    event: "Best Emerging Jazz Artist Award",
    icon: <FaTrophy />,
    color: "success",
  },
  {
    year: "2023",
    event: "Global Tour • 15 Countries",
    icon: <FaHeadphonesAlt />,
    color: "warning",
  },
];

const albums = [
  { title: "Midnight Echoes", cover: IMAGES.track_img1 },
  { title: "Blue Velvet Dreams", cover: IMAGES.track_img1 },
  { title: "Golden Hour Swing", cover: IMAGES.track_img1 },
  { title: "Urban Echoes", cover: IMAGES.track_img1 },
];

const galleryImages = [
  IMAGES.image1,
  IMAGES.track_img1,
  IMAGES.track_img1,
  IMAGES.track_img1,
];

const AboutPremiumEnhanced = () => {
  return (
    <>
      {/* HERO */}
      <section
        className="position-relative text-white overflow-hidden"
        style={{
          minHeight: "90vh",
          background: `url(${IMAGES.image1}) center/cover no-repeat`,
        }}
      >
        <div className="position-absolute top-0 start-0 w-100 h-100 bg-dark opacity-50"></div>
        <div className="container text-center position-relative py-5">
          <motion.h1
            className="display-2 bricolage-grotesque fw-bold mb-3"
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            SE'OULA
          </motion.h1>
          <motion.p
            className="lead mulish mb-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
          >
            Jazz Visionary • Composer • Soul Architect
          </motion.p>
          <motion.div
            className="d-inline-block px-5 py-3 rounded-pill"
            style={{
              background: "rgba(255,255,255,0.15)",
              backdropFilter: "blur(10px)",
            }}
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ delay: 0.5 }}
          >
            <FaQuoteLeft className="me-3" />
            <em>Where tradition meets fearless innovation</em>
          </motion.div>
        </div>
      </section>

      {/* BIOGRAPHY */}
      <section className="py-5 bg-light">
        <div className="container text-center">
          <motion.h2
            className="display-5 bricolage-grotesque mb-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
          >
            The Journey
          </motion.h2>
          <motion.p
            className="lead mulish mb-3"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
          >
            Born under city lights and raised on vinyl crackle, SE'OULA
            discovered jazz at 12 in a hidden underground club.
          </motion.p>
          <motion.p
            className="mulish fs-5 mb-3"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
          >
            Trained in classical piano yet influenced by Miles Davis, Nina
            Simone, and Robert Glasper, SE'OULA developed a signature sound
            blending golden-era harmony with modern soul and electronic
            textures.
          </motion.p>
          <motion.p
            className="mulish fs-5"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6 }}
          >
            Today, SE'OULA is celebrated worldwide for live performances that
            feel like intimate conversations with the universe — raw, electric,
            and unforgettable.
          </motion.p>
        </div>
      </section>

      {/* TIMELINE */}
      <section className="py-5 bg-white">
        <div className="container">
          <h2 className="text-center display-5 bricolage-grotesque mb-5">
            Milestones
          </h2>
          <div className="row g-4 justify-content-center">
            {timeline.map((item, i) => (
              <motion.div
                key={i}
                className="col-md-6 col-lg-3"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.2 }}
              >
                <div
                  className={`card h-100 border-0 shadow-lg rounded-4 overflow-hidden position-relative`}
                  style={{
                    background: "rgba(255,255,255,0.85)",
                    backdropFilter: "blur(15px)",
                  }}
                >
                  <div
                    className={`position-absolute top-0 start-0 w-100 h-3 bg-${item.color}`}
                  ></div>
                  <div className="card-body text-center pt-5">
                    <div
                      className={`d-inline-flex align-items-center justify-content-center rounded-circle mb-4 text-white bg-${item.color}`}
                      style={{
                        width: "90px",
                        height: "90px",
                        fontSize: "2rem",
                      }}
                    >
                      {item.icon}
                    </div>
                    <h4 className="bricolage-grotesque text-dark fw-bold">
                      {item.year}
                    </h4>
                    <p className="mulish mt-3 text-muted">{item.event}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* FEATURED ALBUMS */}
      <section className="py-5 bg-light">
        <div className="container">
          <h2 className="text-center display-5 bricolage-grotesque mb-5">
            Featured Albums
          </h2>
          <div className="row g-4 justify-content-center">
            {albums.map((album, i) => (
              <motion.div
                key={i}
                className="col-sm-6 col-md-3"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.2 * i }}
              >
                <div className="card h-100 shadow-sm rounded-4 overflow-hidden">
                  <img
                    src={album.cover}
                    alt={album.title}
                    className="card-img-top"
                  />
                  <div className="card-body text-center">
                    <h5 className="bricolage-grotesque fw-bold">
                      {album.title}
                    </h5>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* PHOTO GALLERY */}
      <section className="py-5 bg-white">
        <div className="container">
          <h2 className="text-center display-5 bricolage-grotesque mb-5">
            On Tour & Moments
          </h2>
          <div className="row g-3 justify-content-center">
            {galleryImages.map((img, i) => (
              <motion.div
                key={i}
                className="col-6 col-sm-4 col-md-3"
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.3 }}
              >
                <img
                  src={img}
                  alt={`Gallery ${i}`}
                  className="img-fluid rounded-4 shadow-sm"
                />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* FAN TESTIMONIAL */}
      <section
        className="py-5 text-white text-center"
        style={{ background: "#6366f1" }}
      >
        <FaQuoteLeft className="display-1 opacity-20 mb-4" />
        <blockquote className="display-5 bricolage-grotesque fw-light">
          "SE'OULA's music changed my life. Every note feels like a story from
          the soul."
        </blockquote>
        <p className="fs-4 mulish opacity-90 mt-3">— Jazz Enthusiast</p>
      </section>

      {/* NEWSLETTER / CTA */}
      <section className="py-5 bg-light text-center">
        <h3 className="bricolage-grotesque mb-4">Stay in the Loop</h3>
        <p className="mulish mb-4">
          Subscribe to get the latest albums, tours, and exclusive content.
        </p>
        <div className="d-flex justify-content-center gap-2 flex-wrap">
          <input
            type="email"
            placeholder="Your email"
            className="form-control w-auto"
            style={{
              maxWidth: "300px",
              borderRadius: "30px",
              padding: "10px 15px",
            }}
          />
          <button className="btn custom-btn rounded-pill px-4">
            Subscribe
          </button>
        </div>
      </section>

      {/* SOCIAL */}
      <section className="py-5 bg-light text-center">
        <h3 className="bricolage-grotesque mb-4">Connect with SE'OULA</h3>
        <div className="d-flex justify-content-center gap-5 fs-1 mb-3">
          <a href="#" className="text-primary hover-scale">
            <FaFacebook />
          </a>
          <a href="#" className="text-danger hover-scale">
            <FaInstagram />
          </a>
          <a href="#" className="text-success hover-scale">
            <FaSpotify />
          </a>
        </div>
        <p className="mulish text-muted">Join 50K+ souls worldwide</p>
      </section>
    </>
  );
};

export default AboutPremiumEnhanced;
