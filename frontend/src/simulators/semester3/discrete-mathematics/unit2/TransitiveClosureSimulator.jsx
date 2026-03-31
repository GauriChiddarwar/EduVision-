import React, { useState } from "react";
import "./styles/TransitiveClosureSimulator.css";


const TransitiveClosureSimulator = () => {
  const [matrix, setMatrix] = useState([
    [0,1,0],
    [0,0,1],
    [0,0,0],
  ]);

  const computeClosure = () => {
    let m = matrix.map(row => [...row]);

    for (let k = 0; k < m.length; k++)
      for (let i = 0; i < m.length; i++)
        for (let j = 0; j < m.length; j++)
          m[i][j] = m[i][j] || (m[i][k] && m[k][j]);

    setMatrix(m);
  };

  return (
    <div className="closure-page">
      <h2>Transitive Closure Simulator</h2>

      <table>
        <tbody>
          {matrix.map((row, i) => (
            <tr key={i}>
              {row.map((val, j) => (
                <td key={j}>{val}</td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>

      <button onClick={computeClosure}>Compute Closure</button>
    </div>
  );
};

export default TransitiveClosureSimulator;
