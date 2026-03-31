import React, { useState } from "react";

const PartialDifferentiationSimulator = () => {
  const [variable, setVariable] = useState("x");

  return (
    <div>
      <h3>🧮 Partial Differentiation</h3>

      <p>
        Given function:
        <br />
        <b>f(x, y) = x²y + y³</b>
      </p>

      <label>Select variable:</label>
      <select
        value={variable}
        onChange={(e) => setVariable(e.target.value)}
      >
        <option value="x">∂/∂x</option>
        <option value="y">∂/∂y</option>
      </select>

      <div className="result-box">
        {variable === "x" && "∂f/∂x = 2xy"}
        {variable === "y" && "∂f/∂y = x² + 3y²"}
      </div>

      <p className="hint">
        👉 While differentiating, treat other variables as constants.
      </p>
    </div>
  );
};

export default PartialDifferentiationSimulator;
