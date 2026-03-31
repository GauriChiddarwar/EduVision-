import React, { useState } from "react";
import "./Unit6InfiniteSeries.css";

import PSeriesTestSimulator from "./PSeriesTestSimulator";
import ComparisonTestSimulator from "./ComparisonTestSimulator";
import RatioTestSimulator from "./RatioTestSimulator";
import RaabeTestSimulator from "./RaabeTestSimulator";
import RootTestSimulator from "./RootTestSimulator";

const Unit6InfiniteSeriesSimulator = () => {
  const [activeTest, setActiveTest] = useState("pseries");

  return (
    <div className="unit6-container">
      <h1>📘 Applied Mathematics – I</h1>
      <h2>Unit VI: Infinite Series</h2>

      <div className="unit6-tabs">
        <button onClick={() => setActiveTest("pseries")}>p-Series</button>
        <button onClick={() => setActiveTest("comparison")}>Comparison</button>
        <button onClick={() => setActiveTest("ratio")}>Ratio</button>
        <button onClick={() => setActiveTest("raabe")}>Raabe’s</button>
        <button onClick={() => setActiveTest("root")}>Root</button>
      </div>

      <div className="unit6-content">
        {activeTest === "pseries" && <PSeriesTestSimulator />}
        {activeTest === "comparison" && <ComparisonTestSimulator />}
        {activeTest === "ratio" && <RatioTestSimulator />}
        {activeTest === "raabe" && <RaabeTestSimulator />}
        {activeTest === "root" && <RootTestSimulator />}
      </div>
    </div>
  );
};

export default Unit6InfiniteSeriesSimulator;
