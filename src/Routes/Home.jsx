// src/pages/Home.jsx
import React from "react";
import { Link } from "react-router-dom";
import { FaPlay, FaArrowRight } from "react-icons/fa";
import TrackCard from "../components/TrackCard";
import IMAGES from "../assets/images";

import Track1 from "../assets/Tracks/01 Track 1.mp3";
import Track2 from "../assets/Tracks/02 Track 2.mp3";
import Track3 from "../assets/Tracks/03 Track 3.mp3";

const featuredTracks = [
  {
    id: 1,
    title: "Midnight Serenade",
    duration: "4:32",
    cover: IMAGES.track_img2,
    audio: Track1,
    mood: "soulful",
  },
  {
    id: 2,
    title: "Blue Velvet Dreams",
    duration: "5:18",
    cover: IMAGES.track_img2,
    audio: Track2,
    mood: "romantic",
  },
  {
    id: 3,
    title: "Golden Hour Swing",
    duration: "3:55",
    cover: IMAGES.track_img2,
    audio: Track3,
    mood: "uplifting",
  },
];

const Home = () => {
  return (
    <>
      {/* Hero Section */}
      <section
        className="hero-section d-flex align-items-center text-center text-white"
        style={{
          minHeight: "100vh",
          background: "linear-gradient(135deg, #6366f1, #f59e0b)",
          position: "relative",
        }}
      >
        <div
          className="container hero-content position-relative"
          style={{ zIndex: 2 }}
        >
          <div className="row justify-content-center align-items-center g-4">
            <div className="col-lg-6 text-lg-start fade-in">
              <h1 className="display-2 bricolage-grotesque fw-bold mb-4">
                SE'OULA
              </h1>
              <p className="lead fs-2 mulish mb-5">
                Ignite your soul with vibrant jazz rhythms that dance through
                the night.
              </p>
              <Link to="/music" className="btn custom-btn btn-lg">
                <FaPlay className="me-2" /> Dive into the Sound
              </Link>
            </div>
            <div className="col-lg-5 text-center">
              <div className="rounded-4 overflow-hidden shadow-lg">
                <img
                  src={IMAGES.image1}
                  alt="SE'OULA"
                  className="img-fluid"
                  style={{ borderRadius: "30px" }}
                />
              </div>
            </div>
          </div>
        </div>

        {/* Overlay Shapes */}
        <div
          style={{
            position: "absolute",
            inset: 0,
            background:
              "radial-gradient(circle at top left, rgba(255,255,255,0.1), transparent), radial-gradient(circle at bottom right, rgba(255,255,255,0.15), transparent)",
            zIndex: 1,
          }}
        />
      </section>

      {/* Featured Tracks */}
      <section className="py-5 bg-light">
        <div className="container">
          <div className="text-center mb-5">
            <h2 className="display-5 bricolage-grotesque">Featured Vibes</h2>
            <p className="lead mulish">Sample the energy</p>
          </div>
          <div className="row g-4">
            {featuredTracks.map((track) => (
              <div key={track.id} className="col-lg-4 col-md-6">
                <TrackCard track={track} />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* About Preview */}
      <section
        className="py-5 about-section text-white"
        style={{ position: "relative" }}
      >
        <div className="container">
          <div className="row align-items-center g-4">
            <div className="col-lg-6 mb-4">
              <div className="rounded-4 overflow-hidden shadow-lg">
                <img
                  src="https://images.unsplash.com/photo-1426604835664-9d3b2df42b2b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
                  alt="SE'OULA"
                  className="img-fluid about-image"
                  style={{ borderRadius: "30px" }}
                />
              </div>
            </div>
            <div className="col-lg-6">
              <h2 className="bricolage-grotesque mb-4">The Jazz Odyssey</h2>
              <p className="lead mulish mb-4">
                SE'OULA channels the electric pulse of jazz into modern
                masterpieces, blending tradition with bold innovation.
              </p>
              <p className="mulish mb-4">
                From smoky clubs to global stages, discover a sound that's
                alive, vibrant, and utterly immersive.
              </p>
              <Link to="/about" className="btn custom-btn mt-3">
                Explore More <FaArrowRight className="ms-2" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action / Newsletter */}
      <section
        className="py-5 text-center"
        style={{ background: "var(--primary-color)" }}
      >
        <div className="container text-white">
          <h3 className="bricolage-grotesque mb-3">Stay in the Groove</h3>
          <p className="mulish mb-4">
            Subscribe to SE'OULA updates, new tracks, and live events.
          </p>
          <div className="d-flex justify-content-center gap-2 flex-wrap">
            <input
              type="email"
              className="form-control w-auto"
              placeholder="Your email"
              style={{ borderRadius: "50px", maxWidth: "300px" }}
            />
            <button className="btn custom-btn px-4">Subscribe</button>
          </div>
        </div>
      </section>
    </>
  );
};

export default Home;
