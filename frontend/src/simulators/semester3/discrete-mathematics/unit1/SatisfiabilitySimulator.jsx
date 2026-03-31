import React, { useState } from "react";
import "./styles/SatisfiabilitySimulator.css";

const SatisfiabilitySimulator = () => {
  const [p, setP] = useState(false);
  const [q, setQ] = useState(false);
  const [r, setR] = useState(false);

  // Expression: (P ∧ Q) ∨ ¬R
  const expressionResult = (p && q) || !r;

  return (
    <div className="satisfy-page">
      <h2>🧩 Satisfiability Simulator</h2>
      <p className="subtitle">
        Check whether a logical expression is satisfiable
      </p>

      {/* Expression Box */}
      <div className="expression-box">
        <span>( P ∧ Q ) ∨ ¬ R</span>
      </div>

      {/* Toggle Section */}
      <div className="toggle-section">
        <div className="toggle-card">
          <label>P</label>
          <input
            type="checkbox"
            checked={p}
            onChange={() => setP(!p)}
          />
        </div>

        <div className="toggle-card">
          <label>Q</label>
          <input
            type="checkbox"
            checked={q}
            onChange={() => setQ(!q)}
          />
        </div>

        <div className="toggle-card">
          <label>R</label>
          <input
            type="checkbox"
            checked={r}
            onChange={() => setR(!r)}
          />
        </div>
      </div>

      {/* Result */}
      <div className={`result-box ${expressionResult ? "true" : "false"}`}>
        Expression Result: {String(expressionResult)}
      </div>

      {/* Explanation */}
      <div className="info-box">
        <h4>📘 Concept Explanation</h4>
        <ul>
          <li>
            A logical expression is <b>satisfiable</b> if it becomes TRUE for at
            least one assignment of variables.
          </li>
          <li>
            Here, the expression <b>(P ∧ Q) ∨ ¬R</b> is checked dynamically.
          </li>
          <li>
            If result is TRUE → expression is <b>Satisfiable</b>.
          </li>
          <li>
            If result is FALSE → current assignment does not satisfy it.
          </li>
        </ul>
      </div>
    </div>
  );
};

export default SatisfiabilitySimulator;
