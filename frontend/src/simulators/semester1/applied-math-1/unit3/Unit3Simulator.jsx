import React, { useState } from "react";
import "./Unit3Simulator.css";
import SecondOrderDerivativeSimulator from "./SecondOrderDerivativeSimulator";
import HomogeneousFunctionSimulator from "./HomogeneousFunctionSimulator";
import EulerAdvancedSimulator from "./EulerAdvancedSimulator";

const Unit3Simulator = () => {
  const [active, setActive] = useState("second");

  return (
    <div className="unit3-container">
      <h1>📘 Applied Mathematics – I</h1>
      <h2>Unit III: Advanced Partial Differentiation</h2>

      <div className="unit3-tabs">
        <button onClick={() => setActive("second")}>
          Second Order Derivatives
        </button>
        <button onClick={() => setActive("homogeneous")}>
          Homogeneous Function
        </button>
        <button onClick={() => setActive("euler")}>
          Euler’s Theorem
        </button>
      </div>

      <div className="unit3-content">
        {active === "second" && <SecondOrderDerivativeSimulator />}
        {active === "homogeneous" && <HomogeneousFunctionSimulator />}
        {active === "euler" && <EulerAdvancedSimulator />}
      </div>
    </div>
  );
};

export default Unit3Simulator;
