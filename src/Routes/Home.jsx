import React from "react";
import { Link } from "react-router-dom";
import { FaPlay, FaArrowRight, FaMusic, FaHeadphones } from "react-icons/fa";
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
      {/* HERO SECTION */}
      <section
        className="text-white d-flex align-items-center"
        style={{
          minHeight: "100vh",
          background: "linear-gradient(135deg, #1e1b4b, #312e81)",
          position: "relative",
          overflow: "hidden",
        }}
      >
        <div
          style={{
            position: "absolute",
            width: "500px",
            height: "500px",
            background: "rgba(99,102,241,0.35)",
            filter: "blur(120px)",
            borderRadius: "50%",
            top: "-100px",
            right: "-100px",
          }}
        />

        <div className="container py-5 position-relative" style={{ zIndex: 5 }}>
          <div className="row align-items-center justify-content-between">
            <div className="col-lg-6">
              <h1 className="display-2 fw-bold bricolage-grotesque mb-4">
                Feel the
                <br /> Jazz Revolution
              </h1>
              <p className="lead fs-4 mulish mb-4 text-light">
                Where classic jazz meets modern soul. Dive into timeless
                melodies crafted to move your spirit.
              </p>

              <Link to="/music" className="btn custom-btn btn-lg px-4 py-3">
                <FaPlay className="me-2" /> Start Listening
              </Link>
            </div>

            {/* Hero Image */}
            <div className="col-lg-5 text-center mt-4 mt-lg-0">
              <div
                className="p-2 shadow-lg rounded-4"
                style={{
                  background: "rgba(255,255,255,0.1)",
                  backdropFilter: "blur(10px)",
                }}
              >
                <img
                  src={IMAGES.image1}
                  alt="Hero"
                  className="img-fluid rounded-4"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FEATURED TRACKS */}
      <section className="py-5 bg-light">
        <div className="container">
          <div className="text-center mb-5">
            <h2 className="display-5 bricolage-grotesque fw-bold">
              Featured Tracks
            </h2>
            <p className="lead mulish text-muted">Experience the magic</p>
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

      {/* EXPERIENCE SECTION */}
      <section className="py-5 text-white" style={{ background: "#0f172a" }}>
        <div className="container">
          <h2 className="text-center display-6 bricolage-grotesque mb-4">
            The SE'OULA Experience
          </h2>
          <p className="text-center mulish text-light mb-5">
            Crafted for lovers of soul, rhythm, heritage, and sound.
          </p>

          <div className="row g-4">
            <div className="col-md-4">
              <div
                className="p-4 rounded-4 shadow"
                style={{ background: "rgba(255,255,255,0.05)" }}
              >
                <FaMusic size={40} className="mb-3 text-warning" />
                <h4 className="bricolage-grotesque">Timeless Jazz</h4>
                <p className="mulish text-light">
                  A curated selection of authentic jazz rhythms with a modern
                  twist.
                </p>
              </div>
            </div>

            <div className="col-md-4">
              <div
                className="p-4 rounded-4 shadow"
                style={{ background: "rgba(255,255,255,0.05)" }}
              >
                <FaHeadphones size={40} className="mb-3 text-warning" />
                <h4 className="bricolage-grotesque">Immersive Sound</h4>
                <p className="mulish text-light">
                  High–quality audio designed to pull you deeper into the
                  rhythm.
                </p>
              </div>
            </div>

            <div className="col-md-4">
              <div
                className="p-4 rounded-4 shadow"
                style={{ background: "rgba(255,255,255,0.05)" }}
              >
                <FaArrowRight size={40} className="mb-3 text-warning" />
                <h4 className="bricolage-grotesque">A Modern Journey</h4>
                <p className="mulish text-light">
                  Experience jazz in a way that's elegant, bold, and
                  unforgettable.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ABOUT PREVIEW */}
      <section className="py-5 text-white" style={{ background: "#1e1b4b" }}>
        <div className="container">
          <div className="row align-items-center g-4">
            <div className="col-lg-6">
              <img
                src="https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4"
                alt="artist"
                className="img-fluid rounded-4 shadow-lg"
              />
            </div>

            <div className="col-lg-6">
              <h2 className="bricolage-grotesque fw-bold mb-3">
                Meet the Sound
              </h2>
              <p className="mulish mb-4 fs-5 text-light">
                SE'OULA blends timeless heritage with bold artistic evolution.
                Every melody tells a story—every rhythm breathes emotion.
              </p>

              <Link to="/about" className="btn custom-btn">
                Learn More <FaArrowRight className="ms-2" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* NEWSLETTER */}
      <section
        className="py-5 text-center text-white"
        style={{ background: "#312e81" }}
      >
        <div className="container">
          <h3 className="bricolage-grotesque mb-3">
            Stay Connected with SE'OULA
          </h3>
          <p className="mulish mb-4">
            Get new releases, updates, and exclusive content straight to your
            inbox.
          </p>

          <div className="d-flex justify-content-center gap-2 flex-wrap">
            <input
              type="email"
              placeholder="Enter your email"
              className="form-control w-auto"
              style={{
                borderRadius: "40px",
                padding: "10px 20px",
                maxWidth: "300px",
              }}
            />
            <button className="btn custom-btn px-4">Join Now</button>
          </div>
        </div>
      </section>
    </>
  );
};

export default Home;
