import React, { useState } from "react";
import "./styles/EquivalenceRelationSimulator.css";

const EquivalenceRelationSimulator = () => {
  const [setA, setSetA] = useState("");
  const [relationR, setRelationR] = useState("");
  const [result, setResult] = useState(null);

  const parseSet = () =>
    setA.split(",").map((x) => x.trim()).filter(Boolean);

  const parseRelation = () =>
    relationR
      .split(";")
      .map((pair) =>
        pair.replace(/[()]/g, "").split(",").map((x) => x.trim())
      )
      .filter((p) => p.length === 2);

  const checkEquivalence = () => {
    const A = parseSet();
    const R = parseRelation();

    const isReflexive = A.every((a) =>
      R.some(([x, y]) => x === a && y === a)
    );

    const isSymmetric = R.every(([x, y]) =>
      R.some(([a, b]) => a === y && b === x)
    );

    const isTransitive = R.every(([x, y]) =>
      R.every(([a, b]) =>
        y === a ? R.some(([p, q]) => p === x && q === b) : true
      )
    );

    const isEquivalence = isReflexive && isSymmetric && isTransitive;

    setResult({
      isReflexive,
      isSymmetric,
      isTransitive,
      isEquivalence,
    });
  };

  return (
    <div className="equivalence-page">
      <h1>Equivalence Relation Simulator</h1>
      <p className="subtitle">
        Check whether a relation is an equivalence relation
      </p>

      {/* Inputs */}
      <div className="input-section">
        <input
          type="text"
          placeholder="Set A (e.g. 1,2,3)"
          value={setA}
          onChange={(e) => setSetA(e.target.value)}
        />

        <input
          type="text"
          placeholder="Relation R (e.g. (1,1);(1,2);(2,1);(2,2))"
          value={relationR}
          onChange={(e) => setRelationR(e.target.value)}
        />
      </div>

      <button className="check-btn" onClick={checkEquivalence}>
        Check Relation
      </button>

      {/* Result */}
      {result && (
        <div className="result-card">
          <div className={`status ${result.isReflexive ? "yes" : "no"}`}>
            Reflexive: {result.isReflexive ? "YES" : "NO"}
          </div>

          <div className={`status ${result.isSymmetric ? "yes" : "no"}`}>
            Symmetric: {result.isSymmetric ? "YES" : "NO"}
          </div>

          <div className={`status ${result.isTransitive ? "yes" : "no"}`}>
            Transitive: {result.isTransitive ? "YES" : "NO"}
          </div>

          <hr />

          <h3
            className={`final-result ${
              result.isEquivalence ? "valid" : "invalid"
            }`}
          >
            {result.isEquivalence
              ? "✅ This IS an Equivalence Relation"
              : "❌ This is NOT an Equivalence Relation"}
          </h3>
        </div>
      )}
    </div>
  );
};

export default EquivalenceRelationSimulator;
