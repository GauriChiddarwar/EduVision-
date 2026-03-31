import React, { useState } from "react";
import "./styles/TruthTableSimulator.css";

const TruthTableSimulator = () => {
  const [p, setP] = useState(true);
  const [q, setQ] = useState(false);

  return (
    <div className="truth-page">
      <h2 className="title">🧠 Truth Table Simulator</h2>
      <p className="subtitle">
        Toggle values of P and Q to see logical operations in real time
      </p>

      {/* Toggle Switches */}
      <div className="toggle-container">
        <div className="toggle-card">
          <span>P</span>
          <label className="switch">
            <input
              type="checkbox"
              checked={p}
              onChange={() => setP(!p)}
            />
            <span className="slider"></span>
          </label>
        </div>

        <div className="toggle-card">
          <span>Q</span>
          <label className="switch">
            <input
              type="checkbox"
              checked={q}
              onChange={() => setQ(!q)}
            />
            <span className="slider"></span>
          </label>
        </div>
      </div>

      {/* Truth Table */}
      <div className="table-wrapper">
        <table className="truth-table">
          <thead>
            <tr>
              <th>P</th>
              <th>Q</th>
              <th>P ∧ Q</th>
              <th>P ∨ Q</th>
              <th>¬P</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>{p ? "True" : "False"}</td>
              <td>{q ? "True" : "False"}</td>
              <td>{p && q ? "True" : "False"}</td>
              <td>{p || q ? "True" : "False"}</td>
              <td>{!p ? "True" : "False"}</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default TruthTableSimulator;
