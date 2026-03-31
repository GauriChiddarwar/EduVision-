import React, { useState } from "react";

const SecondOrderDerivativeSimulator = () => {
  const [type, setType] = useState("xx");

  return (
    <div>
      <h3>🧮 Second Order Partial Derivatives</h3>

      <p><b>Given:</b> f(x, y) = x²y + y³</p>

      <select value={type} onChange={(e) => setType(e.target.value)}>
        <option value="xx">∂²f/∂x²</option>
        <option value="yy">∂²f/∂y²</option>
        <option value="xy">∂²f/∂x∂y</option>
      </select>

      <div className="result-box">
        {type === "xx" && "∂²f/∂x² = 2y"}
        {type === "yy" && "∂²f/∂y² = 6y"}
        {type === "xy" && "∂²f/∂x∂y = 2x"}
      </div>
    </div>
  );
};

export default SecondOrderDerivativeSimulator;
