import React, { useState } from "react";
import "./styles/DeMorganSimulator.css";

const DeMorganSimulator = () => {
  const [p, setP] = useState(true);
  const [q, setQ] = useState(false);

  return (
    <div className="demorgan-page">
      <h2 className="demorgan-title">🔁 De Morgan’s Law Simulator</h2>
      <p className="demorgan-subtitle">
        Visual comparison of logical equivalence
      </p>

      {/* Toggle Section */}
      <div className="dm-toggle-container">
        <div className="dm-toggle">
          <span>P</span>
          <input
            type="checkbox"
            checked={p}
            onChange={() => setP(!p)}
          />
        </div>

        <div className="dm-toggle">
          <span>Q</span>
          <input
            type="checkbox"
            checked={q}
            onChange={() => setQ(!q)}
          />
        </div>
      </div>

      {/* Law Visualization */}
      <div className="dm-law-container">
        <div className="dm-card">
          <h3>¬(P ∧ Q)</h3>
          <p className="dm-result">{String(!(p && q))}</p>
        </div>

        <div className="dm-equals">≡</div>

        <div className="dm-card">
          <h3>¬P ∨ ¬Q</h3>
          <p className="dm-result">{String(!p || !q)}</p>
        </div>
      </div>

      <div className="dm-footer">
        {(!(p && q) === (!p || !q)) ? (
          <span className="valid">✅ Law Verified</span>
        ) : (
          <span className="invalid">❌ Not Equivalent</span>
        )}
      </div>
    </div>
  );
};

export default DeMorganSimulator;
