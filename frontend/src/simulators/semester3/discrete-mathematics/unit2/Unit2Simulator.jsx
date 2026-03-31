import React from "react";
import { useNavigate } from "react-router-dom";
import "./styles/Unit2Simulator.css";

const Unit2Simulator = () => {
  const navigate = useNavigate();

  const simulators = [
    { name: "Set Operations Simulator", path: "/simulator/unit2/set-operations", icon: "🧮" },
    { name: "Relations Properties Simulator", path: "/simulator/unit2/relations-properties", icon: "🔗" },
    { name: "Equivalence Relation Simulator", path: "/simulator/unit2/equivalence-relation", icon: "♾️" },
    { name: "Equivalence Classes Simulator", path: "/simulator/unit2/equivalence-classes", icon: "🗂️" },
    { name: "Relation Matrix Simulator", path: "/simulator/unit2/relation-matrix", icon: "📊" },
    { name: "Transitive Closure Simulator", path: "/simulator/unit2/transitive-closure", icon: "🔄" },
    { name: "Function Composition Simulator", path: "/simulator/unit2/function-composition", icon: "⚙️" },
  ];

  return (
    <div className="unit2-dashboard-page">
      <h2>Discrete Mathematics – Unit 2 Simulators</h2>
      <p>Select a simulator to explore concepts visually and interactively</p>

      <div className="simulator-cards">
        {simulators.map((sim, idx) => (
          <div
            key={idx}
            className="simulator-card"
            onClick={() => navigate(sim.path)}
          >
            <div className="simulator-icon">{sim.icon}</div>
            <h3>{sim.name}</h3>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Unit2Simulator;
