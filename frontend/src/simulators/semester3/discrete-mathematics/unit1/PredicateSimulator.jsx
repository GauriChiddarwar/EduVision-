import React, { useState } from "react";
import "./styles/PredicateSimulator.css";

const PredicateSimulator = () => {
  const [x, setX] = useState(1);

  // Predicate definitions
  const isEven = (n) => n % 2 === 0;
  const isPositive = (n) => n > 0;

  return (
    <div className="predicate-page">
      <h2>🔍 Predicate Logic Simulator</h2>
      <p className="subtitle">
        Explore predicates, quantifiers, and logical evaluation interactively
      </p>

      {/* Input Section */}
      <div className="input-card">
        <label>Select value of x:</label>
        <input
          type="number"
          value={x}
          onChange={(e) => setX(Number(e.target.value))}
        />
      </div>

      {/* Predicate Evaluation */}
      <div className="result-card">
        <h3>Predicate Evaluation</h3>

        <div className="predicate-row">
          <span>P(x): x is Even</span>
          <span className={isEven(x) ? "true" : "false"}>
            {String(isEven(x))}
          </span>
        </div>

        <div className="predicate-row">
          <span>Q(x): x is Positive</span>
          <span className={isPositive(x) ? "true" : "false"}>
            {String(isPositive(x))}
          </span>
        </div>

        <div className="predicate-row">
          <span>P(x) ∧ Q(x)</span>
          <span className={isEven(x) && isPositive(x) ? "true" : "false"}>
            {String(isEven(x) && isPositive(x))}
          </span>
        </div>

        <div className="predicate-row">
          <span>P(x) ∨ Q(x)</span>
          <span className={isEven(x) || isPositive(x) ? "true" : "false"}>
            {String(isEven(x) || isPositive(x))}
          </span>
        </div>
      </div>

      {/* Explanation */}
      <div className="info-box">
        <h4>📘 Concept Explanation</h4>
        <ul>
          <li><b>Predicate:</b> A statement containing variables</li>
          <li><b>P(x):</b> Checks if x is even</li>
          <li><b>Q(x):</b> Checks if x is positive</li>
          <li><b>∧ :</b> Logical AND</li>
          <li><b>∨ :</b> Logical OR</li>
        </ul>
      </div>
    </div>
  );
};

export default PredicateSimulator;
