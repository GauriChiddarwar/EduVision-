import React from "react";
import { useNavigate } from "react-router-dom";
import "../../styles/HRInterview.css";

const HRInterview = () => {
  const navigate = useNavigate();

  return (
    <div className="interview-page">
      {/* Header */}
      <div className="interview-header">
        <button className="back-btn" onClick={() => navigate(-1)}>
          ⬅ Back
        </button>
        <h2>HR Interview Questions</h2>
        <p>Prepare for common HR questions asked in interviews</p>
      </div>

      {/* Questions Section */}
      <div className="hr-questions">
        <div className="hr-card">
          <p className="question">
            <strong>Q1:</strong> Tell me about yourself.
          </p>
          <p className="answer">
            <strong>A:</strong> I am a final year engineering student with a
            strong interest in software development. I enjoy learning new
            technologies and applying them in real-world projects.
          </p>
        </div>

        <div className="hr-card">
          <p className="question">
            <strong>Q2:</strong> What are your strengths?
          </p>
          <p className="answer">
            <strong>A:</strong> My strengths are quick learning, adaptability,
            and the ability to work well in a team environment.
          </p>
        </div>

        <div className="hr-card">
          <p className="question">
            <strong>Q3:</strong> What are your weaknesses?
          </p>
          <p className="answer">
            <strong>A:</strong> I sometimes focus too much on details, but I am
            learning to manage my time effectively.
          </p>
        </div>

        <div className="hr-card">
          <p className="question">
            <strong>Q4:</strong> Why should we hire you?
          </p>
          <p className="answer">
            <strong>A:</strong> I am a motivated fresher with strong fundamentals,
            practical project experience, and a willingness to continuously
            learn and grow.
          </p>
        </div>
      </div>
    </div>
  );
};

export default HRInterview;
