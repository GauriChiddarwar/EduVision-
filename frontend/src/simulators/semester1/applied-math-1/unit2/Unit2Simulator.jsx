import React, { useState } from "react";
import "./Unit2Simulator.css";
import PartialDifferentiationSimulator from "./PartialDifferentiationSimulator";
import EulerTheoremSimulator from "./EulerTheoremSimulator";

const Unit2Simulator = () => {
  const [activeTopic, setActiveTopic] = useState("partial");

  return (
    <div className="unit2-container">
      <h1>📘 Applied Mathematics – I</h1>
      <h2>Unit II: Differential Calculus – II</h2>

      <div className="topic-buttons">
        <button onClick={() => setActiveTopic("partial")}>
          Partial Differentiation
        </button>
        <button onClick={() => setActiveTopic("euler")}>
          Euler’s Theorem
        </button>
      </div>

      <div className="simulator-box">
        {activeTopic === "partial" && <PartialDifferentiationSimulator />}
        {activeTopic === "euler" && <EulerTheoremSimulator />}
      </div>
    </div>
  );
};

export default Unit2Simulator;
