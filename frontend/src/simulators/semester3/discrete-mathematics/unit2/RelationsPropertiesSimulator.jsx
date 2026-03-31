import React, { useState } from "react";
import "./styles/RelationsPropertiesSimulator.css";

const RelationsPropertiesSimulator = () => {
  const [setElements, setSetElements] = useState("");
  const [relationPairs, setRelationPairs] = useState("");
  const [result, setResult] = useState({});

  const parseSet = () =>
    setElements.split(",").map((e) => e.trim()).filter(Boolean);

  const parseRelations = () =>
    relationPairs
      .split(";")
      .map((pair) => pair.replace(/[()]/g, "").split(",").map((x) => x.trim()))
      .filter((p) => p.length === 2);

  const checkProperties = () => {
    const A = parseSet();
    const R = parseRelations();

    const isReflexive = A.every((a) =>
      R.some(([x, y]) => x === a && y === a)
    );

    const isSymmetric = R.every(([x, y]) =>
      R.some(([a, b]) => a === y && b === x)
    );

    const isAntisymmetric = R.every(
      ([x, y]) =>
        x === y ||
        !R.some(([a, b]) => a === y && b === x && a !== b)
    );

    const isTransitive = R.every(([x, y]) =>
      R.every(([a, b]) =>
        y === a ? R.some(([p, q]) => p === x && q === b) : true
      )
    );

    setResult({
      Reflexive: isReflexive,
      Symmetric: isSymmetric,
      Antisymmetric: isAntisymmetric,
      Transitive: isTransitive,
    });
  };

  return (
    <div className="relation-page">
      <h1>Relations Properties Simulator</h1>
      <p className="subtitle">
        Check Reflexive, Symmetric, Antisymmetric & Transitive properties
      </p>

      {/* Input Section */}
      <div className="input-box">
        <input
          type="text"
          placeholder="Set A (e.g. a,b,c)"
          value={setElements}
          onChange={(e) => setSetElements(e.target.value)}
        />

        <input
          type="text"
          placeholder="Relation R (e.g. (a,a);(a,b);(b,a))"
          value={relationPairs}
          onChange={(e) => setRelationPairs(e.target.value)}
        />
      </div>

      <button className="check-btn" onClick={checkProperties}>
        Check Properties
      </button>

      {/* Result Section */}
      {Object.keys(result).length > 0 && (
        <div className="result-card">
          {Object.entries(result).map(([key, value]) => (
            <div
              key={key}
              className={`property ${value ? "true" : "false"}`}
            >
              <span>{key}</span>
              <strong>{value ? "YES" : "NO"}</strong>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default RelationsPropertiesSimulator;
