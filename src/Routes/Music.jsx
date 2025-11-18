// src/pages/Music.jsx
import React, { useState } from "react";
import { FaSearch, FaFilter } from "react-icons/fa";
import TrackCard from "../components/TrackCard";
import IMAGES from "../assets/images";
import HeroComp from "../Components/HeroComp";
import { motion } from "framer-motion";

import Track1 from "../assets/Tracks/01 Track 1.mp3";
import Track2 from "../assets/Tracks/02 Track 2.mp3";
import Track3 from "../assets/Tracks/03 Track 3.mp3";
import Track4 from "../assets/Tracks/04 Track 4.mp3";
import Track5 from "../assets/Tracks/05 Track 5.mp3";

const allTracks = [
  {
    id: 1,
    title: "Midnight Serenade",
    duration: "4:32",
    cover: IMAGES.track_img1,
    audio: Track3,
    mood: "soulful",
  },
  {
    id: 2,
    title: "Blue Velvet Dreams",
    duration: "5:18",
    cover: IMAGES.track_img1,
    audio: Track3,
    mood: "romantic",
  },
  {
    id: 3,
    title: "Golden Hour Swing",
    duration: "3:55",
    cover: IMAGES.track_img1,
    audio: Track3,
    mood: "uplifting",
  },
  {
    id: 4,
    title: "Urban Echoes",
    duration: "6:12",
    cover: IMAGES.track_img1,
    audio: Track3,
    mood: "energetic",
  },
  {
    id: 5,
    title: "Whispers of Dawn",
    duration: "4:45",
    cover: IMAGES.track_img1,
    audio: Track3,
    mood: "soulful",
  },
  {
    id: 6,
    title: "Crimson Notes",
    duration: "5:30",
    cover: IMAGES.track_img1,
    audio: Track3,
    mood: "romantic",
  },
  {
    id: 7,
    title: "Neon Riffs",
    duration: "4:10",
    cover: IMAGES.track_img1,
    audio: Track3,
    mood: "energetic",
  },
  {
    id: 8,
    title: "Emerald Blues",
    duration: "5:05",
    cover: IMAGES.track_img1,
    audio: Track3,
    mood: "uplifting",
  },
];

const Music = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedMood, setSelectedMood] = useState("all");

  const moods = ["all", "soulful", "romantic", "uplifting", "energetic"];

  const filteredTracks = allTracks.filter((track) => {
    const matchesSearch = track.title
      .toLowerCase()
      .includes(searchTerm.toLowerCase());
    const matchesMood = selectedMood === "all" || track.mood === selectedMood;
    return matchesSearch && matchesMood;
  });

  return (
    <>
      {/* Hero Section */}
      <HeroComp $heroImage={IMAGES.image1}>
        <div className="container text-center">
          <h1 className="display-3 bricolage-grotesque mb-3">The Collection</h1>
          <p className="lead mulish">Vibrant tracks to fuel your playlist</p>
        </div>
      </HeroComp>

      {/* Filters */}
      <div
        className="sticky-top shadow-sm"
        style={{
          top: "76px",
          backdropFilter: "blur(12px)",
          background: "rgba(255, 255, 255, 0.75)",
        }}
      >
        <div className="container py-3">
          <div className="row g-3 align-items-center">
            {/* Search */}
            <div className="col-md-6">
              <div className="input-group">
                <span className="input-group-text bg-white border-end-0">
                  <FaSearch />
                </span>
                <input
                  type="search"
                  className="form-control border-start-0 mulish"
                  placeholder="Search tracks..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  style={{
                    borderRadius: "0 30px 30px 0",
                    padding: "10px",
                  }}
                />
              </div>
            </div>

            {/* Mood Filter Buttons */}
            <div className="col-md-6 text-md-end">
              <div className="btn-group flex-wrap gap-2">
                {moods.map((mood) => (
                  <button
                    type="button"
                    key={mood}
                    className={`btn ${
                      selectedMood === mood
                        ? "btn-primary"
                        : "btn-outline-primary"
                    } mulish`}
                    style={{ borderRadius: "30px" }}
                    onClick={() => setSelectedMood(mood)}
                  >
                    <FaFilter className="me-1" />
                    {mood.charAt(0).toUpperCase() + mood.slice(1)}
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Track Grid */}
      <section className="py-5">
        <div className="container">
          <div className="row g-4">
            {filteredTracks.map((track) => (
              <motion.div
                key={track.id}
                className="col-xl-3 col-lg-4 col-md-6"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4 }}
              >
                <TrackCard track={track} />
              </motion.div>
            ))}
          </div>

          {/* Empty State */}
          {filteredTracks.length === 0 && (
            <div className="text-center py-5">
              <h4 className="bricolage-grotesque">
                No tracks match your vibe.
              </h4>
              <p className="mulish">Try a different search or filter.</p>
            </div>
          )}
        </div>
      </section>
    </>
  );
};

export default Music;
