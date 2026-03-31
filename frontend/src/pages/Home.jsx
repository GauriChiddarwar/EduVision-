import React from "react";
import "../styles/Home.css";
import { Link } from "react-router-dom";
import homeImage from "../assets/home2.png";


const Home = () => {
  return (
    <div className="home-container">
      {/* Hero Section */}
      <section className="hero">
        <div className="hero-text">
          <h1>Welcome to <span>EduVision</span></h1>
          <p>
            A Visual Learning Platform empowering students to <strong>understand</strong> and 
            <strong> remember</strong> complex engineering concepts through animations, 
            diagrams, and interactive content.
          </p>
          <div className="hero-buttons">
            <Link to="/signup" className="btn-primary">Get Started</Link>
            <Link to="/about" className="btn-secondary">Learn More</Link>
          </div>
        </div>
       <div className="hero-image">
  <img src={homeImage} alt="Visual Learning" />
</div>

      </section>

      {/* Features Section */}
      <section className="features">
        <h2>Why Choose EduVision?</h2>
        <div className="feature-cards">
          <div className="card">
            <img src="https://cdn-icons-png.flaticon.com/512/3135/3135715.png" alt="Visual Learning" />
            <h3>Visual Learning</h3>
            <p>Understand complex topics easily through diagrams, animations, and interactive visuals.</p>
          </div>

          <div className="card">
            <img src="https://cdn-icons-png.flaticon.com/512/4228/4228730.png" alt="Organized Content" />
            <h3>Structured Content</h3>
            <p>Learn semester-wise and subject-wise, aligned with your CSE syllabus.</p>
          </div>

          <div className="card">
            <img src="https://cdn-icons-png.flaticon.com/512/4228/4228715.png" alt="Interactive" />
            <h3>Engaging Experience</h3>
            <p>Enhance your learning with interactive modules designed to make studying fun!</p>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="cta">
        <h2>Start Your Visual Learning Journey Today!</h2>
        <p>Join EduVision and make complex engineering concepts easy to grasp.</p>
        <Link to="/signup" className="btn-primary">Sign Up Now</Link>
      </section>
    </div>
  );
};

export default Home;
