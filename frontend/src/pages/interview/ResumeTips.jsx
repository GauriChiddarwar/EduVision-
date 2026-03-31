import React from "react";
import { useNavigate } from "react-router-dom";
import "../../styles/ResumeTips.css";

const ResumeTips = () => {
  const navigate = useNavigate();

  return (
    <div className="interview-page">
      {/* Header */}
      <div className="interview-header">
        <button className="back-btn" onClick={() => navigate(-1)}>
          ⬅ Back
        </button>
        <h2>Resume Tips</h2>
        <p>Build a strong, professional resume for placements</p>
      </div>

      {/* Resume Tips Cards */}
      <div className="resume-tips">
        <div className="resume-card">
          📄
          <h3>One Page Resume</h3>
          <p>Keep your resume concise and relevant.</p>
        </div>

        <div className="resume-card">
          ✍
          <h3>Use Action Verbs</h3>
          <p>Start bullet points with strong action words.</p>
        </div>

        <div className="resume-card">
          🚀
          <h3>Highlight Projects</h3>
          <p>Explain your role and technologies clearly.</p>
        </div>

        <div className="resume-card">
          ✅
          <h3>Avoid Grammatical Errors</h3>
          <p>Proofread multiple times before submission.</p>
        </div>
      </div>
    </div>
  );
};

export default ResumeTips;
