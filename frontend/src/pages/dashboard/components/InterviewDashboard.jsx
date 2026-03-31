import React from "react";
import { useNavigate } from "react-router-dom";
import "../../../styles/dashboard/InterviewDashboard.css";

const InterviewDashboard = ({ onBack }) => {
  const navigate = useNavigate();

  return (
    <>
      <button className="back-btn" onClick={onBack}>⬅ Back</button>
      <h2>Interview Preparation</h2>

      <div className="dashboard-options">
        <div className="dashboard-card" onClick={() => navigate("/interview/hr")}>
          💬 HR Interview
        </div>
        <div className="dashboard-card" onClick={() => navigate("/interview/technical")}>
          🧑‍💻 Technical
        </div>
      </div>
    </>
  );
};

export default InterviewDashboard;
