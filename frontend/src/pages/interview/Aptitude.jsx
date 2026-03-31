import React from "react";
import { useNavigate } from "react-router-dom";
import "../../styles/Aptitude.css";


const Aptitude = () => {
  const navigate = useNavigate();

  return (
    <div className="interview-page">
      {/* Header */}
      <div className="interview-header">
        <button className="back-btn" onClick={() => navigate(-1)}>
          ⬅ Back
        </button>
        <h2>Aptitude Preparation</h2>
        <p>Improve your problem-solving and logical thinking skills</p>
      </div>

      {/* Aptitude Topics */}
      <div className="dashboard-options">
        <div className="dashboard-card">
          📊
          <h3>Percentage & Profit–Loss</h3>
          <p>Basic calculations and shortcuts</p>
        </div>

        <div className="dashboard-card">
          ⏱
          <h3>Time and Work</h3>
          <p>Work efficiency and time-based problems</p>
        </div>

        <div className="dashboard-card">
          🧠
          <h3>Logical Reasoning</h3>
          <p>Statements, assumptions, conclusions</p>
        </div>

        <div className="dashboard-card">
          🔢
          <h3>Number Series</h3>
          <p>Find the missing number patterns</p>
        </div>

        <div className="dashboard-card">
          🧩
          <h3>Puzzles</h3>
          <p>Seating, blood relation, arrangement</p>
        </div>
      </div>
    </div>
  );
};

export default Aptitude;
