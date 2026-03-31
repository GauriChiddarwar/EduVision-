import { useNavigate } from "react-router-dom";
import "./SimulatorDashboard.css";

const SimulatorDashboard = () => {
  const navigate = useNavigate();

  return (
    <div className="simulator-dashboard">
      <h1>📘 Interactive Simulators</h1>
      <p>Learn concepts visually by interacting with simulators</p>

      <div className="simulator-options">
        <div
          className="simulator-card"
          onClick={() => navigate("/simulator/semester")}
        >
          🎯 Theory Simulators
          <span>Subject & Unit wise simulators</span>
        </div>
      </div>
    </div>
  );
};

export default SimulatorDashboard;
