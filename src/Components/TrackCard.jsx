import { FaPlay } from "react-icons/fa";
import { useRef } from "react";

const TrackCard = ({ track }) => {
  const audioRef = useRef(null);

  const handlePlay = () => {
    if (audioRef.current) {
      audioRef.current.play();
    }
  };

  return (
    <div
      className="card card-jazz h-100 shadow-sm track-card"
      style={{ borderRadius: "30px" }}
    >
      {/* Cover Image */}
      <div className="position-relative">
        <img
          src={track.cover}
          className="card-img-top"
          alt={track.title}
          style={{
            height: "250px",
            objectFit: "cover",
            borderTopLeftRadius: "30px",
            borderTopRightRadius: "30px",
          }}
        />

        {/* Mood Tag */}
        <span
          className="badge bg-primary text-white px-3 py-2 position-absolute"
          style={{
            top: "12px",
            left: "12px",
            borderRadius: "20px",
            backdropFilter: "blur(6px)",
          }}
        >
          {track.mood
            ? track.mood.charAt(0).toUpperCase() + track.mood.slice(1)
            : "Unknown"}
        </span>
      </div>

      {/* Body */}
      <div className="card-body d-flex flex-column">
        <h5 className="card-title bricolage-grotesque fw-bold">
          {track.title}
        </h5>

        <p className="card-text text-muted mulish">{track.duration}</p>

        {/* Audio Player */}
        <div className="audio-player mt-auto">
          <audio ref={audioRef} controls preload="none">
            <source src={track.audio} type="audio/mpeg" />
            Your browser does not support audio.
          </audio>
        </div>

        {/* Play Button */}
        <button
          className="btn custom-btn mt-3 w-100"
          style={{
            borderRadius: "20px",
            padding: "10px",
            fontSize: "0.9rem",
          }}
          onClick={handlePlay}
        >
          <FaPlay className="me-2" />
          Play Track
        </button>
      </div>
    </div>
  );
};

export default TrackCard;
