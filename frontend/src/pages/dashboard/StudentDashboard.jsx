import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import "./StudentDashboard.css";

import DashboardNavbar from "./components/DashboardNavbar";
import ModeSelection from "./components/ModeSelection";
import TheoryDashboard from "./components/TheoryDashboard";
import PracticalDashboard from "./components/PracticalDashboard";
import InterviewDashboard from "./components/InterviewDashboard";

const StudentDashboard = () => {
  const navigate = useNavigate();
  const [studentName, setStudentName] = useState("");
  const [dashboardType, setDashboardType] = useState("");

  useEffect(() => {
    const user = JSON.parse(localStorage.getItem("user"));
    if (user?.name) setStudentName(user.name);
    else navigate("/signin");
  }, [navigate]);

  const handleLogout = () => {
    localStorage.clear();
    navigate("/");
  };

  return (
    <div className="dashboard-page">
      <DashboardNavbar studentName={studentName} onLogout={handleLogout} />

      <div className="dashboard-container">
        {dashboardType === "" && (
          <ModeSelection onSelect={setDashboardType} />
        )}

        {dashboardType === "theory" && (
          <TheoryDashboard onBack={() => setDashboardType("")} />
        )}

        {dashboardType === "practical" && (
          <PracticalDashboard onBack={() => setDashboardType("")} />
        )}

        {dashboardType === "interview" && (
          <InterviewDashboard onBack={() => setDashboardType("")} />
        )}
      </div>
    </div>
  );
};

export default StudentDashboard;
