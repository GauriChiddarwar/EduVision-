import React, { useState } from "react";
import "./styles/SetOperationsSimulator.css";

const SetOperationsSimulator = () => {
  const [setA, setSetA] = useState("");
  const [setB, setSetB] = useState("");
  const [result, setResult] = useState([]);

  const parseSet = (value) =>
    [...new Set(value.split(",").map((v) => v.trim()).filter(Boolean))];

  const A = parseSet(setA);
  const B = parseSet(setB);

  const union = () => setResult([...new Set([...A, ...B])]);
  const intersection = () => setResult(A.filter((x) => B.includes(x)));
  const difference = () => setResult(A.filter((x) => !B.includes(x)));
  const cartesian = () =>
    setResult(A.flatMap((a) => B.map((b) => `(${a}, ${b})`)));
  const powerSet = () =>
    setResult(
      A.reduce(
        (ps, val) => ps.concat(ps.map((s) => [...s, val])),
        [[]]
      ).map((s) => `{ ${s.join(", ")} }`)
    );

  return (
    <div className="setop-page">
      <h1>Set Operations Simulator</h1>
      <p className="subtitle">
        Visual learning of Sets using interactive operations
      </p>

      {/* Input Section */}
      <div className="input-section">
        <input
          type="text"
          placeholder="Enter Set A (e.g. 1,2,3)"
          value={setA}
          onChange={(e) => setSetA(e.target.value)}
        />

        <input
          type="text"
          placeholder="Enter Set B (e.g. 2,3,4)"
          value={setB}
          onChange={(e) => setSetB(e.target.value)}
        />
      </div>

      {/* Buttons */}
      <div className="button-group">
        <button onClick={union}>A ∪ B</button>
        <button onClick={intersection}>A ∩ B</button>
        <button onClick={difference}>A − B</button>
        <button onClick={cartesian}>A × B</button>
        <button onClick={powerSet}>Power Set of A</button>
      </div>

      {/* Result */}
      <div className="result-box">
        <h3>Result</h3>
        {result.length === 0 ? (
          <p className="empty">Result will appear here</p>
        ) : (
          <div className="result-items">
            {result.map((item, index) => (
              <span key={index}>{item.toString()}</span>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default SetOperationsSimulator;
