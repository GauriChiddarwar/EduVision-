import React from "react";
import { useLocation, useNavigate } from "react-router-dom";
import "../styles/AnimationPage.css";

const AnimationPage = () => {
  const location = useLocation();
  const navigate = useNavigate();

  // Get query params
  const query = new URLSearchParams(location.search);
  const semester = query.get("semester");
  const subject = query.get("subject");
  const unit = query.get("unit");
  const concept = query.get("concept");

  let videoSrc = "/animations/placeholder.mp4";

  // ✅ SPECIAL CASE: Discrete Structure Unit 1 (Half unit → One video)
  if (
    subject === "Discrete Structure & Graph Theory" &&
    unit === "Unit 1: Sets, Relations, and Functions"
  ) {
    videoSrc = "/animations/discrete-unit1-full.mp4";
  }
  // ✅ Other subjects → concept-based videos
  else {
    const conceptVideos = {
      "Set Theory": "/animations/discrete-unit1-full.mp4",
      "Relations and Properties": "/animations/relations.mp4",
      "Functions and Types": "/animations/functions.mp4",
      "Need of OOP": "/animations/NOO.mp4",
      "POP VS OOP": "/animations/PVO.mp4",
    };

    videoSrc = conceptVideos[concept] || "/animations/placeholder.mp4";
  }

  return (
    <div className="animation-page">
      {/* Navbar */}
      <nav className="animation-navbar">
        <div className="logo" onClick={() => navigate("/student-dashboard")}>
          EduVision
        </div>
        <button
          className="go-back-btn"
          onClick={() => navigate("/student-dashboard")}
        >
          Go Back
        </button>
      </nav>

      {/* Content */}
      <div className="animation-container">
        <h2 className="animated-title">
          {subject === "Discrete Structure & Graph Theory"
            ? "Discrete Mathematics – Unit 1 Animation"
            : concept}
        </h2>

        <p className="path-text">
          {semester} → {subject} → {unit}
        </p>

        <div className="video-wrapper">
          <video controls className="animated-video" preload="metadata">
            <source src={videoSrc} type="video/mp4" />
            Your browser does not support the video tag.
          </video>

          <p className="video-tip">
            🎬 This animation covers multiple concepts together
          </p>
        </div>
      </div>
    </div>
  );
};

export default AnimationPage;
