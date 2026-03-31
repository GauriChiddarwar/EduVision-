import React, { useState } from "react";
import "./Unit4ODESimulator.css";

import LinearDESimulator from "./LinearDESimulator";
import NonHomogeneousDESimulator from "./NonHomogeneousDESimulator";
import ReducibleToLinearSimulator from "./ReducibleToLinearSimulator";
import ExactDESimulator from "./ExactDESimulator";
import ReducibleToExactSimulator from "./ReducibleToExactSimulator";

const Unit4ODESimulator = () => {
  const [topic, setTopic] = useState("linear");

  return (
    <div className="unit4-container">
      <h1>📘 Applied Mathematics – I</h1>
      <h2>Unit IV: Ordinary Differential Equations</h2>

      <div className="unit4-tabs">
        <button onClick={() => setTopic("linear")}>Linear DE</button>
        <button onClick={() => setTopic("nonhomogeneous")}>Non-Homogeneous</button>
        <button onClick={() => setTopic("reducible-linear")}>Reducible to Linear</button>
        <button onClick={() => setTopic("exact")}>Exact DE</button>
        <button onClick={() => setTopic("reducible-exact")}>Reducible to Exact</button>
      </div>

      <div className="unit4-content">
        {topic === "linear" && <LinearDESimulator />}
        {topic === "nonhomogeneous" && <NonHomogeneousDESimulator />}
        {topic === "reducible-linear" && <ReducibleToLinearSimulator />}
        {topic === "exact" && <ExactDESimulator />}
        {topic === "reducible-exact" && <ReducibleToExactSimulator />}
      </div>
    </div>
  );
};

export default Unit4ODESimulator;
