import React from "react";
import "../../../styles/dashboard/PracticalDashboard.css";

const PracticalDashboard = ({ onBack }) => {
  return (
    <>
      <button className="back-btn" onClick={onBack}>⬅ Back</button>
      <h2>Practical Subjects</h2>

      <div className="dashboard-options">
        <div className="dashboard-card">💻 Programming Lab</div>
        <div className="dashboard-card">🗄 DBMS Lab</div>
        <div className="dashboard-card">🌐 Web Tech Lab</div>
      </div>
    </>
  );
};

export default PracticalDashboard;
