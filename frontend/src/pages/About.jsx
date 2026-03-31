import React from "react";
import "../styles/About.css";

const About = () => {
  return (
    <div className="about-container">
      <header className="about-header">
        <h1>About EduVision</h1>
        <p>
          Empowering learning through visuals — A project by <strong>Shri Sant Gajanan Maharaj College of Engineering, Shegaon</strong>.
        </p>
      </header>

      <section className="about-section">
        <div className="about-content">
          <h2>🎯 Our Mission</h2>
          <p>
            To make engineering education more engaging and easier to understand
            through interactive and syllabus-aligned visual content.
          </p>
        </div>
        <div className="about-content">
          <h2>💡 Our Vision</h2>
          <p>
            To create a visual-first learning ecosystem that bridges the gap
            between theory and real-world application using modern technologies.
          </p>
        </div>
      </section>

      <section className="cards-section">
        <h2>✨ Key Features</h2>
        <div className="cards-container">
          <div className="card">
            <h3>📚 Structured Learning</h3>
            <p>Semester-wise, subject-wise content organization for easy access and clarity.</p>
          </div>
          <div className="card">
            <h3>🎞️ Visual Content</h3>
            <p>Animations, diagrams, and simulations to enhance understanding and retention.</p>
          </div>
          <div className="card">
            <h3>🧠 Better Recall</h3>
            <p>Supports visual learning styles and improves long-term memory of concepts.</p>
          </div>
          <div className="card">
            <h3>🚀 Powered by MERN</h3>
            <p>Built using modern technologies — MongoDB, Express, React, and Node.js.</p>
          </div>
        </div>
      </section>

      <footer className="about-footer">
        <p>Guided by: <strong>Dr. R. A. Zamare</strong> | Department of Computer Science & Engineering</p>
      </footer>
    </div>
  );
};

export default About;
