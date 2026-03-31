import React, { useState } from "react";
import "./Unit1Simulator.css";
import SuccessiveDifferentiationSimulator from "./SuccessiveDifferentiationSimulator";
import LeibnitzTheoremSimulator from "./LeibnitzTheoremSimulator";
import IndeterminateFormsSimulator from "./IndeterminateFormsSimulator";

const Unit1Simulator = () => {
  const [activeTopic, setActiveTopic] = useState("successive");

  return (
    <div className="unit1-container">
      <h1>📘 Applied Mathematics – I</h1>
      <h2>Unit I: Differential Calculus – I</h2>

      <div className="topic-buttons">
        <button onClick={() => setActiveTopic("successive")}>
          Successive Differentiation
        </button>
        <button onClick={() => setActiveTopic("leibnitz")}>
          Leibnitz’s Theorem
        </button>
        <button onClick={() => setActiveTopic("indeterminate")}>
          Indeterminate Forms
        </button>
      </div>

      <div className="simulator-box">
        {activeTopic === "successive" && <SuccessiveDifferentiationSimulator />}
        {activeTopic === "leibnitz" && <LeibnitzTheoremSimulator />}
        {activeTopic === "indeterminate" && <IndeterminateFormsSimulator />}
      </div>
    </div>
  );
};

export default Unit1Simulator;
