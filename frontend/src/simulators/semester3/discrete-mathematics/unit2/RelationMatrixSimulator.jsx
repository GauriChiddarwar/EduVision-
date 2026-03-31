import React, { useState } from "react";
import "./styles/RelationMatrixSimulator.css";

const RelationMatrixSimulator = () => {
  const [setA, setSetA] = useState("");
  const [relation, setRelation] = useState("");
  const [matrix, setMatrix] = useState([]);
  const [elements, setElements] = useState([]);

  const generateMatrix = () => {
    if (!setA || !relation) return;

    const A = setA.split(",").map((x) => x.trim());
    const R = relation.split(";").map((p) =>
      p.replace(/[()]/g, "").split(",").map((x) => x.trim())
    );

    const mat = A.map((x) =>
      A.map((y) => (R.some(([a, b]) => a === x && b === y) ? 1 : 0))
    );

    setElements(A);
    setMatrix(mat);
  };

  return (
    <div className="matrix-page">
      <h2>Relation Matrix Simulator</h2>
      <p className="subtitle">Enter elements and relation pairs</p>

      <div className="input-section">
        <input
          placeholder="Set A (e.g. a,b,c)"
          value={setA}
          onChange={(e) => setSetA(e.target.value)}
        />
        <input
          placeholder="Relation (e.g. (a,b);(b,c))"
          value={relation}
          onChange={(e) => setRelation(e.target.value)}
        />
        <button onClick={generateMatrix}>Generate Matrix</button>
      </div>

      {matrix.length > 0 && (
        <div className="matrix-container">
          <table>
            <thead>
              <tr>
                <th></th>
                {elements.map((a) => (
                  <th key={a}>{a}</th>
                ))}
              </tr>
            </thead>
            <tbody>
              {matrix.map((row, i) => (
                <tr key={i}>
                  <th>{elements[i]}</th>
                  {row.map((val, j) => (
                    <td key={j} className={val === 1 ? "active" : ""}>
                      {val}
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
};

export default RelationMatrixSimulator;