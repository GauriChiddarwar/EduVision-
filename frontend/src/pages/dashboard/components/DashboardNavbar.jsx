import React, { useEffect } from "react";
import "../../../styles/dashboard/Navbar.css";

const DashboardNavbar = ({ studentName, onLogout }) => {

  // 🌙 Toggle Dark / Light Theme
  const toggleTheme = () => {
    const currentTheme =
      document.documentElement.getAttribute("data-theme") || "light";

    document.documentElement.setAttribute(
      "data-theme",
      currentTheme === "dark" ? "light" : "dark"
    );

    // Optional: store preference
    localStorage.setItem(
      "theme",
      currentTheme === "dark" ? "light" : "dark"
    );
  };

  // 🔁 Load saved theme on refresh
  useEffect(() => {
    const savedTheme = localStorage.getItem("theme") || "light";
    document.documentElement.setAttribute("data-theme", savedTheme);
  }, []);

  return (
    <nav className="dashboard-navbar">
      <div className="logo">EduVision</div>

      <div className="nav-right">
        <span>
          Welcome, <strong>{studentName}</strong>
        </span>

        {/* 🌙 Dark Mode Toggle Button */}
        <button
          onClick={toggleTheme}
          className="theme-toggle-btn"
          title="Toggle Dark / Light Mode"
        >
          🌙 / ☀️
        </button>

        {/* 🚪 Logout */}
        <button onClick={onLogout} className="logout-btn">
          Logout
        </button>
      </div>
    </nav>
  );
};

export default DashboardNavbar;
