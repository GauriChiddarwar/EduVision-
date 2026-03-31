import { useState } from "react";
import "./DifferentialCalculusSimulator.css";

const DifferentialCalculusSimulator = () => {
  const [functionInput, setFunctionInput] = useState("x^2");
  const [result, setResult] = useState("");

  const calculateDerivative = () => {
    // DEMO LOGIC (you can replace with real logic later)
    if (functionInput === "x^2") {
      setResult("Derivative: 2x");
    } else if (functionInput === "x^3") {
      setResult("Derivative: 3x²");
    } else {
      setResult("Derivative calculation coming soon...");
    }
  };

  return (
    <div className="simulator-box">
      <h3>Differential Calculus Simulator</h3>

      <div className="input-group">
        <label>Enter function f(x):</label>
        <input
          type="text"
          value={functionInput}
          onChange={(e) => setFunctionInput(e.target.value)}
          placeholder="Example: x^2"
        />
      </div>

      <button onClick={calculateDerivative}>
        Calculate Derivative
      </button>

      {result && (
        <div className="result-box">
          <strong>{result}</strong>
        </div>
      )}

      <div className="explanation">
        <h4>Explanation</h4>
        <p>
          The derivative of a function represents the rate of change.
          For example, the derivative of <b>x²</b> is <b>2x</b>.
        </p>
      </div>
    </div>
  );
};

export default DifferentialCalculusSimulator;
