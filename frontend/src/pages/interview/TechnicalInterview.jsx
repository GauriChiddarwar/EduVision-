import React from "react";
import { useNavigate } from "react-router-dom";
import "../../styles/TechnicalInterview.css";

const TechnicalInterview = () => {
  const navigate = useNavigate();

  return (
    <div className="interview-page">
      {/* Header */}
      <div className="interview-header">
        <button className="back-btn" onClick={() => navigate(-1)}>
          ⬅ Back
        </button>
        <h2>Technical Interview</h2>
        <p>Prepare core technical subjects for interviews</p>
      </div>

      {/* Technical Subjects */}
      <div className="technical-topics">
        <div className="tech-card">
          🧮
          <h3>Data Structures</h3>
          <p>Arrays, Linked Lists, Stacks, Queues, Trees</p>
        </div>

        <div className="tech-card">
          ⚙
          <h3>Operating System</h3>
          <p>Processes, Threads, Scheduling, Deadlocks</p>
        </div>

        <div className="tech-card">
          🗄
          <h3>DBMS</h3>
          <p>SQL, Normalization, Transactions</p>
        </div>

        <div className="tech-card">
          📦
          <h3>OOP Concepts</h3>
          <p>Encapsulation, Inheritance, Polymorphism</p>
        </div>

        <div className="tech-card">
          🌐
          <h3>Web Technologies</h3>
          <p>HTML, CSS, JavaScript, React</p>
        </div>
      </div>
    </div>
  );
};

export default TechnicalInterview;
