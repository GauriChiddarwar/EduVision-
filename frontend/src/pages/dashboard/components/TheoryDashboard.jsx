import React from "react";
import { useNavigate } from "react-router-dom";
import "../../../styles/dashboard/TheoryDashboard.css";

const TheoryDashboard = ({ onBack }) => {
  const navigate = useNavigate();

  return (
    <div className="theory-dashboard">
      {/* Back Button */}
      {onBack && (
        <button className="back-btn" onClick={onBack}>
          ⬅ Back
        </button>
      )}

      <h2>Theory Learning</h2>

      <div className="dashboard-options">
        {/* Animated Video */}
        <div
          className="dashboard-card"
          onClick={() => navigate("/animation/semester")}
        >
          🎥 Animated Video
          <p>Visual learning by unit-wise videos</p>
        </div>

        {/* Simulator */}
        <div
          className="dashboard-card"
          onClick={() => navigate("/simulator/semester")}
        >
          🧠 Simulator
          <p>Interactive simulators – choose semester & unit</p>
        </div>

        {/* Downloads */}
        <div
          className="dashboard-card"
          onClick={() => navigate("/downloads")}
        >
          📥 Downloads
          <p>PDFs, Question Bank, Reference Materials</p>
        </div>
      </div>
    </div>
  );
};

export default TheoryDashboard;
