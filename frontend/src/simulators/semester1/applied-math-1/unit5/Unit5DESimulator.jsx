import React, { useState } from "react";
import "./Unit5DESimulator.css";

import SolvableForPSimulator from "./SolvableForPSimulator";
import SolvableForXSimulator from "./SolvableForXSimulator";
import SolvableForYSimulator from "./SolvableForYSimulator";
import OrthogonalTrajectorySimulator from "./OrthogonalTrajectorySimulator";
import KirchhoffCircuitSimulator from "./KirchhoffCircuitSimulator";

const Unit5DESimulator = () => {
  const [topic, setTopic] = useState("p");

  return (
    <div className="unit5-container">
      <h1>📘 Applied Mathematics – I</h1>
      <h2>Unit V: Differential Equations (Higher Degree)</h2>

      <div className="unit5-tabs">
        <button onClick={() => setTopic("p")}>Solvable for p</button>
        <button onClick={() => setTopic("x")}>Solvable for x</button>
        <button onClick={() => setTopic("y")}>Solvable for y</button>
        <button onClick={() => setTopic("orthogonal")}>Orthogonal Trajectories</button>
        <button onClick={() => setTopic("kirchhoff")}>Electrical Circuits</button>
      </div>

      <div className="unit5-content">
        {topic === "p" && <SolvableForPSimulator />}
        {topic === "x" && <SolvableForXSimulator />}
        {topic === "y" && <SolvableForYSimulator />}
        {topic === "orthogonal" && <OrthogonalTrajectorySimulator />}
        {topic === "kirchhoff" && <KirchhoffCircuitSimulator />}
      </div>
    </div>
  );
};

export default Unit5DESimulator;
